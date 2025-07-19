import Link from "next/link";

export default function Pricing() {
    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', padding: '50px', textAlign: 'center' }}>
            <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>🎬 Editing Edition 7 Pricing</h1>
            <h2 style={{ margin: '20px 0', color: '#22c55e' }}>🔥 Limited Time Premium Offer: <del>₹1999</del> <b>₹999 Lifetime</b></h2>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Complete Priority Access + Fast Delivery</p>
            <p style={{ color: '#facc15' }}>Offer Ending Soon ⏳</p>

            <p style={{ margin: '30px 0', fontWeight: 'bold' }}>UPI ID for Payment: <span style={{ color: '#38bdf8' }}>hariomgupta8538@axl</span></p>

            <Link href="/contact"><button style={button}>Get Premium Now 🚀</button></Link>

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>🚀 Free vs Premium Users Comparison</h2>

            <div style={tableContainer}>
                <h3>🎯 Free Users</h3>
                <PricingTable
                    delivery={[
                        "Short Reels: 3-4 Days",
                        "Gaming Montage: 5-7 Days",
                        "Vlog Editing: 5-7 Days",
                        "Podcast: 7 Days",
                        "Documentary: 10 Days",
                        "Trading Video 10+ Min: 5-7 Days",
                        "Trading Video 30+ Min: 7-10 Days",
                    ]}
                    pricing="High / Slow Queue"
                />
                <h3 style={{ marginTop: '40px' }}>💎 Premium Users</h3>
                <PricingTable
                    delivery={[
                        "Short Reels: 24-48 Hours",
                        "Gaming Montage: 4-5 Days",
                        "Vlog Editing: 4-5 Days",
                        "Podcast: 5 Days",
                        "Documentary: 7 Days",
                        "Trading Video 10+ Min: 3 Days",
                        "Trading Video 30+ Min: 5 Days",
                    ]}
                    pricing="Priority Fast Lane"
                />
            </div>

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>💼 Monthly Hiring (For Influencers & Traders)</h2>
            <div style={tableContainer}>
                <PricingTable
                    delivery={[
                        "Monthly 60 Reels: ₹55000+",
                        "Monthly 30 Reels: ₹30000+",
                        "Monthly Trading Reels: ₹18000+",
                    ]}
                    pricing="Dedicated Editor"
                />
            </div>

            <p style={{ marginTop: '50px', color: '#22c55e', fontWeight: 'bold' }}>Why People Upgrade? ✅ Faster Work ✅ Priority Queue ✅ Trusted 200+ Clients</p>
            <p style={{ color: '#94a3b8' }}>Trusted by Creators • Influencers • Traders</p>
        </div>
    );
}

function PricingTable({ delivery, pricing }) {
    return (
        <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #334155', borderRadius: '10px' }}>
            <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1' }}>
                {delivery.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
            </ul>
            <p style={{ color: '#38bdf8', fontWeight: 'bold' }}>{pricing}</p>
        </div>
    );
}

const button = {
    padding: '12px 30px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '20px',
};

const tableContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px'
};
