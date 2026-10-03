// Portfolio data structure - reorganized by folder structure
const categories = {
    'video-editing': {
        title: 'Video Editing',
        tags: 'CUTS, COLOUR, RHYTHM',
        subcategories: [
            {
                title: 'Long Form Videos',
                items: [
                    { title: 'Action Movie Summary', tags: 'Movie Summary', file: 'assets/long/videos/محترف فنون قتالية علم ابنة مهارة قتاليه خطيرة عشان ينتقم من اصحابة الي بيتنمروا علية!_ملخص فيلم اكشن.mp4' },
                    { title: 'Prison Action Story', tags: 'Action Drama', file: 'assets/long/بعد ما مسكوه ورموه في أخطر سجن.. وقف قدام أشرس المجرمين وحوّل السجن وشوارع الهند لحرب مايشوفوش زيها!.mp4' },
                    { title: 'Kidnapping Thriller', tags: 'Thriller', file: 'assets/long/بيخطفه حبيبته منه فاكرينه عيل طري وضعيف لكن ميعرفوش انه اخطر منهم بكتيرر_ملخص فيلم.mp4' },
                    { title: 'Bodyguard Action', tags: 'Action', file: 'assets/long/رجل عصابات بيخـ ـطف فتاة غنية، لكن ميعرفش ان الحارس بتعها اشرس ظابط ف امريكا كلها_ملخص فيلم.mp4' },
                    { title: 'Yakuza Revenge', tags: 'Crime Drama', file: 'assets/long/قاتل محترف قرر يتوب بس الياكوزا موفقوش وقتلوا علته وسجنوه لمدة 15 سنه لكن رجع تاني يندمهم ع مل حاجه!.mp4' },
                    { title: 'Undercover Criminal', tags: 'Crime', file: 'assets/long/يبان لكل الناس ان هو قزم غلبان لكن ميعرفوش انه اخطر مجرم ومدوخ الكل وراه_ملخص فيلم.mp4' }
                ]
            },
            {
                title: 'Clips',
                items: [
                    { title: 'Short Clip 1', tags: 'Short Edit', file: 'assets/clips/0917(2).mp4' },
                    { title: 'Short Clip 2', tags: 'Short Edit', file: 'assets/clips/0917(3).mp4' },
                    { title: 'Short Clip 3', tags: 'Short Edit', file: 'assets/clips/0917(4).mp4' },
                    { title: 'Short Clip 4', tags: 'Short Edit', file: 'assets/clips/0917(5).mp4' },
                    { title: 'Short Clip 5', tags: 'Short Edit', file: 'assets/clips/0917(6).mp4' },
                    { title: 'Birthday Film', tags: 'Creative', file: 'assets/short/Black White Film Frames Birthday Video.mp4' },
                    { title: 'Architecture Tour', tags: 'Promotional', file: 'assets/short/الجمال يكمن في التفاصيل.. جولة في احدث ابداعاتنا 👷🏻_♂️🤍.mp4' },
                    { title: 'Office Reveal', tags: 'Promotional', file: 'assets/short/بين المخطط والواقع - اهلا بكم في مكتبنا الجديد 🤍✨.mp4' }
                ]
            },
            {
                title: 'Clipper Edits',
                items: [
                    { title: 'Clipper Edit 1', tags: 'Professional Edit', file: 'assets/clips/New folder/0917(2).mp4' },
                    { title: 'Clipper Edit 2', tags: 'Professional Edit', file: 'assets/clips/New folder/0917(3).mp4' },
                    { title: 'Clipper Edit 3', tags: 'Professional Edit', file: 'assets/clips/New folder/0917(4).mp4' },
                    { title: 'Clipper Edit 4', tags: 'Professional Edit', file: 'assets/clips/New folder/0917(5).mp4' },
                    { title: 'Clipper Edit 5', tags: 'Professional Edit', file: 'assets/clips/New folder/0917(6).mp4' }
                ]
            }
        ]
    },
    'graphic-designs': {
        title: 'Graphic Designs',
        tags: 'POSTERS, LAYOUTS, TYPE',
        subcategories: [
            {
                title: 'Banners',
                items: [
                    { title: 'Advertising Facebook Cover', tags: 'Black & Red', file: 'assets/banners/Black and Red Modern Advertising Company Facebook Cover.png' },
                    { title: 'Magic YouTube Banner', tags: 'Channel Art', file: 'assets/banners/Black and Red Professional Magic Youtube Channel Art.png' },
                    { title: 'Cooking Channel Art', tags: 'YouTube Banner', file: 'assets/banners/Black Cooking Channel YouTube Channel Art.png' },
                    { title: 'Gaming YouTube Art', tags: 'Bee Illustration', file: 'assets/banners/Black Yellow Illustration Bee Gaming YouTube Channel Art.png' },
                    { title: 'Beauty Tips Banner', tags: 'Minimalist', file: 'assets/banners/Brown White MInimalist Beauty Tips YouTube Channel Art.png' },
                    { title: 'Music Banner', tags: 'Retro Style', file: 'assets/banners/Orange Retro Music YouTube Banner.png' }
                ]
            },
            {
                title: 'Posts',
                items: [
                    { title: 'Social Media Post 1', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173719.png' },
                    { title: 'Social Media Post 2', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173732.png' },
                    { title: 'Social Media Post 3', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173749.png' },
                    { title: 'Social Media Post 4', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174226.png' },
                    { title: 'Social Media Post 5', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174241.png' },
                    { title: 'Social Media Post 6', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174254.png' }
                ]
            },
            {
                title: 'Books',
                items: [
                    { title: 'Book Cover 1', tags: 'Cover Design', file: 'assets/books/0c50dbee-8a79-4e22-b88a-2f75f250b60e.jpg' },
                    { title: 'Book Cover 2', tags: 'Cover Design', file: 'assets/books/7f4397f4-6ccb-421c-a491-acb7e83efb8e.jpg' },
                    { title: 'Book Concept 1', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171352.png' },
                    { title: 'Book Concept 2', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171406.png' }
                ]
            }
        ]
    },
    'cvs': {
        title: 'CVs',
        tags: 'RESUME SYSTEMS',
        subcategories: [
            {
                title: 'Professional Resumes',
                items: [
                    { title: 'Professional Resume', tags: 'Corporate Style', file: 'assets/CVs/Professional CV Resume.pdf' },
                    { title: 'Graphic Designer Resume', tags: 'Minimalist', file: 'assets/CVs/Brown Cream Aesthetic Minimalist Graphic Designer Resume.pdf' },
                    { title: 'Mohammad AL_husenat CV', tags: 'Professional', file: 'assets/CVs/Mohammad AL_husenat.pdf' },
                    { title: 'Ola Saidam CV', tags: 'Professional', file: 'assets/CVs/Ola Saidam cv 2.pdf' },
                    { title: 'Batoole99 Resume', tags: 'Custom Design', file: 'assets/CVs/batoole99.pdf' },
                    { title: 'CV Design 1', tags: 'Visual Resume', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AM.jpeg' },
                    { title: 'CV Design 2', tags: 'Visual Resume', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AMlml.jpeg' }
                ]
            }
        ]
    },
    'thumbnails': {
        title: 'Thumbnails',
        tags: 'MADE TO BE CLICKED',
        subcategories: [
            {
                title: 'YouTube Thumbnails',
                items: [
                    { title: 'Urban Outfit Thumbnail', tags: 'Fashion', file: 'assets/thumbs/Black and Brown Modern Urban Outfit Recommendations Youtube Thumbnail.png' },
                    { title: 'Music Playlist', tags: 'Music', file: 'assets/thumbs/Orange and White Simple Music Playlist Youtube Thumbnail.png' },
                    { title: 'Top 3 Design', tags: 'List Style', file: 'assets/thumbs/top3.jpg' },
                    { title: 'Top 4 Design', tags: 'List Style', file: 'assets/thumbs/top4.jpg' },
                    { title: 'Thumbnail Concept 1', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.53 AM (1).jpeg' },
                    { title: 'Thumbnail Concept 2', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.53 AM (2).jpeg' },
                    { title: 'Thumbnail Concept 3', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.54 AM (1).jpeg' }
                ]
            }
        ]
    },
    'brand-identity': {
        title: 'Brand Identity',
        tags: 'MARKS AND SYSTEMS',
        subcategories: [
            {
                title: 'Logo Designs',
                items: [
                    { title: 'Logo Design 1', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 103942.png' },
                    { title: 'Logo Design 2', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104002.png' },
                    { title: 'Logo Design 3', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104011.png' },
                    { title: 'Logo Design 4', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104017.png' },
                    { title: 'Logo Design 5', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104024.png' },
                    { title: 'Logo Design 6', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104056.png' },
                    { title: 'Brand Concept 1', tags: 'Branding', file: 'assets/brand/WhatsApp Image 2026-09-18 at 10.47.19 AM.jpeg' },
                    { title: 'Brand Concept 2', tags: 'Branding', file: 'assets/brand/WhatsApp Image 2026-09-18 at 10.50.03 AM.jpeg' },
                    { title: 'Brand Concept 3', tags: 'Branding', file: 'assets/brand/WhatsApp Image 2026-09-18 at 10.51.55 AM (3).jpeg' }
                ]
            }
        ]
    },
    'automation-projects': {
        title: 'Automation Projects',
        tags: 'WORKFLOWS THAT RUN THEMSELVES',
        subcategories: [
            {
                title: 'n8n Workflows',
                items: [
                    { title: 'LinkedIn Outreach Workflow', tags: 'n8n Automation', file: 'assets/n8n/Screenshot 2026-09-18 092826.png' },
                    { title: 'n8n JSON Workflow', tags: 'Workflow Config', file: 'assets/n8n/n8n-personalized-linkedin-outreach-workflow.json' }
                ]
            }
        ]
    },
    'ai-videos': {
        title: 'AI Videos',
        tags: 'GENERATED MOTION',
        subcategories: [
            {
                title: 'AI Generated Stories',
                items: [
                    { title: 'Crimson Grove Mystery', tags: 'AI Storytelling', file: 'assets/long/ai automation/Crimson Grove  The Ancient Red Sap Cult\'s Deadly Secret.mp4' },
                    { title: 'Emerald Lake Secret', tags: 'AI Storytelling', file: 'assets/long/ai automation/Emerald Lake\'s Deadly Secret  The Green Feather Conspiracy.mp4' },
                    { title: 'Lake Haven Mystery', tags: 'AI Storytelling', file: 'assets/long/ai automation/Lake Haven\'s Darkest Secret_ The Cult of the Silent Lake.mp4' },
                    { title: 'Obsidian Bluff Mystery', tags: 'AI Storytelling', file: 'assets/long/ai automation/Obsidian Bluff  The Chilling Truth of the Obsidian Tear.mp4' },
                    { title: 'Ravenwood Conspiracy', tags: 'AI Storytelling', file: 'assets/long/ai automation/Ravenwood\'s Darkest Secret  The Silent Watcher Conspiracy.mp4' },
                    { title: 'Snowbound Haven', tags: 'AI Storytelling', file: 'assets/long/ai automation/Snowbound Haven_ Unveiling the Winter Weaver\'s Chilling Legacy.mp4' },
                    { title: 'Golden Thread Murders', tags: 'AI Storytelling', file: 'assets/long/ai automation/The Golden Thread Murders  Unearthing Goldcrest\'s Darkest Secret.mp4' },
                    { title: 'The Silent Watcher', tags: 'AI Storytelling', file: 'assets/long/ai automation/The Silent Watcher  Ravenwood\'s Chilling Secret.mp4' },
                    { title: 'Sarah\'s Disappearance', tags: 'AI Storytelling', file: 'assets/long/ai automation/The Unsolved Disappearance of Sarah  A Detective\'s Decades Long Obsession.mp4' },
                    { title: 'Vanishing Astrophysicist', tags: 'AI Mystery', file: 'assets/long/ai automation/The Vanishing Astrophysicist  Unmasking the Desert\'s Ancient Cult.mp4' },
                    { title: 'Vanishing Melody', tags: 'AI Mystery', file: 'assets/long/ai automation/The Vanishing Melody  Willow Creek\'s Chilling Cult of Sacrifice.mp4' },
                    { title: 'Vanished in the Mist', tags: 'AI Mystery', file: 'assets/long/ai automation/Vanished in the Mist  Uncovering Obsidian Hollow\'s Ancient Mirror Cult.mp4' },
                    { title: 'Whispering Pines', tags: 'AI Mystery', file: 'assets/long/ai automation/Whispering Pines  The Town Where Ancient Fog Hides a Chilling Secret.mp4' }
                ]
            }
        ]
    },
    '3d-blender': {
        title: '3D & Blender',
        tags: 'FORM, LIGHT, MATERIAL',
        subcategories: [
            {
                title: 'ROBLOX Models',
                items: [
                    { title: '3D Hoverboard', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/3d_hoverboard.glb' },
                    { title: 'Scooter Model', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/3december_day_2_scooter.glb' },
                    { title: 'Off-Road Hoverboard', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/8.5_inch_off_roader_hoverboard.glb' },
                    { title: 'Apocalypse Scene', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/4_day_apocalypse.glb' },
                    { title: 'Arcadia Longboard', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/arcadia_longboard.glb' },
                    { title: 'Backrooms VR', tags: '3D Environment', file: 'assets/RobloxContent/ROBLOX MODELS/backrooms_vr.glb' },
                    { title: 'Baiku Scooter', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/baiku_scooter.glb' },
                    { title: 'Black Hoverboard', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/black_hoverboard.glb' },
                    { title: 'Brutalist Building', tags: 'Architecture', file: 'assets/RobloxContent/ROBLOX MODELS/brutalist_building.glb' },
                    { title: 'Cyberpunk Scooter', tags: '3D Model', file: 'assets/RobloxContent/ROBLOX MODELS/cyberpunk_scooter.glb' }
                ]
            }
        ]
    },
    'presentations': {
        title: 'Presentations',
        tags: 'DECKS WITH A SPINE',
        subcategories: [
            {
                title: 'PDF Presentations',
                items: [
                    { title: 'Golden Harvest Market', tags: 'Agriculture', file: 'assets/presentation/Golden_Harvest_Market_Excellence.pdf' },
                    { title: 'Jericho Organic Farming', tags: 'Agriculture', file: 'assets/presentation/Jericho_Organic_Date_Farming.pdf' },
                    { title: 'Marketing Transformation', tags: 'Business', file: 'assets/presentation/Marketing_Transformation_Blueprint.pdf' },
                    { title: 'Organic Medjool Farming', tags: 'Agriculture', file: 'assets/presentation/Organic_Medjool_Farming_Blueprint.pdf' },
                    { title: 'Soil Engineering', tags: 'Technical', file: 'assets/presentation/Soil_and_Compost_Engineering.pdf' }
                ]
            },
            {
                title: 'Video Presentations',
                items: [
                    { title: 'Plant Cloning Secret', tags: 'Educational Video', file: 'assets/long/preaentations/The_$600_Plant_Secret__Cloning_at_Home.mp4' },
                    { title: 'Digital Marketing Strategy', tags: 'Business Video', file: 'assets/long/preaentations/استراتيجية_التسويق_الرقمي.mp4' }
                ]
            }
        ]
    },
    'games-projects': {
        title: 'Roblox Games',
        tags: 'PLAYABLE BUILDS',
        subcategories: [
            {
                title: 'Game Screenshots',
                items: [
                    { title: 'Roblox Game Scene 1', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 104803.png' },
                    { title: 'Roblox Game Scene 2', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 114742.png' },
                    { title: 'Roblox Game Scene 3', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 114814.png' },
                    { title: 'Roblox Game Scene 4', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 133526.png' },
                    { title: 'Roblox Game Scene 5', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 133614.png' },
                    { title: 'Roblox Game Scene 6', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 143326.png' },
                    { title: 'Roblox Game Scene 7', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-17 143333.png' },
                    { title: 'Roblox Game Scene 8', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-18 163333.png' },
                    { title: 'Roblox Game Scene 9', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-18 163349.png' },
                    { title: 'Roblox Game Scene 10', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-18 163421.png' },
                    { title: 'Roblox Game Scene 11', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-19 072213.png' },
                    { title: 'Roblox Game Scene 12', tags: 'Game Development', file: 'assets/RobloxContent/Screenshot 2026-08-19 074649.png' }
                ]
            }
        ]
    },
    'github-repos': {
        title: 'Github Repos',
        tags: 'CODE IN THE OPEN',
        subcategories: []
    },
    'uiux-web-design': {
        title: 'UI/UX & Web Design',
        tags: 'INTERFACES AND FLOWS',
        subcategories: []
    },
    'ai-experiments': {
        title: 'AI Experiments',
        tags: 'PROMPT TO PROTOTYPE',
        subcategories: []
    },
    'personal-experiments': {
        title: 'Personal Experiments',
        tags: 'CURIOSITY, UNFILTERED',
        subcategories: []
    }
};

function openCategory(categoryId) {
    const category = categories[categoryId];
    if (!category) return;

    // If no subcategories, show empty state
    if (!category.subcategories || category.subcategories.length === 0) {
        const detailPage = document.createElement('div');
        detailPage.className = 'detail-page active';
        detailPage.innerHTML = `
            <div class="detail-header">
                <button class="close-btn" onclick="closeDetail()">✕</button>
                <p class="tags-line">${category.tags}</p>
                <h2>${category.title}</h2>
            </div>
            <div class="detail-content">
                <div class="empty-state">
                    <p>Coming Soon...</p>
                </div>
            </div>
        `;
        document.body.appendChild(detailPage);
        document.body.style.overflow = 'hidden';
        return;
    }

    // Create detail page with subcategories as sticker cards
    const detailPage = document.createElement('div');
    detailPage.className = 'detail-page active';

    detailPage.innerHTML = `
        <div class="detail-header">
            <button class="close-btn" onclick="closeDetail()">✕</button>
            <p class="tags-line">${category.tags}</p>
            <h2>${category.title}</h2>
        </div>

        <div class="subcategory-grid">
            ${category.subcategories.map((sub, index) => `
                <div class="subcategory-card" onclick="openSubcategory('${categoryId}', ${index})">
                    <div class="subcategory-content">
                        <h3>${sub.title}</h3>
                        <p class="subcategory-count">${sub.items.length} items</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.body.appendChild(detailPage);
    document.body.style.overflow = 'hidden';
}

function openSubcategory(categoryId, subcategoryIndex) {
    const category = categories[categoryId];
    const subcategory = category.subcategories[subcategoryIndex];

    // Remove current detail page
    const currentDetail = document.querySelector('.detail-page');
    if (currentDetail) currentDetail.remove();

    // Create subcategory detail page
    const detailPage = document.createElement('div');
    detailPage.className = 'detail-page active';

    detailPage.innerHTML = `
        <div class="detail-header">
            <button class="close-btn" onclick="closeDetail()">✕</button>
            <button class="back-btn" onclick="openCategory('${categoryId}')">← Back</button>
            <p class="tags-line">${category.tags}</p>
            <h2>${subcategory.title}</h2>
        </div>

        <div class="detail-content">
            <div class="section-column full-width">
                <h3 class="section-title">MY WORKS</h3>
                <div class="items-grid">
                    ${subcategory.items.map(item => {
                        const ext = item.file.split('.').pop().toLowerCase();
                        let mediaHtml = '';

                        if (['mp4', 'webm', 'mov'].includes(ext)) {
                            mediaHtml = `<video class="item-image" controls>
                                <source src="${item.file}" type="video/${ext}">
                            </video>`;
                        } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
                            mediaHtml = `<img class="item-image" src="${item.file}" alt="${item.title}">`;
                        } else if (ext === 'pdf') {
                            mediaHtml = `<div class="item-image pdf-preview">
                                <a href="${item.file}" target="_blank">📄 View PDF</a>
                            </div>`;
                        } else if (ext === 'json') {
                            mediaHtml = `<div class="item-image json-preview">
                                <a href="${item.file}" target="_blank">{ } View JSON</a>
                            </div>`;
                        } else if (ext === 'glb') {
                            mediaHtml = `<div class="item-image glb-preview">
                                <a href="${item.file}" target="_blank">🎮 3D Model</a>
                            </div>`;
                        } else {
                            mediaHtml = `<div class="item-image">[${item.title}]</div>`;
                        }

                        return `
                        <div class="item">
                            ${mediaHtml}
                            <h4>${item.title}</h4>
                            <p class="item-tags">${item.tags}</p>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>

            <div class="section-column full-width">
                <h3 class="section-title">MY EXPERIMENTS</h3>
                <div class="items-grid">
                    <div class="empty-placeholder">Coming soon...</div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(detailPage);
}

function closeDetail() {
    const detailPage = document.querySelector('.detail-page');
    if (detailPage) {
        detailPage.remove();
    }
    document.body.style.overflow = 'auto';
}

// Close detail page with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDetail();
    }
});
