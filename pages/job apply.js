import Link from "next/link";

export default function JobApply() {
    return (
        <div style={{
            backgroundColor: '#0f172a',
            color: 'white',
            minHeight: '100vh',
            padding: '40px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#38bdf8' }}>💼 Apply for Editor Job</h1>
            <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Fill in all your details carefully 👇</p>

            <form style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                <Input label="Full Name" placeholder="Enter your full name" />
                <Input label="Email Address" placeholder="Enter your email" type="email" />
                <Input label="Phone Number (with country code)" placeholder="+91 9876543210" />
                <Input label="City / Country" placeholder="City, Country" />
                <Input label="Your Portfolio / Work Link (Google Drive / Behance / Instagram)" placeholder="https://..." />
                <Input label="Available Working Hours Per Day" placeholder="E.g. 4-6 hours" />
                <Input label="Your Experience (Years/Months)" placeholder="E.g. 1 Year 6 Months" />
                <Input label="Software You Use for Editing" placeholder="E.g. Premiere Pro, After Effects, Capcut..." />

                <div style={{ marginBottom: '15px' }}>
                    <label>Why should we select you?</label>
                    <textarea placeholder="Write in 2-3 lines..." rows="4" style={inputStyle}></textarea>
                </div>

                <button type="submit" style={buttonStyle}>🚀 Apply Now</button>
            </form>

            <BottomNav />
        </div>
    );
}

function Input({ label, placeholder, type = "text" }) {
    return (
        <div style={{ marginBottom: '15px' }}>
            <label>{label}:</label>
            <input type={type} placeholder={placeholder} style={inputStyle} />
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: '#1e293b',
    color: 'white'
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    fontWeight: 'bold',
    cursor: 'pointer'
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
