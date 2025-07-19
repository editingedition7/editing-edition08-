import { useEffect, useState } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Link from 'next/link';

export default function Dashboard() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(user.displayName || user.email.split('@')[0]);
            }
        });
    }, []);

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
            <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: '#38bdf8' }}>
                🎉 Welcome, {username} 🚀
            </h1>

            <h2 style={{ marginBottom: '20px' }}>💎 Status: <span style={{ color: 'gold' }}>Free User</span></h2>
            <h3 style={{ marginBottom: '30px' }}>🔥 Upgrade to Premium for Faster Editing & Priority Service!</h3>

            <Link href="/pricing">
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#38bdf8',
                    color: '#0f172a',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '30px'
                }}>
                    Upgrade Now 🚀
                </button>
            </Link>

            <div style={{ textAlign: 'center' }}>
                <h4>✅ Active Clients: 200+ | Ongoing Orders: 50+</h4>
                <p style={{ color: '#94a3b8' }}>Trusted by Creators • Influencers • Traders</p>
            </div>
        </div>
    );
        }
