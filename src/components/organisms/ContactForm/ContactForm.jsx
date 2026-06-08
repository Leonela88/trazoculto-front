import { useState } from "react";
import Input from "../../atoms/Input/Input";
import Textarea from "../../atoms/Textarea/Textarea";
import Button from "../../atoms/Button/Button";
import styles from "./contactForm.module.css";

const services = [
  "Informe de Lectura",
  "Corrección de Estilo",
  "Corrección Ortotipográfica",
  "Macroedición, Microedición",
  "Reescritura / reformulación de textos",
  "Adaptación de tono y registro",
  "Corrección de traducciones",
  "Asesoría editorial",
  "Otro"
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", service: "", message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <p className={styles.successTitle}>¡Mensaje enviado!</p>
        <p className={styles.successText}>Mariel se pondrá en contacto con vos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form
      name="contacto"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {/* Campo oculto requerido por Netlify */}
      <input type="hidden" name="form-name" value="contacto" />
      <p hidden><input name="bot-field" /></p>

      <Input
        id="name"
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        id="email"
        type="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <div className={styles.selectGroup}>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="" disabled>Servicio</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <Textarea
        id="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
      />

      <div className={styles.buttonWrapper}>
        <Button type="submit" variant="primary">Enviar</Button>
      </div>
    </form>
  );
};

export default ContactForm;