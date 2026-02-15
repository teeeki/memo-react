export type loginRequestType = {
    username: string;
    password: string;
}

export type loginResponseType = {
    accessToken: string;
    tokenType: string;
}

export default function AuthAPI() {
    const API_BASE = "http://127.0.0.1:8000/api";

    return {
        login: async (request: loginRequestType): Promise<loginResponseType> => {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(request),
            });
            if (!res.ok) {
                throw new Error("Failed to login");
            }
            return res.json();
        }
    }
}