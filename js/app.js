// ==================== GAME DATA ====================

const WHATSAPP_NUMBER = '212784698172';

const games = [
    {
        id: 1,
        title: "10 Games Pack",
        titleAr: "باقة 10 العاب",
        description: "Collection of 10 popular games",
        descriptionAr: "تشكيلة تضم 10 ألعاب قوية وشهيرة",
        price: 100,
        currency: "DH",
        image: "images/10 Games Pack.jpeg",
        badge: "Best Seller",
        badgeAr: "الاكثر مبيعا",
        badgeType: "best-seller",
        rating: 5,
        type: "pack",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 2,
        title: "GTA 5",
        titleAr: "جي تي إي 5",
        description: "The legendary open-world action game",
        descriptionAr: "اللعبة الأسطورية غران ثفت أوتو 5 أصلية",
        price: 30,
        currency: "DH",
        image: "images/GTA 5.jpg",
        badge: "Featured",
        badgeAr: "مميز",
        badgeType: "featured",
        rating: 5,
        type: "game",
        isBestDeal: true,
        isPopular: true
    },
    {
        id: 3,
        title: "FC 26",
        titleAr: "اف سي 26",
        description: "Latest football gaming experience",
        descriptionAr: "أحدث إصدار ألعاب كرة القدم",
        price: 100,
        currency: "DH",
        image: "images/FC 26.jpg",
        badge: "NEW",
        badgeAr: "جديد",
        badgeType: "new",
        rating: 5,
        type: "game",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 4,
        title: "Red Dead Redemption 2",
        titleAr: "ريد ديد ريديمشن 2",
        description: "Epic story in a beautiful open world",
        descriptionAr: "قصة ملحمية في عالم مفتوح غاية في الروعة",
        price: 30,
        currency: "DH",
        image: "images/Red Dead Redemption 2.jpg",
        rating: 5,
        type: "game",
        isBestDeal: true,
        isPopular: true
    },
    {
        id: 5,
        title: "FC 25",
        titleAr: "اف سي 25",
        description: "Premium football gaming",
        descriptionAr: "لعبة كرة القدم الشهيرة بجرافيك مذهل",
        price: 100,
        currency: "DH",
        image: "images/FC 25.jpg",
        rating: 5,
        type: "game",
        isBestDeal: true,
        isPopular: true
    },
    {
        id: 6,
        title: "Denuvo Pack",
        titleAr: "باقة ديونوفو",
        description: "Premium protected games collection",
        descriptionAr: "مجموعة الألعاب الضخمة المحمية بنظام دينوفو",
        price: 290,
        currency: "DH",
        image: "images/Denuvo Pack.png",
        badge: "FEATURED",
        badgeAr: "مميز",
        badgeType: "featured",
        rating: 5,
        type: "pack",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 7,
        title: "ARK Raiders",
        titleAr: "آرك رايدرز",
        description: "Action and adventure with online play",
        descriptionAr: "لعبة الأكشن والمغامرة مع وضع اللعب الجماعي",
        price: 50,
        currency: "DH",
        image: "images/ARK Raiders.jpg",
        badge: "ONLINE",
        badgeAr: "أونلاين",
        badgeType: "online",
        rating: 5,
        type: "game",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 8,
        title: "007 First Light",
        titleAr: "007 فيرست لايت",
        description: "Spy thriller action game",
        descriptionAr: "لعبة التجسس والإثارة جيمز بوند",
        price: 50,
        currency: "DH",
        image: "images/007 First Light.jpg",
        rating: 5,
        type: "game",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 9,
        title: "Forza Horizon 6",
        titleAr: "فورزا هورايزن 6",
        description: "Premium racing and open-world game",
        descriptionAr: "أفضل لعبة سباق سيارات وعالم مفتوح",
        price: 50,
        currency: "DH",
        image: "images/Forza Horizon 6.jpg",
        rating: 5,
        type: "game",
        isBestDeal: false,
        isPopular: true
    },
    {
        id: 10,
        title: "Resident Evil Requiem",
        titleAr: "ريزيدنت إيفل ريكويم",
        description: "Horror and survival game",
        descriptionAr: "لعبة الرعب والبقاء الشهيرة",
        price: 80,
        currency: "DH",
        image: "images/Resident Evil Requiem (2).jpg",
        rating: 5,
        type: "game",
        isBestDeal: false,
        isPopular: true
    }
];

const bestDeals = [2, 4, 5];
const packIds = [1, 6];

// ==================== STATE ====================

let currentLanguage = localStorage.getItem('language') || 'en';

// ==================== TRANSLATIONS ====================

