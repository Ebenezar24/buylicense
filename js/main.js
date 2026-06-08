// ── CONFIG ──────────────────────────────────────────────────────────────
const CONFIG = {
  whatsapp: '917259671242',
  email: 'sales@buy-license.com',
  business: 'BuyLicense',
};

// ── ALL PRODUCTS ─────────────────────────────────────────────────────────
const PRODUCTS = [
  // Office perpetual
  {id:1,name:'Office 2024 Standard LTSC',cat:'office',icon:'📄',badge:'New'},
  {id:2,name:'Office 2024 Professional Plus LTSC',cat:'office',icon:'📄',badge:null},
  {id:3,name:'Office 2021 Standard LTSC',cat:'office',icon:'📄',badge:null},
  {id:4,name:'Office 2021 Professional Plus LTSC',cat:'office',icon:'📄',badge:null},
  {id:5,name:'Office 2021 Standard MAC',cat:'office',icon:'📄',badge:null},
  {id:6,name:'Office 2019 Standard',cat:'office',icon:'📄',badge:null},
  {id:7,name:'Office 2019 Professional Plus',cat:'office',icon:'📄',badge:null},
  {id:8,name:'Office 2019 Standard for Mac',cat:'office',icon:'📄',badge:null},
  {id:9,name:'Office 2016 Standard',cat:'office',icon:'📄',badge:null},
  {id:10,name:'Office 2016 Professional Plus',cat:'office',icon:'📄',badge:null},
  {id:11,name:'Office 2016 Standard for Mac',cat:'office',icon:'📄',badge:null},
  {id:12,name:'Microsoft Office 2024 Standard Mac',cat:'office',icon:'📄',badge:null},
  // Outlook
  {id:13,name:'Outlook 2024 LTSC',cat:'outlook',icon:'📧',badge:null},
  {id:14,name:'Outlook 2021 LTSC',cat:'outlook',icon:'📧',badge:null},
  {id:15,name:'Outlook 2019',cat:'outlook',icon:'📧',badge:null},
  {id:16,name:'Outlook 2016',cat:'outlook',icon:'📧',badge:null},
  // Access
  {id:17,name:'Access 2024 LTSC',cat:'access',icon:'🗄️',badge:null},
  {id:18,name:'Access 2021 LTSC',cat:'access',icon:'🗄️',badge:null},
  {id:19,name:'Access 2019',cat:'access',icon:'🗄️',badge:null},
  {id:20,name:'Access 2016',cat:'access',icon:'🗄️',badge:null},
  // Microsoft 365 Business
  {id:21,name:'Microsoft 365 Business Basic',cat:'m365',icon:'☁️',badge:null},
  {id:22,name:'Microsoft 365 Business Standard',cat:'m365',icon:'☁️',badge:'Popular'},
  {id:23,name:'Microsoft 365 Business Premium',cat:'m365',icon:'☁️',badge:null},
  {id:24,name:'Microsoft 365 Apps for Business',cat:'m365',icon:'☁️',badge:null},
  // Microsoft 365 Enterprise
  {id:25,name:'Microsoft 365 E3',cat:'m365',icon:'☁️',badge:null},
  {id:26,name:'Microsoft 365 E5',cat:'m365',icon:'☁️',badge:null},
  {id:27,name:'Microsoft 365 F3',cat:'m365',icon:'☁️',badge:null},
  // Office 365
  {id:28,name:'Office 365 Business Basic',cat:'o365',icon:'🌐',badge:null},
  {id:29,name:'Office 365 Business Standard',cat:'o365',icon:'🌐',badge:null},
  {id:30,name:'Office 365 Apps for Business',cat:'o365',icon:'🌐',badge:null},
  {id:31,name:'Office 365 Apps for Enterprise',cat:'o365',icon:'🌐',badge:null},
  {id:32,name:'Office 365 E1',cat:'o365',icon:'🌐',badge:null},
  {id:33,name:'Office 365 E3',cat:'o365',icon:'🌐',badge:null},
  {id:34,name:'Office 365 E5',cat:'o365',icon:'🌐',badge:null},
  // Windows 365
  {id:35,name:'Windows 365 Business',cat:'w365',icon:'🪟',badge:null},
  {id:36,name:'Windows 365 Enterprise',cat:'w365',icon:'🪟',badge:null},
  {id:37,name:'Windows 365 Frontline',cat:'w365',icon:'🪟',badge:null},
  // Windows Server
  {id:38,name:'Windows Server 2022 Standard',cat:'server',icon:'🖥️',badge:null},
  {id:39,name:'Windows Server 2022 Datacenter',cat:'server',icon:'🖥️',badge:null},
  {id:40,name:'Windows Server 2019 Standard',cat:'server',icon:'🖥️',badge:null},
  {id:41,name:'Windows Server 2019 Datacenter',cat:'server',icon:'🖥️',badge:null},
  {id:42,name:'Windows Server 2025 RDS User CAL',cat:'server',icon:'🖥️',badge:'New'},
  // Exchange Server
  {id:43,name:'Exchange Server 2019 Standard',cat:'exchange',icon:'📨',badge:null},
  {id:44,name:'Exchange Server 2019 Enterprise',cat:'exchange',icon:'📨',badge:null},
  {id:45,name:'Exchange Server 2016 Standard',cat:'exchange',icon:'📨',badge:null},
  // SQL Server
  {id:46,name:'SQL Server 2022 Standard',cat:'sql',icon:'🗃️',badge:null},
  {id:47,name:'SQL Server 2022 Enterprise',cat:'sql',icon:'🗃️',badge:null},
  {id:48,name:'SQL Server 2019 Standard',cat:'sql',icon:'🗃️',badge:null},
  // SharePoint
  {id:49,name:'SharePoint Server 2019',cat:'sharepoint',icon:'📁',badge:null},
  {id:50,name:'SharePoint Server 2016',cat:'sharepoint',icon:'📁',badge:null},
  // CALs
  {id:51,name:'Windows Server 2022 User CAL',cat:'cal',icon:'🔑',badge:null},
  {id:52,name:'Exchange Server 2019 Standard CAL',cat:'cal',icon:'🔑',badge:null},
  {id:53,name:'SharePoint Server 2019 Standard CAL',cat:'cal',icon:'🔑',badge:null},
];

