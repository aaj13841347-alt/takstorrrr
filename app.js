// Global Variables
let currentLanguage = 'en';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Sample Data
const products = [
    {
        id: 1,
        name: { en: "MacBook Pro 16", fa: "مک‌بوک پرو ۱۶" },
        price: 2499.99,
        category: "laptops",
        image: "images/prod1.svg",
        description: {
            en: "Powerful laptop with M2 chip, perfect for professional work and creative tasks.",
            fa: "لپ‌تاپ قدرتمند با تراشه M2، مناسب برای کارهای حرفه‌ای و خلاقانه."
        },
        specs: {
            en: {
                "Processor": "Apple M2 Pro",
                "RAM": "16GB",
                "Storage": "512GB SSD",
                "Display": "16-inch Retina",
                "Graphics": "16-core GPU",
                "Battery": "Up to 22 hours"
            },
            fa: {
                "پردازنده": "اپل M2 پرو",
                "رم": "۱۶ گیگابایت",
                "حافظه": "۵۱۲ گیگابایت SSD",
                "نمایشگر": "۱۶ اینچ رتینا",
                "گرافیک": "۱۶ هسته GPU",
                "باتری": "تا ۲۲ ساعت"
            }
        }
    },
    {
        id: 2,
        name: { en: "iPhone 15 Pro", fa: "آیفون ۱۵ پرو" },
        price: 1199.99,
        category: "phones",
        image: "images/prod2.svg",
        description: {
            en: "Latest iPhone with titanium design and advanced camera system.",
            fa: "آخرین آیفون با طراحی تیتانیومی و سیستم دوربین پیشرفته."
        },
        specs: {
            en: {
                "Processor": "A17 Pro chip",
                "Storage": "256GB",
                "Display": "6.1-inch Super Retina XDR",
                "Camera": "48MP Main + 12MP Ultra Wide",
                "Battery": "Up to 23 hours video",
                "Material": "Titanium"
            },
            fa: {
                "پردازنده": "تراشه A17 پرو",
                "حافظه": "۲۵۶ گیگابایت",
                "نمایشگر": "۶.۱ اینچ سوپر رتینا XDR",
                "دوربین": "۴۸ مگاپیکسل اصلی + ۱۲ مگاپیکسل فراعریض",
                "باتری": "تا ۲۳ ساعت ویدیو",
                "جنس": "تیتانیوم"
            }
        }
    },
    {
        id: 3,
        name: { en: "AirPods Pro 2", fa: "ایرپادز پرو ۲" },
        price: 249.99,
        category: "accessories",
        image: "images/prod3.svg",
        description: {
            en: "Premium wireless earbuds with active noise cancellation and spatial audio.",
            fa: "ایرفون بی‌سیم پریمیوم با حذف نویز فعال و صدای فضایی."
        },
        specs: {
            en: {
                "Chip": "H2 chip",
                "Battery": "Up to 6 hours listening",
                "Case Battery": "Up to 30 hours total",
                "Features": "Active Noise Cancellation",
                "Connectivity": "Bluetooth 5.3",
                "Water Resistance": "IPX4"
            },
            fa: {
                "تراشه": "تراشه H2",
                "باتری": "تا ۶ ساعت گوش دادن",
                "باتری کیس": "تا ۳۰ ساعت کل",
                "ویژگی‌ها": "حذف نویز فعال",
                "اتصال": "بلوتوث ۵.۳",
                "مقاومت آب": "IPX4"
            }
        }
    },
    {
        id: 4,
        name: { en: "Dell XPS 13", fa: "دل XPS ۱۳" },
        price: 1299.99,
        category: "laptops",
        image: "images/prod4.svg",
        description: {
            en: "Ultra-thin laptop with stunning display and long battery life.",
            fa: "لپ‌تاپ فوق‌العاده نازک با نمایشگر زیبا و عمر باتری طولانی."
        },
        specs: {
            en: {
                "Processor": "Intel Core i7-1360P",
                "RAM": "16GB LPDDR5",
                "Storage": "512GB SSD",
                "Display": "13.4-inch FHD+",
                "Graphics": "Intel Iris Xe",
                "Weight": "2.64 lbs"
            },
            fa: {
                "پردازنده": "اینتل کور i7-1360P",
                "رم": "۱۶ گیگابایت LPDDR5",
                "حافظه": "۵۱۲ گیگابایت SSD",
                "نمایشگر": "۱۳.۴ اینچ FHD+",
                "گرافیک": "اینتل آیریس Xe",
                "وزن": "۱.۲ کیلوگرم"
            }
        }
    },
    {
        id: 5,
        name: { en: "Samsung Galaxy S24", fa: "سامسونگ گلکسی S24" },
        price: 899.99,
        category: "phones",
        image: "images/prod5.svg",
        description: {
            en: "Flagship Android phone with AI-powered features and excellent camera.",
            fa: "گوشی اندروید پرچمدار با ویژگی‌های مبتنی بر هوش مصنوعی و دوربین عالی."
        },
        specs: {
            en: {
                "Processor": "Snapdragon 8 Gen 3",
                "RAM": "12GB",
                "Storage": "256GB",
                "Display": "6.2-inch Dynamic AMOLED 2X",
                "Camera": "50MP Triple Camera",
                "Battery": "4000mAh"
            },
            fa: {
                "پردازنده": "اسنپدراگون ۸ نسل ۳",
                "رم": "۱۲ گیگابایت",
                "حافظه": "۲۵۶ گیگابایت",
                "نمایشگر": "۶.۲ اینچ Dynamic AMOLED 2X",
                "دوربین": "۵۰ مگاپیکسل سه‌گانه",
                "باتری": "۴۰۰۰ میلی‌آمپر ساعت"
            }
        }
    },
    {
        id: 6,
        name: { en: "Magic Mouse", fa: "موس مجیک" },
        price: 99.99,
        category: "accessories",
        image: "images/prod6.svg",
        description: {
            en: "Sleek wireless mouse with Multi-Touch surface and rechargeable battery.",
            fa: "موس بی‌سیم شیک با سطح چندلمسی و باتری قابل شارژ."
        },
        specs: {
            en: {
                "Connectivity": "Bluetooth + USB-C",
                "Battery": "Built-in rechargeable",
                "Sensors": "Laser tracking",
                "Compatibility": "Mac, iPad",
                "Colors": "White, Black",
                "Weight": "3.5 oz"
            },
            fa: {
                "اتصال": "بلوتوث + USB-C",
                "باتری": "داخلی قابل شارژ",
                "سنسور": "ردیابی لیزری",
                "سازگاری": "مک، آیپد",
                "رنگ‌ها": "سفید، مشکی",
                "وزن": "۱۰۰ گرم"
            }
        }
    }
];

