import Link from 'next/link';

export default function Dashboard() {
    return (
        <div style={{
            background: 'linear-gradient(to right, #0f172a, #1e293b)',
            minHeight: '100vh',
            color: 'white',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '2.5rem', color: '#38bdf8', marginBottom: '20px' }}>🚀 Editing Edition 7 Dashboard</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '50px'
            }}>
                <Link href="/"><button style={button}>🏠 Home</button></Link>
                <Link href="/pricing"><button style={button}>💰 Pricing</button></Link>
                <Link href="/rating"><button style={button}>⭐ Rating</button></Link>
                <Link href="/proof"><button style={button}>📁 Proof</button></Link>
                <Link href="/contact"><button style={button}>📞 Contact</button></Link>
            </div>

            <p style={{ color: '#94a3b8' }}>🔥 Professional Dashboard for Fast Access. Everything at One Place.</p>
        </div>
    );
}

const button = {
    padding: '15px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem'
};
