// Portfolio Application

const categories = {
    'video-editing': {
        title: 'Video Editing',
        tags: 'CUTS, COLOUR, RHYTHM',
        works: ['Long Form Videos', 'Clipper', 'Clips', 'Automated Videos', 'Video Presentations'],
        experiments: []
    },
    'graphic-designs': {
        title: 'Graphic Designs',
        tags: 'POSTERS, LAYOUTS, TYPE',
        works: ['Banners', 'Posts', 'Thumbnails', 'Professional Resumes', 'Logo Designs', 'PDF Presentations'],
        experiments: []
    },
    'automation-projects': {
        title: 'Automation Projects',
        tags: 'WORKFLOWS THAT RUN THEMSELVES',
        works: ['n8n Workflows'],
        experiments: []
    },
    '3d-blender': {
        title: '3D & Blender',
        tags: 'FORM, LIGHT, MATERIAL',
        works: [],
        experiments: []
    },
    'games-projects': {
        title: 'Games Projects',
        tags: 'PLAYABLE BUILDS',
        works: ['Roblox Games'],
        experiments: []
    },
    'github-repos': { title: 'Github Repos', tags: 'CODE IN THE OPEN', works: [], experiments: [] },
    'uiux-web-design': { title: 'UI/UX & Web Design', tags: 'INTERFACES AND FLOWS', works: [], experiments: [] },
    'experiments': { title: 'Experiments', tags: 'CURIOSITY, UNFILTERED', works: [], experiments: [] }
};

const subcategoryPreviews = {
    'Long Form Videos': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=280&fit=crop',
    'Clipper': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=280&fit=crop',
    'Clips': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=280&fit=crop',
    'Banners': 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=280&fit=crop',
    'Posts': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=280&fit=crop',
        'Professional Resumes': 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=280&fit=crop',
    'YouTube Thumbnails': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=280&fit=crop',
    'Thumbnails': 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=280&fit=crop',
    'Logo Designs': 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=280&fit=crop',
    'n8n Workflows': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=280&fit=crop',
    'Automated Videos': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=280&fit=crop',
    'ROBLOX Models': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=280&fit=crop',
    'PDF Presentations': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=280&fit=crop',
    'Video Presentations': 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=280&fit=crop',
    'Roblox Games': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=280&fit=crop'
};

function openCategory(categoryId) {
    console.log('Opening category:', categoryId);
    stopAllFlipbookVideos();
    const category = categories[categoryId];
    if (!category) {
        console.error('Category not found:', categoryId);
        return;
    }

    const detailPage = document.createElement('div');
    detailPage.className = 'detail-page active';

    const cTitle = catTitle(categoryId);
    const cTag = catTag(categoryId);

    if (!category.works || category.works.length === 0) {
        detailPage.innerHTML = '<div class="detail-header"><button class="back-btn" onclick="closeDetail()">' + _('backBtn') + '</button><div class="header-center"><h2>' + cTitle + '</h2></div><button class="close-btn" onclick="closeDetail()">X</button></div><div class="detail-content"><div class="empty-state"><p>' + _('comingSoon') + '</p></div></div>';
    } else {
        let subcategoriesHtml = '';
        for (let i = 0; i < category.works.length; i++) {
            const workName = category.works[i];
            const preview = subcategoryPreviews[workName] || 'placeholder';
            let previewHtml = '';

            if (preview === 'placeholder') {
                previewHtml = '<div class="placeholder-preview">' + subName(workName) + '</div>';
            } else if (preview.startsWith('http')) {
                previewHtml = '<img src="' + preview + '" alt="' + subName(workName) + '">';
            } else {
                const ext = preview.split('.').pop().toLowerCase();
                if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
                    previewHtml = '<img src="' + preview + '" alt="' + subName(workName) + '">';
                } else if (['mp4', 'webm', 'mov'].includes(ext)) {
                    previewHtml = '<video src="' + preview + '" muted></video>';
                } else {
                    previewHtml = '<div class="placeholder-preview">' + subName(workName) + '</div>';
                }
            }

            const workNameTr = subName(workName);
            subcategoriesHtml += '<div class="subcategory-card" onclick="openSubcategory(\'' + categoryId + '\', \'' + workName + '\')"><div class="subcategory-preview">' + previewHtml + '</div><div class="subcategory-content"><h3>' + workNameTr + '</h3></div></div>';
        }

        detailPage.innerHTML = '<div class="detail-header"><button class="back-btn" onclick="closeDetail()">' + _('backBtn') + '</button><div class="header-center"><h2>' + cTitle + '</h2></div><button class="close-btn" onclick="closeDetail()">X</button></div><div class="detail-content split-view"><div class="section-column"><h3 class="section-title">' + _('myWorks') + '</h3><div class="subcategory-grid">' + subcategoriesHtml + '</div></div><div class="section-column"><h3 class="section-title">' + _('myExperiments') + '</h3><div class="subcategory-grid"><div class="empty-placeholder">' + _('comingSoon') + '</div></div></div></div>';
    }

    document.body.appendChild(detailPage);
    document.body.style.overflow = 'hidden';
    console.log('Category opened:', categoryId);
}

function buildPageHTML(item) {
    var ext = item.file.split('.').pop().toLowerCase().split('?')[0];
    var mediaHtml = '';
    var title = itemTitle(item.title);

    if (['mp4', 'webm', 'mov'].includes(ext)) {
        mediaHtml = '<video class="page-media" controls><source src="' + item.file + '" type="video/' + ext + '"></video>';
    } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
        mediaHtml = '<img class="page-media" src="' + item.file + '" alt="" onclick="openImageModal(this.src)" style="cursor: pointer;">';
    } else if (ext === 'pdf') {
        mediaHtml = '<div class="page-file"><a href="' + item.file + '" target="_blank">' + _('openPdf') + '</a></div>';
    } else if (ext === 'json') {
        mediaHtml = '<div class="page-file"><a href="' + item.file + '" target="_blank">' + _('openJson') + '</a></div>';
    } else if (ext === 'glb') {
        mediaHtml = '<div class="page-file"><a href="' + item.file + '" target="_blank">' + _('model3d') + '</a></div>';
    } else {
        mediaHtml = '<div class="page-file">[' + title + ']</div>';
    }

    return '<div class="page-media-wrap">' + mediaHtml + '</div>';
}

