// ─── CONFIG ─────────────────────────────────────────────────────────────

  const CONFIG = {
  whatsapp: '917259671242',
  whatsappMsg: 'Hi! I want to buy a license key. Please help me.',
  email: 'sales@buy-license.com',
  razorpay_key: 'rzp_test_XXXXXXXXXX',
  business_name: 'BuyLicense',
  currency: 'INR',
};

// ─── PRODUCTS ───────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: 'Windows 11 Pro', desc: 'Genuine lifetime activation key for Windows 11 Professional. Instant delivery after payment.', price: 1299, icon: '🪟', badge: 'Bestseller', category: 'windows' },
  { id: 2, name: 'Microsoft Office 2021', desc: 'Full Office suite — Word, Excel, PowerPoint, Outlook. One-time purchase, lifetime use.', price: 1999, icon: '📄', badge: null, category: 'office' },
  { id: 3, name: 'Windows 10 Pro', desc: 'Genuine activation key for Windows 10 Professional. Works on any PC.', price: 899, icon: '💻', badge: null, category: 'windows' },
  { id: 4, name: 'Office 365 (1 Year)', desc: 'Microsoft 365 subscription — 1 year for 5 devices including mobile and cloud storage.', price: 2499, icon: '☁️', badge: 'Popular', category: 'office' },
  { id: 5, name: 'Kaspersky Total Security', desc: 'Complete antivirus protection for 1 year, 3 devices. Real-time threat protection.', price: 699, icon: '🛡️', badge: null, category: 'antivirus' },
  { id: 6, name: 'Norton 360 Deluxe', desc: 'Premium antivirus + VPN + Dark web monitoring. 1 year, 5 devices.', price: 799, icon: '🔒', badge: 'New', category: 'antivirus' },
];

// ─── ROUTER ─────────────────────────────────────────────────────────────
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');

function showPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) { target.classList.add('active', 'fade-in'); }
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.nav-links').classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// ─── HAMBURGER ──────────────────────────────────────────────────────────
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// ─── RENDER PRODUCTS ────────────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card fade-in">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-icon">${p.icon}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-price">₹${p.price.toLocaleString('en-IN')} <span>one-time</span></div>
      <button class="btn-buy" onclick="openPayment(${p.id})">Buy Now — ₹${p.price.toLocaleString('en-IN')}</button>
    </div>
  `).join('');
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active-filter'));
    btn.classList.add('active-filter');
    renderProducts(btn.dataset.filter);
  });
});

renderProducts();

// ─── PAYMENT MODAL ──────────────────────────────────────────────────────
let currentProduct = null;

function openPayment(productId) {
  currentProduct = PRODUCTS.find(p => p.id === productId);
  if (!currentProduct) return;
  document.getElementById('modal-product-name').textContent = currentProduct.name;
  document.getElementById('modal-product-price').textContent = `₹${currentProduct.price.toLocaleString('en-IN')}`;
  document.getElementById('modal-pay-btn').textContent = `Pay ₹${currentProduct.price.toLocaleString('en-IN')} Securely`;
  document.getElementById('payment-modal').classList.add('open');
}

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('payment-modal').classList.remove('open');
});
document.getElementById('payment-modal').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// Payment method toggle
document.querySelectorAll('.payment-method').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.payment-method').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Pay button — Razorpay integration
document.getElementById('modal-pay-btn').addEventListener('click', () => {
  if (!currentProduct) return;

  // ── Razorpay checkout ──────────────────────────────────────────────
  // Uncomment below and remove the simulation once you have a Razorpay account:
  /*
  const options = {
    key: CONFIG.razorpay_key,
    amount: currentProduct.price * 100, // in paise
    currency: CONFIG.currency,
    name: CONFIG.business_name,
    description: currentProduct.name,
    handler: function(response) {
      document.getElementById('payment-modal').classList.remove('open');
      showToast('✓ Payment successful! License key sent to your email.', 'success');
      // Send license key via your backend/email here
    },
    prefill: { name: '', email: '', contact: '' },
    theme: { color: '#6C5CE7' }
  };
  const rzp = new Razorpay(options);
  rzp.open();
  */

  // ── Demo simulation (remove when Razorpay is live) ────────────────
  document.getElementById('payment-modal').classList.remove('open');
  showToast('✓ Payment successful! License key sent to your email.', 'success');
});

// ─── WHATSAPP ───────────────────────────────────────────────────────────
document.getElementById('wa-float').addEventListener('click', () => {
  const msg = encodeURIComponent(CONFIG.whatsappMsg);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
});

function waProduct(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const msg = encodeURIComponent(`Hi! I want to buy "${p.name}" (₹${p.price}). Please assist me.`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
}

// ─── CONTACT FORM ───────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    const data = {
      name: document.getElementById('c-name').value,
      email: document.getElementById('c-email').value,
      product: document.getElementById('c-product').value,
      message: document.getElementById('c-message').value,
    };

    // ── Formspree integration (replace YOUR_FORM_ID) ──────────────────
    // Sign up free at formspree.io, create a form, paste your form ID below:
    /*
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        document.getElementById('form-success').style.display = 'block';
        contactForm.style.display = 'none';
      }
    } catch(err) { showToast('Error sending. Try WhatsApp instead.', ''); }
    */

    // ── Demo simulation ───────────────────────────────────────────────
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'block';
      contactForm.style.display = 'none';
    }, 900);
  });
}

// WhatsApp contact shortcuts
document.querySelectorAll('.contact-item[data-wa]').forEach(el => {
  el.addEventListener('click', () => {
    const msg = encodeURIComponent(CONFIG.whatsappMsg);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
  });
});

// ─── TOAST ──────────────────────────────────────────────────────────────
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type}`;
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => t.classList.remove('show'), 4000);
}

// ─── SCROLL ANIMATIONS ──────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('fade-in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.product-card, .feature-card, .about-highlight').forEach(el => observer.observe(el));

// ─── INIT ────────────────────────────────────────────────────────────────
showPage('home');