const translations = {
    en: {
        searchPlaceholder: "Search your game...",
        noResults: "No games found. Try another search.",
        buyNow: "BUY NOW",
        viewAllGames: "View All Games",
        viewAllDeals: "VIEW ALL DEALS",
        shopNow: "SHOP NOW",
        exploreGames: "EXPLORE GAMES",
        popularGames: "POPULAR GAMES",
        bestDeals: "BEST DEALS",
        gamePacks: "GAME PACKS",
        howItWorks: "HOW IT WORKS",
        reviews: "WHAT OUR CUSTOMERS SAY",
        paymentMethods: "PAYMENT METHODS",
        faq: "FREQUENTLY ASKED QUESTIONS",
        trustFast: "FAST DELIVERY",
        trustFastDesc: "Quick response on WhatsApp",
        trustPrices: "GREAT PRICES",
        trustPricesDesc: "Best deals for every gamer",
        trustService: "TRUSTED SERVICE",
        trustServiceDesc: "100% safe & reliable",
        trustGaming: "GAMING FOCUSED",
        trustGamingDesc: "Made for real gamers",
        step1Title: "CHOOSE YOUR GAME",
        step1Desc: "Browse and select your favorite game.",
        step2Title: "CLICK BUY NOW",
        step2Desc: "Click the button and contact us on WhatsApp.",
        step3Title: "GET YOUR GAME",
        step3Desc: "We deliver your game quickly and safely.",
        review1: "Fast delivery and amazing service!",
        review2: "Great prices and very trusted store.",
        review3: "The best gaming store I've ever dealt with!",
        verifiedBuyer: "Verified Buyer",
        whatsappMsg: "Hello FCHKAL KEYS, I want to buy {game}."
    },
    ar: {
        searchPlaceholder: "ابحث عن لعبتك...",
        noResults: "لم يتم العثور على ألعاب. حاول البحث عن شيء آخر.",
        buyNow: "اشتري الآن",
        viewAllGames: "عرض جميع الألعاب",
        viewAllDeals: "عرض جميع العروض",
        shopNow: "تسوق الآن",
        exploreGames: "استكشف الألعاب",
        popularGames: "الألعاب الشائعة",
        bestDeals: "أفضل العروض",
        gamePacks: "باقات الألعاب",
        howItWorks: "كيف يعمل",
        reviews: "ماذا يقول عملاؤنا",
        paymentMethods: "طرق الدفع",
        faq: "الأسئلة الشائعة",
        trustFast: "توصيل سريع",
        trustFastDesc: "استجابة سريعة على واتساب",
        trustPrices: "أسعار رائعة",
        trustPricesDesc: "أفضل العروض لكل لاعب",
        trustService: "خدمة موثوقة",
        trustServiceDesc: "100% آمن وموثوق",
        trustGaming: "مخصص للاعبين",
        trustGamingDesc: "صُمم للاعبين الحقيقيين",
        step1Title: "اختر لعبتك",
        step1Desc: "تصفح واختر لعبتك المفضلة.",
        step2Title: "اضغط اشتري الآن",
        step2Desc: "اضغط الزر وتواصل معنا على واتساب.",
        step3Title: "احصل على لعبتك",
        step3Desc: "نوصل لعبتك بسرعة وأمان.",
        review1: "توصيل سريع وخدمة رائعة!",
        review2: "أسعار ممتازة ومتجر موثوق جداً.",
        review3: "أفضل متجر ألعاب تعاملت معه!",
        verifiedBuyer: "مشتري موثق",
        whatsappMsg: "مرحبا FCHKAL KEYS، أريد شراء {game}."
    }
};

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    renderProducts();
    renderBestDeals();
    renderGamePacks();
    setupEventListeners();
    setupScrollAnimations();
    setupNavbarScroll();
    setupActiveNav();
    createParticles();
});

// ==================== HELPERS ====================

function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

function getGameText(game, field) {
    const arField = field + 'Ar';
    return currentLanguage === 'ar' && game[arField] ? game[arField] : game[field];
}

function getWhatsAppLink(game) {
    const title = getGameText(game, 'title');
    const message = getTranslation('whatsappMsg').replace('{game}', title);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getBadgeClass(game) {
    return game.badgeType || '';
}

// ==================== LANGUAGE ====================

function initializeLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.documentElement;

    if (currentLanguage === 'ar') {
        htmlElement.dir = 'rtl';
        htmlElement.lang = 'ar';
    } else {
        htmlElement.dir = 'ltr';
        htmlElement.lang = 'en';
        currentLanguage = 'en';
    }

    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLanguage);
        btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });

    updateLanguageContent();
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    const htmlElement = document.documentElement;
    htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    htmlElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    updateLanguageContent();
    renderProducts();
    renderBestDeals();
    renderGamePacks();
}