const blogPosts = [
    {
        id: 1,
        title: {
            en: "The Future of AI in Consumer Electronics",
            fa: "آینده هوش مصنوعی در الکترونیک مصرفی"
        },
        excerpt: {
            en: "Discover how artificial intelligence is revolutionizing the way we interact with our devices and what to expect in the coming years.",
            fa: "کشف کنید که چگونه هوش مصنوعی نحوه تعامل ما با دستگاه‌هایمان را متحول می‌کند و چه انتظاراتی در سال‌های آینده داشته باشیم."
        },
        date: "2024-01-15",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: {
            en: "Tech Team",
            fa: "تیم فناوری"
        }
    },
    {
        id: 2,
        title: {
            en: "5G Technology: What You Need to Know",
            fa: "فناوری 5G: آنچه باید بدانید"
        },
        excerpt: {
            en: "Learn about the latest 5G technology, its benefits, and how it's changing the mobile connectivity landscape.",
            fa: "درباره آخرین فناوری 5G، مزایای آن و نحوه تغییر چشم‌انداز اتصال موبایل بیاموزید."
        },
        date: "2024-01-10",
        image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: {
            en: "Tech Team",
            fa: "تیم فناوری"
        }
    },
    {
        id: 3,
        title: {
            en: "Sustainable Tech: Eco-Friendly Gadgets",
            fa: "فناوری پایدار: گجت‌های سازگار با محیط زیست"
        },
        excerpt: {
            en: "Explore the latest eco-friendly technology products that are helping to reduce our environmental impact.",
            fa: "آخرین محصولات فناوری سازگار با محیط زیست را کشف کنید که به کاهش تأثیر ما بر محیط زیست کمک می‌کنند."
        },
        date: "2024-01-05",
        image: "https://images.pexels.com/photos/9324313/pexels-photo-9324313.jpeg?auto=compress&cs=tinysrgb&w=600",
        author: {
            en: "Tech Team",
            fa: "تیم فناوری"
        }
    }
];

