# BuyLicense Website — Setup Guide

## Files
```
buylicense/
├── index.html        ← Main website (all pages)
├── css/style.css     ← All styles
├── js/main.js        ← All JavaScript + integrations
└── README.md         ← This file
```

## Deploy to GitHub Pages (Free)

1. Create a new GitHub repository named `buylicense` (or any name)
2. Upload all files maintaining the folder structure
3. Go to repo Settings → Pages
4. Source: Deploy from branch → main → / (root)
5. Your site will be live at: `https://yourusername.github.io/buylicense/`

---

## Integration Setup

### 1. WhatsApp Integration
In `js/main.js`, update CONFIG:
```js
whatsapp: '919876543210', // Your number: 91 + 10-digit mobile
whatsappMsg: 'Hi! I want to buy a license key.',
```

### 2. Razorpay Payment Gateway
1. Sign up at razorpay.com (free)
2. Get your API Key from Dashboard → Settings → API Keys
3. In `js/main.js` update:
```js
razorpay_key: 'rzp_live_XXXXXXXXXX', // Your live key
```
4. Add Razorpay script in `index.html` before `</body>`:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```
5. In `js/main.js`, uncomment the Razorpay block and remove the demo simulation

### 3. Email / Contact Form (Formspree — Free)
1. Sign up at formspree.io
2. Create a new form → copy the Form ID
3. In `js/main.js`, uncomment the Formspree block:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...
```
4. Remove the demo simulation block below it

---

## Update Your Details
In `index.html`, update:
- Phone number in Contact section
- Email address
- Business address (optional)

In `js/main.js` CONFIG object:
- `whatsapp` — your WhatsApp number
- `email` — your support email
- `razorpay_key` — your Razorpay key

---

## Add/Edit Products
In `js/main.js`, edit the PRODUCTS array:
```js
{ id: 7, name: 'New Product', desc: 'Description', price: 999, icon: '🖥️', badge: null, category: 'windows' }
```
Categories: `windows`, `office`, `antivirus`