function updateLanguageContent() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = getTranslation('searchPlaceholder');

    setText('.section-header-row h2, .popular-games h2', getTranslation('popularGames'));
    setText('.view-all-link', getTranslation('viewAllGames'), true);
    setText('.best-deals h2', getTranslation('bestDeals'));
    setText('.game-packs h2', getTranslation('gamePacks'));
    setText('#how-it-works h2', getTranslation('howItWorks'));
    setText('#reviews h2', getTranslation('reviews'));
    setText('#payment h2', getTranslation('paymentMethods'));
    setText('.faq-section h2', getTranslation('faq'));

    const trustItems = document.querySelectorAll('.trust-item');
    const trustKeys = [
        ['trustFast', 'trustFastDesc'],
        ['trustPrices', 'trustPricesDesc'],
        ['trustService', 'trustServiceDesc'],
        ['trustGaming', 'trustGamingDesc']
    ];
    trustItems.forEach((item, i) => {
        if (trustKeys[i]) {
            const h3 = item.querySelector('h3');
            const p = item.querySelector('p');
            if (h3) h3.textContent = getTranslation(trustKeys[i][0]);
            if (p) p.textContent = getTranslation(trustKeys[i][1]);
        }
    });

    const steps = document.querySelectorAll('.step-item');
    const stepKeys = [
        ['step1Title', 'step1Desc'],
        ['step2Title', 'step2Desc'],
        ['step3Title', 'step3Desc']
    ];
    steps.forEach((step, i) => {
        if (stepKeys[i]) {
            const h3 = step.querySelector('h3');
            const p = step.querySelector('p');
            if (h3) h3.textContent = getTranslation(stepKeys[i][0]);
            if (p) p.textContent = getTranslation(stepKeys[i][1]);
        }
    });

    const reviewCards = document.querySelectorAll('.review-card');
    const reviewKeys = ['review1', 'review2', 'review3'];
    reviewCards.forEach((card, i) => {
        const text = card.querySelector('.review-text');
        const author = card.querySelector('.review-author');
        if (text && reviewKeys[i]) text.textContent = getTranslation(reviewKeys[i]);
        if (author) author.textContent = `— ${getTranslation('verifiedBuyer')}`;
    });

    const heroCtas = document.querySelectorAll('.hero-ctas .btn span');
    if (heroCtas[0]) heroCtas[0].textContent = getTranslation('shopNow');
    if (heroCtas[1]) heroCtas[1].textContent = getTranslation('exploreGames');
}

function setText(selector, text, keepIcon) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (keepIcon && el.querySelector('i')) {
        el.childNodes[0].textContent = text + ' ';
    } else {
        el.textContent = text;
    }
}

// ==================== PRODUCT RENDERING ====================

function renderProducts() {
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) return;
    gamesGrid.innerHTML = '';

    games.filter(g => g.isPopular !== false).forEach((game, index) => {
        gamesGrid.appendChild(createProductCard(game, index));
    });

    observeNewCards();
}

function createProductCard(game, index = 0) {
    const card = document.createElement('article');
    card.className = 'product-card scroll-reveal';
    card.setAttribute('data-game-id', game.id);
    card.style.animationDelay = `${index * 0.05}s`;

    const badgeClass = getBadgeClass(game);
    const badgeHTML = game.badge
        ? `<span class="product-badge ${badgeClass}">${getGameText(game, 'badge')}</span>`
        : '';

    const starsHTML = Array(game.rating)
        .fill('<i class="fas fa-star"></i>')
        .join('');

    card.innerHTML = `
        <div class="product-image">
            <img src="${game.image}" alt="${getGameText(game, 'title')} — FCHKAL KEYS PC game" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3 class="product-title">${getGameText(game, 'title')}</h3>
            <div class="product-rating" aria-label="${game.rating} out of 5 stars">
                ${starsHTML}
                <span class="product-rating-count">(${game.rating}.0)</span>
            </div>
            <div class="product-price-row">
                <span class="product-price">${game.price}</span>
                <span class="product-price-currency">${game.currency}</span>
            </div>
            <a href="${getWhatsAppLink(game)}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-primary buy-btn"
               aria-label="Buy ${getGameText(game, 'title')} on WhatsApp">
                <i class="fab fa-whatsapp"></i>
                <span>${getTranslation('buyNow')}</span>
            </a>
        </div>
    `;

    return card;
}

function renderBestDeals() {
    const grid = document.getElementById('bestDealsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    bestDeals.forEach((id, index) => {
        const game = games.find(g => g.id === id);
        if (game) grid.appendChild(createProductCard(game, index));
    });

    observeNewCards();
}

function renderGamePacks() {
    const grid = document.getElementById('packsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    packIds.forEach(id => {
        const game = games.find(g => g.id === id);
        if (game) grid.appendChild(createPackCard(game));
    });

    observeNewCards();
}

