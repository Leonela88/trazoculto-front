import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación: si los datos son correctos...
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login