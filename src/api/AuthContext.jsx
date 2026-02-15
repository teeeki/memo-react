import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    // 初期状態: localStorageにアクセストークンがあれば認証済み
    const [user, setUser] = useState(() => {
        const accessToken = localStorage.getItem("accessToken");
        const tokenType = localStorage.getItem("tokenType");
        if (accessToken && tokenType) {
            // 必要ならユーザー情報もlocalStorageから取得
            return { accessToken, tokenType };
        }
        return null;
    });

    const login = (username) => {
        // usernameだけでなく、localStorageのアクセストークンもセット
        const accessToken = localStorage.getItem("accessToken");
        const tokenType = localStorage.getItem("tokenType");
        setUser({ username, accessToken, tokenType });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("tokenType");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
