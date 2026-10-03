const fs = require('fs');
const path = require('path');

function getFiles(dir, filter = () => true) {
    try {
        return fs.readdirSync(dir).filter(f => {
            if (f === '.' || f === '..') return false;
            return filter(f);
        }).sort();
    } catch(e) { return []; }
}

function escapeStr(s) {
    return s.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function generateSection(name, items) {
    let out = `    '${name}': [\n`;
    items.forEach((item, i) => {
        const comma = i < items.length - 1 ? ',' : '';
        out += `        { title: '${escapeStr(item.title)}', tags: '${escapeStr(item.tags)}', file: '${escapeStr(item.file)}' }${comma}\n`;
    });
    out += `    ],\n`;
    return out;
}

let output = '// Complete Subcategory Data - All Files\nconst subcategoryData = {\n';

// 1. Long Form Videos - 6 existing + 13 AI automation
const longFormItems = [
    { title: 'Action Movie Summary', tags: 'Movie Summary', file: 'assets/long/videos/محترف فنون قتالية علم ابنة مهارة قتاليه خطيرة عشان ينتقم من اصحابة الي بيتنمروا علية!_ملخص فيلم اكشن.mp4' },
    { title: 'Prison Action Story', tags: 'Action Drama', file: 'assets/long/بعد ما مسكوه ورموه في أخطر سجن.. وقف قدام أشرس المجرمين وحوّل السجن وشوارع الهند لحرب مايشوفوش زيها!.mp4' },
    { title: 'Kidnapping Thriller', tags: 'Thriller', file: 'assets/long/بيخطفه حبيبته منه فاكرينه عيل طري وضعيف لكن ميعرفوش انه اخطر منهم بكتيرر_ملخص فيلم.mp4' },
    { title: 'Bodyguard Action', tags: 'Action', file: 'assets/long/رجل عصابات بيخـ ـطف فتاة غنية، لكن ميعرفش ان الحارس بتعها اشرس ظابط ف امريكا كلها_ملخص فيلم.mp4' },
    { title: 'Yakuza Revenge', tags: 'Crime Drama', file: 'assets/long/قاتل محترف قرر يتوب بس الياكوزا موفقوش وقتلوا علته وسجنوه لمدة 15 سنه لكن رجع تاني يندمهم ع مل حاجه!.mp4' },
    { title: 'Undercover Criminal', tags: 'Crime', file: 'assets/long/يبان لكل الناس ان هو قزم غلبان لكن ميعرفوش انه اخطر مجرم ومدوخ الكل وراه_ملخص فيلم.mp4' }
];

// Add AI automation videos
const aiAutoFiles = getFiles('C:/Users/emran/OneDrive/Desktop/portofolio/long/ai automation', f => f.endsWith('.mp4'));
aiAutoFiles.forEach(f => {
    longFormItems.push({ title: f.replace('.mp4', ''), tags: 'AI Generated', file: `assets/long/ai automation/${f}` });
});

output += generateSection('Long Form Videos', longFormItems);

// 2. Clipper - ALL videos from clips folder + New folder (NO duplicates)
const clipperItems = [];
const clipsFiles = getFiles('C:/Users/emran/portfolio/assets/clips', f => f.endsWith('.mp4'));
clipsFiles.forEach(f => {
    clipperItems.push({ title: f.replace('.mp4', ''), tags: 'Clip', file: `assets/clips/${f}` });
});
// Add New folder videos
const newFolderFiles = getFiles('C:/Users/emran/portfolio/assets/clips/New folder', f => f.endsWith('.mp4'));
newFolderFiles.forEach(f => {
    clipperItems.push({ title: f.replace('.mp4', ''), tags: 'Clipper Edit', file: `assets/clips/New folder/${f}` });
});

output += generateSection('Clipper', clipperItems);

// 3. Clips - ALL videos from short folder
const clipsItems = [];
const shortFiles = getFiles('C:/Users/emran/portfolio/assets/short', f => f.endsWith('.mp4'));
shortFiles.forEach(f => {
    clipsItems.push({ title: f.replace('.mp4', ''), tags: 'Short', file: `assets/short/${f}` });
});

output += generateSection('Clips', clipsItems);

// 4. Banners - ALL files from banners folder
const bannerItems = [];
const bannerFiles = getFiles('C:/Users/emran/portfolio/assets/banners');
bannerFiles.forEach((f, i) => {
    const ext = path.extname(f).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) {
        bannerItems.push({ title: `Banner ${i + 1}`, tags: 'Design', file: `assets/banners/${f}` });
    }
});

