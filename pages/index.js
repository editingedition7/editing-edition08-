import Link from 'next/link';

export default function Home() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Editing Edition 7 🚀</h1>
            <h2>Trusted by 200+ Creators • Premium Service</h2>
            <Link href="/login"><button>Login</button></Link>
            <Link href="/register"><button>Register</button></Link>
            <Link href="/pricing"><button>Pricing</button></Link>
            <Link href="/contact"><button>Contact</button></Link>
        </div>
    );
}
