import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username });
            router.push("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#0f172a', 
            color: 'white', 
            flexDirection: 'column' 
        }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#38bdf8' }}>🚀 Create Your Account</h2>
            
            <input 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                style={{
                    padding: '10px',
                    width: '300px',
                    margin: '10px 0',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    backgroundColor: '#1e293b',
                    color: 'white'
                }}
            />

            <input 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={{
                    padding: '10px',
                    width: '300px',
                    margin: '10px 0',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    backgroundColor: '#1e293b',
                    color: 'white'
                }}
            />

            <input 
                placeholder="Password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={{
                    padding: '10px',
                    width: '300px',
                    margin: '10px 0',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    backgroundColor: '#1e293b',
                    color: 'white'
                }}
            />

            <button 
                onClick={handleRegister}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#38bdf8',
                    color: '#0f172a',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
            >
                Create Account
            </button>
        </div>
    );
    }