function openImageModal(src) {
    var modal = document.getElementById('imageModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = '<div class="image-modal-content"><img id="modalImage" src="" alt=""><button class="modal-close" onclick="closeImageModal()">✕</button></div>';
        modal.onclick = function(e) { if (e.target === modal) closeImageModal(); };
        document.body.appendChild(modal);
    }
    document.getElementById('modalImage').src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Stop other videos when one starts playing
document.addEventListener('play', function(e) {
    var container = e.target.closest('.items-flipbook, .museum, .slots');
    if (!container) return;
    var allVideos = container.querySelectorAll('video');
    for (var i = 0; i < allVideos.length; i++) {
        if (allVideos[i] !== e.target) {
            allVideos[i].pause();
        }
    }
}, true);

// --- Flipbook Navigation (single page) ---
function flipPage(dir) {
    var stage = document.querySelector('#itemsFlipbook .flipbook-stage');
    var pages = stage ? stage.querySelectorAll('.flipbook-stage > .flipbook-page') : [];
    if (!pages.length) return;

    var currentIdx = -1;
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains('active')) { currentIdx = i; break; }
    }
    if (currentIdx === -1) return;

    var newIdx = currentIdx + dir;
    if (newIdx < 0 || newIdx >= pages.length) return;

    // Stop all videos in current page
    var currentPage = pages[currentIdx];
    var videos = currentPage.querySelectorAll('video');
    for (var v = 0; v < videos.length; v++) {
        videos[v].pause();
        videos[v].currentTime = 0;
    }

    var direction = dir > 0 ? 'forward' : 'backward';
    var newPage = pages[newIdx];

    // Animate current page out
    currentPage.classList.add('flip-' + direction);
    // Animate new page in
    newPage.classList.add('flip-' + direction + '-in');

    setTimeout(function() {
        currentPage.classList.remove('active', 'flip-forward', 'flip-backward');
        newPage.classList.remove('flip-forward-in', 'flip-backward-in');
        newPage.classList.add('active');

        // Update counter
        var counter = document.getElementById('flipbookCounter');
        if (counter) {
            counter.textContent = (newIdx + 1) + ' / ' + pages.length;
        }
    }, 500);
}

function stopAllFlipbookVideos() {
    var allVideos = document.querySelectorAll('.flipbook-page video, .items-flipbook video, .museum video, .slots video');
    for (var i = 0; i < allVideos.length; i++) {
        allVideos[i].pause();
        allVideos[i].currentTime = 0;
    }
}

// --- Slot Machine (Triple Reels) ---
var slotsState = { idx: 0, items: [], spinning: false, deg: 0 };

function slotsThumbHtml(item) {
    var ext = item.file.split('.').pop().toLowerCase().split('?')[0];
    if (['mp4', 'webm', 'mov'].includes(ext)) {
        return '<video class="reel-thumb" src="' + item.file + '" muted preload="metadata"></video>';
    }
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
        return '<img class="reel-thumb" src="' + item.file + '" alt="">';
    }
    return '<div class="reel-thumb reel-file">' + itemTitle(item.title) + '</div>';
}

function renderSlots() {
    var items = slotsState.items;
    var idx = slotsState.idx;
    if (!items.length) return;
    var prevIdx = (idx - 1 + items.length) % items.length;
    var nextIdx = (idx + 1) % items.length;

    var prevEl = document.getElementById('reelPrev');
    var nextEl = document.getElementById('reelNext');
    var centerEl = document.getElementById('slotsCenter');
    var counter = document.getElementById('slotsCounter');
    if (prevEl) prevEl.innerHTML = slotsThumbHtml(items[prevIdx]);
    if (nextEl) nextEl.innerHTML = slotsThumbHtml(items[nextIdx]);
    if (centerEl) centerEl.innerHTML = buildPageHTML(items[idx]);
    if (counter) counter.textContent = (idx + 1) + ' / ' + items.length;
}

function slotsSpin(dir) {
    var items = slotsState.items;
    if (slotsState.spinning || items.length < 2) return;
    slotsState.spinning = true;

    // Stop any playing video before the reels spin
    var center = document.getElementById('slotsCenter');
    if (center) {
        var vids = center.querySelectorAll('video');
        for (var v = 0; v < vids.length; v++) {
            vids[v].pause();
            vids[v].currentTime = 0;
        }
    }

    var reels = document.querySelectorAll('#slotsCenter, #reelPrev, #reelNext');
    for (var i = 0; i < reels.length; i++) reels[i].classList.add('slots-spinning');

    // Turn the dial wheel in the spin direction
    var wheel = document.getElementById('slotsWheel');
    if (wheel) {
        var prev = slotsState.deg || 0;
        // Wrap offset inside one stripe period (11px) so ridges never scroll out of view
        if (Math.abs(prev) > 44) {
            prev = prev % 11;
            wheel.classList.add('no-anim');
            wheel.style.setProperty('--spin', prev + 'px');
            void wheel.offsetWidth;
            wheel.classList.remove('no-anim');
        }
        slotsState.deg = prev - dir * 22;
        wheel.style.setProperty('--spin', slotsState.deg + 'px');
    }

    setTimeout(function() {
        slotsState.idx = (slotsState.idx + dir + items.length) % items.length;
        renderSlots();
        for (var i = 0; i < reels.length; i++) reels[i].classList.remove('slots-spinning');
        slotsState.spinning = false;
    }, 450);
}

document.addEventListener('wheel', function(e) {
    var slots = document.querySelector('.slots');
    if (!slots || !slots.contains(e.target)) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        slotsSpin(e.deltaY > 0 ? 1 : -1);
    }
}, { passive: false });

function openSubcategory(categoryId, subcategoryName) {
    stopAllFlipbookVideos();
    console.log('Opening subcategory:', categoryId, subcategoryName);
    const detailPage = document.querySelector('.detail-page');
    if (detailPage) detailPage.remove();

    const items = (typeof subcategoryData !== 'undefined' && subcategoryData[subcategoryName]) ? subcategoryData[subcategoryName] : [];
    console.log('Items found:', items.length);

    const newDetailPage = document.createElement('div');
    newDetailPage.className = 'detail-page active';

    // Build slot machine: triple reels (dimmed sides + lit center)
    slotsState.items = items;
    slotsState.idx = 0;
    slotsState.spinning = false;

    var slotsHtml = '';
    if (items.length === 0) {
        slotsHtml = '<p class="slots-empty">' + _('noItems') + '</p>';
    } else {
        slotsHtml = '<div class="slots"><div class="slots-reels"><div class="slots-reel slots-side" id="reelPrev"></div><div class="slots-reel slots-center"><div class="slots-window" id="slotsCenter"></div></div><div class="slots-reel slots-side" id="reelNext"></div></div><div class="slots-dial"><button type="button" class="slots-dial-btn" onmousedown="event.preventDefault()" onclick="slotsSpin(-1)" aria-label="Previous">▲</button><div class="slots-wheel" id="slotsWheel" onclick="slotsSpin(1)"></div><button type="button" class="slots-dial-btn" onmousedown="event.preventDefault()" onclick="slotsSpin(1)" aria-label="Next">▼</button></div></div>';
    }

    const subNameTr2 = subName(subcategoryName);
    newDetailPage.innerHTML = '<div class="detail-header"><button class="back-btn" onclick="openCategory(\'' + categoryId + '\')">' + _('backBtn') + '</button><div class="header-center"><h2>' + subNameTr2 + '</h2></div><button class="close-btn" onclick="closeDetail()">X</button></div><div class="detail-content split-view"><div class="section-column"><h3 class="section-title">' + _('myWorks') + '</h3>' + slotsHtml + '<div class="slots-controls"><span class="slots-counter" id="slotsCounter">1 / ' + items.length + '</span></div></div><div class="section-column"><h3 class="section-title">' + _('myExperiments') + '</h3><div class="museum-empty-block"><p>' + _('comingSoon') + '</p></div></div></div>';

    document.body.appendChild(newDetailPage);
    document.body.style.overflow = 'hidden';

    if (items.length > 0) renderSlots();

    console.log('Subcategory opened:', subcategoryName);
}

