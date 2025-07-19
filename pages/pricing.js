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

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>🎯 Full Editing Price List (One Time)</h2>
            <div style={tableContainer}>
                <PricingTable
                    delivery={[
                        "Short Reels / Insta Shorts: ₹3000 (Free) / ₹2700 (Premium)",
                        "Gaming Montage 3-5 Min: ₹4500 (Free) / ₹4200 (Premium)",
                        "Vlog 10-15 Min: ₹6000 (Free) / ₹5500 (Premium)",
                        "Podcast 30 Min: ₹7000 (Free) / ₹6500 (Premium)",
                        "Documentary 5-10 Min: ₹12000 (Free) / ₹11000 (Premium)",
                        "Trading Video 10 Min: ₹4000 (Free) / ₹3700 (Premium)",
                        "Trading Video 30+ Min: ₹9000 (Free) / ₹8500 (Premium)",
                        "Wedding Cinematic: ₹35000+ (Free) / ₹33000+ (Premium)",
                        "YouTube Thumbnail: ₹500 (Free) / ₹400 (Premium)",
                        "Thumbnails Bulk (10): ₹4000 (Free) / ₹3500 (Premium)",
                        "Instagram Post Design: ₹1200 (Free) / ₹1000 (Premium)",
                    ]}
                    pricing="Complete Editing Solutions"
                />
            </div>

            <h2 style={{ marginTop: '50px', color: '#38bdf8' }}>💼 Monthly Hiring (Influencers, Traders, Creators)</h2>
            <div style={tableContainer}>
                <PricingTable
                    delivery={[
                        "Monthly 60 Reels: ₹65000",
                        "Monthly 30 Reels: ₹38000",
                        "Monthly Trading / Finance 30+ Reels: ₹25000",
                        "YouTube Thumbnails (30): ₹15000",
                        "YouTube + Reels Combo (60+20): ₹75000",
                    ]}
                    pricing="Dedicated Editor Monthly"
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
