/**
 * RARE – Luxury Jewelry Interactive Controller
 * Replicates full Shopify storefront behavior locally:
 * - Dynamic Cart Drawer with line items, Free Shipping calculator, quantity steppers, item removal
 * - Quick View Modal loading product data from mock_products
 * - Live Predictive Search across all 32 store products
 * - Tab switching in Featured Collection & Build Perfect Set
 * - Currency and localization selection
 * - Smooth scroll & Back to top
 */

(function () {
  console.log("💎 Initializing RARE Luxury Storefront Controller...");

  // 1. Local Cart State Management
  const CART_STORAGE_KEY = "rare_luxury_cart_v1";
  
  function getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}
    return {
      items: [
        // Preload 1 starter item so the cart looks amazing out of the box!
        {
          id: 47655150944340,
          title: "Infinite Curve Earrings",
          variant_title: "14K / Glossy",
          price: 1850.00,
          compare_at_price: 2100.00,
          quantity: 1,
          image: "https://aspire-demo-2.myshopify.com/cdn/shop/files/Rectangle45427.jpg?v=1784198447&width=300",
          url: "/products/infinite-curve-earrings",
          handle: "infinite-curve-earrings"
        }
      ]
    };
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateHeaderBadge();
  }

  function formatMoney(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: window.Shopify?.currency?.active || 'USD'
    }).format(amount);
  }

  function getCartSubtotal(cart) {
    return cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function getCartItemCount(cart) {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // Update header cart count badge
  function updateHeaderBadge() {
    const cart = getCart();
    const count = getCartItemCount(cart);
    
    document.querySelectorAll('.cart-count-text, .cart_count_icon, [data-cart-count]').forEach(el => {
      el.textContent = count;
      if (el.classList.contains('visually--hidden')) {
        el.setAttribute('aria-label', `${count} items`);
      }
    });

    const bubble = document.getElementById('cart-icon-bubble');
    if (bubble) {
      let badge = bubble.querySelector('.custom-cart-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'custom-cart-badge';
        badge.style.cssText = `
          position: absolute;
          top: -4px;
          right: -6px;
          background: #252525;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          min-width: 18px;
          height: 18px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        `;
        bubble.style.position = 'relative';
        bubble.appendChild(badge);
      }
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }

  // Generate Cart Drawer Inner HTML
  function renderCartDrawerInner() {
    const cart = getCart();
    const subtotal = getCartSubtotal(cart);
    const freeShippingThreshold = 2500;
    const remaining = Math.max(0, freeShippingThreshold - subtotal);
    const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

    let shippingNotice = remaining > 0
      ? `Spend <strong>${formatMoney(remaining)}</strong> more for <strong>FREE SHIPPING</strong>`
      : `🎉 <strong>Congratulations!</strong> You qualify for free worldwide delivery`;

    if (cart.items.length === 0) {
      return `
        <header class="drawer_header shop-cart-drawer__header">
          <div><h4 class="h6">MY CART (0)</h4></div>
          <div class="sc_drawer_close">
            <button class="theme-drawer__close" aria-label="Close" data-sc-close>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M15 1.5L13.5 0L7.5 6L1.5 0L0 1.5L6 7.5L0 13.5L1.5 15L7.5 9L13.5 15L15 13.5L9 7.5L15 1.5Z" fill="#252525"/>
              </svg>
            </button>
          </div>
        </header>
        <div class="sc_empty_body" style="padding: 40px 20px; text-align: center;">
          <h4 class="h6" style="margin-bottom: 20px;">Your cart is currently empty.</h4>
          <div class="sc_empty_action">
            <a class="btn" aria-label="Continue shopping" href="#shop" data-sc-close style="display: inline-block; padding: 12px 28px; background: #252525; color: #fff; text-decoration: none; border-radius: 4px;">
              <span class="atc_text btn-txt">Explore High Jewelry</span>
            </a>
          </div>
        </div>
      `;
    }

    const itemsHtml = cart.items.map((item, index) => `
      <div class="shop-cart-drawer__item" data-line="${index}" style="display: flex; gap: 16px; padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.08);">
        <div class="shop-cart-drawer__media" style="width: 80px; height: 95px; flex-shrink: 0; background: #f7f7f7; border-radius: 4px; overflow: hidden;">
          <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="shop-cart-drawer__info" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <a href="${item.url}" class="sc_line_title h6" style="text-decoration: none; color: inherit; font-size: 14px; font-weight: 500;">${item.title}</a>
              <button type="button" class="sc_remove_btn" data-cart-remove="${index}" aria-label="Remove item" style="background: none; border: none; cursor: pointer; padding: 4px; color: #888;">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="1.8"/></svg>
              </button>
            </div>
            ${item.variant_title ? `<div class="sc_line_variant" style="font-size: 12px; color: #666; margin-top: 4px;">${item.variant_title}</div>` : ''}
            <div class="sc_line_price" style="font-size: 14px; font-weight: 600; margin-top: 6px;">
              ${formatMoney(item.price)}
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
            <div class="quantity-cart" style="display: flex; align-items: center; border: 1px solid #ddd; border-radius: 4px; overflow: hidden;">
              <button type="button" class="sc_qty_minus btn-qty" data-cart-minus="${index}" style="width: 28px; height: 28px; background: #fafafa; border: none; cursor: pointer; font-size: 16px; line-height: 1;">−</button>
              <input type="number" class="sc_qty" value="${item.quantity}" min="1" readonly style="width: 36px; height: 28px; border: none; text-align: center; font-size: 13px; font-weight: 500;">
              <button type="button" class="sc_qty_plus btn-qty" data-cart-plus="${index}" style="width: 28px; height: 28px; background: #fafafa; border: none; cursor: pointer; font-size: 16px; line-height: 1;">+</button>
            </div>
            <div style="font-size: 13px; color: #777;">
              Subtotal: <strong>${formatMoney(item.price * item.quantity)}</strong>
            </div>
          </div>
        </div>
      </div>
    `).join("");

    return `
      <header class="drawer_header shop-cart-drawer__header" style="display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid rgba(0,0,0,0.08);">
        <div><h4 class="h6" style="margin: 0; font-size: 16px; letter-spacing: 0.05em;">MY CART (${getCartItemCount(cart)})</h4></div>
        <div class="sc_drawer_close">
          <button class="theme-drawer__close" aria-label="Close" data-sc-close style="background: none; border: none; cursor: pointer; padding: 4px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M15 1.5L13.5 0L7.5 6L1.5 0L0 1.5L6 7.5L0 13.5L1.5 15L7.5 9L13.5 15L15 13.5L9 7.5L15 1.5Z" fill="#252525"/>
            </svg>
          </button>
        </div>
      </header>

      <!-- Free Shipping Goal -->
      <div class="sc_free_shipping_box" style="padding: 14px 20px; background: #fdfaf6; border-bottom: 1px solid rgba(0,0,0,0.06);">
        <p style="margin: 0 0 8px 0; font-size: 12px; color: #333; text-align: center;">${shippingNotice}</p>
        <div style="width: 100%; height: 5px; background: #e8e3dc; border-radius: 3px; overflow: hidden;">
          <div style="width: ${progressPercent}%; height: 100%; background: #252525; transition: width 0.4s ease;"></div>
        </div>
      </div>

      <div class="shop-cart-drawer__items-container" style="flex: 1; overflow-y: auto; padding: 0 20px;">
        ${itemsHtml}
      </div>

      <div class="shop-cart-drawer__footer" style="padding: 20px; background: #fff; border-top: 1px solid rgba(0,0,0,0.08);">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <span style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500;">Estimated Subtotal</span>
          <span style="font-size: 18px; font-weight: 700;">${formatMoney(subtotal)}</span>
        </div>
        <p style="font-size: 11px; color: #777; margin: 0 0 16px 0;">Taxes and worldwide insured express shipping calculated at checkout.</p>
        <button type="button" class="btn btn-checkout" onclick="alert('Proceeding to checkout with ' + ${cart.items.length} + ' items (' + '${formatMoney(subtotal)}' + ')')" style="width: 100%; padding: 15px; background: #1a1a1a; color: #fff; border: none; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; border-radius: 2px;">
          Checkout • ${formatMoney(subtotal)}
        </button>
      </div>
    `;
  }

  // Update existing cart drawer DOM
  function updateCartDrawerDOM() {
    const cartDrawerPanel = document.querySelector('.shop-cart-drawer__panel');
    if (cartDrawerPanel) {
      cartDrawerPanel.innerHTML = renderCartDrawerInner();
    }
    updateHeaderBadge();
  }

  // Open Cart Drawer
  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer') || document.querySelector('.shop-cart-drawer-shell');
    if (drawer) {
      updateCartDrawerDOM();
      drawer.classList.remove('closing');
      drawer.classList.add('active');
      drawer.removeAttribute('inert');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('overflow-hidden');
    }
  }

  // Close Cart Drawer
  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer') || document.querySelector('.shop-cart-drawer-shell');
    if (drawer) {
      drawer.classList.remove('active');
      drawer.setAttribute('inert', '');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('overflow-hidden');
    }
  }

  // Add Item to Cart
  function addItemToCart(item) {
    const cart = getCart();
    const existing = cart.items.find(i => i.id == item.id || (i.handle && i.handle === item.handle));
    if (existing) {
      existing.quantity += (item.quantity || 1);
    } else {
      cart.items.push({
        id: item.id || Date.now(),
        title: item.title || "Luxury Jewelry Piece",
        variant_title: item.variant_title || "Standard",
        price: Number(item.price) || 850,
        compare_at_price: item.compare_at_price ? Number(item.compare_at_price) : null,
        quantity: item.quantity || 1,
        image: item.image || (item.images && item.images[0]) || "https://aspire-demo-2.myshopify.com/cdn/shop/files/Rectangle45427.jpg?v=1784198447&width=300",
        url: item.url || (item.handle ? `/products/${item.handle}` : "#"),
        handle: item.handle || ""
      });
    }
    saveCart(cart);
    openCartDrawer();
  }

  // 2. Fetch Interceptor: Mocks Shopify Section Rendering, Cart API & Alternate Views
  const nativeFetch = window.fetch;
  window.fetch = async function (url, options) {
    const urlStr = String(url);

    // MOCK: Alternate view for Quick View modal
    if (urlStr.includes('/products/') && urlStr.includes('view=alternate')) {
      const match = urlStr.match(/\/products\/([a-zA-Z0-9_-]+)/);
      if (match) {
        const handle = match[1];
        try {
          return await nativeFetch(`/mock_products/${handle}.html`, options);
        } catch (e) {
          console.warn("Could not load alternate product view for:", handle);
        }
      }
    }

    // MOCK: Sections API for shop-cart-tray
    if (urlStr.includes('sections=shop-cart-tray') || urlStr.includes('section_id=shop-cart-tray')) {
      const html = `<div id="shopify-section-shop-cart-tray" class="shopify-section">
        <shop-cart-drawer>
          <div class="drawer-wrapper main_drawer shop-cart-drawer-shell shop-cart-drawer color-scheme-1" id="cart-drawer" role="dialog">
            <div class="drawer-wrapper_inner shop-cart-drawer__panel" data-lenis-prevent>
              ${renderCartDrawerInner()}
            </div>
          </div>
        </shop-cart-drawer>
      </div>`;
      return new Response(JSON.stringify({
        "shop-cart-tray": html,
        "shop-cart-count": `<div class="cart-count-text">${getCartItemCount(getCart())}</div>`
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // MOCK: /cart/add.js
    if (urlStr.includes('/cart/add.js') || (urlStr.includes('/cart/add') && options?.method === 'POST')) {
      try {
        let payload = {};
        if (options?.body) {
          payload = typeof options.body === 'string' ? JSON.parse(options.body) : options.body;
        }
        const items = payload.items || [payload];
        items.forEach(it => {
          let found = null;
          if (window.PRODUCTS_DB) {
            found = window.PRODUCTS_DB.find(p => p.variants && p.variants.some(v => v.id == it.id)) ||
                    window.PRODUCTS_DB.find(p => p.id == it.id);
          }
          addItemToCart({
            id: it.id,
            title: found ? found.title : "High Jewelry Piece",
            price: found ? found.price : 950,
            quantity: Number(it.quantity) || 1,
            image: found ? found.image : "https://aspire-demo-2.myshopify.com/cdn/shop/files/Rectangle45427.jpg?v=1784198447&width=300",
            handle: found ? found.handle : ""
          });
        });
        return new Response(JSON.stringify({ status: 200, items }), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        console.error("Cart add error:", err);
      }
    }

    // MOCK: /cart/change.js
    if (urlStr.includes('/cart/change.js')) {
      return new Response(JSON.stringify(getCart()), {
        headers: { "Content-Type": "application/json" }
      });
    }

    // MOCK: /search/suggest
    if (urlStr.includes('/search/suggest')) {
      const qMatch = urlStr.match(/[?&]q=([^&]+)/);
      const query = qMatch ? decodeURIComponent(qMatch[1]).toLowerCase() : "";
      
      const filtered = (window.PRODUCTS_DB || []).filter(p => {
        return p.title.toLowerCase().includes(query) ||
               (p.tags && p.tags.some(t => t.toLowerCase().includes(query))) ||
               (p.product_type && p.product_type.toLowerCase().includes(query));
      }).slice(0, 6);

      const cardsHtml = filtered.map(p => `
        <div class="search_product_inner" style="display: flex; gap: 14px; padding: 12px; border: 1px solid #eee; border-radius: 4px; margin-bottom: 10px; background: #fff;">
          <img src="${p.image}" alt="${p.title}" style="width: 70px; height: 80px; object-fit: cover; border-radius: 2px;">
          <div style="flex: 1;">
            <h6 style="margin: 0 0 6px 0; font-size: 14px; font-weight: 500;">
              <a href="/products/${p.handle}" style="color: inherit; text-decoration: none;">${p.title}</a>
            </h6>
            <div style="font-size: 14px; font-weight: 600; color: #111;">${formatMoney(p.price)}</div>
            <button type="button" class="btn" data-quick-add-search="${p.handle}" style="margin-top: 8px; padding: 6px 12px; font-size: 11px; background: #252525; color: #fff; border: none; cursor: pointer; border-radius: 2px; text-transform: uppercase;">
              Quick Add
            </button>
          </div>
        </div>
      `).join("");

      const resultHtml = `
        <div id="shopify-section-predictive-result" class="shopify-section">
          <div id="predictive-search-results">
            <div style="padding: 16px 0;">
              <h5 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 12px;">Products (${filtered.length})</h5>
              ${cardsHtml || '<p style="font-size: 14px; color: #666; padding: 10px 0;">No matching luxury pieces found.</p>'}
            </div>
          </div>
        </div>
      `;
      return new Response(resultHtml, { headers: { "Content-Type": "text/html" } });
    }

    return nativeFetch.apply(this, arguments);
  };

  // 3. Document Event Listeners (Cart Drawer, Quick View, Modals, Search)
  document.addEventListener("DOMContentLoaded", () => {
    updateHeaderBadge();
    updateCartDrawerDOM();

    // Click delegation for buttons & controls
    document.addEventListener("click", (e) => {
      // Open Cart Drawer
      const cartBtn = e.target.closest('#cart-icon-bubble, [data-drawer="cart-drawer"], .site-head__cart, .header_cart_is_drawer');
      if (cartBtn) {
        e.preventDefault();
        openCartDrawer();
        return;
      }

      // Close Cart Drawer
      const closeBtn = e.target.closest('[data-sc-close], .sc_drawer_close button, shop-cart-drawer-close');
      if (closeBtn) {
        e.preventDefault();
        closeCartDrawer();
        return;
      }

      // Cart Quantity Minus
      const minusBtn = e.target.closest('[data-cart-minus]');
      if (minusBtn) {
        const line = parseInt(minusBtn.getAttribute('data-cart-minus'), 10);
        const cart = getCart();
        if (cart.items[line]) {
          if (cart.items[line].quantity > 1) {
            cart.items[line].quantity -= 1;
          } else {
            cart.items.splice(line, 1);
          }
          saveCart(cart);
          updateCartDrawerDOM();
        }
        return;
      }

      // Cart Quantity Plus
      const plusBtn = e.target.closest('[data-cart-plus]');
      if (plusBtn) {
        const line = parseInt(plusBtn.getAttribute('data-cart-plus'), 10);
        const cart = getCart();
        if (cart.items[line]) {
          cart.items[line].quantity += 1;
          saveCart(cart);
          updateCartDrawerDOM();
        }
        return;
      }

      // Cart Remove Line
      const removeBtn = e.target.closest('[data-cart-remove]');
      if (removeBtn) {
        const line = parseInt(removeBtn.getAttribute('data-cart-remove'), 10);
        const cart = getCart();
        if (cart.items[line]) {
          cart.items.splice(line, 1);
          saveCart(cart);
          updateCartDrawerDOM();
        }
        return;
      }

      // Quick Add from Search Results
      const searchAddBtn = e.target.closest('[data-quick-add-search]');
      if (searchAddBtn) {
        const handle = searchAddBtn.getAttribute('data-quick-add-search');
        const prod = (window.PRODUCTS_DB || []).find(p => p.handle === handle);
        if (prod) {
          addItemToCart(prod);
        }
        return;
      }

      // Featured Tabs Switching
      const tabBtn = e.target.closest('.featured_tab_nav_item, .featured-tab-btn, [data-tab-handle]');
      if (tabBtn) {
        const section = tabBtn.closest('section');
        if (section) {
          section.querySelectorAll('.featured_tab_nav_item, .featured-tab-btn').forEach(b => b.classList.remove('active'));
          tabBtn.classList.add('active');
          const targetIndex = Array.from(tabBtn.parentElement.children).indexOf(tabBtn);
          const sliderContainers = section.querySelectorAll('.featured-collection-slider, .tab-slider-panel');
          sliderContainers.forEach((c, idx) => {
            if (idx === targetIndex) {
              c.classList.remove('hidden');
              c.style.display = 'block';
            } else {
              c.classList.add('hidden');
              c.style.display = 'none';
            }
          });
        }
      }

      // Build Perfect Set Step Tabs
      const buildTabBtn = e.target.closest('[id^="BuildSetTab-"]');
      if (buildTabBtn) {
        const setSection = buildTabBtn.closest('build-perfect-set');
        if (setSection) {
          setSection.querySelectorAll('[id^="BuildSetTab-"]').forEach(b => b.classList.remove('active'));
          buildTabBtn.classList.add('active');
        }
      }

      // Currency dropdown trigger
      const currencyTrigger = e.target.closest('#announcement-localization-currency-trigger-sections--20091775025236__announcement_bar_3JPDir');
      if (currencyTrigger) {
        const panel = document.getElementById('announcement-localization-currency-panel-sections--20091775025236__announcement_bar_3JPDir');
        if (panel) {
          panel.classList.toggle('active');
          panel.style.display = panel.classList.contains('active') ? 'block' : 'none';
        }
      }

      // Language dropdown trigger
      const langTrigger = e.target.closest('#announcement-localization-lang-trigger-sections--20091775025236__announcement_bar_3JPDir');
      if (langTrigger) {
        const panel = document.getElementById('announcement-localization-lang-panel-sections--20091775025236__announcement_bar_3JPDir');
        if (panel) {
          panel.classList.toggle('active');
          panel.style.display = panel.classList.contains('active') ? 'block' : 'none';
        }
      }

      // Back to top click
      const btt = e.target.closest('.back-to-top__btn, back-to-top');
      if (btt) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCartDrawer();
      }
    });

    // Back to top scroll listener
    window.addEventListener("scroll", () => {
      const btt = document.querySelector('back-to-top, .back-to-top');
      if (btt) {
        if (window.scrollY > 400) {
          btt.classList.add('show');
          btt.style.opacity = '1';
          btt.style.visibility = 'visible';
        } else {
          btt.classList.remove('show');
          btt.style.opacity = '0';
          btt.style.visibility = 'hidden';
        }
      }
    });

    console.log("✨ RARE Storefront Controller fully initialized!");
  });
})();
