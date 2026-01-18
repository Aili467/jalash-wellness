import React, { useState, useMemo, useEffect } from 'react';

const WA_PHONE = '264817382939'; // no + sign

const CATEGORY_LIST = [
  'All Products',
  'Forever Aloe Drinks',
  'Forever Bee Products',
  'Forever Nutritionals',
  'Weight Management / Weight Loss',
  'Look Better Feel Better',
  'Forever Skin Care',
  'Personal Care Products',
  'Women’s Health Products',
  'Men’s Health Products',
  'Combos',
  'Specials',
];

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Aloe Vera Gel',
    price: 560,
    stock: 10,
    category: 'Forever Aloe Drinks',
    description: 'Daily aloe drink for gut health.',
    benefits: 'Supports digestion, gut health and general wellness.',
    imageUrl: '/products/aloe-vera-gel.jpg',
  },
  {
    id: 2,
    name: 'Forever Arctic Sea',
    price: 660,
    stock: 5,
    category: 'Forever Bee Products',
    description: 'Omega-3 support for heart and brain.',
    benefits: 'Helps support heart, brain, eyes and joints.',
    imageUrl: '/products/Forever-artic-sea.jpg',
  },
  {
    id: 3,
    name: 'Forever Multi-Maca',
    price: 559,
    stock: 5,
    category: 'Men’s Health Products',
    description: 'Men’s vitality support.',
    benefits: 'Supports men’s energy, stamina and reproductive health.',
    imageUrl: '/products/Multi-maca.jpg',
  },
  {
    id: 4,
    name: 'Forever Aloe Berry Nectar',
    price: 560,
    stock: 5,
    category: 'Forever Aloe Drinks',
    description: 'A refreshing daily aloe drink that supports overall women’s wellness.',
    benefits: 'Supports urinary tract and reproductive health.',
    imageUrl: '/products/Aloe-berry-nectar.jpg',
  },
  {
    id: 5,
    name: 'Forever Freedom',
    price: 802,
    stock: 5,
    category: 'Forever Aloe Drinks',
    description: 'Supports joint flexibility and mobility.',
    benefits: 'Combines aloe vera with glucosamine, chondroitin, MSM, and vitamin C for optimal joint support.',
    imageUrl: '/products/Forever-freedom.jpg',
  },
  {
    id: 6,
    name: 'Aloe Peaches',
    price: 554,
    stock: 5,
    category: 'Forever Aloe Drinks',
    description: 'Gentle and refreshing aloe drink perfect for kids',
    benefits:'Supports healthy digestion and nutrient absorption.',
    imageUrl: '/products/Aloe-peaches.jpg',
  },
  {
  id: 7,
  name: 'Desire by forever',
  price: 138,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Deodorant Spray For Him',
  benefits:'DESIRE BY FOREVER fragrance for men, embraces the confidence of a man in today’s day and age and has oriental, woody and fruity fragrance made from naturally derived ingredients.',
  imageUrl: '/products/sprays-deodorant.jpg',
},
{
  id: 8,
  name: 'Dream by forever',
  price: 138,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Deodorant Spray For Her',
  benefits:'DESIRE BY FOREVER fragrance for women, embraces the confidence of a man in today’s day and age and has oriental, woody and fruity fragrance made from naturally derived ingredients.',
  imageUrl: '/products/sprays-deodorant.jpg',
},
{
  id: 9,
  name: 'Aloe Body Wash',
  price: 497,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Let the best of what nature has to offer nourish and cleanse your skin with Forever’s new Aloe Body Wash.',
  benefits:'Hydrates and cleanses gently without stripping natural oils.Soothes irritation and calms sensitive or sun-exposed skin.Provides a cooling effect, refreshing the skin after heat or activity.Supports skin repair through vitamins and antioxidants.',
  imageUrl: '/products/body-wash.jpg',
},