// Language System
const currentLang = { value: localStorage.getItem('portfolioLang') || 'EN' };

const uiText = {
    EN: {
        portfolio: "PORTFOLIO",
        name: "Muhammad Alkakouri",
        description: "Tap a card to open the drawer. Every section is filed in two parts<br>— Samples of my work, and my experiments.",
        footerConnect: "Let's connect",
        footerSections: "SECTIONS FILED",
        backBtn: "Back",
        myWorks: "Samples of my work",
        myExperiments: "MY EXPERIMENTS",
        comingSoon: "Coming soon...",
        openPdf: "Open PDF",
        openJson: "Open JSON",
        model3d: "3D Model",
        subcategoryItems: "SUBCATEGORY ITEMS",
        noItems: "No items available",
        subcategoryLabel: "Subcategory"
    },
    AR: {
        portfolio: "الملف الشخصي",
        name: "محمد الكعكوري",
        description: "انقر على أي بطاقة لفتح القسم. كل قسم مقسم إلى جزأين<br>— نماذج من أعمالي، وتجاربي.",
        footerConnect: "لنكن على تواصل",
        footerSections: "قسم محفوظ",
        backBtn: "رجوع",
        myWorks: "نماذج من أعمالي",
        myExperiments: "تجاربي",
        comingSoon: "قريباً...",
        openPdf: "فتح PDF",
        openJson: "فتح JSON",
        model3d: "نموذج 3D",
        subcategoryItems: "عناصر القسم الفرعي",
        noItems: "لا توجد عناصر متاحة",
        subcategoryLabel: "قسم فرعي"
    }
};

const catTitles = {
    EN: {
        'video-editing': 'Video Editing', 'graphic-designs': 'Graphic Designs', 'cvs': 'CVs',
        'thumbnails': 'Thumbnails', 'brand-identity': 'Brand Identity',
        'automation-projects': 'Automation Projects', 'ai-videos': 'AI Videos',
        '3d-blender': '3D & Blender', 'presentations': 'Presentations',
        'games-projects': 'Games Projects', 'github-repos': 'Github Repos',
        'uiux-web-design': 'UI/UX & Web Design', 'ai-experiments': 'AI Experiments',
        'personal-experiments': 'Personal Experiments'
    },
    AR: {
        'video-editing': 'تعديل الفيديو', 'graphic-designs': 'التصاميم الجرافيكية', 'cvs': 'السير الذاتية',
        'thumbnails': 'الصور المصغرة', 'brand-identity': 'هوية العلامة التجارية',
        'automation-projects': 'مشاريع الأتمتة', 'ai-videos': 'فيديوهات الذكاء الاصطناعي',
        '3d-blender': '3D وبلندر', 'presentations': 'العروض التقديمية',
        'games-projects': 'مشاريع الألعاب', 'github-repos': 'مستودعات جيتهاب',
        'uiux-web-design': 'تصميم واجهات المستخدم', 'ai-experiments': 'تجارب الذكاء الاصطناعي',
        'personal-experiments': 'تجارب شخصية'
    }
};

const catTags = {
    EN: {
        'video-editing': 'CUTS, COLOUR, RHYTHM', 'graphic-designs': 'POSTERS, LAYOUTS, TYPE',
        'cvs': 'RESUME SYSTEMS', 'thumbnails': 'MADE TO BE CLICKED',
        'brand-identity': 'MARKS AND SYSTEMS', 'automation-projects': 'WORKFLOWS THAT RUN THEMSELVES',
        'ai-videos': 'GENERATED MOTION', '3d-blender': 'FORM, LIGHT, MATERIAL',
        'presentations': 'DECKS WITH A SPINE', 'games-projects': 'PLAYABLE BUILDS',
        'github-repos': 'CODE IN THE OPEN', 'uiux-web-design': 'INTERFACES AND FLOWS',
        'ai-experiments': 'PROMPT TO PROTOTYPE', 'personal-experiments': 'CURIOSITY, UNFILTERED'
    },
    AR: {
        'video-editing': 'قص، ألوان، إيقاع', 'graphic-designs': 'بوسترات، تخطيط، طباعة',
        'cvs': 'نظام السير الذاتية', 'thumbnails': 'مصممة للنقر',
        'brand-identity': 'شعارات وأنظمة', 'automation-projects': 'سير عمل تعمل وحدها',
        'ai-videos': 'حركة مولدة', '3d-blender': 'شكل، إضاءة، مادة',
        'presentations': 'عروض بعمود فقري', 'games-projects': 'ألعاب قابلة للعب',
        'github-repos': 'كود مفتوح', 'uiux-web-design': 'واجهات وتدفقات',
        'ai-experiments': 'من الموجه للنموذج', 'personal-experiments': 'فضول، بدون تصفية'
    }
};

// Subcategory names translation
const subNames = {
    EN: {
        'Long Form Videos': 'Long Form Videos', 'Clipper': 'Clipper', 'Clips': 'Clips',
        'Banners': 'Banners', 'Posts': 'Posts', 'Book Covers': 'Book Covers', 'Thumbnails': 'Thumbnails',
        'Professional Resumes': 'Professional Resumes', 'YouTube Thumbnails': 'YouTube Thumbnails',
        'Logo Designs': 'Logo Designs', 'n8n Workflows': 'n8n Workflows', 'Automated Videos': 'Automated Videos',
        'ROBLOX Models': 'ROBLOX Models', 'PDF Presentations': 'PDF Presentations',
        'Video Presentations': 'Video Presentations', 'Roblox Games': 'Roblox Games'
    },
    AR: {
        'Long Form Videos': 'فيديوهات طويلة', 'Clipper': 'كليبات', 'Clips': 'مقاطع قصيرة',
        'Banners': 'بانرات', 'Posts': 'منشورات', 'Book Covers': 'أغلفة كتب', 'Thumbnails': 'تصاميم مصغرة',
        'Professional Resumes': 'سير ذاتية احترافية', 'YouTube Thumbnails': 'صور يوتيوب مصغرة',
        'Logo Designs': 'تصاميم شعارات', 'n8n Workflows': 'سير عمل n8n', 'Automated Videos': 'فيديوهات مؤتمتة',
        'ROBLOX Models': 'موديلات روبلوكس', 'PDF Presentations': 'عروض PDF',
        'Video Presentations': 'عروض فيديو', 'Roblox Games': 'ألعاب روبلوكس'
    }
};

