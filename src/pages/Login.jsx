import { useState } from 'react';
import { useNavigate } from 'react-router';
import authService from '../service/authService';
import styles from './login.module.css';
import logoDark from "../assets/Logo-def.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authService.login(email, password);
    
      navigate("/dashboard");
    } catch (err) {
    
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
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.visuallyHidden}>Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <button type="button" className={styles.forgotBtn}>
            ¿Olvidaste tu contraseña?
          </button>

          <button 
            type="submit" 
            className={styles.submitBtn} 
            disabled={loading}
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

