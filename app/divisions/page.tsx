export default function DivisionsPage() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zodiac GCC | Materials Division & Project Syndicate</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: #fafcf9; color: #1a2a2f; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 24px; }
    .top-bar { background: #1f3b2c; color: white; padding: 12px 0; text-align: center; font-size: 0.85rem; }
    .top-bar a { color: #ffdd99; text-decoration: none; font-weight: 600; }
    .main-header { background: white; padding: 20px 0; border-bottom: 1px solid #e2e8f0; }
    .logo h1 { font-size: 1.8rem; font-weight: 800; color: #1f3b2c; }
    .logo p { font-size: 0.75rem; color: #5a6e5a; }
    .divisions-showcase { padding: 60px 0 40px; }
    .division-grid { display: flex; flex-wrap: wrap; gap: 40px; margin-top: 40px; }
    .division-card { flex: 1; background: white; border-radius: 32px; overflow: hidden; box-shadow: 0 12px 30px rgba(0,0,0,0.05); border: 1px solid #e9f0e5; }
    .card-head { padding: 32px 28px 20px; }
    .badge-materials { background: #1f3b2c; color: white; padding: 4px 14px; border-radius: 40px; font-size: 0.7rem; font-weight: 700; display: inline-block; }
    .badge-syndicate { background: #2c5a6e; color: white; padding: 4px 14px; border-radius: 40px; font-size: 0.7rem; font-weight: 700; display: inline-block; }
    .division-card h2 { font-size: 1.9rem; margin: 16px 0 10px; }
    .product-list { padding: 0 28px 24px; list-style: none; }
    .product-list li { margin-bottom: 14px; display: flex; gap: 12px; align-items: center; }
    .product-list i { width: 24px; color: #2f6b47; }
    .btn-materials { background: #1f3b2c; color: white; padding: 10px 24px; border-radius: 40px; text-decoration: none; display: inline-block; margin: 0 28px 28px; font-weight: 600; }
    .btn-syndicate { background: #2c5a6e; color: white; padding: 10px 24px; border-radius: 40px; text-decoration: none; display: inline-block; margin: 0 28px 28px; font-weight: 600; }
    .syndicate-full { background: #f2f7f2; padding: 70px 0; margin-top: 40px; }
    .syndicate-flex { display: flex; flex-wrap: wrap; gap: 48px; align-items: center; }
    .stats-box { background: white; padding: 28px; border-radius: 28px; flex: 1; }
    .footer-note { background: #0f241c; color: #cfe3d4; padding: 40px 0; text-align: center; font-size: 0.8rem; }
    @media (max-width: 800px) { .division-grid { flex-direction: column; } }
  </style>
</head>
<body>
<div class="top-bar">
  <i class="fas fa-home"></i> <a href="/">← Back to Zodiac GCC Main Site</a> &nbsp;|&nbsp; <strong>Project Syndicate Division</strong>
</div>
<header class="main-header">
  <div class="container logo">
    <h1>ZODIAC GCC</h1>
    <p>Two specialized divisions | Materials · Project Syndicate</p>
  </div>
</header>
<section class="divisions-showcase">
  <div class="container">
    <h2 style="font-size: 2rem; text-align: center;">Our Divisions</h2>
    <div class="division-grid">
      <div class="division-card">
        <div class="card-head">
          <span class="badge-materials">📦 Division I</span>
          <h2>Materials Division</h2>
          <p>Premium construction + Solar energy solutions</p>
        </div>
        <ul class="product-list">
          <li><i class="fas fa-check"></i> Wall Putty & Drywall Panels</li>
          <li><i class="fas fa-check"></i> Cement Blocks & Precast Concrete</li>
          <li><i class="fas fa-solar-panel"></i> <strong>Solar Panels</strong> (NEW)</li>
          <li><i class="fas fa-bolt"></i> <strong>Solar Inverters</strong> (NEW)</li>
        </ul>
        <a href="#" class="btn-materials">Request quote →</a>
      </div>
      <div class="division-card">
        <div class="card-head">
          <span class="badge-syndicate">🤝 Division II</span>
          <h2>Project Syndicate</h2>
          <p>Syndicate Manager for mega projects</p>
        </div>
        <ul class="product-list">
          <li><i class="fas fa-chart-line"></i> Deal structuring & due diligence</li>
          <li><i class="fas fa-users"></i> Investor sourcing & capital raising</li>
          <li><i class="fas fa-building"></i> Infrastructure & energy syndication</li>
          <li><i class="fas fa-lock"></i> Gated investor portal</li>
        </ul>
        <a href="#" class="btn-syndicate">View active syndications →</a>
      </div>
    </div>
  </div>
</section>
<section class="syndicate-full">
  <div class="container syndicate-flex">
    <div class="stats-box">
      <i class="fas fa-chart-line" style="font-size: 2.5rem; color:#2c5a6e;"></i>
      <h3>Syndicate Manager since 2018</h3>
      <ul style="list-style: none; margin-top: 16px;">
        <li>✓ <strong>$2.8B+</strong> total syndicated capital</li>
        <li>✓ <strong>8</strong> completed syndications</li>
        <li>✓ <strong>160+</strong> qualified investors</li>
      </ul>
    </div>
    <div class="stats-box">
      <i class="fas fa-fingerprint" style="font-size: 2.5rem; color:#2c5a6e;"></i>
      <h3>Investor Portal (Gated)</h3>
      <p>Accredited investors get access to live deals & reporting</p>
      <a href="#" style="display: inline-block; margin-top: 20px; background: #2c5a6e; color: white; padding: 8px 20px; border-radius: 40px; text-decoration: none;">Apply for access →</a>
    </div>
  </div>
</section>
<div class="footer-note">
  <div class="container">
    <p><strong>Zodiac GCC</strong> — Materials Division | Project Syndicate Division</p>
    <p><a href="/" style="color: #ffdd99;">← Return to main site</a> | info@zodiacgcc.com</p>
  </div>
</div>
</body>
</html>
      `
    }} />
  );
}