// Item tags translation
const tagTrans = {
    EN: {},
    AR: {
        'Movie Summary': 'ملخص فيلم', 'Action Drama': 'دراما أكشن', 'Thriller': 'إثارة',
        'Action': 'أكشن', 'Crime Drama': 'جريمة دراما', 'Crime': 'جريمة',
        'Short Edit': 'تعديل قصير', 'Short': 'قصير', 'Creative': 'إبداعي',
        'Promotional': 'ترويجي', 'Professional Edit': 'تعديل احترافي',
        'Black & Red': 'أسود وأحمر', 'Channel Art': 'غلاف قناة',
        'YouTube Banner': 'بانر يوتيوب', 'Bee Illustration': 'رسم نحلة',
        'Minimalist': 'تصميم بسيط', 'Retro Style': 'ستايل ريترو',
        'Instagram': 'إنستغرام', 'Cover Design': 'تصميم غلاف', 'Concept': 'مفهوم',
        'Corporate Style': 'ستايل شركات', 'Professional': 'احترافي', 'Custom Design': 'تصميم مخصص',
        'Visual Resume': 'سيرة ذاتية بصرية', 'Fashion': 'موضة', 'Music': 'موسيقى',
        'List Style': 'ستايل قائمة', 'Roblox': 'روبلوكس', 'Strategy': 'استراتيجية',
        'Design': 'تصميم', 'Agriculture': 'زراعة', 'Biotech': 'تقنية حيوية',
        'Engineering': 'هندسة', 'Marketing': 'تسويق', 'Automation': 'أتمتة',
        '3D Model': 'نموذج ثلاثي الأبعاد', 'Clip': 'مقطع', 'Clipper Edit': 'تعديل كليب',
        'Video Presentation': 'عرض فيديو', 'AI Generated': 'مولد بالذكاء الاصطناعي',
        'AI Automated': 'مؤتمت بالذكاء الاصطناعي', 'Graphic Design': 'تصميم جرافيكي',
        'Visual Identity': 'هوية بصرية', 'Corporate': 'شركات', 'JSON': 'JSON',
        'Visual': 'بصري'
    }
};

