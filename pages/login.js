import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={container}>
            <h1 style={title}>🔑 Login</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={input} />
            <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={input} />
            <button onClick={handleLogin} style={button}>Login</button>
        </div>
    );
}

const container = {
    backgroundColor: '#0f172a',
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const input = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '6px',
    width: '250px'
};

const title = {
    marginBottom: '20px',
    color: '#38bdf8'
};

const button = {
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
};
