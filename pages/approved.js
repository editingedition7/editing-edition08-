import Link from "next/link";

export default function Approved() {
    const orders = [
        { name: "Rohit Sharma", service: "Short Reels Editing", payment: "Online Payment", price: 3000, time: "Just Now" },
        { name: "Priya Singh", service: "Gaming Montage", payment: "Order On Delivery", price: 4500, time: "5 min ago" },
        { name: "Amit Verma", service: "Vlog Editing", payment: "UPI Payment", price: 5000, time: "10 min ago" },
        { name: "Neha Jain", service: "Podcast Editing", payment: "Online Payment", price: 5500, time: "15 min ago" },
        { name: "Manish Gupta", service: "Documentary", payment: "Bank Transfer", price: 7000, time: "20 min ago" },
        { name: "Sahil Khan", service: "Trading Video 10+ min", payment: "Order On Delivery", price: 4500, time: "25 min ago" },
        { name: "Divya Sharma", service: "Trading Video 30+ min", payment: "Online Payment", price: 6000, time: "30 min ago" },
        { name: "Ravi Mehta", service: "Monthly 60 Reels", payment: "Online Payment", price: 55000, time: "1 hour ago" },
        { name: "Sunita Yadav", service: "Monthly 30 Reels", payment: "Bank Transfer", price: 30000, time: "2 hour ago" },
        { name: "Rakesh Patel", service: "Monthly Trading Reels", payment: "Online Payment", price: 18000, time: "3 hour ago" },
    ];

    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>✅ 3000+ Orders Approved</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Real Pricing Based on Services | Live Updates</p>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                {orders.map((order, index) => (
                    <div key={index} style={{
                        background: '#1e293b',
                        padding: '15px',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        <p><b>Client:</b> {order.name}</p>
                        <p><b>Service:</b> {order.service}</p>
                        <p><b>Payment Method:</b> {order.payment}</p>
                        <p><b>Paid:</b> ₹{order.price}</p>
                        <p><b>Status:</b> <span style={{ color: '#22c55e' }}>Approved</span> ({order.time})</p>
                    </div>
                ))}
            </div>

            <div style={{ color: '#facc15', marginTop: '20px' }}>
                🚀 Editing Edition 7 | Fast Delivery | Secure Payment
            </div>

            <BottomNav />
        </div>
    );
}

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