// Item titles translation (only titles that differ between EN and AR)
const itemTitles = {
    'Video Clip 1': 'مقطع فيديو 1', 'Video Clip 2': 'مقطع فيديو 2', 'Video Clip 3': 'مقطع فيديو 3',
    'Video Clip 4': 'مقطع فيديو 4', 'Video Clip 5': 'مقطع فيديو 5', 'Video Clip 6': 'مقطع فيديو 6',
    'Video Clip 7': 'مقطع فيديو 7', 'Video Clip 8': 'مقطع فيديو 8', 'Video Clip 9': 'مقطع فيديو 9',
    'Clipper Edit 1': 'تعديل كليب 1', 'Clipper Edit 2': 'تعديل كليب 2', 'Clipper Edit 3': 'تعديل كليب 3',
    'Clipper Edit 4': 'تعديل كليب 4', 'Clipper Edit 5': 'تعديل كليب 5', 'Stream Clip': 'مقطع من البث',
    'Stream Moment 1': 'لحظة من البث 1', 'Stream Moment 2': 'لحظة من البث 2', 'Stream Moment 3': 'لحظة من البث 3',
    'Roblox Model 1': 'نموذج روبلوكس 1', 'Roblox Model 2': 'نموذج روبلوكس 2', 'Roblox Model 3': 'نموذج روبلوكس 3',
    'Black White Film Frames Birthday Video': 'فيديو عيد ميلاد بأطارات سينمائية',
    'Action Movie Summary': 'ملخص فيلم أكشن', 'Prison Action Story': 'قصة سجن أكشن',
    'Kidnapping Thriller': 'إثارة الخطف', 'Bodyguard Action': 'الحارس الشخصي',
    'Yakuza Revenge': 'انتقام الياكوزا', 'Undercover Criminal': 'المجرم تحت السِتر',
    'Crimson Grove  The Ancient Red Sap Cult\'s Deadly Secret': 'السر المميت لطائفة العصارة الحمراء القديمة',
    'Emerald Lake\'s Deadly Secret  The Green Feather Conspiracy': 'السر المميت لبحيرة الزمرد - مؤامرة الريش الأخضر',
    'Lake Haven\'s Darkest Secret_ The Cult of the Silent Lake': 'أغمض أسرار بحيرة الهافن - طائفة البحيرة الصامتة',
    'Obsidian Bluff  The Chilling Truth of the Obsidian Tear': 'هضبة الأوبسيديان - الحقيقة المزعجة لدمعة الأوبسيديان',
    'Ravenwood\'s Darkest Secret  The Silent Watcher Conspiracy': 'أغمض أسرار رافن وود - مؤامرة المراقب الصامت',
    'Snowbound Haven_ Unveiling the Winter Weaver\'s Chilling Legacy': 'الملاذ المحاصر بالثلج - إرث نائحة الشتاء المزعج',
    'The Golden Thread Murders  Unearthing Goldcrest\'s Darkest Secret': 'جرائم الخيط الذهبي - نبش أغمض أسرار غولدكريست',
    'The Silent Watcher  Ravenwood\'s Chilling Secret': 'المراقب الصامت - السر المزعج لرافن وود',
    'The Unsolved Disappearance of Sarah  A Detective\'s Decades Long Obsession': 'اختفاء سارة الغامض - هوس ضابط لعقود',
    'The Vanishing Astrophysicist  Unmasking the Desert\'s Ancient Cult': 'اختفاء عالمة الفيزياء الفلكية - كشف طائفة الصحراء القديمة',
    'The Vanishing Melody  Willow Creek\'s Chilling Cult of Sacrifice': 'الأنشودة المختفية - طائفة التضحية في بروك الصفصاف',
    'Vanished in the Mist  Uncovering Obsidian Hollow\'s Ancient Mirror Cult': 'اختفاء في الضباب - كشف طائفة المرآة القديمة في وادي الأوبسيديان',
    'Whispering Pines  The Town Where Ancient Fog Hides a Chilling Secret': 'الصنوبر الهامس - البلدة التي تخفي الضباب القديم سرًا مزعجًا',
    'The $600 Plant Secret - Cloning at Home': 'سر النبات 600 دولار - الاستنساخ في المنزل',
    'Banner 1': 'بانر 1', 'Banner 2': 'بانر 2', 'Banner 3': 'بانر 3', 'Banner 4': 'بانر 4',
    'Banner 5': 'بانر 5', 'Banner 6': 'بانر 6', 'Banner 7': 'بانر 7', 'Banner 8': 'بانر 8',
    'Banner 9': 'بانر 9', 'Banner 10': 'بانر 10', 'Banner 11': 'بانر 11', 'Banner 12': 'بانر 12',
    'Banner 13': 'بانر 13', 'Banner 14': 'بانر 14', 'Banner 15': 'بانر 15', 'Banner 16': 'بانر 16',
    'Banner 17': 'بانر 17', 'Banner 18': 'بانر 18', 'Banner 19': 'بانر 19',
    'Post 1': 'منشور 1', 'Post 2': 'منشور 2', 'Post 3': 'منشور 3', 'Post 4': 'منشور 4',
    'Post 5': 'منشور 5', 'Post 6': 'منشور 6', 'Post 7': 'منشور 7', 'Post 8': 'منشور 8',
    'Post 9': 'منشور 9', 'Post 10': 'منشور 10', 'Post 11': 'منشور 11', 'Post 12': 'منشور 12',
    'Post 13': 'منشور 13', 'Post 14': 'منشور 14', 'Post 15': 'منشور 15', 'Post 16': 'منشور 16',
    'Post 17': 'منشور 17', 'Post 18': 'منشور 18', 'Post 19': 'منشور 19', 'Post 20': 'منشور 20',
    'Post 21': 'منشور 21', 'Post 22': 'منشور 22',
    'Book Cover 1': 'غلاف كتاب 1', 'Book Cover 2': 'غلاف كتاب 2',
    'Book Concept 1': 'مفهوم كتاب 1', 'Book Concept 2': 'مفهوم كتاب 2',
    'Professional Resume': 'سيرة ذاتية احترافية', 'Graphic Designer Resume': 'سيرة مصمم جرافيك',
    'Mohammad AL_husenat CV': 'سيرة محمد الحسينات', 'Ola Saidam CV': 'سيرة علا سيدام',
    'Batoole99 Resume': 'سيرة باتول', 'CV Design 1': 'تصميم سيرة 1', 'CV Design 2': 'تصميم سيرة 2',
    'Thumbnail 1': 'صورة مصغرة 1', 'Thumbnail 2': 'صورة مصغرة 2', 'Thumbnail 3': 'صورة مصغرة 3', 'Thumbnail 4': 'صورة مصغرة 4',
    'Thumbnail 5': 'صورة مصغرة 5', 'Thumbnail 6': 'صورة مصغرة 6', 'Thumbnail 7': 'صورة مصغرة 7', 'Thumbnail 8': 'صورة مصغرة 8',
    'Thumbnail 9': 'صورة مصغرة 9', 'Thumbnail 10': 'صورة مصغرة 10', 'Thumbnail 11': 'صورة مصغرة 11', 'Thumbnail 12': 'صورة مصغرة 12',
    'Thumbnail 13': 'صورة مصغرة 13', 'Thumbnail 14': 'صورة مصغرة 14',
    'Brand Design 1': 'تصميم شعار 1', 'Brand Design 2': 'تصميم شعار 2', 'Brand Design 3': 'تصميم شعار 3',
    'Brand Design 4': 'تصميم شعار 4', 'Brand Design 5': 'تصميم شعار 5', 'Brand Design 6': 'تصميم شعار 6',
    'Brand Design 7': 'تصميم شعار 7', 'Brand Design 8': 'تصميم شعار 8', 'Brand Design 9': 'تصميم شعار 9',
    'Brand Design 10': 'تصميم شعار 10', 'Brand Design 11': 'تصميم شعار 11', 'Brand Design 12': 'تصميم شعار 12',
    'Brand Design 13': 'تصميم شعار 13', 'Brand Design 14': 'تصميم شعار 14', 'Brand Design 15': 'تصميم شعار 15',
    'Brand Design 16': 'تصميم شعار 16', 'Brand Design 17': 'تصميم شعار 17',
    'LinkedIn Outreach': 'التواصل عبر لينكدإن', 'Workflow 2': 'سير عمل 2', 'Workflow 3': 'سير عمل 3',
    'Workflow 4': 'سير عمل 4', 'Workflow 5': 'سير عمل 5', 'Workflow 6': 'سير عمل 6',
    'Workflow 7': 'سير عمل 7', 'Workflow 8': 'سير عمل 8', 'Workflow 9': 'سير عمل 9',
    'LinkedIn Outreach Config': 'إعدادات التواصل عبر لينكدإن', 'Shopify 3D Video': 'فيديو ثلاثي الأبعاد شوبيفاي',
    'Social Media Agent': 'وكيل وسائل التواصل',
    'Golden Harvest Market': 'سوق الحصاد الذهبي', 'Jericho Organic Dates': 'تمر أريحا العضوي',
    'Marketing Transformation': 'التحول التسويقي', 'Organic Medjool Farming': 'زراعة المجدول العضوي',
    'Organic Palm Protection': 'حماية النخيل العضوي', 'Precision Medjool Strategy': 'استراتيجية المجدول الدقيقة',
    'Precision Palm Hydrology': 'هيدرولوجيا النخيل الدقيقة', 'Rare Plant Tissue Culture': 'زراعة أنسجة نباتات نادرة',
    'Soil & Compost Engineering': 'هندسة التربة والمكمبوست',
    'Game Scene 1': 'مشهد لعبة 1', 'Game Scene 2': 'مشهد لعبة 2', 'Game Scene 3': 'مشهد لعبة 3',
    'Game Scene 4': 'مشهد لعبة 4', 'Game Scene 5': 'مشهد لعبة 5', 'Game Scene 6': 'مشهد لعبة 6',
    'Game Scene 7': 'مشهد لعبة 7', 'Game Scene 8': 'مشهد لعبة 8', 'Game Scene 9': 'مشهد لعبة 9',
    'Game Scene 10': 'مشهد لعبة 10', 'Game Scene 11': 'مشهد لعبة 11', 'Game Scene 12': 'مشهد لعبة 12',
    'Game Scene 13': 'مشهد لعبة 13', 'Game Scene 14': 'مشهد لعبة 14', 'Game Scene 15': 'مشهد لعبة 15',
    'Game Scene 16': 'مشهد لعبة 16', 'Game Scene 17': 'مشهد لعبة 17', 'Game Scene 18': 'مشهد لعبة 18',
    'Game Scene 19': 'مشهد لعبة 19', 'Game Scene 20': 'مشهد لعبة 20', 'Game Scene 21': 'مشهد لعبة 21',
    'Game Scene 22': 'مشهد لعبة 22', 'Game Scene 23': 'مشهد لعبة 23', 'Game Scene 24': 'مشهد لعبة 24',
    'Game Scene 25': 'مشهد لعبة 25', 'Game Scene 26': 'مشهد لعبة 26', 'Game Scene 27': 'مشهد لعبة 27',
    'Game Scene 28': 'مشهد لعبة 28', 'Game Scene 29': 'مشهد لعبة 29', 'Game Scene 30': 'مشهد لعبة 30',
    'Game Scene 31': 'مشهد لعبة 31', 'Game Scene 32': 'مشهد لعبة 32', 'Game Scene 33': 'مشهد لعبة 33',
    'Game Scene 34': 'مشهد لعبة 34', 'Game Scene 35': 'مشهد لعبة 35', 'Game Scene 36': 'مشهد لعبة 36',
    'Game Scene 37': 'مشهد لعبة 37', 'Game Scene 38': 'مشهد لعبة 38', 'Game Scene 39': 'مشهد لعبة 39',
    'Game Scene 40': 'مشهد لعبة 40', 'Game Scene 41': 'مشهد لعبة 41', 'Game Scene 42': 'مشهد لعبة 42',
    'Game Scene 43': 'مشهد لعبة 43', 'Game Scene 44': 'مشهد لعبة 44', 'Game Scene 45': 'مشهد لعبة 45',
    'Game Scene 46': 'مشهد لعبة 46', 'Game Scene 47': 'مشهد لعبة 47', 'Game Scene 48': 'مشهد لعبة 48',
    'Game Scene 49': 'مشهد لعبة 49', 'Game Scene 50': 'مشهد لعبة 50', 'Game Scene 51': 'مشهد لعبة 51',
    'Game Scene 52': 'مشهد لعبة 52', 'Game Scene 53': 'مشهد لعبة 53', 'Game Scene 54': 'مشهد لعبة 54',
    'Game Scene 55': 'مشهد لعبة 55', 'Game Scene 56': 'مشهد لعبة 56', 'Game Scene 57': 'مشهد لعبة 57',
    'Game Scene 58': 'مشهد لعبة 58', 'Game Scene 59': 'مشهد لعبة 59', 'Game Scene 60': 'مشهد لعبة 60',
    'Game Scene 61': 'مشهد لعبة 61', 'Game Scene 62': 'مشهد لعبة 62', 'Game Scene 63': 'مشهد لعبة 63',
    'Game Scene 64': 'مشهد لعبة 64', 'Game Scene 65': 'مشهد لعبة 65', 'Game Scene 66': 'مشهد لعبة 66',
    'Game Scene 67': 'مشهد لعبة 67', 'Game Scene 68': 'مشهد لعبة 68',
    'Thumbnail Design 1': 'تصميم صورة مصغرة 1', 'Thumbnail Design 2': 'تصميم صورة مصغرة 2', 'Thumbnail Design 3': 'تصميم صورة مصغرة 3',
    'Thumbnail Design 4': 'تصميم صورة مصغرة 4', 'Thumbnail Design 5': 'تصميم صورة مصغرة 5', 'Thumbnail Design 6': 'تصميم صورة مصغرة 6',
    'Thumbnail Design 7': 'تصميم صورة مصغرة 7', 'Thumbnail Design 8': 'تصميم صورة مصغرة 8', 'Thumbnail Design 9': 'تصميم صورة مصغرة 9',
    'Thumbnail Design 10': 'تصميم صورة مصغرة 10', 'Thumbnail Design 11': 'تصميم صورة مصغرة 11', 'Thumbnail Design 12': 'تصميم صورة مصغرة 12',
    'Thumbnail Design 13': 'تصميم صورة مصغرة 13', 'Thumbnail Design 14': 'تصميم صورة مصغرة 14',
    '3d_hoverboard': 'هوفر بورد 3D',
    '3december_day_2_scooter': 'سكوتر 3 ديسمبر اليوم 2',
    '4_day_apocalypse': 'نهاية العالم - اليوم 4',
    '8.5_inch_off_roader_hoverboard': 'هوفر بورد 8.5 إنش للأراضي الوعرة',
    'arcadia_longboard': 'لونغ بورد أركاديا',
    'backrooms_vr': 'الغرف الخلفية VR',
    'baiku_scooter': 'سكوتر بايكو',
    'big_man': 'الرجل الكبير',
    'bird_electric_scooters_trade__tryon_street': 'سكوترات كهربائية - تجربة الشارع',
    'black_hoverboard': 'هوفر بورد أسود',
    'blade_z_electric_scooter': 'سكوتر كهربائي بلد Z',
    'boat_zodiak': 'قارب زودياك',
    'brutalist_building': 'مبنى بريتالي',
    'brutalist_building (1)': 'مبنى بريتالي (1)',
    'building_platform': 'منصة مبنى',
    'camo_blue': 'تمويه أزرق',
    'car_box': 'صندوق سيارة',
    'cardboard_vine_platform': 'منصة لبلاب كرتون',
    'cartoon_snow_scooter': 'سكوتر ثلجي كرتوني',
    'character_posing_1': 'شخصية بوضعية 1',
    'character_posing_2': 'شخصية بوضعية 2',
    'classic_plain_blue': 'كلاسيكي أزرق بسيط',
    'classic_plain_red': 'كلاسيكي أحمر بسيط',
    'cloud': 'سحابة',
    'cyberpunk_scooter': 'سكوتر سايبر بانك',
    'davisvehicle': 'مركبة ديفيس',
    'day4_hoverboard': 'هوفر بورد اليوم 4',
    'diesel_punk_scooter': 'سكوتر ديزل بانك',
    'draft_2': 'مسودة 2',
    'dual_bbmodel_hoverboards': 'هوفر بوردات مزدوجة BBModel',
    'e-scooter': 'سكوتر كهربائي',
    'e-scooter_voi': 'سكوتر كهربائي VOI',
    'e_scooter': 'سكوتر كهربائي',
    'ekko_hoverboard_game-ready_fanart': 'هوفر بورد إيكو جاهز للعبة - فان آرت',
    'electric_scooter': 'سكوتر كهربائي',
    'electric_scooter (1)': 'سكوتر كهربائي (1)',
    'electric_scooter (2)': 'سكوتر كهربائي (2)',
    'electric_scooter (3)': 'سكوتر كهربائي (3)',
    'electric_scooter (4)': 'سكوتر كهربائي (4)',
    'electric_scooter___romobil': 'سكوتر كهربائي روموموبيل',
    'electric_scooter_model': 'نموذج سكوتر كهربائي',
    'electric_scooter_with_back_box': 'سكوتر كهربائي مع صندوق خلفي',
    'electric_scouter_concept': 'مفهوم سكوتر كهربائي',
    'electric_skateboard_onewheel': 'سكيت بورد كهربائي ون ويل',
    'electric_vehicle': 'مركبة كهربائية',
    'errie_dimension_baked': 'أبعاد غريبة - خرائط مخبوزة',
    'fix_platform_180_cm_sku_42932': 'منصة Fix 180 سم SKU 42932',
    'fix_price_brutalist_low_poly_psx': 'مبنى بريتالي منخفض المضلعات - Fix PSX',
    'flying_scooter_hoverbike': 'هوفر بايك طائر',
    'fortnite_hoverboard': 'هوفر بورد فورتنايت',
    'free_-_abyssal_greatsword_gameready': 'السيف العظيم الهاوي - مجاني وجاهز للعبة',
    'free_-_crimson_fiend_greatsword_gameready': 'السيف العظيم القرمزي للشيطان - مجاني وجاهز للعبة',
    'free__gold_skull_glory_sword_game-ready': 'سيف مجد الجمجمة الذهبي - مجاني وجاهز للعبة',
    'free__steampunk_da_vincis_sword_game-ready': 'سيف دافنشي ستيم بانك - مجاني وجاهز للعبة',
    'future_bike': 'دراجة مستقبلية',
    'futuristic_racing_car_-_molnia': 'سيارة سباق مستقبلية مولنيا',
    'galaxy_blue_hoverboard': 'هوفر بورد مجرة أزرق',
    'game_ready_wooden_stunt_ramp__low_poly': 'منحدر ستانت خشبي جاهز للعبة - منخفض المضلعات',
    'gorilla_tag_new_hoverboard': 'هوفر بورد جديد - قرد تاغ',
    'graffiti_blue_yellow__red': 'غرافيتي أزرق أصفر أحمر',
    'graffiti_pink_black': 'غرافيتي وردي أسود',
    'hand_jack': 'رافعة يدوية',
    'hawksbill_sea_turtle': 'سلاحف بحرية منقار الصقر',
    'ho_ho_hoverboard': 'هوفر بورد هو هو',
    'holo_shield_hoverboard': 'هوفر بورد درع هولوغرافي',
    'hover_kick_scooter': 'سكوتر ركض هوفر',
    'hover_scooter_wip': 'سكوتر هوفر قيد الإنجاز',
    'hoverboard': 'هوفر بورد',
    'hoverboard (1)': 'هوفر بورد (1)',
    'hoverboard (2)': 'هوفر بورد (2)',
    'hoverboard (3)': 'هوفر بورد (3)',
    'hoverboard (4)': 'هوفر بورد (4)',
    'hoverboard (5)': 'هوفر بورد (5)',
    'hoverboard (6)': 'هوفر بورد (6)',
    'hoverboard (7)': 'هوفر بورد (7)',
    'hoverboard_from_poly_by_google': 'هوفر بورد من Poly بواسطة Google',
    'hoverboard_from_poly_by_google (1)': 'هوفر بورد من Poly بواسطة Google (1)',
    'hoverboard_game_ready': 'هوفر بورد جاهز للعبة',
    'hovercraft': 'هوفر كرافت',
    'industrial_stunt_ramp__racing__drift_game_prop': 'منحدر ستانت صناعي سباق دريفت - معدة لعبة',
    'inflatable_boat': 'قارب قابل للنفخ',
    'kick_scooter': 'سكوتر ركض',
    'kid_s_scooter': 'سكوتر أطفال',
    'kids_scooter': 'سكوتر أطفال',
    'knee_rider_obj': 'متزلج الركبة OBJ',
    'leaf_spring': 'نابض ورق',
    'leaf_spring (1)': 'نابض ورق (1)',
    'lego_885_-_space_scooter': 'سكوتر فضائي ليجو 885',
    'lego_astro_scooter': 'سكوتر فلكي ليجو',
    'lego_space_scooter': 'سكوتر فضائي ليجو',
    'levitation_scooter': 'سكوتر تحليق',
    'lightning_black_hoverboard': 'هوفر بورد برق أسود',
    'lime_electric_scooter': 'سكوتر كهربائي ليموني',
    'low-poly_electric_scooter': 'سكوتر كهربائي منخفض المضلعات',
    'low_poly_pallet_jack': 'رافعة باليةت منخفضة المضلعات',
    'low_poly_wood_platform': 'منصة خشب منخفضة المضلعات',
    'lowpoly_scooter': 'سكوتر منخفض المضلعات',
    'maxedy_uttvm_claws': 'مخالب ماكسي UTTVM',
    'maxedy_uttvm_sword': 'سيف ماكسي UTTVM',
    'minecraft_electric_scooter': 'سكوتر كهربائي ماينكرافت',
    'minecraft_scooter_low_poly': 'سكوتر ماينكرافت منخفض المضلعات',
    'mobile_-_subway_surfers_-_hoverboard': 'هوفر بورد مترو سرفرز - موبايل',
    'modular_lowpoly_spaceships': 'مركبات فضائية معيارية منخفضة المضلعات',
    'motor_boat': 'قارب بمحرك',
    'muddy_electric_scooter': 'سكوتر كهربائي متوحل',
    'namis_waver': 'وايفر ناميس',
    'nasb_-_bamboo_platform': 'منصة بامبو NASB',
    'necron_shield': 'درع نيكرون',
    'ninebot_max_plus': 'ناين بوت ماكس بلس',
    'odds_hoverboard': 'هوفر بورد أودز',
    'off-road_segway': 'سيغوي للأراضي الوعرة',
    'okai_es600_e-scooter': 'سكوتر كهربائي أوكاي ES600',
    'old_brick_building__lowpoly': 'مبنى طوب قديم منخفض المضلعات',
    'onewheel_monument': 'نصب ون ويل',
    'onewheel_pint': 'ون ويل بانت',
    'onewheel_xr_3d_scan': 'مسح XR ثلاثي الأبعاد لـ ون ويل',
    'pacster_hoverboard_-_pmatga': 'هوفر بورد باكستر - Pmatga',
    'pallet-jack': 'رافعة باليةت',
    'pallet_jack': 'رافعة باليةت',
    'pallet_jack (1)': 'رافعة باليةت (1)',
    'pallet_jack (2)': 'رافعة باليةت (2)',
    'pallet_jack (3)': 'رافعة باليةت (3)',
    'pallet_truck': 'شاحنة باليةت',
    'patinete_monopatin_scooter_xiaomi_m365': 'سكوتر شاومي M365',
    'pegasus_hoverboard': 'هوفر بورد بيغاسوس',
    'platform_trolley': 'عربة منصة',
    'pos_scooter': 'سكوتر POS',
    'pos_scooter_-_slendytubbies_0': 'سكوتر POS - سليبنتوبيز 0',
    'razor_scooter': 'سكوتر ريزور',
    'retro_scooter': 'سكوتر ريترو',
    'rigged_low_poly_scifi_5050_hover_board': 'هوفر بورد خيال علمي 5050 مفصّل منخفض المضلعات',
    'robot_vacuum_cleaner_low_poly': 'مكنسة روبوتية منخفضة المضلعات',
    'rollerkinder': 'رولركيندر',
    'samokat_xyz_homework': 'ساموكات XYZ - واجب',
    'sci-fi_flying_scooter': 'سكوتر طائر خيال علمي',
    'sci-fi_hoverboard': 'هوفر بورد خيال علمي',
    'sci_fi_scooterochopper': 'سكوتر تشوبر خيال علمي',
    'scoocer': 'سكوتر',
    'scooping_room_blender_download': 'غرفة سكوبينغ من بلندر',
    'scoopter__3december_day2': 'سكوتر 3 ديسمبر اليوم 2',
    'scootaloos_scooter': 'سكوتر سكوتالوس',
    'scooter': 'سكوتر',
    'scooter (1)': 'سكوتر (1)',
    'scooter (2)': 'سكوتر (2)',
    'scooter (3)': 'سكوتر (3)',
    'scooter (4)': 'سكوتر (4)',
    'scooter (5)': 'سكوتر (5)',
    'scooter (6)': 'سكوتر (6)',
    'scooter (7)': 'سكوتر (7)',
    'scooter (8)': 'سكوتر (8)',
    'scooter (9)': 'سكوتر (9)',
    'scooter (10)': 'سكوتر (10)',
    'scooter (11)': 'سكوتر (11)',
    'scooter (12)': 'سكوتر (12)',
    'scooter (13)': 'سكوتر (13)',
    'scooter (14)': 'سكوتر (14)',
    'scooter (15)': 'سكوتر (15)',
    'scooter_-_3_december_2021_day_2': 'سكوتر 3 ديسمبر 2021 اليوم 2',
    'scooter_-_sparky_marky': 'سكوتر سباركي ماركي',
    'scooter_2': 'سكوتر 2',
    'scooter_2092_adk20013d-kunst_og_generalisering': 'سكوتر 2092 - فن وتعميم',
    'scooter_3december_prompt': 'سكوتر 3 ديسمبر - الموجّه',
    'scooter__3december21': 'سكوتر 3 ديسمبر 21',
    'scooter_chad': 'سكوتر تشاد',
    'scooter_december_challenge': 'سكوتر تحدي ديسمبر',
    'scooter_des_mers': 'سكوتر البحر',
    'scooter_from_poly_by_google': 'سكوتر من Poly بواسطة Google',
    'scooter_girl': 'سكوتر فتاة',
    'scooter_greenstyle': 'سكوتر ستايل أخضر',
    'scooter_minecraft': 'سكوتر ماينكرافت',
    'scooter_pixel_art': 'سكوتر بكسل آرت',
    'scooter_patinete_electrico_m365': 'سكوتر كهربائي M365',
    'scooter_s3_new2': 'سكوتر S3 جديد 2',
    'scooter_urent': 'سكوتر أوران',
    'scooter_wip2': 'سكوتر قيد الإنجاز 2',
    'scootie_mc_scooter': 'سكوتي MC سكوتر',
    'scrooser': 'سكوتر',
    'sea_scooter_yellow': 'سكوتر بحري أصفر',
    'sea_turtle': 'سلاحف بحرية',
    'segway_one': 'سيغوي ون',
    'ship_scooter_robot': 'سفينة سكوتر روبوت',
    'simple_platform_trolley': 'عربة منصة بسيطة',
    'skateboard': 'سكيت بورد',
    'skateboard (1)': 'سكيت بورد (1)',
    'skullboard_s3_electric_skateboard': 'سكيت بورد جمجمة S3 كهربائي',
    'sky_slyder_-_omega_build': 'سلايدر السماء أوميغا',
    'sled': 'زلاجة',
    'space_scooter_chameleon_base': 'سكوتر فضائي قمري - أساسي',
    'space_scooter_concept': 'مفهوم سكوتر فضائي',
    'spin_scooters': 'سكوترات دوارة',
    'steampunk_hoverboard': 'هوفر بورد ستيم بانك',
    'street_scooter': 'سكوتر شوارع',
    'stunt_scooter': 'سكوتر ستانت',
    'stylized__e-scooter': 'سكوتر كهربائي منمّق',
    'subway_surfers_hoverboard': 'هوفر بورد مترو سرفرز',
    'swamp_hoverboard': 'هوفر بورد المستنقع',
    'textured_scooter_revisted': 'سكوتر مقفّى - نسخة محدّثة',
    'the_magic_carpet': 'السجادة السحرية',
    'the_one_wheel_hover_board': 'هوفر بورد ون ويل',
    'thermo_runaway_scooter': 'سكوتر انحراف حراري',
    'tricycle': 'دراجة ثلاثية العجلات',
    'two-wheeler_vehicles_pack_low-poly': 'حزمة مركبات بعجلتين منخفضة المضلعات',
    'urban_interior_moody_vr_room_baked': 'غرفة VR داخلية حضرية - خرائط مخبوزة',
    'vespa_150_tap': 'فيسبا 150 TAP',
    'vespa_px125_with_ground_and_tree': 'فيسبا PX125 مع الأرض والشجرة',
    'vespa_scooter': 'سكوتر فيسبا',
    'wooden_scooter_-_day_2': 'سكوتر خشبي - اليوم 2',
    'xiaomi_scooter': 'سكوتر شاومي',
    'xyz_daily._day_4._hoverboard': 'هوفر بورد XYZ يومي - اليوم 4',
    'zippy_scooter': 'سكوتر زيبّي',
};

