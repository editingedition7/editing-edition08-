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
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Professional Dashboard for Fast Access</p>

            <div style={gridStyle}>
                <Link href="/"><div style={boxStyle}>🏠 Home</div></Link>
                <Link href="/pricing"><div style={boxStyle}>💰 Pricing</div></Link>
                <Link href="/order"><div style={boxStyle}>📝 Place Order</div></Link>
                <Link href="/proof"><div style={boxStyle}>📂 Proof</div></Link>
                <Link href="/rating"><div style={boxStyle}>⭐ Client Ratings</div></Link>
                <Link href="/contact"><div style={boxStyle}>📞 Contact Us</div></Link>
                <Link href="/jobapply"><div style={boxStyle}>📝 Job Apply</div></Link>
                <Link href="/approved"><div style={boxStyle}>✅ Approved Orders</div></Link>
            </div>

            <div style={{
                background: '#1e293b',
                padding: '20px',
                borderRadius: '12px',
                marginTop: '50px',
                color: '#38bdf8',
                fontWeight: 'bold'
            }}>
                <h2>📊 Current Project Status</h2>
                <p>🔥 Ongoing Orders: 82</p>
                <p>✅ Completed Orders: 349</p>
                <p>⏳ Pending Orders: 24</p>

                <h4 style={{ marginTop: '20px', color: '#22c55e' }}>Last 5 Orders:</h4>
                <ul style={{ listStyle: 'none', padding: 0, color: 'white' }}>
                    <li>- YouTube Vlog Editing (Completed)</li>
                    <li>- Reels Editing for Influencer (Running)</li>
                    <li>- Podcast Cut & Edit (Running)</li>
                    <li>- Gaming Montage (Completed)</li>
                    <li>- Cinematic Short Film (Pending)</li>
                </ul>

                <p style={{ marginTop: '10px', color: '#facc15' }}>Our Team works 24x7 to deliver priority fast 🚀</p>
            </div>

            <BottomNav />
        </div>
    );
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '20px',
    margin: '40px 0'
};

const boxStyle = {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '12px',
    cursor: 'pointer',
    color: '#38bdf8',
    fontWeight: 'bold',
    textAlign: 'center',
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
            <Link href="/proof"><span style={linkStyle}>📂 Proof</span></Link>
        </div>
    );
}

const linkStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
