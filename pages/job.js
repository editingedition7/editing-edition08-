import { useState } from "react";

export default function Job() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        skills: "",
        experience: "",
        portfolio: "",
        why: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Your Application Has Been Submitted!\n\nOur HR Team Will Shortlist & Contact If Matched.\n\n🔥 Trusted by 200+ Creators | Fast Growing Editing Company");
        setForm({
            name: "",
            email: "",
            phone: "",
            skills: "",
            experience: "",
            portfolio: "",
            why: "",
        });
    };

    return (
        <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', color: 'white', padding: '40px' }}>
            <h1 style={{ textAlign: 'center', color: '#38bdf8' }}>👥 Apply For Editing / Designing Team</h1>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>🚀 Join India's Fastest Growing Editing Community • Trusted By 200+ Creators</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                <input placeholder="Full Name" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Editing / Designing Skills (eg: Premiere Pro, After Effects, Canva)" name="skills" value={form.skills} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Years of Experience (eg: 1 year, 2 years...)" name="experience" value={form.experience} onChange={handleChange} required style={inputStyle} />
                <input placeholder="Portfolio Link / Google Drive Link / Instagram Page" name="portfolio" value={form.portfolio} onChange={handleChange} required style={inputStyle} />
                <textarea placeholder="Why Do You Want to Join Our Team? Be Honest." name="why" value={form.why} onChange={handleChange} required style={{ ...inputStyle, height: '80px' }} />

                <button type="submit" style={button}>Submit Application 🚀</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '20px', color: '#38bdf8' }}>🔥 Grow • Earn • Build Your Future With Editing Edition 7!</p>
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