output += generateSection('Banners', bannerItems);

// 5. Posts - ALL from Desktop/portofolio/posts (replace existing)
const postItems = [];
const postFiles = getFiles('C:/Users/emran/OneDrive/Desktop/portofolio/posts', f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
postFiles.forEach((f, i) => {
    postItems.push({ title: `Post ${i + 1}`, tags: 'Instagram', file: `assets/posts/${f}` });
});

output += generateSection('Posts', postItems);

// 6. Book Covers - keep as is
output += generateSection('Book Covers', [
    { title: 'Book Cover 1', tags: 'Cover Design', file: 'assets/books/0c50dbee-8a79-4e22-b88a-2f75f250b60e.jpg' },
    { title: 'Book Cover 2', tags: 'Cover Design', file: 'assets/books/7f4397f4-6ccb-421c-a491-acb7e83efb8e.jpg' },
    { title: 'Book Concept 1', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171352.png' },
    { title: 'Book Concept 2', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171406.png' }
]);

// 7. Professional Resumes - keep as is
output += generateSection('Professional Resumes', [
    { title: 'Professional Resume', tags: 'Corporate', file: 'assets/CVs/Professional CV Resume.pdf' },
    { title: 'Graphic Designer Resume', tags: 'Minimalist', file: 'assets/CVs/Brown Cream Aesthetic Minimalist Graphic Designer Resume.pdf' },
    { title: 'Mohammad AL_husenat CV', tags: 'Professional', file: 'assets/CVs/Mohammad AL_husenat.pdf' },
    { title: 'Ola Saidam CV', tags: 'Professional', file: 'assets/CVs/Ola Saidam cv 2.pdf' },
    { title: 'Batoole99 Resume', tags: 'Custom', file: 'assets/CVs/batoole99.pdf' },
    { title: 'CV Design 1', tags: 'Visual', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AM.jpeg' },
    { title: 'CV Design 2', tags: 'Visual', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AMlml.jpeg' }
]);

// 8. YouTube Thumbnails - ALL from assets/thumbs
const thumbItems = [];
const thumbFiles = getFiles('C:/Users/emran/portfolio/assets/thumbs');
thumbFiles.forEach((f, i) => {
    const ext = path.extname(f).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) {
        thumbItems.push({ title: `Thumbnail ${i + 1}`, tags: 'YouTube', file: `assets/thumbs/${f}` });
    }
});

output += generateSection('YouTube Thumbnails', thumbItems);

// 9. Logo Designs - ALL from brand folder
const brandItems = [];
const brandFiles = getFiles('C:/Users/emran/portfolio/assets/brand');
brandFiles.forEach((f, i) => {
    const ext = path.extname(f).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) {
        brandItems.push({ title: `Brand Design ${i + 1}`, tags: 'Visual Identity', file: `assets/brand/${f}` });
    }
});

output += generateSection('Logo Designs', brandItems);

// 10. n8n Workflows - keep as is
output += generateSection('n8n Workflows', [
    { title: 'LinkedIn Outreach', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 092826.png' },
    { title: 'Workflow 2', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093048.png' },
    { title: 'Workflow 3', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093220.png' },
    { title: 'Workflow 4', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093512.png' },
    { title: 'Workflow 5', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093705.png' },
    { title: 'Workflow 6', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 094557.png' },
    { title: 'Workflow 7', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 094958.png' },
    { title: 'Workflow 8', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 095040.png' },
    { title: 'Workflow 9', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 095054.png' },
    { title: 'LinkedIn Outreach Config', tags: 'JSON', file: 'assets/n8n/n8n-personalized-linkedin-outreach-workflow.json' },
    { title: 'Shopify 3D Video', tags: 'JSON', file: 'assets/n8n/shopify-product-3d-video.json' },
    { title: 'Social Media Agent', tags: 'JSON', file: 'assets/n8n/social-media-content-generation-posting-agent-n8n.json' }
]);

// 11. PDF Presentations - keep as is
output += generateSection('PDF Presentations', [
    { title: 'Golden Harvest Market', tags: 'Marketing', file: 'assets/presentation/Golden_Harvest_Market_Excellence.pdf' },
    { title: 'Jericho Organic Dates', tags: 'Agriculture', file: 'assets/presentation/Jericho_Organic_Date_Farming.pdf' },
    { title: 'Marketing Transformation', tags: 'Strategy', file: 'assets/presentation/Marketing_Transformation_Blueprint.pdf' },
    { title: 'Organic Medjool Farming', tags: 'Agriculture', file: 'assets/presentation/Organic_Medjool_Farming_Blueprint.pdf' },
    { title: 'Organic Palm Protection', tags: 'Agriculture', file: 'assets/presentation/Organic_Palm_Protection.pdf' },
    { title: 'Precision Medjool Strategy', tags: 'Strategy', file: 'assets/presentation/Precision_Organic_Medjool_Strategy.pdf' },
    { title: 'Precision Palm Hydrology', tags: 'Agriculture', file: 'assets/presentation/Precision_Palm_Hydrology.pdf' },
    { title: 'Rare Plant Tissue Culture', tags: 'Biotech', file: 'assets/presentation/Rare_Plant_Tissue_Culture.pdf' },
    { title: 'Soil & Compost Engineering', tags: 'Engineering', file: 'assets/presentation/Soil_and_Compost_Engineering.pdf' }
]);

// 12. Video Presentations - videos from Desktop/portofolio/long/preaentations
const videoPresItems = [];
const videoPresFiles = getFiles('C:/Users/emran/OneDrive/Desktop/portofolio/long/preaentations', f => f.endsWith('.mp4'));
videoPresFiles.forEach(f => {
    videoPresItems.push({ title: f.replace('.mp4', ''), tags: 'Video Presentation', file: `assets/long/preaentations/${f}` });
});

output += generateSection('Video Presentations', videoPresItems);

// 13. Automated Videos - AI automation videos (NEW section in Automation Projects)
const autoVideoItems = [];
aiAutoFiles.forEach(f => {
    autoVideoItems.push({ title: f.replace('.mp4', ''), tags: 'AI Automated', file: `assets/long/ai automation/${f}` });
});

output += generateSection('Automated Videos', autoVideoItems);

// 14. Roblox Games - ALL from assets/RobloxContent
const robloxItems = [];
const robloxFiles = getFiles('C:/Users/emran/portfolio/assets/RobloxContent', f => f.startsWith('Screenshot') && f.endsWith('.png'));
robloxFiles.forEach((f, i) => {
    robloxItems.push({ title: `Game Scene ${i + 1}`, tags: 'Roblox', file: `assets/RobloxContent/${f}` });
});

output += generateSection('Roblox Games', robloxItems);

// 15. ROBLOX Models - ALL from Desktop/portofolio/ROBLOX MODELS (NEW section in 3D & Blender)
const modelItems = [];
const modelFiles = getFiles('C:/Users/emran/OneDrive/Desktop/portofolio/ROBLOX MODELS', f => f.endsWith('.glb'));
modelFiles.forEach((f, i) => {
    modelItems.push({ title: f.replace('.glb', ''), tags: '3D Model', file: `assets/ROBLOX MODELS/${f}` });
});

output += generateSection('ROBLOX Models', modelItems);

// 16. Graphic Design Thumbnails - ALL from Desktop/portofolio/thumbs (NEW section in Graphic Design)
const gdThumbItems = [];
const gdThumbFiles = getFiles('C:/Users/emran/OneDrive/Desktop/portofolio/thumbs');
gdThumbFiles.forEach((f, i) => {
    const ext = path.extname(f).toLowerCase();
    if (['.png', '.jpg', '.jpeg', '.webp', '.gif'].includes(ext)) {
        gdThumbItems.push({ title: `Thumbnail Design ${i + 1}`, tags: 'Graphic Design', file: `assets/thumbs/${f}` });
    }
});

output += generateSection('Thumbnails', gdThumbItems);

output += '};';

fs.writeFileSync('C:/Users/emran/portfolio/subcategory-data.js', output, 'utf8');
console.log('subcategory-data.js generated successfully!');
console.log('Sections:');
console.log('- Long Form Videos:', longFormItems.length);
console.log('- Clipper:', clipperItems.length);
console.log('- Clips:', clipsItems.length);
console.log('- Banners:', bannerItems.length);
console.log('- Posts:', postItems.length);
console.log('- YouTube Thumbnails:', thumbItems.length);
console.log('- Logo Designs (Brand):', brandItems.length);
console.log('- Video Presentations:', videoPresItems.length);
console.log('- Automated Videos:', autoVideoItems.length);
console.log('- Roblox Games:', robloxItems.length);
console.log('- ROBLOX Models:', modelItems.length);
console.log('- Thumbnails (Graphic Design):', gdThumbItems.length);
