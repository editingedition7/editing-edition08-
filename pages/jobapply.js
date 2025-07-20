import { useState } from "react";
import Link from "next/link";

export default function JobApply() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        skills: "",
        experience: "",
        portfolio: "",
        linkedin: "",
        about: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your Job Application Has Been Submitted!\nOur HR will review and reach out if shortlisted.");
        setForm({
            name: "",
            email: "",
            phone: "",
            position: "",
            skills: "",
            experience: "",
            portfolio: "",
            linkedin: "",
            about: "",
        });
    };

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', padding: '40px' }}>
            <h1 style={{ textAlign: 'center', color: '#38bdf8' }}>💼 Apply For Job | Editing Edition 7</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px', color: '#94a3b8' }}>Professional Hiring Form for Editors • Designers • Creators</p>

            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <input placeholder="Full Name *" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Email Address *" name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Phone Number *" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Position You Are Applying For * (Editor / Designer / Thumbnail)" name="position" value={form.position} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Your Key Skills (Adobe / CapCut / Premiere Pro etc.) *" name="skills" value={form.skills} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Years of Experience *" name="experience" value={form.experience} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Portfolio / Previous Work Link *" name="portfolio" value={form.portfolio} onChange={handleChange} required style={inputStyle} />
                <input placeholder="LinkedIn / Instagram (Optional)" name="linkedin" value={form.linkedin} onChange={handleChange} style={inputStyle} />
                <textarea placeholder="Tell us about yourself & why you want this job *" name="about" value={form.about} onChange={handleChange} required style={{ ...inputStyle, height: '100px' }} />

                <button type="submit" style={button}>Submit Application 🚀</button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '20px', color: '#38bdf8' }}>🔥 We are looking for serious talents only.</p>

            <BottomNav />
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