const reviews = [
    {
        id: 1,
        name: { en: "John Smith", fa: "جان اسمیت" },
        rating: 5,
        text: {
            en: "Amazing product! The build quality is exceptional and it works exactly as advertised.",
            fa: "محصول فوق‌العاده! کیفیت ساخت استثنایی است و دقیقاً همان‌طور که تبلیغ شده کار می‌کند."
        }
    },
    {
        id: 2,
        name: { en: "Sarah Johnson", fa: "سارا جانسون" },
        rating: 4,
        text: {
            en: "Great value for money. Fast delivery and excellent customer service.",
            fa: "ارزش عالی برای پول. تحویل سریع و خدمات مشتری عالی."
        }
    },
    {
        id: 3,
        name: { en: "Mike Chen", fa: "مایک چن" },
        rating: 5,
        text: {
            en: "Exceeded my expectations. Highly recommended for anyone looking for quality tech products.",
            fa: "بیش از انتظاراتم بود. برای هر کسی که به دنبال محصولات فناوری با کیفیت است، بسیار توصیه می‌شود."
        }
    }
];

// Utility Functions
function getCurrentLanguage() {
    return currentLanguage;
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-fa]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.textContent = text;
        }
    });

    // Update document direction and title
    document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    const title = document.querySelector('title');
    if (title) {
        const titleText = title.getAttribute(`data-${currentLanguage}`);
        if (titleText) {
            title.textContent = titleText;
        }
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'fa' : 'en';
    localStorage.setItem('language', currentLanguage);
    
    // Update language toggle button
    const langToggle = document.querySelector('.lang-text');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'en' ? 'FA' : 'EN';
    }
    
    updateLanguage();
    
    // Refresh current page content
    const path = window.location.pathname;
    if (path.includes('products.html') || path === '/') {
        loadProducts();
    } else if (path.includes('blog.html')) {
        loadBlogPosts();
    } else if (path.includes('product-detail.html')) {
        loadProductDetail();
    } else if (path.includes('cart.html')) {
        loadCart();
    } else if (path.includes('checkout.html')) {
        loadCheckout();
    }
}

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'fas fa-check-circle' :
                 type === 'error' ? 'fas fa-times-circle' :
                 'fas fa-exclamation-circle';
    
    toast.innerHTML = `
        <i class="${icon} toast-icon"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="removeToast(this)">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            removeToast(toast.querySelector('.toast-close'));
        }
    }, 5000);
}

function removeToast(button) {
    const toast = button.closest('.toast');
    if (toast) {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }
}

// Cart Management
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    const message = currentLanguage === 'en' 
        ? `${product.name.en} added to cart!`
        : `${product.name.fa} به سبد اضافه شد!`;
    showToast(message, 'success');
}

function removeFromCart(productId) {
    const productName = cart.find(item => item.id === productId)?.name;
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (productName) {
        const message = currentLanguage === 'en' 
            ? `${productName.en} removed from cart!`
            : `${productName.fa} از سبد حذف شد!`;
        showToast(message, 'warning');
    }
    
    loadCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item && newQuantity > 0) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCart();
    }
}

// Product Functions
function createProductCard(product) {
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name[currentLanguage]}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjdGQUZDIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI4IiBmaWxsPSIjRTUzRTNFIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjE0Ij5Qcm9kdWN0PC90ZXh0Pgo8L3N2Zz4K'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name[currentLanguage]}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        <span data-en="Add to Cart" data-fa="افزودن به سبد">${currentLanguage === 'en' ? 'Add to Cart' : 'افزودن به سبد'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function filterProducts(category) {
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadProducts(category);
}

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    let filteredProducts = products;
    
    // Apply category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }
    
    // Apply sorting
    if (sortFilter) {
        switch (sortFilter.value) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name[currentLanguage].localeCompare(b.name[currentLanguage]));
                break;
        }
    }
    
    const grid = document.getElementById('productsGrid');
    if (grid) {
        grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

function viewProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// Product Detail Functions
function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update product information
    document.getElementById('productName').textContent = product.name[currentLanguage];
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description[currentLanguage];
    document.getElementById('productBreadcrumb').textContent = product.name[currentLanguage];
    
    const productImage = document.getElementById('productImage');
    productImage.src = product.image;
    productImage.alt = product.name[currentLanguage];
    productImage.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjdGQUZDIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcng9IjE2IiBmaWxsPSIjRTUzRTNFIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkludGVyIiBmb250LXNpemU9IjI4Ij5Qcm9kdWN0PC90ZXh0Pgo8L3N2Zz4K';
    };
    
    // Load specifications
    loadSpecs(product);
    loadReviews();
}

function loadSpecs(product) {
    const specsGrid = document.getElementById('specsGrid');
    if (!specsGrid || !product.specs) return;
    
    const specs = product.specs[currentLanguage];
    specsGrid.innerHTML = Object.entries(specs).map(([label, value]) => `
        <div class="spec-item">
            <span class="spec-label">${label}:</span>
            <span class="spec-value">${value}</span>
        </div>
    `).join('');
}

function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    if (!reviewsList) return;
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="reviewer-name">${review.name[currentLanguage]}</span>
                <div class="review-rating">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                </div>
            </div>
            <p class="review-text">${review.text[currentLanguage]}</p>
        </div>
    `).join('');
}

