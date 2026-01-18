import { useLogin } from "../context/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useLogin()!;
  const navigate = useNavigate();

  const loginUser = () => {
    login("jani", "jani@bp.hu", "User");
    navigate("/profile");
  };

  return (
    <div>
      <h2>logen</h2>
      <button onClick={loginUser}>
        logi nigga
      </button>
    </div>
  );
}

export default Login;
