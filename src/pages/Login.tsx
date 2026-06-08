import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router';
import authService from '../service/authService';
import styles from './login.module.css';
import logoDark from "../assets/Logo-def.png";
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await authService.login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.logoSection}>
          <img src={logoDark} alt="Trazoculto Logo" className={styles.logo} />
          <p className={styles.brandName}>trazoculto</p>
        </div>
        {error && <p className={styles.errorMsg}>{error}</p>}
        <form onSubmit={handleLogin} className={styles.form}>
          <Input id="email" type="email" placeholder="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required disabled={loading} />
          <Input id="password" type="password" placeholder="Contraseña" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required disabled={loading} />
          <Button variant="ghost">¿Olvidaste tu contraseña?</Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "Cargando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
