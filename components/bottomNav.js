import Link from 'next/link';

export default function BottomNav() {
    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#0f172a',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px 0',
            borderTop: '1px solid #334155',
            zIndex: 1000
        }}>
            <NavButton href="/" label="Home" />
            <NavButton href="/order" label="Order" />
            <NavButton href="/job" label="Jobs" />
            <NavButton href="/pricing" label="Pricing" />
            <NavButton href="/contact" label="Contact" />
        </div>
    );
}

function NavButton({ href, label }) {
    return (
        <Link href={href} style={{
            color: '#38bdf8',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '0.9rem'
        }}>
            {label}
        </Link>
    );
      }
