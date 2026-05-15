// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);

function updateThemeIcon(theme) {
    const icon = theme === 'light' ? '🌙' : '☀️';
    themeToggle.textContent = icon;
}

// ==================== LANGUAGE SWITCHER ====================
const translations = {
    ru: {
        // Navigation
        aboutNav: 'Обо мне',
        servicesNav: 'Услуги',
        contactNav: 'Контакты',
        
        // Hero
        heroSubtitle: 'Эндокринолог и Диетолог для детей и взрослых.<br>Доказательная медицина и персонализированный подход.',
        btnOnline: 'Онлайн прием',
        btnOffline: 'Оффлайн прием',
        bookAppointment: 'Записаться на прием',
        doctorsOnline: 'Врач онлайн',
        
        // About
        aboutTitle: 'Обо мне',
        aboutP1: 'Я помогаю людям разобраться в гормонах, настроить питание, понять свой организм и почувствовать себя лучше. В своей практике придерживаюсь международных рекомендаций.',
        aboutP2: 'В своём блоге я создаю пространство, где каждый человек может получить понятные ответы о гормонах, питании и метаболическом здоровье.',
        aboutQuote: '"Моя цель — помочь людям перейти от мифов и устаревших подходов к современным, безопасным и доказательным решениям."',
        aboutP3: 'Я стремлюсь, чтобы мои пациенты чувствовали уверенность, понимали свой диагноз и не жили в страхе перед гормонами, анализами или весом. Через просвещение и поддержку я влияю на качество жизни людей.',
        
        // Stats
        stat1Text: 'Пациентов прошли консультации',
        stat2Text: 'Пациентов в длительном сопровождении',
        stat3Text: 'Эксперт по терапии (Оземпик, Манджаро)',
        
        // Education
        educationTitle: 'Образование и Опыт',
        educationH3: 'Образование',
        edu1: '<span class="date">2015–2020</span> Бакалавр общей медицины, Медицинский университет Караганды.',
        edu2: '<span class="date">2020–2022</span> Интернатура, врач общей практики (ВОП), Медицинский университет Астана.',
        edu3: '<span class="date">2022–2026</span> Резидентура по эндокринологии, University Medical Centre, г. Астана.',
        edu4: '<span class="date">2025</span> Диетология, Республиканский центр Алем, г.Астана.',
        experienceH3: 'Опыт работы',
        exp1: '<span class="date">2020–2022</span> Фельдшер, поликлиника #8',
        exp2: '<span class="date">2022–2023</span> ВОП, Infinite life',
        exp3: '<span class="date">2020–2026</span> Стажировка в UMC: ведение пациентов с эндокринными и метаболическими нарушениями.',
        exp4: '<span class="date">2023–Н.В.</span> Врач-эндокринолог и диетолог, клиника Somera Clinic, г. Астана.',
        
        // Services
        servicesTitle: 'Какие проблемы я решаю',
        endocrinology: 'Эндокринология',
        endo1: 'Инсулинорезистентность',
        endo2: 'Сахарный диабет 1 и 2 типа',
        endo3: 'Ожирение и метаболический синдром',
        endo4: 'Заболевания щитовидной железы (гипотиреоз, гипертиреоз, АИТ)',
        endo5: 'Гиперпролактинемия',
        endo6: 'Надпочечниковые нарушения',
        endo7: 'Нарушения цикла, ПМС (эндокринные причины)',
        dietology: 'Диетология',
        diet1: 'Снижение веса — с препаратами и без',
        diet2: 'Подбор питания при ИР, СД2, гипотиреозе, ПКЯ',
        diet3: 'Коррекция пищевого поведения',
        diet4: 'Работа с аппетитом, перееданиями, «срывами»',
        diet5: 'Формирование рационов и планов питания',
        metabolicHealth: 'Метаболическое здоровье',
        meta1: 'Контроль холестерина и липидов',
        meta2: 'Нарушения обмена веществ',
        meta3: 'Усталость, слабость, колебания веса',
        meta4: 'Дефициты витаминов и микроэлементов (D, B12, железо и др.)',
        meta5: 'Интерпретация любых анализов',
        servicesNote: '<strong>Также доступен гайд «Школа диабета» на русском и казахском языках</strong>',
        
        // Reviews
        reviewsTitle: 'Отзывы пациентов',
        
        // Pricing
        pricingTitle: 'Стоимость приема',
        endocrinologist: 'Эндокринолог',
        dietitian: 'Диетолог',
        programs: 'Программы',
        inPerson: 'Очный прием',
        online: 'Онлайн прием',
        firstVisit: 'Первичный прием',
        followUp: 'Повторный прием',
        program1: 'Сопровождение на препаратах для похудения (6 месяцев)',
        program2: 'Программа похудения или набора веса (неделя)',
        program3: 'Программа похудения или набора веса (месяц)',
        bookNow: 'Записаться сейчас',
        
        // Location
        locationTitle: 'Как нас найти',
        locationAddress: 'Аль-Фараби проспект, 30/3',
        locationDistrict: 'Есиль район, Астана',
        buildRoute: 'Построить маршрут',
        
        // Contacts
        contactsTitle: 'Контакты',
        
        // Modal
        modalTitle: 'Записаться на прием',
        selectType: 'Выберите тип приема:',
        onlineVisit: 'Онлайн прием',
        offlineVisit: 'Очный прием',
        yourName: 'Ваше имя',
        phone: 'Телефон',
        email: 'Email',
        message: 'Сообщение',
        namePlaceholder: 'Введите ваше имя',
        messagePlaceholder: 'Опишите вашу проблему или вопрос',
        submitBtn: 'Отправить заявку',

        // UZI Section
        uziTitle: 'Ультразвуковая диагностика',
        uziIntro: 'Клиника Zor Qadam · Астана — современное УЗИ-оборудование, опытный врач, полный спектр исследований.',
        uziArea1Title: 'Брюшная полость',
        uziArea1Desc: 'печень, желчный пузырь, поджелудочная, селезёнка, почки',
        uziArea2Title: 'Малый таз и беременность',
        uziArea2Desc: 'трансабдоминально и трансвагинально, все триместры, фолликулометрия',
        uziArea3Title: 'Щитовидная железа',
        uziArea3Desc: 'железа + регионарные лимфоузлы',
        uziArea4Title: 'Молочные железы',
        uziArea4Desc: 'с оценкой лимфатических узлов',
        uziPricingTitle: 'Стоимость исследований',
        uziGroupA: 'Основные',
        uziGroupB: 'Малый таз и беременность',
        uziPrice1: 'УЗИ органов брюшной полости',
        uziPrice2: 'УЗИ почек и надпочечников',
        uziPrice3: 'УЗИ брюшной полости + почки',
        uziPrice4: 'УЗИ мочевого пузыря',
        uziPrice5: 'УЗИ щитовидной железы',
        uziPrice6: 'УЗИ щитовидной железы + лимфоузлы',
        uziPrice7: 'УЗИ мягких тканей / лимфоузлов',
        uziPrice8: 'УЗИ малого таза ТА',
        uziPrice9: 'УЗИ малого таза ТВ',
        uziPrice10: 'УЗИ малого таза комплекс (ТА+ТВ)',
        uziPrice11: 'УЗИ при беременности I триместр',
        uziPrice12: 'УЗИ при беременности II–III триместр',
        uziPrice13: 'УЗИ молочных желёз',
        uziPrice14: 'УЗИ молочных желёз + лимфоузлы',
        uziCheckupTitle: 'Комплексные программы',
        uziCheckupSubtitle: 'Полное обследование за один визит — выгоднее, чем по отдельности.',
        uziCheckup1Title: 'Женский check-up',
        uziCheckup1Desc: 'ОБП + почки + малый таз (ТВ) + молочные железы + щитовидная железа',
        uziCheckup2Title: 'Мужской check-up',
        uziCheckup2Desc: 'ОБП + почки + мочевой пузырь + простата (ТА)',
        uziCheckup3Title: 'Эндокринологический комплекс',
        uziCheckup3Desc: 'Щитовидная железа + надпочечники + поджелудочная железа'
    },
    kk: {
        // Navigation
        aboutNav: 'Мен туралы',
        servicesNav: 'Қызметтер',
        contactNav: 'Байланыс',
        
        // Hero
        heroSubtitle: 'Балалар мен ересектерге арналған Эндокринолог және Диетолог.<br>Дәлелді медицина және жекелендірілген тәсіл.',
        btnOnline: 'Онлайн қабылдау',
        btnOffline: 'Офлайн қабылдау',
        bookAppointment: 'Қабылдауға жазылу',
        doctorsOnline: 'Дәрігер онлайн',
        
        // About
        aboutTitle: 'Мен туралы',
        aboutP1: 'Мен адамдарға гормондарды түсінуге, тамақтануды реттеуге, денеңізді түсінуге және өзіңізді жақсы сезінуге көмектесемін. Мен өз тәжірибемде халықаралық ұсыныстарды ұстанамын.',
        aboutP2: 'Мен өз блогымда әр адам гормондар, тамақтану және метаболикалық денсаулық туралы нақты жауап ала алатын кеңістік құрамын.',
        aboutQuote: '"Менің мақсатым — адамдарға мифтер мен ескірген тәсілдерден заманауи, қауіпсіз және дәлелді шешімдерге көшуге көмектесу."',
        aboutP3: 'Мен пациенттерімнің сенімділігін сезінуге, диагнозын түсінуге және гормондардан, сынақтардан немесе салмақтан қорықпауға тырысамын. Білім мен қолдау арқылы мен адамдардың өмір сүру сапасына әсер етемін.',
        
        // Stats
        stat1Text: 'Пациенттер консультациялардан өтті',
        stat2Text: 'Ұзақ мерзімді сүйемелдеудегі пациенттер',
        stat3Text: 'Терапия бойынша сарапшы (Оземпик, Манжаро)',
        
        // Education
        educationTitle: 'Білім және тәжірибе',
        educationH3: 'Білім',
        edu1: '<span class="date">2015–2020</span> Жалпы медицина бакалавры, Қарағанды медицина университеті.',
        edu2: '<span class="date">2020–2022</span> Интернатура, жалпы практика дәрігері (ЖПД), Астана медицина университеті.',
        edu3: '<span class="date">2022–2026</span> эндокринология бойынша Резидентура, University Medical Centre, Астана қ.',
        edu4: '<span class="date">2025</span> Диетология, әлем республикалық орталығы, Астана қ.',
        experienceH3: 'Жұмыс тәжірибесі',
        exp1: '<span class="date">2020–2022</span> фельдшер, № 8 емхана',
        exp2: '<span class="date">2022–2023</span> ЖПД, Infinite life',
        exp3: '<span class="date">2020–2026</span> UMC тағылымдамасы: эндокриндік және метаболикалық бұзылулары бар науқастарды басқару.',
        exp4: '<span class="date">2023–Н.В.</span> эндокринолог-дәрігер және диетолог, Somera Clinic клиникасы, Астана қ.',
        
        // Services
        servicesTitle: 'Мен қандай мәселелерді шешемін',
        endocrinology: 'Эндокринология',
        endo1: 'Инсулинге төзімділік',
        endo2: '1 типті және 2 типті қант диабеті',
        endo3: 'Семіздік және метаболикалық синдром',
        endo4: 'Қалқанша безінің аурулары (гипотиреоз, гипертиреоз, АИТ)',
        endo5: 'Гиперпролактинемия',
        endo6: 'Бүйрек үсті безінің бұзылуы',
        endo7: 'Циклдің бұзылуы, ПМС (эндокриндік себептер)',
        dietology: 'Диетология',
        diet1: 'Салмақ жоғалту-препараттармен және онсыз',
        diet2: 'IR, T2D, гипотиреоз, PCOS үшін тамақтануды таңдау',
        diet3: 'Тамақтану тәртібін түзету',
        diet4: 'Тәбетпен, шамадан тыс тамақтанумен, "бұзылулармен"жұмыс',
        diet5: 'Диеталар мен тамақтану жоспарларын қалыптастыру',
        metabolicHealth: 'Метаболикалық Денсаулық',
        meta1: 'Холестерин мен липидтерді бақылау',
        meta2: 'Метаболикалық бұзылулар',
        meta3: 'Шаршау, әлсіздік, салмақтың ауытқуы',
        meta4: 'Витаминдер мен микроэлементтердің жетіспеушілігі (D, B12, темір және т. б.)',
        meta5: 'Кез келген талдауды түсіндіру',
        servicesNote: '<strong>Сондай-ақ, "диабет мектебі" гайд орыс және қазақ тілдерінде қол жетімді</strong>',
        
        // Reviews
        reviewsTitle: 'Пациенттердің пікірлері',
        
        // Pricing
        pricingTitle: 'Қабылдау құны',
        endocrinologist: 'Эндокринолог',
        dietitian: 'Диетолог',
        programs: 'Бағдарламалар',
        inPerson: 'Бетпе бет қабылдау',
        online: 'Онлайн қабылдау',
        firstVisit: 'Бастапқы қабылдау',
        followUp: 'Қайта қабылдау',
        program1: 'Арықтауға арналған препараттарда сүйемелдеу (6 ай)',
        program2: 'Салмақ жоғалту немесе салмақ қосу бағдарламасы (апта)',
        program3: 'Салмақ жоғалту немесе салмақ қосу бағдарламасы (ай)',
        bookNow: 'қазір жазылыңыз',
        
        // Location
        locationTitle: 'Бізді қалай табуға болады',
        locationAddress: 'Әл-Фараби даңғылы, 30/3',
        locationDistrict: 'Есіл ауданы, Астана',
        buildRoute: 'Маршрут салу',
        
        // Contacts
        contactsTitle: 'Байланыс',
        
        // Modal
        modalTitle: 'Қабылдауға жазылу',
        selectType: 'Қабылдау түрін таңдаңыз:',
        onlineVisit: 'Онлайн қабылдау',
        offlineVisit: 'Бетпе бет қабылдау',
        yourName: 'Сіздің атыңыз',
        phone: 'Телефон',
        email: 'Email',
        message: 'Хабарлама',
        namePlaceholder: 'Атыңызды енгізіңіз',
        messagePlaceholder: 'Мәселеңізді немесе сұрағыңызды сипаттаңыз',
        submitBtn: 'Өтінімді жіберу',

        // UZI Section
        uziTitle: 'Ультрадыбыстық диагностика',
        uziIntro: 'Zor Qadam клиникасы · Астана — заманауи УДЗ жабдықтары, тәжірибелі дәрігер, зерттеулердің толық спектрі.',
        uziArea1Title: 'Іш қуысы',
        uziArea1Desc: 'бауыр, өт қабы, ұйқы безі, көкбауыр, бүйрек',
        uziArea2Title: 'Кіші жамбас және жүктілік',
        uziArea2Desc: 'трансабдоминальды және трансвагинальды, барлық триместрлер, фолликулометрия',
        uziArea3Title: 'Қалқанша безі',
        uziArea3Desc: 'без + аймақтық лимфа түйіндері',
        uziArea4Title: 'Сүт бездері',
        uziArea4Desc: 'лимфа түйіндерін бағалаумен',
        uziPricingTitle: 'Зерттеу құны',
        uziGroupA: 'Негізгілер',
        uziGroupB: 'Кіші жамбас және жүктілік',
        uziPrice1: 'Іш қуысы мүшелерінің УДЗ',
        uziPrice2: 'Бүйрек және бүйрекүсті безінің УДЗ',
        uziPrice3: 'Іш қуысы + бүйрек УДЗ',
        uziPrice4: 'Несеп қабының УДЗ',
        uziPrice5: 'Қалқанша безінің УДЗ',
        uziPrice6: 'Қалқанша безі + лимфа түйіндері УДЗ',
        uziPrice7: 'Жұмсақ тіндер / лимфа түйіндерінің УДЗ',
        uziPrice8: 'Кіші жамбас ТА УДЗ',
        uziPrice9: 'Кіші жамбас ТВ УДЗ',
        uziPrice10: 'Кіші жамбас кешені (ТА+ТВ) УДЗ',
        uziPrice11: 'Жүктілік I триместр УДЗ',
        uziPrice12: 'Жүктілік II–III триместр УДЗ',
        uziPrice13: 'Сүт бездерінің УДЗ',
        uziPrice14: 'Сүт бездері + лимфа түйіндері УДЗ',
        uziCheckupTitle: 'Кешенді бағдарламалар',
        uziCheckupSubtitle: 'Бір визитте толық тексеру — бөлек қарағаннан арзанырақ.',
        uziCheckup1Title: 'Әйелдер check-up',
        uziCheckup1Desc: 'ІҚМ + бүйрек + кіші жамбас (ТВ) + сүт бездері + қалқанша безі',
        uziCheckup2Title: 'Ерлер check-up',
        uziCheckup2Desc: 'ІҚМ + бүйрек + несеп қабы + простата (ТА)',
        uziCheckup3Title: 'Эндокринологиялық кешен',
        uziCheckup3Desc: 'Қалқанша безі + бүйрекүсті безі + ұйқы безі'
    }
};

