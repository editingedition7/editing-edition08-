import Link from "next/link";

export default function Orders() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '2rem', color: '#38bdf8' }}>📊 Current Project Status</h1>

            <div style={{ margin: '30px 0' }}>
                <h3>🔥 Ongoing Orders: <span style={{ color: '#22c55e' }}>82</span></h3>
                <h3>✅ Completed Orders: <span style={{ color: '#38bdf8' }}>349</span></h3>
                <h3>⏳ Pending Orders: <span style={{ color: '#facc15' }}>24</span></h3>
            </div>

            <h2 style={{ margin: '20px 0', color: '#38bdf8' }}>Last 5 Orders:</h2>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2', color: '#cbd5e1' }}>
                <li>✅ YouTube Vlog Editing (Completed)</li>
                <li>🔥 Reels Editing for Influencer (Running)</li>
                <li>🔥 Podcast Cut & Edit (Running)</li>
                <li>✅ Gaming Montage (Completed)</li>
                <li>⏳ Cinematic Short Film (Pending)</li>
            </ul>

            <p style={{ marginTop: '30px', color: '#94a3b8' }}>Our Team Works 24x7 to Deliver Priority Fast 🚀</p>

            <Link href="/order">
                <button style={buttonStyle}>📩 Place Your Order Now</button>
            </Link>
        </div>
    );
}

const buttonStyle = {
    marginTop: '30px',
    padding: '12px 30px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem'
};
