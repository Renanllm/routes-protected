import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <button onClick={() => navigate("/login")}>Login page</button>
      <button onClick={() => navigate("/admin")}>Admin page</button>
    </div>
  )
}