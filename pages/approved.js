import Link from "next/link";

export default function Approved() {
    const names = ["Rohit Sharma", "Priya Singh", "Manish Gupta", "Neha Jain", "Sahil Khan", "Amit Verma", "Divya Sharma", "Ankit Tiwari", "Sneha Roy", "Vikas Dubey"];
    const services = ["Reels Editing", "Trading Video Editing", "YouTube Vlog Editing", "Thumbnail Designing", "Podcast Editing", "Gaming Montage", "Documentary Editing"];
    const payments = ["UPI Payment", "COD", "Online Payment"];
    const times = ["Just now", "1 min ago", "3 min ago", "5 min ago", "10 min ago", "12 min ago", "15 min ago", "20 min ago"];

    const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

    const randomOrders = Array.from({ length: 7 }, (_, i) => ({
        id: "#" + Math.random().toString(36).substring(2, 8).toUpperCase(),
        name: getRandomItem(names),
        service: getRandomItem(services),
        payment: getRandomItem(payments),
        time: getRandomItem(times)
    }));

    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>✅ 3000+ Orders Successfully Delivered</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Live Approval Updates | Trusted by 3000+ Clients</p>

            <table style={{ width: '90%', margin: '0 auto', borderCollapse: 'collapse', color: '#cbd5e1' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid #334155', color: '#38bdf8' }}>
                        <th style={cell}>Order ID</th>
                        <th style={cell}>Client</th>
                        <th style={cell}>Service</th>
                        <th style={cell}>Payment</th>
                        <th style={cell}>Status</th>
                        <th style={cell}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {randomOrders.map((order) => (
                        <tr key={order.id} style={{ borderBottom: '1px solid #334155' }}>
                            <td style={cell}>{order.id}</td>
                            <td style={cell}>{order.name}</td>
                            <td style={cell}>{order.service}</td>
                            <td style={cell}>{order.payment}</td>
                            <td style={{ ...cell, color: '#22c55e', fontWeight: 'bold' }}>Approved</td>
                            <td style={cell}>{order.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p style={{ color: '#facc15', marginTop: '30px', fontWeight: 'bold' }}>Our Team works 24x7 to deliver fast results 🚀</p>

            <div style={{ marginTop: '40px' }}>
                <Link href="/"><button style={button}>🏠 Home</button></Link>
                <Link href="/dashboard"><button style={button}>📊 Dashboard</button></Link>
                <Link href="/proofs"><button style={button}>📂 Proofs</button></Link>
                <Link href="/pricing"><button style={button}>💰 Pricing</button></Link>
            </div>
        </div>
    );
}

const cell = {
    padding: '12px',
    textAlign: 'center',
};

const button = {
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    margin: '10px'
};
