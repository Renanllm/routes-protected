import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'

export const Login = () => {
  const [tokenField, setTokenField] = useState("");
  const navigate = useNavigate();

  const setTokenValueInLocalStoraged = (e) => {
    e.preventDefault();
    localStorage.setItem("token", tokenField);

    navigate("/admin");
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={setTokenValueInLocalStoraged}>

        <p>Insira o token aqui:</p>
        <textarea
          value={tokenField}
          onChange={(e) => setTokenField(e.target.value)}
          type="text"
          name="token"
          id="token"
        />

        <button type="submit">Setar no local storaged</button>
      </form>
    </div>
  );
};