function _(key) {
    return uiText[currentLang.value][key] || key;
}

function catTitle(id) { return catTitles[currentLang.value][id] || categories[id].title; }
function catTag(id) { return catTags[currentLang.value][id] || categories[id].tags; }
function subName(name) { return subNames[currentLang.value][name] || name; }
function tagName(tag) { return tagTrans[currentLang.value][tag] || tag; }

// Arabic item titles -> English
const itemTitlesEn = {
    '__في UTS، نؤمن أن التصميم الاستثنائي يبدأ من التفاصيل✨اكتشفوا 8 أسرار نعتمدها لنقدم تصاميم عصرية': 'UTS: Exceptional Design Starts in the Details - 8 Secrets Behind Our Modern Designs',
    'الجمال يكمن في التفاصيل.. جولة في احدث ابداعاتنا 👷🏻_♂️🤍': 'Beauty Lies in the Details - A Tour of Our Latest Creations',
    'بين المخطط والواقع - اهلا بكم في مكتبنا الجديد 🤍✨': 'Between Blueprint and Reality - Welcome to Our New Office',
    'وراء كل مشروع مميز ، عميل اعطانا الثقة': 'Behind Every Distinguished Project, a Client Who Trusted Us',
    'استراتيجية التسويق الرقمي': 'Digital Marketing Strategy'
};

