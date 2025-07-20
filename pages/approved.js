import Link from "next/link";

export default function Approved() {
    const approvedOrders = [
        { id: 1, name: "Rohit Sharma", service: "YouTube Vlog Editing", payment: "Online Payment", amount: "₹4500", time: "Just Now" },
        { id: 2, name: "Priya Singh", service: "Reels Editing", payment: "Order On Delivery", amount: "₹3000", time: "5 min ago" },
        { id: 3, name: "Amit Verma", service: "Podcast Editing", payment: "Online Payment", amount: "₹7000", time: "12 min ago" },
        { id: 4, name: "Neha Jain", service: "Trading Video Editing", payment: "Online Payment", amount: "₹9000", time: "18 min ago" },
        { id: 5, name: "Manish Gupta", service: "Thumbnail Designing", payment: "Order On Delivery", amount: "₹1500", time: "25 min ago" },
        { id: 6, name: "Sahil Khan", service: "Gaming Montage", payment: "Online Payment", amount: "₹6000", time: "30 min ago" },
        { id: 7, name: "Divya Sharma", service: "Documentary Editing", payment: "Order On Delivery", amount: "₹12000", time: "40 min ago" },
    ];

    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>✅ 3000+ Orders Approved | Live Updates</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Clients Approved Every 5 Minutes • Verified Payments</p>

            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px', margin: '0 auto 30px auto', maxWidth: '700px', color: '#22c55e', fontWeight: 'bold' }}>
                🔔 New Payment Received: Suresh Kumar paid ₹5500 for Trading Video Editing
            </div>

            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                {approvedOrders.map((order) => (
                    <div key={order.id} style={{
                        background: '#1e293b',
                        padding: '15px',
                        borderRadius: '10px',
                        marginBottom: '15px',
                        textAlign: 'left'
                    }}>
                        <p><b>Client:</b> {order.name}</p>
                        <p><b>Service:</b> {order.service}</p>
                        <p><b>Payment Method:</b> {order.payment}</p>
                        <p><b>Amount:</b> {order.amount}</p>
                        <p><b>Status:</b> <span style={{ color: '#22c55e' }}>Approved ✅</span> ({order.time})</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '30px' }}>
                <Link href="/order"><button style={button}>📝 Place New Order</button></Link>
                <Link href="/contact"><button style={{ ...button, marginLeft: '20px' }}>📞 Contact Us</button></Link>
            </div>
        </div>
    );
}

const button = {
    padding: '10px 20px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px'
};