{
  id: 10,
  name: 'Aloe Body lotion',
  price: 484,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Perfect everyday moituriser to soften skin and leave it feeling smooth, hydrated and healthy',
  benefits:'Fast absorbing lotion. Promotes skin hydration, promotes soft-feeling skin, support skin natural moisture barrier,promotes healthy, youthful-looking skin, gluten free',
  imageUrl: '/products/Aloe-body-lotion.jpg',
},
{
  id: 11,
  name: 'Aloe Avocado Face and Body Soap',
  price: 143,
  stock: 5,
  category: 'Personal Care Products',
  description: 'A plant-based cleansing product formulated for both face and body that combines stabilized aloe vera gel with avocado oil to gently clean, nourish, and hydrate the skin',
  benefits:'Gentle and Effective Cleansing. Moisturizing and Nourishing. pSoothes and Conditions the Skine.',
  imageUrl: '/products/Avocado-soap.jpg',
},
{
  id: 12,
  name: 'Gentleman Pride ,Aftershave',
  price: 320,
  stock: 5,
  category: 'Personal Care Products',
  description: 'This aloe powered aftershave is a super hydrating moisturizer for your face and neck. It also alcohol-free and features an exclusive blend of ingredients that provides a cooling sensation, with a clean and classically sophisticated masculine scent',
  benefits:'Alcohol-Free, Non-Drying Formula. Hydrates and Moisturizes Skin. Soothes Irritation and Razor Burn.',
  imageUrl: '/products/Pride.jpg',
},
{
  id: 13,
  name: 'Forever Toothgel',
  price: 165,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Forever Bright® Toothgel is gentle and effective because we include natural ingredients. Kids and adults alike will love the combination of natural peppermint and spearmint flavoring and frothy texture.',
  benefits:'',
  imageUrl: '/products/toothgel.jpg',
},
{
  id: 14,
  name: 'Aloe Evershiel',
  price: 154,
  stock: 5,
  category: 'Personal Care Products',
  description: 'Forever Bright® Toothgel is gentle and effective because we include natural ingredients. Kids and adults alike will love the combination of natural peppermint and spearmint flavoring and frothy texture.',
  benefits:'',
  imageUrl: '/products/toothgel.jpg',
},
{
  id: 15,
  name: 'Jojoba Shampoo-Conditioner',
  price: 463,
  stock: 5,
  category: 'Personal Care Products',
  description: '',
  benefits:'',
  imageUrl: '/products/shampoo-conditioner.jpg',
},
{
  id: 16,
  name: 'Aloe Liquid Soap',
  price: 399,
  stock: 5,
  category: 'Personal Care Products',
  description: '',
  benefits:'',
  imageUrl: '/products/liquid-soap.jpg',
},
{
  id: 17,
  name: 'MSM GEL',
  price: 497,
  stock: 5,
  category: 'Personal Care Products',
  description: '',
  benefits:'',
  imageUrl: '/products/Msm-gel.jpg',
},
{
  id: 18,
  name: 'Aloe Sunscreen',
  price: 442,
  stock: 5,
  category: 'Forever Skin Care',
  description: '',
  benefits:'',
  imageUrl: '/products/Aloe-sun-screen.jpg',
},
{
  id: 19,
  name: 'Aloe Scrub',
  price: 442,
  stock: 5,
  category: 'Forever Skin Care',
  description: '',
  benefits:'',
  imageUrl: '/products/Aloe-srub.jpg',
},
{
  id: 20,
  name: 'Aloe Heat lotion',
  price: 442,
  stock: 5,
  category: 'Forever Skin Care',
  description: '',
  benefits:'',
  imageUrl: '/products/Aloe-heat-lotion.jpg',
},
{
  id: 21,
  name: 'Aloe Gelly',
  price: 320,
  stock: 5,
  category: 'Forever Skin Care',
  description: '',
  benefits:'',
  imageUrl: '/products/Aloe-gelly.jpg',
},
{
  id: 22,
  name: 'Aloe Propolis Cream',
  price: 463,
  stock: 5,
  category: 'Forever Skin Care',
  description: '',
  benefits:'',
  imageUrl: '/products/Aloe-propolis-cream.jpg',
},
{
  id: 23,
  name: 'Aloe Artic Sea',
  price: 659,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-artic-sea.jpg',
},
{
  id: 24,
  name: 'ARG+',
  price: 1612,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/ARGI.jpg',
},
{
  id: 25,
  name: 'Forever Kids Chiwable',
  price: 320,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-kids-chiwable.jpg',
},
{
  id: 26,
  name: 'Forever Garcia',
  price: 652,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Garcinia.jpg',
},
{
  id: 27,
  name: 'Forever Garcia',
  price: 391,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Garlic-thyme.jpg',
},
{
  id: 28,
  name: 'Forever lean',
  price: 889,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-lean.jpg',
},
{
  id: 29,
  name: 'Forever move',
  price: 1332,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-move.jpg',
},
{
  id: 30,
  name: 'Forever Pro Active',
  price: 783,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-Pro-Biotic.jpg',
},
{
  id: 31,
  name: 'Forever Active HA',
  price: 719,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Active-HA.jpg',
},
{
  id: 32,
  name: 'Forever move',
  price: 1780,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-focus.jpg',
},
{
  id: 33,
  name: 'Forever move',
  price: 1780,
  stock: 5,
  category: 'Forever Nutritionals',
  description: '',
  benefits:'',
  imageUrl: '/products/Forever-focus.jpg',
},
{
  id: 34,
  name: 'Athritis Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/athritis.jpg',
},
{
  id: 35,
  name: 'Diabetes Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/diabetes-combo.jpg',
},
{
  id: 36,
  name: 'Fibroids Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/fibroids-combo.jpg',
},
{
  id: 37,
  name: 'Vitality Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/vitality-combo.jpg',
},
{
  id: 38,
  name: 'Women Fertility',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/women-fertility.jpg',
},
{
  id: 39,
  name: 'Kidney Stone',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/kidney-stone.jpg',
},
{
  id: 40,
  name: 'Acne Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/acne-kit.jpg',
},
{
  id: 41,
  name: 'Gut Health Combo',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/gut-health.jpg',
},
{
  id: 42,
  name: 'Digestive Health',
  price: 745,
  stock: 5,
  category: 'Combos',
  description: '',
  benefits:'',
  imageUrl: '/products/digestive-pack.jpg',
},
];

