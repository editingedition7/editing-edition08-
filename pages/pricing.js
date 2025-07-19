import Link from "next/link";

export default function Pricing() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            minHeight: '100vh',
            color: 'white',
            padding: '50px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>🎬 Editing Edition 7 Pricing</h1>

            <h2 style={{ margin: '20px 0', color: '#22c55e' }}>
                🔥 Special Lifetime Offer: <del>₹1999</del> <b>₹999 Only</b>
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>
                🚀 Complete Priority Access | Fast Delivery | Premium Badge
            </p>
            <p style={{ color: '#facc15' }}>Limited Time • Offer Ending Soon ⏳</p>

            <p style={{ margin: '30px 0', fontWeight: 'bold' }}>
                <span style={{ color: '#38bdf8' }}>UPI Payment:</span> hariomgupta8538@axl
            </p>

            <Link href="/contact"><button style={button}>Get Premium Access 🚀</button></Link>

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>💡 Free Users Vs Premium Users</h2>
            <div style={tableContainer}>
                <PricingTable
                    title="🎯 Free Users"
                    delivery={[
                        "Short Reels: 3-4 Days",
                        "Gaming Montage: 5-7 Days",
                        "Vlog Editing: 5-7 Days",
                        "Podcast: 7 Days",
                        "Documentary: 10 Days",
                        "Trading Video (10+ min): 5-7 Days",
                        "Trading Video (30+ min): 7-10 Days",
                    ]}
                    pricing="Slow Queue | Higher Charges"
                    bg="#334155"
                />
                <PricingTable
                    title="💎 Premium Users"
                    delivery={[
                        "Short Reels: 24-48 Hours",
                        "Gaming Montage: 3-4 Days",
                        "Vlog Editing: 3-4 Days",
                        "Podcast: 4 Days",
                        "Documentary: 6 Days",
                        "Trading Video (10+ min): 2-3 Days",
                        "Trading Video (30+ min): 4-5 Days",
                    ]}
                    pricing="Fast Lane | ₹999 Lifetime"
                    bg="#1e293b"
                />
            </div>

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>📦 Monthly Hiring for Influencers & Traders</h2>
            <div style={tableContainer}>
                <PricingTable
                    title="🔥 Monthly Editing Packages"
                    delivery={[
                        "60 Reels / Month: ₹55000+",
                        "30 Reels / Month: ₹30000+",
                        "15 Reels / Month: ₹15000+",
                        "Trading Reels Only: ₹18000+"
                    ]}
                    pricing="Dedicated Professional Editor"
                    bg="#0f172a"
                />
            </div>

            <p style={{
                marginTop: '50px',
                color: '#22c55e',
                fontWeight: 'bold'
            }}>
                ✅ Why Upgrade? • Faster Work • Priority Queue • 200+ Trusted Clients
            </p>
            <p style={{ color: '#94a3b8' }}>Creators • Influencers • Traders • Professionals</p>
        </div>
    );
}

function PricingTable({ title, delivery, pricing, bg }) {
    return (
        <div style={{
            margin: '20px 0',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: bg,
            width: '90%',
            maxWidth: '600px',
        }}>
            <h3 style={{ color: '#38bdf8' }}>{title}</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#cbd5e1' }}>
                {delivery.map((item, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>• {item}</li>
                ))}
            </ul>
            <p style={{ color: '#38bdf8', fontWeight: 'bold', marginTop: '10px' }}>{pricing}</p>
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
