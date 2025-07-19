import { useState } from "react";

export default function Order() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        type: "",
        duration: "",
        urgency: "",
        details: "",
        reference: "",
        budget: "",
        payment: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your Order Has Been Submitted!\n\nWe Will Reach Out Within 24 Hours.\n\nThank You For Trusting Editing Edition 7!");
        setForm({
            name: "",
            email: "",
            phone: "",
            type: "",
            duration: "",
            urgency: "",
            details: "",
            reference: "",
            budget: "",
            payment: ""
        });
    };

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', padding: '40px' }}>
            <h1 style={{ textAlign: 'center', color: '#38bdf8' }}>📩 Place Your Order</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>🚀 Trusted By 200+ Clients | Fast Delivery for Premium Users</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <input placeholder="Name" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Phone (Optional)" name="phone" value={form.phone} onChange={handleChange} style={inputStyle} />
                
                <select name="type" value={form.type} onChange={handleChange} required style={inputStyle}>
                    <option value="">Select Project Type</option>
                    <option>Short Reels / Gaming Shorts</option>
                    <option>YouTube Full Video</option>
                    <option>Vlog / Documentary</option>
                    <option>Podcast / Interview</option>
                    <option>Trading / Finance Video</option>
                    <option>Wedding Cinematic</option>
                    <option>Other (Specify Below)</option>
                </select>

                <select name="duration" value={form.duration} onChange={handleChange} required style={inputStyle}>
                    <option value="">Select Duration</option>
                    <option>Under 5 Minutes</option>
                    <option>5-10 Minutes</option>
                    <option>10-30 Minutes</option>
                    <option>30+ Minutes</option>
                </select>

                <select name="urgency" value={form.urgency} onChange={handleChange} required style={inputStyle}>
                    <option value="">Select Urgency</option>
                    <option>Normal (As Per Timeline)</option>
                    <option>Urgent (Extra Charges Apply)</option>
                </select>

                <textarea placeholder="Details of Work / Instructions" name="details" value={form.details} onChange={handleChange} required style={{ ...inputStyle, height: '80px' }} />
                <input placeholder="Reference Link (Drive, Dropbox, etc.)" name="reference" value={form.reference} onChange={handleChange} style={inputStyle} />
                <input placeholder="Your Budget (Optional)" name="budget" value={form.budget} onChange={handleChange} style={inputStyle} />

                <select name="payment" value={form.payment} onChange={handleChange} required style={inputStyle}>
                    <option value="">Preferred Payment</option>
                    <option>UPI (hariomgupta8538@axl)</option>
                    <option>Bank Transfer</option>
                    <option>PayPal</option>
                    <option>Other</option>
                </select>

                <button type="submit" style={button}>Submit Order 🚀</button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#38bdf8' }}>🔥 Your Idea • Our Edit • Your Viral Moment!</p>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1e293b',
    color: 'white',
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
    marginTop: '20px'
};