// Load saved language or default to Russian
let currentLang = localStorage.getItem('language') || 'ru';

// Language switcher functionality
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-ru') ? (lang === 'ru' ? 'data-ru' : 'data-kk') : null;
        if (key) {
            link.textContent = link.getAttribute(key);
        }
    });
    
    // Update page content with data-lang attributes
    updatePageContent(lang);
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
}

// Initialize language on page load
switchLanguage(currentLang);

// ==================== LOADER ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1000);
});

// ==================== PARTICLES ====================
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
    }
}
createParticles();

// ==================== HEADER SCROLL ====================
const header = document.getElementById('header');
let lastScrollTop = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    // Add/remove scrolled class for styling
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Hide/show header based on scroll direction
    if (currentScroll > lastScrollTop && currentScroll > 150) {
        // Scrolling down - hide header
        header.style.transform = 'translateX(-50%) translateY(-120%)';
    } else {
        // Scrolling up - show header
        header.style.transform = 'translateX(-50%) translateY(0)';
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== REVEAL ANIMATIONS ====================
function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal();

// ==================== COUNTER ANIMATION ====================
let counterAnimated = false;

function animateCounters() {
    if (counterAnimated) return;
    
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                counter.classList.add('counting');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
                counter.classList.remove('counting');
            }
        };
        
        updateCounter();
    });
    
    counterAnimated = true;
}

