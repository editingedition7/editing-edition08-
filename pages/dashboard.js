import Link from 'next/link';

export default function Dashboard() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to Editing Edition 7 🔥</h1>
            <h2>Premium Member 🚀</h2>
            <p>🎖 Official Certificate Ready for Download</p>
            <Link href="/pricing"><button>View All Editing Plans</button></Link>
        </div>
    );
}
