import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../api/AuthAPI.jsx";
import "../assets/styles/Login.css";


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const AuthClient = AuthAPI();

    // 認証処理
    const handleLogin = async (username, password) => {
        try {
            const response = await AuthClient.login({ username, password });
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("tokenType", response.tokenType);
            onLogin(username);
            navigate("/memo", { replace: true });
        } catch (err) {
            setError("ログインに失敗しました");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={(e) => {
                e.preventDefault();
                handleLogin(username, password);
            }}>
                <h2>ログイン</h2>
                <input
                    type="text"
                    placeholder="ユーザー名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <div className="login-error">{error}</div>}
                <button type="submit">ログイン</button>
            </form>
        </div>
    );
};

export default Login;