// Trigger counter animation when stats section is visible
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animateCounters();
        }
    }
});

// ==================== SCROLL TO TOP ====================
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== APPOINTMENT TYPE SELECTION MODAL ====================
const appointmentModal = document.getElementById('appointmentModal');
const appointmentModalClose = document.getElementById('appointmentModalClose');
const bookingBtn = document.getElementById('bookingBtn');

// Open modal when clicking "Записаться сейчас"
if (bookingBtn) {
    bookingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        appointmentModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close modal
function closeAppointmentModal() {
    appointmentModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (appointmentModalClose) {
    appointmentModalClose.addEventListener('click', closeAppointmentModal);
}

// Close modal when clicking outside
if (appointmentModal) {
    appointmentModal.addEventListener('click', (e) => {
        if (e.target === appointmentModal) {
            closeAppointmentModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && appointmentModal && appointmentModal.classList.contains('active')) {
        closeAppointmentModal();
    }
});

// Handle appointment type selection - redirect to WhatsApp
document.addEventListener('click', (e) => {
    if (e.target.closest('.appointment-type-btn')) {
        const btn = e.target.closest('.appointment-type-btn');
        const type = btn.getAttribute('data-type');
        
        // Choose WhatsApp number based on type
        const whatsappNumber = type === 'online' ? '77055580008' : '77077339686';
        
        // Open WhatsApp in new tab
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
        
        // Close modal
        closeAppointmentModal();
    }
});

// ==================== CURSOR TRAIL (Optional) ====================
if (window.innerWidth > 768) {
    let cursorTrails = [];
    const maxTrails = 10;

    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.style.opacity = '0.5';
        }, 10);

        setTimeout(() => {
            trail.remove();
        }, 500);

        cursorTrails.push(trail);

        if (cursorTrails.length > maxTrails) {
            const oldTrail = cursorTrails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.remove();
            }
        }
    });
}