// Translate an item title; fall back to the original for unknowns
function itemTitle(title) {
    if (currentLang.value === 'AR') return itemTitles[title] || title;
    return itemTitlesEn[title] || title;
}

function toggleLanguage() {
    currentLang.value = currentLang.value === 'EN' ? 'AR' : 'EN';
    localStorage.setItem('portfolioLang', currentLang.value);
    applyLanguage();
}

function applyLanguage() {
    const lang = currentLang.value;

    // Close any open detail page to avoid mixed language
    closeDetail();

    // Button visual
    const btn = document.querySelector('.lang-toggle');
    if (btn) {
        const spans = btn.querySelectorAll('.lang-text');
        spans[0].classList.toggle('inactive', lang !== 'EN');
        spans[1].classList.toggle('inactive', lang !== 'AR');
    }

    // RTL for Arabic
    document.documentElement.lang = lang === 'AR' ? 'ar' : 'en';
    const dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.body.style.direction = dir;
    document.body.setAttribute('dir', dir);

    // Title
    document.title = _('name') + ' - Portfolio';

    // Header text
    const subtitle = document.getElementById('headerSubtitle');
    const nameEl = document.getElementById('headerName');
    if (subtitle) subtitle.textContent = _('portfolio');
    if (nameEl) nameEl.textContent = _('name');

    // Static text
    const desc = document.getElementById('headerDesc');
    if (desc) desc.innerHTML = _('description');

    const footerConnect = document.querySelector('footer p:first-child');
    const footerSections = document.querySelector('.sections-count');
    if (footerConnect) footerConnect.textContent = _('footerConnect');
    if (footerSections) footerSections.textContent = '8 ' + _('footerSections');

    // Card titles on main page
    const cardMap = {
        'video-editing': 0, 'graphic-designs': 1, 'github-repos': 2,
        'games-projects': 3, 'automation-projects': 4, 'uiux-web-design': 5,
        '3d-blender': 6, 'experiments': 7
    };
    const cards = document.querySelectorAll('.card');
    Object.entries(cardMap).forEach(([id, idx]) => {
        if (cards[idx]) {
            const titleEl = cards[idx].querySelector('h3');
            const tagEl = cards[idx].querySelector('.tags');
            if (titleEl) titleEl.textContent = catTitle(id);
            if (tagEl) tagEl.textContent = catTag(id);
        }
    });
}

function closeDetail() {
    stopAllFlipbookVideos();
    console.log('Closing detail');
    const detailPage = document.querySelector('.detail-page');
    if (detailPage) detailPage.remove();
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDetail();
});

// Apply on load
document.addEventListener('DOMContentLoaded', applyLanguage);

// Recalculate slot sizes on window resize
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        if (slotsState.items.length > 0) renderSlots();
    }, 150);
});

console.log('Portfolio script loaded successfully');