function currency(n) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'NAD',
  }).format(n || 0);
}

/* -------------------- HOME -------------------- */
function Home() {
  const waIntroLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    'Hi Aili, I saw your Forever Living shop. Please help me choose the right products and also guide me on how to join.'
  )}`;

  return (
    <section style={{ maxWidth: 1100, margin: '1rem auto', padding: '0 1rem' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 16,
          border: '1px solid #e4e4e7',
          padding: '1rem',
          marginBottom: '1rem',
        }}
      >
        <h2 style={{ fontSize: 28, margin: 0 }}>Welcome to Jalash Wellness</h2>
        <p style={{ color: '#0f172a', marginTop: 8 }}>
          Shop Forever products, place your order via WhatsApp, and get help
          choosing the best products for your goals.
        </p>
      </div>

      <div
        style={{
          background: 'white',
          borderRadius: 16,
          border: '1px solid #e4e4e7',
          padding: 16,
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: 16,
        }}
      >
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#fff7cc',
            border: '1px solid #e4e4e7',
          }}
        >
          <img
            src="/images/aili.jpg"
            alt="Aili Ashipala"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <div>
          <h3 style={{ marginTop: 0, fontWeight: 800 }}>
            Hi, I’m Aili — Independent Forever Distributor
          </h3>
          <p style={{ marginTop: 6 }}>
            I help people choose the right Forever Living products for their
            health and wellness goals, and I also guide those who want to join
            Forever and start earning through the business.
          </p>

          <a
            href={waIntroLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              marginTop: 8,
              padding: '0.6rem 0.9rem',
              borderRadius: 999,
              border: '1px solid #0f172a',
              background: '#0f172a',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Chat with me on WhatsApp
          </a>

          <div style={{ marginTop: 10, fontSize: 12, color: '#6b7280' }}>
            Tip: Use “Shop” to browse products and place your order via
            WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- JOIN -------------------- */
function JoinPage() {
  const JOIN_WA_MESSAGE =
    'Hi Aili, I would like to join Forever Living. Please explain the joining options/packages and what I need to start.';
  const waJoinLink = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    JOIN_WA_MESSAGE
  )}`;

  return (
    <section style={{ maxWidth: 1100, margin: '1rem auto', padding: '0 1rem' }}>
      <div
        style={{
          background: 'white',
          borderRadius: 16,
          border: '1px solid #e4e4e7',
          padding: 16,
        }}
      >
        <h2 style={{ marginTop: 0, fontWeight: 900 }}>How to Join</h2>

        <p style={{ marginTop: 6 }}>
          Tap below to chat with me on WhatsApp and I will guide you on the best
          option for you and the best package to start with.
        </p>

        <a
          href={waJoinLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            marginTop: 8,
            padding: '0.6rem 0.9rem',
            borderRadius: 999,
            border: '1px solid #0f172a',
            background: '#0f172a',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Chat on WhatsApp to Join
        </a>

        <div style={{ marginTop: 16 }}>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>
            Joining options & packages
          </div>
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #e4e4e7',
              background: '#f4f4f5',
            }}
          >
            <img
              src="/images/join-packages.jpg"
              alt="Forever joining packages"
              style={{ width: '100%', display: 'block', objectFit: 'cover' }}
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <h3 style={{ fontWeight: 900, marginBottom: 8 }}>
              Benefits of Joining Forever Living
            </h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              <li>
                Health for yourself and your family when using the products.
              </li>
              <li>
                Buy Forever products at discounted member prices from{' '}
                <strong>5% to 48%</strong>.
              </li>
              <li>Earn profit by selling products to customers.</li>
              <li>
                Receive a recruitment bonus of <strong>N$2,019.68</strong> per
                person you recruit with <strong>2CC</strong>, paid directly to
                your account within <strong>10 days</strong>.
              </li>
              <li>
                Receive a monthly bonus, paid into your account on the{' '}
                <strong>15th of every month</strong>.
              </li>
              <li>
                <strong>Forever2Drive:</strong> money to buy your car, house, or
                anything you want — from <strong>N$6,400</strong> to{' '}
                <strong>N$12,800</strong> per month for{' '}
                <strong>36 months</strong> and many more.
              </li>
            </ul>
            <div style={{ marginTop: 10, fontSize: 12, color: '#6b7280' }}>
              Note: Incentives and bonuses are based on qualification and
              business performance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- SHOP (your existing UI) -------------------- */
