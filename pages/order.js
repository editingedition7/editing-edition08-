import Link from 'next/link';

export default function Order() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>📝 Place Your Editing Order</h1>
            <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
                Please fill out the form carefully. Professional Editors are ready for your project!
            </p>

            <form 
                action="https://formsubmit.co/editingedition@gmail.com" 
                method="POST" 
                style={{
                    backgroundColor: '#1e293b',
                    padding: '30px',
                    borderRadius: '12px',
                    maxWidth: '500px',
                    margin: '0 auto',
                    textAlign: 'left'
                }}
            >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="🎉 New Editing Order Received!" />

                <label>Your Name</label><br />
                <input type="text" name="name" required style={inputStyle} /><br />

                <label>Your Email</label><br />
                <input type="email" name="email" required style={inputStyle} /><br />

                <label>What Editing You Want? (Details)</label><br />
                <textarea name="message" rows="4" required style={{ ...inputStyle, height: '100px' }} /><br />

                <label>Payment Method</label><br />
                <select name="payment_method" required style={inputStyle}>
                    <option>Online Payment (UPI - hariomgupta8538@axl)</option>
                    <option>Order on Delivery (ODD)</option>
                </select><br />

                <button type="submit" style={button}>Submit Order</button>
            </form>

            <p style={{ marginTop: '30px', color: '#facc15' }}>
                📢 After Payment, Send Screenshot to WhatsApp: <b>8538989371</b><br />
                <span style={{ color: '#94a3b8' }}>Thanks for trusting Editing Edition 7.</span>
            </p>

            <BottomNav />
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#334155',
    color: '#f1f5f9'
};

const button = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px'
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
            <Link href="/pricing"><span style={linkStyle}>💰 Pricing</span></Link>
            <Link href="/order"><span style={linkStyle}>📝 Order</span></Link>
            <Link href="/proofs"><span style={linkStyle}>📂 Proofs</span></Link>
        </div>
    );
}

const linkStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
