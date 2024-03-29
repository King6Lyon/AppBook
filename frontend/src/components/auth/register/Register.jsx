import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { registerApi } from "../../../Api/apiAuthentification";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelRegister = async (values) => {
    try {
      await registerApi(values);
      alert('Votre enregistrement est bien effectué');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ backgroundColor: "#354152", color: "#7e8ba3", font: "300 1rem/1.5 Helvetica Neue, sans-serif", margin: 0, minHeight: "100%" }}>
      <div className="align">
        <div className="register" style={{ boxShadow: "0 0 250px #000", textAlign: "center", padding: "4rem 2rem" }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width={56} height={84} viewBox="77.7 214.9 274.7 412">
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#8ceabb" />
                <stop offset="100%" stopColor="#378f7b" />
              </linearGradient>
            </defs>
            <path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" />
          </svg>
          <h2 className='title'>Register</h2>
          <form className="form">
            <div className="form__field" style={{ marginBottom: "1rem" }}>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" style={{ border: "1px solid #242c37", borderRadius: "999px", font: "inherit", outline: "0", padding: "0.5rem 1rem", width: "30%" }} />
            </div>
            <div className="form__field" style={{ marginBottom: "1rem" }}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" style={{ border: "1px solid #242c37", borderRadius: "999px", font: "inherit", outline: "0", padding: "0.5rem 1rem", width: "30%" }} />
            </div>
            <div className="form__field" style={{ marginBottom: "1rem" }}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••" style={{ border: "1px solid #242c37", borderRadius: "999px", font: "inherit", outline: "0", padding: "0.5rem 1rem", width: "30%" }} />
            </div>
            <div className="form__field" style={{ marginBottom: "1rem" }}>
              <input type="button" value="Sign Up" onClick={() => handelRegister({ name, email, password })} style={{ background: "linear-gradient(160deg, #8ceabb 0%, #378f7b 100%)", border: "1px solid #242c37", borderRadius: "999px", color: "#fff", marginBottom: "6rem", width: "10%" }} />
            </div>
          </form>
          <p style={{ color: "#7e8ba3" }}>Already have an account? <a href="/login" style={{ color: "#7e8ba3" }}>Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
