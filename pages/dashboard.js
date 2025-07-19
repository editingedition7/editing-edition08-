import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email.includes('premium')) {
                setIsPremium(true);
            }
        });
        return () => unsubscribe();
    }, []);

    if (!user) {
        return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</h2>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'monospace' }}>
            <h1>👑 Welcome, {user.email.split('@')[0]}</h1>
            <h2>
                Your Status: {isPremium ? <span style={{ color: 'gold' }}>💎 PREMIUM MEMBER</span> : <span style={{ color: 'gray' }}>FREE USER</span>}
            </h2>

            {isPremium ? (
                <>
                    <p style={{ color: 'green', margin: '10px 0' }}>✅ Priority: Fast Lane Activated</p>
                    <p style={{ color: 'purple' }}>🚀 Unlimited Edits | VIP Access</p>
                </>
            ) : (
                <>
                    <p style={{ color: 'red' }}>⚠️ Upgrade Required for Priority Support</p>
                    <Link href="/pricing"><button style={{ padding: '10px 20px', marginTop: '10px' }}>Upgrade to Premium 🚀</button></Link>
                </>
            )}

            <div style={{ marginTop: '50px', padding: '20px', backgroundColor: '#111', color: '#0f0', borderRadius: '10px' }}>
                <h3>✅ Active Clients: 200+</h3>
                <h3>📝 Running Orders: 50+</h3>
                <h4>Trusted by YouTubers, Traders, Influencers 🚩</h4>
            </div>

            {isPremium && (
                <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#222', color: '#ff0', borderRadius: '10px' }}>
                    <h2>🎁 Premium Certificate Available</h2>
                    <p>Download your official Editing Edition 7 Certificate now.</p>
                    <button style={{ marginTop: '10px', padding: '10px 20px' }}>Download Certificate</button>
                </div>
            )}
        </div>
    );
                                             }
