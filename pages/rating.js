import Link from 'next/link';

export default function Rating() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            minHeight: '100vh',
            color: 'white',
            padding: '40px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>⭐ 400+ Happy Clients Reviews</h1>
                <p style={{ marginTop: '20px', color: '#94a3b8' }}>🔥 Every 5 Minutes: New Ratings Coming...</p>

                <div style={{ marginTop: '50px' }}>
                    <h3 style={{ color: '#22c55e' }}>5.0 ⭐⭐⭐⭐⭐ "Best Editing Service I Found!"</h3>
                    <h3 style={{ color: '#22c55e' }}>4.8 ⭐⭐⭐⭐ "Fast Delivery, Amazing Work!"</h3>
                    <h3 style={{ color: '#22c55e' }}>4.9 ⭐⭐⭐⭐⭐ "Professional & Trusted."</h3>
                    <h3 style={{ color: '#22c55e' }}>5.0 ⭐⭐⭐⭐⭐ "Highly Recommended!"</h3>
                    <h3 style={{ color: '#22c55e' }}>4.7 ⭐⭐⭐⭐ "Great Communication!"</h3>
                </div>

                <p style={{ marginTop: '30px', color: '#38bdf8', fontWeight: 'bold' }}>Trusted by Creators • Influencers • Traders 🚀</p>

                <Link href="/"><button style={buttonStyle}>Back to Home 🚀</button></Link>
            </div>

            <BottomNav />
        </div>
    );
}

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
            <Link href="/rating"><span style={navItem}>⭐ Ratings</span></Link>
        </div>
    );
}

const navItem = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const buttonStyle = {
    marginTop: '40px',
    padding: '12px 30px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
};