function showTab(tabName) {
    // Hide all tab panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab panel
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab button
    event.target.classList.add('active');
}

function changeQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, Math.min(10, currentValue + change));
    quantityInput.value = newValue;
}

function addToCartFromDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const quantity = parseInt(document.getElementById('quantity').value);
    
    addToCart(productId, quantity);
}

// Cart Functions
function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        if (cartItems) cartItems.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        updateCartSummary();
        return;
    }
    
    if (cartItems) cartItems.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    if (cartItems) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name[currentLanguage]}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjdGQUZDIi8+CjxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iNCIgZmlsbD0iI0U1M0UzRSIvPgo8dGV4dCB4PSI1MCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iSW50ZXIiIGZvbnQtc2l6ZT0iOCI+UHJvZHVjdDwvdGV4dD4KPHN2Zz4K'">
                </div>
                <div class="cart-item-info">
                    <h3>${item.name[currentLanguage]}</h3>
                    <p>$${item.price.toFixed(2)} ${currentLanguage === 'en' ? 'each' : 'هر کدام'}</p>
                </div>
                <div class="cart-item-quantity">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <input type="number" value="${item.quantity}" min="1" max="10" onchange="updateQuantity(${item.id}, this.value)">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 9.99 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    const elements = {
        subtotal: document.getElementById('subtotal'),
        orderSubtotal: document.getElementById('orderSubtotal'),
        shipping: document.getElementById('shipping'),
        orderShipping: document.getElementById('orderShipping'),
        tax: document.getElementById('tax'),
        orderTax: document.getElementById('orderTax'),
        total: document.getElementById('total'),
        orderTotal: document.getElementById('orderTotal')
    };
    
    Object.entries(elements).forEach(([key, element]) => {
        if (element) {
            if (key.includes('subtotal') || key.includes('Subtotal')) {
                element.textContent = `$${subtotal.toFixed(2)}`;
            } else if (key.includes('shipping') || key.includes('Shipping')) {
                element.textContent = `$${shipping.toFixed(2)}`;
            } else if (key.includes('tax') || key.includes('Tax')) {
                element.textContent = `$${tax.toFixed(2)}`;
            } else if (key.includes('total') || key.includes('Total')) {
                element.textContent = `$${total.toFixed(2)}`;
            }
        }
    });
}