function createPackCard(game) {
    const card = document.createElement('article');
    card.className = 'pack-card scroll-reveal';
    card.setAttribute('data-game-id', game.id);

    const badgeHTML = game.badge
        ? `<span class="pack-badge">${getGameText(game, 'badge')}</span>`
        : '';

    const gamesCount = game.id === 1 ? '10 Games' : '70+ Games';

    card.innerHTML = `
        <div class="pack-image">
            <img src="${game.image}" alt="${getGameText(game, 'title')} — FCHKAL KEYS game pack" loading="lazy">
            ${badgeHTML}
        </div>
        <div class="pack-info">
            <h3 class="pack-title">${getGameText(game, 'title')}</h3>
            <p class="pack-description">${getGameText(game, 'description')}</p>
            <div class="pack-price">${game.price} ${game.currency}</div>
            <ul class="pack-features">
                <li><i class="fas fa-check"></i><span>${gamesCount}</span></li>
                <li><i class="fas fa-check"></i><span>Instant Delivery</span></li>
                <li><i class="fas fa-check"></i><span>Professional Support</span></li>
            </ul>
            <a href="${getWhatsAppLink(game)}"
               target="_blank"
               rel="noopener noreferrer"
               class="btn btn-primary">
                <i class="fab fa-whatsapp"></i>
                <span>${getTranslation('buyNow')}</span>
            </a>
        </div>
    `;

    return card;
}

// ==================== EVENT LISTENERS ====================

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-dropdown-toggle)');
    const dropdown = document.querySelector('.nav-dropdown');
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                document.getElementById('searchResults')?.classList.add('hidden');
            }, 200);
        });
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.querySelectorAll('.nav-dropdown-item').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    if (dropdownToggle && dropdown) {
        dropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            const isOpen = dropdown.classList.contains('open');
            dropdownToggle.setAttribute('aria-expanded', isOpen);
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });
    }

    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question')?.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

function closeMobileMenu() {
    document.getElementById('navMenu')?.classList.remove('active');
    document.getElementById('navToggle')?.classList.remove('active');
    document.getElementById('navToggle')?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
}

// ==================== SEARCH ====================

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 1) {
        document.getElementById('searchResults')?.classList.add('hidden');
        return;
    }

    const results = games.filter(game => {
        const title = getGameText(game, 'title').toLowerCase();
        const description = getGameText(game, 'description').toLowerCase();
        return title.includes(query) || description.includes(query);
    });

    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    if (!searchResults) return;
    searchResults.classList.remove('hidden');

    if (results.length === 0) {
        searchResults.innerHTML = `<div class="search-no-results"><p>${getTranslation('noResults')}</p></div>`;
        return;
    }

    const resultsList = document.createElement('div');
    resultsList.className = 'search-results-list';

    results.forEach(game => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
            <img class="search-result-img" src="${game.image}" alt="${getGameText(game, 'title')}">
            <div class="search-result-info">
                <div class="search-result-title">${getGameText(game, 'title')}</div>
                <div class="search-result-price">${game.price} ${game.currency}</div>
            </div>
        `;

        item.addEventListener('click', () => {
            const card = document.querySelector(`[data-game-id="${game.id}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.transition = 'box-shadow 0.3s ease';
                card.style.boxShadow = '0 0 40px rgba(147, 51, 234, 0.5)';
                setTimeout(() => { card.style.boxShadow = ''; }, 2000);
            }
            searchResults.classList.add('hidden');
            document.getElementById('searchInput').value = '';
        });

        resultsList.appendChild(item);
    });

    searchResults.innerHTML = '';
    searchResults.appendChild(resultsList);
}

// ==================== NAVBAR ====================

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const onScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

function setupActiveNav() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.dataset.section === id);
                    });
                }
            });
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
}

// ==================== SCROLL ANIMATIONS ====================

function setupScrollAnimations() {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    observeNewCards();
}

function observeNewCards() {
    const cardObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    cardObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
        cardObserver.observe(el);
    });
}

// ==================== PARTICLES ====================

function createParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function init() {
        resize();
        const count = Math.min(40, Math.floor(canvas.width / 25));
        particles = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.2 + 0.3,
            opacity: Math.random() * 0.4 + 0.1
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168, 85, 247, ${p.opacity})`;
            ctx.fill();
        });

        animationId = requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
        draw();
    });
}

// ==================== SMOOTH SCROLL ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileMenu();
        }
    });
});

// ==================== ACCESSIBILITY ====================

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('reduced-motion');
}

const navToggleEl = document.getElementById('navToggle');
if (navToggleEl) {
    navToggleEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navToggleEl.click();
        }
    });
}
