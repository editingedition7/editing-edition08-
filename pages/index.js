import Link from 'next/link';

export default function Home() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            height: '100vh',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div>
                <h1 style={{ fontSize: '2.5rem', color: '#38bdf8' }}>🚀 Editing Edition 7</h1>
                <h2 style={{ marginBottom: '20px' }}>Trusted by 200+ Creators & Traders</h2>
                <p style={{ color: '#94a3b8' }}>Upgrade to Premium. Finish Faster. Get Priority Access.</p>

                <div style={{ marginTop: '40px' }}>
                    <Link href="/login"><button style={button}>Login</button></Link>
                    <Link href="/register"><button style={{ ...button, marginLeft: '20px' }}>Register</button></Link>
                </div>

                <p style={{ marginTop: '50px', fontSize: '0.9rem', color: '#38bdf8' }}>🔥 Limited Time Offer: ₹999 Lifetime Access</p>
            </div>

            <BottomNav />
        </div>
    );
}

const button = {
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
};

function BottomNav() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            backgroundColor: '#1e293b',
            padding: '10px 0',
            position: 'fixed',
            bottom: 0
        }}>
            <Link href="/"><span style={navItem}>🏠 Home</span></Link>
            <Link href="/dashboard"><span style={navItem}>📊 Dashboard</span></Link>
            <Link href="/pricing"><span style={navItem}>💰 Pricing</span></Link>
            <Link href="/order"><span style={navItem}>📝 Order</span></Link>
            <Link href="/job"><span style={navItem}>💼 Jobs</span></Link>
        </div>
    );
}

const navItem = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
