import { useState } from "react";
import Link from "next/link";

export default function Order() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        duration: "",
        reference: "",
        requirements: "",
        paymentMethod: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your Order has been submitted successfully!\n\nOur team will contact you shortly for next steps.");
        setForm({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            duration: "",
            reference: "",
            requirements: "",
            paymentMethod: "",
        });
    };

    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>📝 Place Your Order</h1>
            <p style={{ color: '#94a3b8' }}>Professional Editor Team • Explain Clearly Your Requirements</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
                <input placeholder="Full Name" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Phone Number (Optional)" name="phone" value={form.phone} onChange={handleChange} style={inputStyle} />
                <input placeholder="What Type of Editing Work? (Reels / Vlog / YouTube / Trading / Podcast / Thumbnail)" name="serviceType" value={form.serviceType} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Video Duration? (1min / 10min / 30min+)" name="duration" value={form.duration} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Reference Link (if any)" name="reference" value={form.reference} onChange={handleChange} style={inputStyle} />
                <textarea placeholder="Explain Your Requirements Clearly (Example: Text Animation, Color Grading, B-Roll, Music, Cut Style...)" name="requirements" value={form.requirements} onChange={handleChange} required style={{ ...inputStyle, height: '120px' }} />

                <select name="paymentMethod" value={form.paymentMethod} onChange={handleChange} required style={inputStyle}>
                    <option value="">Select Payment Method</option>
                    <option value="Online Payment (UPI / Paytm / Google Pay)">Online Payment (UPI / Paytm / Google Pay)</option>
                    <option value="Order On Delivery (After Approval)">Order On Delivery (After Approval)</option>
                </select>

                <button type="submit" style={button}>Submit My Order 🚀</button>
            </form>

            <p style={{ color: '#38bdf8', marginTop: '30px' }}>Our Team works 24x7 to deliver results for serious creators 🚀</p>
            <BottomNav />
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '14px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1e293b',
    color: 'white',
    fontSize: '1rem'
};

const button = {
    width: '100%',
    padding: '14px',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '1rem'
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
            <Link href="/proofs"><span style={linkStyle}>📂 Proofs</span></Link>
            <Link href="/order"><span style={linkStyle}>📝 Order</span></Link>
        </div>
    );
}

const linkStyle = {
    color: '#38bdf8',
    fontWeight: 'bold',
    cursor: 'pointer'
};
