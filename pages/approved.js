import Link from "next/link";

export default function Approved() {
    const approvedOrders = [
        { id: 1, name: "Rohit Sharma", service: "YouTube Vlog Editing", payment: "Online Payment", time: "Just Now" },
        { id: 2, name: "Priya Singh", service: "Reels Editing", payment: "Order On Delivery", time: "5 min ago" },
        { id: 3, name: "Amit Verma", service: "Podcast Editing", payment: "Online Payment", time: "10 min ago" },
        { id: 4, name: "Neha Jain", service: "Trading Video Editing", payment: "Order On Delivery", time: "15 min ago" },
        { id: 5, name: "Manish Gupta", service: "Thumbnail Designing", payment: "Online Payment", time: "20 min ago" },
        { id: 6, name: "Sahil Khan", service: "Gaming Montage", payment: "Order On Delivery", time: "25 min ago" },
        { id: 7, name: "Divya Sharma", service: "Documentary Editing", payment: "Online Payment", time: "30 min ago" },
    ];

    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>✅ Order Approval Updates</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Live Order Approved List (Auto Every 5 Minutes)</p>

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
                        <p><b>Status:</b> <span style={{ color: '#22c55e' }}>Approved</span> ({order.time})</p>
                    </div>
                ))}
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