// ==================== REVIEWS SLIDER ====================
const reviewsSlider = document.getElementById('reviewsSlider');
const reviewItems = document.querySelectorAll('.review-item');
const reviewPrev = document.getElementById('reviewPrev');
const reviewNext = document.getElementById('reviewNext');

if (reviewsSlider) {
    let currentScroll = 0;
    let isPaused = false;
    const scrollAmount = 430; // width of review-item (400px) + gap (30px)

    // Navigation buttons with instant auto-scroll resume
    const handlePrevClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        reviewsSlider.classList.add('paused');
        currentScroll -= scrollAmount;
        reviewsSlider.style.transform = `translateX(-${currentScroll}px)`;
        
        // Resume auto-scroll instantly after click
        setTimeout(() => {
            reviewsSlider.classList.remove('paused');
            reviewsSlider.style.transform = '';
        }, 100);
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        reviewsSlider.classList.add('paused');
        currentScroll += scrollAmount;
        reviewsSlider.style.transform = `translateX(-${currentScroll}px)`;
        
        // Resume auto-scroll instantly after click
        setTimeout(() => {
            reviewsSlider.classList.remove('paused');
            reviewsSlider.style.transform = '';
        }, 100);
    };

    if (reviewPrev) {
        reviewPrev.addEventListener('click', handlePrevClick);
        reviewPrev.addEventListener('touchend', handlePrevClick);
    }

    if (reviewNext) {
        reviewNext.addEventListener('click', handleNextClick);
        reviewNext.addEventListener('touchend', handleNextClick);
    }

    // Pause animation on hover (desktop only)
    reviewsSlider.addEventListener('mouseenter', () => {
        if (!isPaused) {
            reviewsSlider.classList.add('paused');
        }
    });

    reviewsSlider.addEventListener('mouseleave', () => {
        if (!isPaused) {
            reviewsSlider.classList.remove('paused');
        }
    });

    // Mouse drag support with instant resume
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    reviewsSlider.addEventListener('mousedown', (e) => {
        isDragging = true;
        isPaused = true;
        startX = e.pageX;
        
        // Get current transform value
        const style = window.getComputedStyle(reviewsSlider);
        const matrix = new WebKitCSSMatrix(style.transform);
        startScrollLeft = -matrix.m41;
        
        reviewsSlider.classList.add('paused');
        reviewsSlider.classList.add('manual-control');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (startX - x) * 2;
        currentScroll = startScrollLeft + walk;
        reviewsSlider.style.transform = `translateX(-${currentScroll}px)`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            isPaused = false;
            
            // Resume auto-scroll instantly
            reviewsSlider.classList.remove('paused');
            reviewsSlider.classList.remove('manual-control');
            reviewsSlider.style.transform = '';
            currentScroll = 0;
        }
    });

    // Mobile touch support with swipe and instant resume
    let touchStarted = false;
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    reviewsSlider.addEventListener('touchstart', (e) => {
        touchStarted = true;
        isPaused = true;
        touchStartX = e.touches[0].pageX;
        
        // Get current transform value
        const style = window.getComputedStyle(reviewsSlider);
        const matrix = new WebKitCSSMatrix(style.transform);
        touchScrollLeft = -matrix.m41;
        
        reviewsSlider.classList.add('paused');
        reviewsSlider.classList.add('manual-control');
    });

    reviewsSlider.addEventListener('touchmove', (e) => {
        if (!touchStarted) return;
        const x = e.touches[0].pageX;
        const walk = (touchStartX - x) * 1.5;
        currentScroll = touchScrollLeft + walk;
        reviewsSlider.style.transform = `translateX(-${currentScroll}px)`;
    });

    reviewsSlider.addEventListener('touchend', () => {
        if (touchStarted) {
            touchStarted = false;
            isPaused = false;
            
            // Resume auto-scroll instantly
            reviewsSlider.classList.remove('paused');
            reviewsSlider.classList.remove('manual-control');
            reviewsSlider.style.transform = '';
            currentScroll = 0;
        }
    });

    reviewsSlider.addEventListener('touchcancel', () => {
        touchStarted = false;
        isPaused = false;
        reviewsSlider.classList.remove('paused');
        reviewsSlider.classList.remove('manual-control');
        reviewsSlider.style.transform = '';
        currentScroll = 0;
    });

    // Create modal for viewing reviews
    const reviewModal = document.createElement('div');
    reviewModal.className = 'review-modal';
    reviewModal.id = 'reviewModal';
    reviewModal.innerHTML = `
        <div class="review-modal-content">
            <span class="review-modal-close" id="reviewModalClose">&times;</span>
            <img src="" alt="Отзыв" id="reviewModalImg">
        </div>
    `;
    document.body.appendChild(reviewModal);

    const reviewModalClose = document.getElementById('reviewModalClose');
    const reviewModalImg = document.getElementById('reviewModalImg');

    // Open modal on click
    reviewItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            reviewModalImg.src = imgSrc;
            reviewModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeReviewModal() {
        reviewModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    reviewModalClose.addEventListener('click', closeReviewModal);

    reviewModal.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            closeReviewModal();
        }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && reviewModal.classList.contains('active')) {
            closeReviewModal();
        }
    });
}

// ==================== PRICING CARDS IMAGE MODAL ====================
const pricingCards = document.querySelectorAll('.pricing-card[data-image], .clickable-program[data-image]');

if (pricingCards.length > 0) {
    pricingCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on links or buttons
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            
            const imageSrc = card.getAttribute('data-image');
            if (imageSrc) {
                const reviewModalImg = document.getElementById('reviewModalImg');
                const reviewModal = document.getElementById('reviewModal');
                
                if (reviewModalImg && reviewModal) {
                    reviewModalImg.src = imageSrc;
                    reviewModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });
}

// ==================== DYNAMIC GREETING ====================
const hour = new Date().getHours();
let greeting = '';

if (hour < 12) greeting = 'Доброе утро';
else if (hour < 18) greeting = 'Добрый день';
else greeting = 'Добрый вечер';

console.log(`${greeting}! Добро пожаловать на страницу Dr. Kristina Alekseevna`);