function ShopView(props) {
  const {
    products,
    setProducts,
    cart,
    setCart,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    isAdmin,
    adminPin,
    setAdminPin,
    adminUnlocked,
    setAdminUnlocked,
    showCheckout,
    setShowCheckout,
    customer,
    setCustomer,
  } = props;

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const text = (
        p.name +
        ' ' +
        (p.description || '') +
        ' ' +
        (p.benefits || '')
      ).toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === 'All Products'
          ? true
          : p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, activeCategory]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function addToCart(product) {
    if (product.stock <= 0) {
      alert('Out of stock');
      return;
    }
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function updateCartQty(id, qty) {
    if (qty <= 0) setCart((prev) => prev.filter((i) => i.id !== id));
    else setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function handlePlaceOrder() {
    if (!customer.name || !customer.phone || !customer.address) {
      alert('Please fill in all customer details.');
      return;
    }
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    const lines = [
      `New order from ${customer.name}`,
      `Phone: ${customer.phone}`,
      `Address: ${customer.address}`,
      '',
      'Items:',
      ...cart.map(
        (item) =>
          `• ${item.name} x${item.qty} = ${currency(item.price * item.qty)}`
      ),
      '',
      `Total: ${currency(total)}`,
    ];

    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WA_PHONE}?text=${msg}`, '_blank');

    setProducts((prev) =>
      prev.map((p) => {
        const item = cart.find((c) => c.id === p.id);
        if (!item) return p;
        return { ...p, stock: Math.max(0, p.stock - item.qty) };
      })
    );

    setCart([]);
    setShowCheckout(false);
    alert('Order sent to WhatsApp. We will confirm with you soon.');
  }

  function addNewProduct() {
    const name = prompt('Product name:');
    if (!name) return;
    const priceText = prompt('Price (NAD):');
    const stockText = prompt('Stock quantity:');
    const description = prompt('Short description (optional):');
    const benefits = prompt('Main benefits (optional):');
    const imageUrl = prompt('Image URL (optional):');

    const price = parseFloat(priceText || '0');
    const stock = parseInt(stockText || '0', 10);

    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        price: isNaN(price) ? 0 : price,
        stock: isNaN(stock) ? 0 : stock,
        category:
          activeCategory === 'All Products' ? 'Uncategorized' : activeCategory,
        description: description || '',
        benefits: benefits || '',
        imageUrl: imageUrl || '',
      },
    ]);
  }

  function updateProductField(id, field, value) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  return (
    <section style={{ maxWidth: 1100, margin: '1rem auto', padding: '0 1rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr 1fr',
          gap: '1rem',
        }}
      >
        {/* CATEGORY MENU */}
        <div
          style={{
            background: 'white',
            borderRadius: 16,
            border: '1px solid #e4e4e7',
            padding: '0.75rem',
          }}
        >
          <div style={{ fontWeight: 900, marginBottom: 8 }}>Categories</div>

          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem',
              borderRadius: 999,
              border: '1px solid #d4d4d8',
              marginBottom: 10,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {CATEGORY_LIST.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  textAlign: 'left',
                  padding: '0.45rem 0.65rem',
                  borderRadius: 12,
                  border: '1px solid #e4e4e7',
                  background: activeCategory === cat ? 'black' : 'white',
                  color: activeCategory === cat ? 'white' : 'black',
                  fontSize: 13,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ fontSize: 12, color: '#6b7280', marginTop: 10 }}>
            Showing: <strong>{activeCategory}</strong>
          </div>
        </div>

        {/* SHOP LIST */}
        <div>
          <div
            style={{
              marginBottom: '0.75rem',
              padding: '0.6rem 0.8rem',
              borderRadius: 12,
              background: '#eef2ff',
              fontSize: 12,
            }}
          >
            <strong>How to order:</strong>
            <ol style={{ paddingLeft: '1.1rem', marginTop: 4 }}>
              <li>1. Add your products to the cart.</li>
              <li>
                2. Click <strong>Checkout</strong> and fill in your name, phone
                and address.
              </li>
              <li>
                3. Tap <strong>Send</strong> when WhatsApp opens to confirm your
                order.
              </li>
            </ol>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  background: 'white',
                  borderRadius: 16,
                  padding: '0.75rem',
                  border: '1px solid #e4e4e7',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                }}
              >
                {p.imageUrl ? (
                  <div
                    style={{
                      width: '100%',
                      height: 300,
                      overflow: 'hidden',
                      borderRadius: 12,
                      background: '#f4f4f5',
                    }}
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ) : null}

                <div style={{ fontWeight: 800 }}>{p.name}</div>

                {p.benefits ? (
                  <div style={{ fontSize: 12, color: '#1f2937' }}>
                    <strong>Benefits:</strong> {p.benefits}
                  </div>
                ) : null}

                <div style={{ fontSize: 12, color: '#52525b' }}>
                  {p.description}
                </div>

                <div style={{ fontSize: 13, marginTop: 4 }}>
                  Price: <strong>{currency(p.price)}</strong>
                </div>
                <div style={{ fontSize: 12, color: '#52525b' }}>
                  Stock: {p.stock}
                </div>

                <button
                  onClick={() => addToCart(p)}
                  style={{
                    marginTop: 6,
                    padding: '0.4rem 0.75rem',
                    borderRadius: 999,
                    border: '1px solid #0f172a',
                    background: '#0f172a',
                    color: 'white',
                    fontSize: 13,
                  }}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>

          {/* ADMIN */}
          <div
            style={{
              marginTop: 16,
              background: 'white',
              borderRadius: 16,
              padding: '0.75rem',
              border: '1px solid #e4e4e7',
            }}
          >
            {!isAdmin ? (
              <div style={{ fontSize: 12, color: '#6b7280' }}>
                Switch to Admin using the button in the header.
              </div>
            ) : (
              <>
                {!adminUnlocked ? (
                  <>
                    <h3 style={{ marginTop: 0, fontWeight: 900 }}>
                      Admin login
                    </h3>
                    <div style={{ marginTop: 8 }}>
                      <input
                        type="password"
                        placeholder="PIN (default 1234)"
                        value={adminPin}
                        onChange={(e) => setAdminPin(e.target.value)}
                        style={{
                          padding: '0.45rem 0.75rem',
                          borderRadius: 999,
                          border: '1px solid #d4d4d8',
                        }}
                      />
                      <button
                        onClick={() => {
                          if (adminPin === '1234') setAdminUnlocked(true);
                          else alert('Wrong PIN.');
                        }}
                        style={{
                          marginLeft: 8,
                          padding: '0.4rem 0.75rem',
                          borderRadius: 999,
                          border: '1px solid #0f172a',
                          background: '#0f172a',
                          color: 'white',
                          fontSize: 13,
                        }}
                      >
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <h3 style={{ marginTop: 0, fontWeight: 900 }}>
                        Products
                      </h3>
                      <button
                        onClick={addNewProduct}
                        style={{
                          padding: '0.4rem 0.75rem',
                          borderRadius: 999,
                          border: '1px solid #15803d',
                          background: '#15803d',
                          color: 'white',
                          fontSize: 13,
                        }}
                      >
                        + Add product
                      </button>
                    </div>

                    <table
                      style={{
                        width: '100%',
                        borderCollapse: 'collapse',
                        fontSize: 13,
                      }}
                    >
                      <thead>
                        <tr
                          style={{
                            textAlign: 'left',
                            borderBottom: '1px solid #e4e4e7',
                          }}
                        >
                          <th>Name</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Stock</th>
                          <th>Description</th>
                          <th>Benefits</th>
                          <th>Image URL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((p) => (
                          <tr
                            key={p.id}
                            style={{ borderBottom: '1px solid #f4f4f5' }}
                          >
                            <td>
                              <input
                                value={p.name}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'name',
                                    e.target.value
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                value={p.category || ''}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'category',
                                    e.target.value
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={p.price}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'price',
                                    parseFloat(e.target.value || '0')
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                value={p.stock}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'stock',
                                    parseInt(e.target.value || '0', 10)
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                value={p.description}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'description',
                                    e.target.value
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                value={p.benefits || ''}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'benefits',
                                    e.target.value
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                            <td>
                              <input
                                value={p.imageUrl || ''}
                                onChange={(e) =>
                                  updateProductField(
                                    p.id,
                                    'imageUrl',
                                    e.target.value
                                  )
                                }
                                style={{ width: '100%' }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div
                      style={{ fontSize: 12, color: '#52525b', marginTop: 6 }}
                    >
                      Tip: change prices, stock, or descriptions directly in the
                      table and they update instantly.
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* CART */}
        <div
          style={{
            background: 'white',
            borderRadius: 16,
            padding: '0.75rem',
            border: '1px solid #e4e4e7',
            alignSelf: 'flex-start',
          }}
        >
          <h2 style={{ fontWeight: 900, marginBottom: 8 }}>Cart</h2>
          {cart.length === 0 ? (
            <div style={{ fontSize: 13, color: '#52525b' }}>
              Your cart is empty.
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      borderBottom: '1px solid #e4e4e7',
                      paddingBottom: 4,
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 700 }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: 12 }}>
                      {currency(item.price)} ×{' '}
                      <input
                        type="number"
                        value={item.qty}
                        min={1}
                        onChange={(e) =>
                          updateCartQty(
                            item.id,
                            parseInt(e.target.value || '1', 10)
                          )
                        }
                        style={{ width: 50 }}
                      />{' '}
                      = <strong>{currency(item.price * item.qty)}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 8, fontWeight: 900 }}>
                Total: {currency(total)}
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                style={{
                  marginTop: 8,
                  width: '100%',
                  padding: '0.45rem 0.75rem',
                  borderRadius: 999,
                  border: '1px solid #0f172a',
                  background: '#0f172a',
                  color: 'white',
                  fontSize: 14,
                }}
              >
                Checkout
              </button>

              <div style={{ marginTop: 4, fontSize: 11, color: '#6b7280' }}>
                After checkout, WhatsApp will open with your order details.
                Please tap <strong>Send</strong> to confirm.
              </div>
            </>
          )}
        </div>
      </div>

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              background: 'white',
              borderRadius: 16,
              padding: '1rem',
              maxWidth: 400,
              width: '100%',
            }}
          >
            <h2 style={{ fontWeight: 900, marginBottom: 8 }}>
              Delivery details
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <input
                placeholder="Full name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
              <input
                placeholder="Phone (WhatsApp)"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Delivery address / landmarks"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
                rows={3}
              />
              <div style={{ fontSize: 13 }}>
                Total: <strong>{currency(total)}</strong>
              </div>
              <button
                onClick={handlePlaceOrder}
                style={{
                  padding: '0.45rem 0.75rem',
                  borderRadius: 999,
                  border: '1px solid #0f172a',
                  background: '#0f172a',
                  color: 'white',
                  fontSize: 14,
                }}
              >
                Send order via WhatsApp
              </button>
              <button
                onClick={() => setShowCheckout(false)}
                style={{
                  marginTop: 4,
                  padding: '0.4rem 0.75rem',
                  borderRadius: 999,
                  border: '1px solid #d4d4d8',
                  background: 'white',
                  fontSize: 13,
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------- APP -------------------- */
export default function App() {
  const [activePage, setActivePage] = useState('home'); // home | shop | join

  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('jlw_products_v1');
      return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jlw_products_v1', JSON.stringify(products));
    } catch {}
  }, [products]);

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Products');

  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [adminUnlocked, setAdminUnlocked] = useState(false);

  const [showCheckout, setShowCheckout] = useState(false);
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
  });

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        minHeight: '100vh',
        background: '#f4f4f5',
      }}
    >
      <header
        style={{
          background: 'white',
          borderBottom: '1px solid #e4e4e7',
          padding: '0.75rem 1rem',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div style={{ fontWeight: 900, letterSpacing: '0.06em' }}>
            FOREVER LIVING PRODUCTS
          </div>

          <nav
            style={{
              marginLeft: 'auto',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => setActivePage('home')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#0f172a',
                fontWeight: activePage === 'home' ? 800 : 500,
              }}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('shop')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#0f172a',
                fontWeight: activePage === 'shop' ? 800 : 500,
              }}
            >
              Shop by Category
            </button>
            <button
              onClick={() => setActivePage('join')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#0f172a',
                fontWeight: activePage === 'join' ? 800 : 500,
              }}
            >
              How to Join
            </button>
          </nav>

          <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 12 }}>
            <button
              onClick={() => setIsAdmin(false)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: 999,
                border: '1px solid #d4d4d8',
                background: isAdmin ? 'white' : 'black',
                color: isAdmin ? 'black' : 'white',
              }}
            >
              Shop
            </button>
            <button
              onClick={() => setIsAdmin(true)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: 999,
                border: '1px solid #d4d4d8',
                background: isAdmin ? 'black' : 'white',
                color: isAdmin ? 'white' : 'black',
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </header>

      {/* PAGES (no router) */}
      {activePage === 'home' && <Home />}
      {activePage === 'join' && <JoinPage />}
      {activePage === 'shop' && (
        <ShopView
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
          search={search}
          setSearch={setSearch}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isAdmin={isAdmin}
          adminPin={adminPin}
          setAdminPin={setAdminPin}
          adminUnlocked={adminUnlocked}
          setAdminUnlocked={setAdminUnlocked}
          showCheckout={showCheckout}
          setShowCheckout={setShowCheckout}
          customer={customer}
          setCustomer={setCustomer}
        />
      )}

      <footer
        style={{
          padding: '0.75rem 1rem',
          fontSize: 12,
          color: '#52525b',
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Jalash Wellness. Not an official Forever™
        site. WhatsApp orders: wa.me/{WA_PHONE}
      </footer>
    </div>
  );
}
