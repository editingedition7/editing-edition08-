export default function Pricing() {
    return (
        <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'sans-serif' }}>
            <h1>🎬 Editing Edition 7 Pricing</h1>
            <h2 style={{ color: 'red' }}>🔥 Limited Offer: ₹999 Lifetime (was ₹1999)</h2>
            <p style={{ fontWeight: 'bold' }}>UPI ID for payment: <b>hariomgupta8538@axl</b></p>

            <h2 style={{ marginTop: '40px' }}>🚀 Free vs Premium User Pricing</h2>
            <h3>Delivery Time & Priority Difference</h3>

            <h4 style={{ color: 'gray' }}>🎯 Free Users</h4>
            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }} border="1">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Delivery</th>
                        <th>Price (INR)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Short Reels / Gaming Shorts</td><td>3-4 Days</td><td>₹ 1200+</td></tr>
                    <tr><td>Gaming Montage (Full)</td><td>5-7 Days</td><td>₹ 1500+</td></tr>
                    <tr><td>Vlog Editing (15-30 min)</td><td>5-7 Days</td><td>₹ 2500+</td></tr>
                    <tr><td>Trading Video (10+ min)</td><td>5-7 Days</td><td>₹ 5000+</td></tr>
                </tbody>
            </table>

            <h4 style={{ color: 'gold' }}>💎 Premium Users</h4>
            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }} border="1">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Delivery</th>
                        <th>Price (INR)</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Short Reels / Gaming Shorts</td><td>24-48 Hours</td><td>₹ 1200+</td><td>Priority</td></tr>
                    <tr><td>Gaming Montage (Full)</td><td>4-5 Days</td><td>₹ 1500+</td><td>Priority</td></tr>
                    <tr><td>Vlog Editing (15-30 min)</td><td>4-5 Days</td><td>₹ 2500+</td><td>Priority</td></tr>
                    <tr><td>Trading Video (10+ min)</td><td>3 Days</td><td>₹ 5000+</td><td>Priority</td></tr>
                </tbody>
            </table>

            <h2 style={{ marginTop: '50px' }}>💼 Monthly Hiring (Influencers, Traders)</h2>
            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }} border="1">
                <thead>
                    <tr>
                        <th>Plan</th>
                        <th>Delivery Time</th>
                        <th>Price (INR)</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Monthly 60 Reels (Trader/Brand)</td><td>30 Days</td><td>₹ 55000+</td><td>High Quality</td></tr>
                    <tr><td>Monthly 30 Reels</td><td>30 Days</td><td>₹ 30000+</td><td>Short Reels Only</td></tr>
                    <tr><td>Monthly Trading Reels (15-30)</td><td>30 Days</td><td>₹ 18000+</td><td>Market Style Edits</td></tr>
                </tbody>
            </table>

            <button style={{
                backgroundColor: '#111',
                color: '#fff',
                padding: '10px 30px',
                borderRadius: '5px',
                marginTop: '40px',
                cursor: 'pointer'
            }}
                onClick={() => window.open("upi://pay?pa=hariomgupta8538@axl&pn=Editing+Edition+7&mc=0000&tid=1234567890&tr=EditingEdition7&tn=Premium+Membership+Payment&am=999", "_blank")}
            >
                Pay ₹999 & Upgrade to Premium 🚀
            </button>

            <h3 style={{ marginTop: '30px' }}>🎯 Premium = Fast Queue, Free = Normal Queue</h3>
            <h4 style={{ marginTop: '40px' }}>Contact: <br />📧 ediitingedition@gmail.com <br />📷 @editing___edition07</h4>
        </div>
    );
}