// Checkout Functions
function loadCheckout() {
    updateCartCount();
    loadOrderSummary();
}

function loadOrderSummary() {
    const orderItems = document.getElementById('orderItems');
    if (!orderItems) return;
    
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span class="order-item-info">${item.name[currentLanguage]} × ${item.quantity}</span>
            <span class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    updateCartSummary();
}

function nextStep() {
    // Validate current step
    const form = document.getElementById('shippingForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Hide step 1, show step 2
    document.getElementById('informationStep').classList.remove('active');
    document.getElementById('paymentStep').classList.add('active');
    
    // Update step indicators
    document.getElementById('step2').classList.add('active');
    
    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        if (formattedValue.length > 19) formattedValue = formattedValue.slice(0, 19);
        e.target.value = formattedValue;
    });
    
    // Format expiry date
    const expiryInput = document.getElementById('expiryDate');
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });
}

function processPayment() {
    // Validate payment form
    const form = document.getElementById('paymentForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Hide payment step, show OTP step
    document.getElementById('paymentStep').classList.remove('active');
    document.getElementById('otpStep').classList.add('active');
    
    // Update step indicators
    document.getElementById('step3').classList.add('active');
    
    // Show success message
    showToast(
        currentLanguage === 'en' 
            ? 'OTP sent to your mobile number'
            : 'کد یکبار مصرف به شماره موبایل شما ارسال شد',
        'success'
    );
}

function moveToNext(current, index) {
    if (current.value.length === 1 && index < 5) {
        const nextInput = document.querySelectorAll('.otp-input')[index + 1];
        if (nextInput) nextInput.focus();
    }
}

function verifyOTP() {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    if (otp.length !== 6) {
        showToast(
            currentLanguage === 'en' 
                ? 'Please enter complete OTP'
                : 'لطفا کد یکبار مصرف کامل را وارد کنید',
            'error'
        );
        return;
    }
    
    // Simulate payment processing
    setTimeout(() => {
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        showToast(
            currentLanguage === 'en' 
                ? 'Order placed successfully! Thank you for your purchase.'
                : 'سفارش با موفقیت ثبت شد! از خرید شما متشکریم.',
            'success'
        );
        
        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }, 2000);
}

// Blog Functions
function loadBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title[currentLanguage]}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    ${formatDate(post.date)} • ${post.author[currentLanguage]}
                </div>
                <h2 class="blog-title">${post.title[currentLanguage]}</h2>
                <p class="blog-excerpt">${post.excerpt[currentLanguage]}</p>
                <a href="#" class="read-more" data-en="Read More" data-fa="ادامه مطلب">
                    ${currentLanguage === 'en' ? 'Read More' : 'ادامه مطلب'}
                </a>
            </div>
        </article>
    `).join('');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return currentLanguage === 'en' 
        ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        : date.toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.documentElement.dir = currentLanguage === 'fa' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
    }
    
    // Update language toggle button
    const langToggle = document.querySelector('.lang-text');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'en' ? 'FA' : 'EN';
    }
    
    // Initialize page content
    updateLanguage();
    updateCartCount();
    
    // Load page-specific content
    const path = window.location.pathname;
    if (path.includes('products.html')) {
        loadProducts();
    } else if (path.includes('product-detail.html')) {
        loadProductDetail();
    } else if (path.includes('cart.html')) {
        loadCart();
    } else if (path.includes('checkout.html')) {
        loadCheckout();
    } else if (path.includes('blog.html')) {
        loadBlogPosts();
    } else if (path === '/' || path.includes('index.html')) {
        loadProducts();
    }
});