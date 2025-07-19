import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [isPremium, setIsPremium] = useState(false); // For demo purpose

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser?.email === "premiumuser@gmail.com") {
                setIsPremium(true);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                textAlign: 'center',
                marginTop: '50px',
                fontFamily: 'Poppins, sans-serif',
                background: '#0f0f0f',
                color: '#fff',
                padding: '50px',
                borderRadius: '20px',
                maxWidth: '600px',
                margin: '50px auto',
                boxShadow: '0 0 20px rgba(0,255,255,0.2)'
            }}
        >
            <h1 style={{ fontSize: '2rem', color: '#00ffe0' }}>👑 Welcome, {user?.email || 'User'}</h1>
            <h2 style={{ marginTop: '10px' }}>
                Your Status: {isPremium ? '💎 PREMIUM MEMBER' : '❌ FREE USER'}
            </h2>
            <h3 style={{ color: isPremium ? 'lime' : '#f44336', marginTop: '5px' }}>
                Priority: {isPremium ? '✅ Activated | 🚀 Fast Lane Active' : '❌ Normal Queue'}
            </h3>

            {isPremium && (
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{ marginTop: '30px' }}
                >
                    <h2 style={{ color: '#00ffe0' }}>🔥 Your Premium Benefits:</h2>
                    <p>🎖️ Premium Verified Editor Certificate</p>
                    <p>🚀 Fast Delivery • VIP Queue</p>
                    <p>💼 Trusted by 200+ Creators, Traders & Influencers</p>
                    <p>👁️ Exclusive Access To Premium Services</p>
                </motion.div>
            )}

            {!isPremium && (
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{ marginTop: '40px' }}
                >
                    <h3 style={{ color: '#f44336' }}>
                        Upgrade to Premium for Faster Delivery & VIP Status!
                    </h3>
                    <Link href="/pricing">
                        <button style={{
                            padding: '12px 30px',
                            marginTop: '15px',
                            background: '#00ffe0',
                            border: 'none',
                            color: '#000',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: '0.3s'
                        }}>Upgrade to Premium 🚀</button>
                    </Link>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '50px', fontSize: '14px', color: '#999' }}
            >
                <p>✅ Active Clients: 200+ | Ongoing Orders: 50+</p>
                <p>Trusted by Influencers • Creators • Traders</p>
            </motion.div>
        </motion.div>
    );
                     }