// ── CART ────────────────────────────────────────────────────────────────
let cart = [];

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (cart.find(x => x.id === id)) {
    showToast('Already in cart!', '');
    return;
  }
  cart.push(p);
  updateCartUI();
  showToast('✓ Added to cart — ' + p.name, 'success');
  const btn = document.querySelector(`[data-add="${id}"]`);
  if (btn) { btn.textContent = '✓ Added'; btn.classList.add('added'); setTimeout(() => { btn.innerHTML = '🛒 Add to Cart'; btn.classList.remove('added'); }, 2000); }
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function clearCart() { cart = []; updateCartUI(); }

function updateCartUI() {
  const count = cart.length;
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  if (!itemsEl) return;
  if (count === 0) {
    emptyEl.style.display = 'block';
    itemsEl.innerHTML = '';
    footerEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    footerEl.style.display = 'block';
    itemsEl.innerHTML = cart.map(p => `
      <div class="cart-item">
        <div class="cart-item-icon">${p.icon}</div>
        <div style="flex:1">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-cat">${getCatLabel(p.cat)}</div>
        </div>
        <span class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remove">×</span>
      </div>
    `).join('');
    document.getElementById('cart-count-summary').textContent = `${count} product${count > 1 ? 's' : ''} in enquiry list`;
  }
}

function getCatLabel(cat) {
  const map = {office:'MS Office',outlook:'Outlook',access:'Access',m365:'Microsoft 365',o365:'Office 365',w365:'Windows 365',server:'Windows Server',exchange:'Exchange Server',sql:'SQL Server',sharepoint:'SharePoint',cal:'Client Access Licences'};
  return map[cat] || cat;
}

// ── CART OPEN/CLOSE ──────────────────────────────────────────────────────
document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
});
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-overlay').addEventListener('click', closeCart);
function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
}

// ── WHATSAPP ENQUIRY ─────────────────────────────────────────────────────
document.getElementById('btn-enquire').addEventListener('click', () => {
  if (cart.length === 0) return;
  const list = cart.map((p, i) => `${i + 1}. ${p.name}`).join('\n');
  const msg = encodeURIComponent(`Hi! I would like to enquire about the following products:\n\n${list}\n\nPlease share pricing and availability.`);
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
});

document.getElementById('btn-clear-cart').addEventListener('click', clearCart);

