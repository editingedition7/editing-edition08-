import Link from "next/link";

export default function Dashboard() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>🚀 Editing Edition 7 Dashboard</h1>
            <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Professional Dashboard for Fast Access. Everything at One Place.</p>

            <div style={gridStyle}>
                <Link href="/"><div style={buttonStyle}>🏠 Home</div></Link>
                <Link href="/pricing"><div style={buttonStyle}>💰 Pricing</div></Link>
                <Link href="/order"><div style={buttonStyle}>📝 Order</div></Link>
                <Link href="/proofs"><div style={buttonStyle}>📂 Proofs</div></Link>
                <Link href="/rating"><div style={buttonStyle}>⭐ Rating</div></Link>
                <Link href="/contact"><div style={buttonStyle}>📞 Contact</div></Link>
                <Link href="/approved"><div style={buttonStyle}>✅ Approved</div></Link>
                <Link href="/jobapply"><div style={buttonStyle}>💼 Job Apply</div></Link>
            </div>

            <BottomNav />
        </div>
    );
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    margin: '30px 0'
};

const buttonStyle = {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '12px',
    color: '#38bdf8',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
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
            <Link href="/order"><span style={linkStyle}>📝 Order</span></Link>
            <Link href="/approved"><span style={linkStyle}>✅ Approved</span></Link>
            <Link href="/proofs"><span style={linkStyle}>📂 Proofs</span></Link>
        </div>
    );
}

const linkStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
