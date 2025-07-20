import Link from 'next/link';

export default function Proof() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>🔥 Client Proof | 400+ Delivered Projects</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Thumbnails | Reels | Short Videos | Trading Edits</p>

            <h2 style={{ color: '#22c55e' }}>🎨 20+ Professional Thumbnails</h2>
            <div style={gridStyle}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={imgStyle}>Thumbnail {i + 1}</div>
                ))}
            </div>

            <h2 style={{ color: '#22c55e', marginTop: '50px' }}>📱 30+ Viral Reels Delivered</h2>
            <div style={gridStyle}>
                {[...Array(30)].map((_, i) => (
                    <div key={i} style={reelStyle}>Reel {i + 1}</div>
                ))}
            </div>

            <BottomNav />
        </div>
    );
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    margin: '20px 0'
};

const imgStyle = {
    height: '90px',
    borderRadius: '10px',
    background: 'linear-gradient(45deg, #38bdf8, #0ea5e9)',
    color: '#0f172a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
};

const reelStyle = {
    height: '150px',
    borderRadius: '10px',
    background: 'linear-gradient(45deg, #a855f7, #9333ea)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold'
};

function BottomNav() {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#0f172a',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '15px 0',
            borderTop: '1px solid #334155',
            zIndex: 100
        }}>
            <Link href="/"><span style={linkStyle}>🏠 Home</span></Link>
            <Link href="/dashboard"><span style={linkStyle}>📊 Dashboard</span></Link>
            <Link href="/pricing"><span style={linkStyle}>💰 Pricing</span></Link>
            <Link href="/order"><span style={linkStyle}>📝 Order</span></Link>
            <Link href="/proof"><span style={linkStyle}>📂 Proof</span></Link>
        </div>
    );
}

const linkStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
