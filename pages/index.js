import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
            <h1>🎬 Welcome to <b>Editing Edition 7</b></h1>
            <h2>🚀 Trusted by 200+ Creators | 50+ Orders Running...</h2>
            <h3>⚡ Join Premium For Faster Delivery</h3>
            <Link href="/login"><button style={{ margin: 10 }}>Login</button></Link>
            <Link href="/register"><button style={{ margin: 10 }}>Register</button></Link>
            <Link href="/pricing"><button style={{ margin: 10 }}>Pricing</button></Link>
            <Link href="/contact"><button style={{ margin: 10 }}>Contact</button></Link>
        </div>
    );
}