// ── WA FLOAT ────────────────────────────────────────────────────────────
document.getElementById('wa-float').addEventListener('click', () => {
  const msg = encodeURIComponent('Hi! I would like to enquire about Microsoft software licenses.');
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${msg}`, '_blank');
});

// ── ROUTER ──────────────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + id);
  if (el) el.classList.add('active', 'fade-in');
  document.querySelectorAll('[data-page]').forEach(l => l.classList.toggle('nav-active', l.dataset.page === id));
  document.querySelectorAll('.nav-inner>ul').forEach(u => u.classList.remove('open'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'products') renderProductsPage('all');
  if (id === 'home') renderHomeSections();
}

document.querySelectorAll('[data-page]').forEach(l => {
  l.addEventListener('click', e => { e.preventDefault(); showPage(l.dataset.page); });
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-inner>ul').classList.toggle('open');
});

// ── RENDER HOME PRODUCT SECTIONS ─────────────────────────────────────────
function renderHomeSections() {
  renderProductSection('hot-deals-grid', ['office', 'o365', 'm365'], 8);
  renderProductSection('trending-grid', ['w365', 'm365'], 8);
  renderProductSection('popular-grid', 'all', 8, 'popular-tab');
}

function renderProductSection(gridId, cats, limit, tabId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  let products = cats === 'all' ? PRODUCTS : PRODUCTS.filter(p => cats.includes(p.cat));
  products = products.slice(0, limit);
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
}

function productCardHTML(p) {
  return `<div class="product-card">
    ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
    <div class="product-img">${p.icon}</div>
    <div class="product-body">
      <div class="product-category">${getCatLabel(p.cat)}</div>
      <div class="product-name">${p.name}</div>
      <button class="btn-cart" data-add="${p.id}" onclick="addToCart(${p.id})">🛒 Add to Cart</button>
    </div>
  </div>`;
}

// ── PRODUCTS PAGE ────────────────────────────────────────────────────────
function renderProductsPage(filter) {
  const grid = document.getElementById('all-products-grid');
  if (!grid) return;
  const products = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  grid.innerHTML = products.map(p => productCardHTML(p)).join('');
}

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProductsPage(btn.dataset.cat);
  });
});

// Popular tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    const grid = document.getElementById('popular-grid');
    const products = cat === 'all' ? PRODUCTS.slice(0, 8) : PRODUCTS.filter(p => p.cat === cat).slice(0, 8);
    grid.innerHTML = products.map(p => productCardHTML(p)).join('');
  });
});

// ── HERO SLIDER ──────────────────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let current = 0;
function goSlide(n) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  current = (n + slides.length) % slides.length;
  if (slides[current]) slides[current].classList.add('active');
  if (dots[current]) dots[current].classList.add('active');
}
if (slides.length) {
  goSlide(0);
  dots.forEach((d, i) => d.addEventListener('click', () => goSlide(i)));
  setInterval(() => goSlide(current + 1), 5000);
}

// ── SEARCH ───────────────────────────────────────────────────────────────
document.getElementById('search-btn').addEventListener('click', doSearch);
document.getElementById('search-input').addEventListener('keypress', e => { if (e.key === 'Enter') doSearch(); });
function doSearch() {
  const q = document.getElementById('search-input').value.toLowerCase().trim();
  if (!q) return;
  showPage('products');
  setTimeout(() => {
    const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
    const grid = document.getElementById('all-products-grid');
    if (!grid) return;
    if (results.length === 0) { grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:40px">No products found for "${q}"</p>`; return; }
    grid.innerHTML = results.map(p => productCardHTML(p)).join('');
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.cat-btn[data-cat="all"]').classList.add('active');
  }, 100);
}

// ── CONTACT FORM ────────────────────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    btn.textContent = 'Sending…'; btn.disabled = true;
    // Replace YOUR_FORM_ID with your Formspree form ID
    // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body: JSON.stringify({ name: document.getElementById('c-name').value, email: document.getElementById('c-email').value, message: document.getElementById('c-message').value }) });
    setTimeout(() => {
      document.getElementById('form-success').style.display = 'block';
      contactForm.reset(); btn.textContent = 'Send Message'; btn.disabled = false;
    }, 900);
  });
}

// ── TOAST ────────────────────────────────────────────────────────────────
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = `toast ${type}`;
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── MARQUEE DUPLICATE ─────────────────────────────────────────────────────
const marquee = document.querySelector('.marquee-inner');
if (marquee) marquee.innerHTML += marquee.innerHTML;

// ── INIT ─────────────────────────────────────────────────────────────────
showPage('home');
renderHomeSections();
updateCartUI();
