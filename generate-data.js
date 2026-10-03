const fs = require('fs');

function getFiles(dir, filter) {
    try {
        return fs.readdirSync(dir).filter(filter).sort();
    } catch(e) { return []; }
}

let output = '// Complete Subcategory Data - All Files\nconst subcategoryData = {\n';

// 1. Long Form Videos
output += "    'Long Form Videos': [\n";
output += "        { title: 'Action Movie Summary', tags: 'Movie Summary', file: 'assets/long/videos/محترف فنون قتالية علم ابنة مهارة قتاليه خطيرة عشان ينتقم من اصحابة الي بيتنمروا علية!_ملخص فيلم اكشن.mp4' },\n";
output += "        { title: 'Prison Action Story', tags: 'Action Drama', file: 'assets/long/بعد ما مسكوه ورموه في أخطر سجن.. وقف قدام أشرس المجرمين وحوّل السجن وشوارع الهند لحرب مايشوفوش زيها!.mp4' },\n";
output += "        { title: 'Kidnapping Thriller', tags: 'Thriller', file: 'assets/long/بيخطفه حبيبته منه فاكرينه عيل طري وضعيف لكن ميعرفوش انه اخطر منهم بكتيرر_ملخص فيلم.mp4' },\n";
output += "        { title: 'Bodyguard Action', tags: 'Action', file: 'assets/long/رجل عصابات بيخـ ـطف فتاة غنية، لكن ميعرفش ان الحارس بتعها اشرس ظابط ف امريكا كلها_ملخص فيلم.mp4' },\n";
output += "        { title: 'Yakuza Revenge', tags: 'Crime Drama', file: 'assets/long/قاتل محترف قرر يتوب بس الياكوزا موفقوش وقتلوا علته وسجنوه لمدة 15 سنه لكن رجع تاني يندمهم ع مل حاجه!.mp4' },\n";
output += "        { title: 'Undercover Criminal', tags: 'Crime', file: 'assets/long/يبان لكل الناس ان هو قزم غلبان لكن ميعرفوش انه اخطر مجرم ومدوخ الكل وراه_ملخص فيلم.mp4' }\n";
output += "    ],\n";

// 2. Clipper (renamed from Clips)
output += "    'Clipper': [\n";
output += "        { title: 'Short Clip 1', tags: 'Short Edit', file: 'assets/clips/0917(2).mp4' },\n";
output += "        { title: 'Short Clip 2', tags: 'Short Edit', file: 'assets/clips/0917(3).mp4' },\n";
output += "        { title: 'Short Clip 3', tags: 'Short Edit', file: 'assets/clips/0917(4).mp4' },\n";
output += "        { title: 'Short Clip 4', tags: 'Short Edit', file: 'assets/clips/0917(5).mp4' },\n";
output += "        { title: 'Short Clip 5', tags: 'Short Edit', file: 'assets/clips/0917(6).mp4' },\n";
output += "        { title: 'Clipper Edit 1', tags: 'Professional', file: 'assets/clips/New folder/0917(2).mp4' },\n";
output += "        { title: 'Clipper Edit 2', tags: 'Professional', file: 'assets/clips/New folder/0917(3).mp4' },\n";
output += "        { title: 'Clipper Edit 3', tags: 'Professional', file: 'assets/clips/New folder/0917(4).mp4' },\n";
output += "        { title: 'Clipper Edit 4', tags: 'Professional', file: 'assets/clips/New folder/0917(5).mp4' },\n";
output += "        { title: 'Clipper Edit 5', tags: 'Professional', file: 'assets/clips/New folder/0917(6).mp4' }\n";
output += "    ],\n";

// 3. Clips (new - with the 3 removed videos)
output += "    'Clips': [\n";
output += "        { title: 'Birthday Film', tags: 'Creative', file: 'assets/short/Black White Film Frames Birthday Video.mp4' },\n";
output += "        { title: 'Architecture Tour', tags: 'Promotional', file: 'assets/short/الجمال يكمن في التفاصيل.. جولة في احدث ابداعاتنا 👷🏻_♂️🤍.mp4' },\n";
output += "        { title: 'Office Reveal', tags: 'Promotional', file: 'assets/short/بين المخطط والواقع - اهلا بكم في مكتبنا الجديد 🤍✨.mp4' }\n";
output += "    ],\n";

// 4. Banners
output += "    'Banners': [\n";
output += "        { title: 'Advertising Facebook Cover', tags: 'Black & Red', file: 'assets/banners/Black and Red Modern Advertising Company Facebook Cover.png' },\n";
output += "        { title: 'Magic YouTube Banner', tags: 'Channel Art', file: 'assets/banners/Black and Red Professional Magic Youtube Channel Art.png' },\n";
output += "        { title: 'Cooking Channel Art', tags: 'YouTube', file: 'assets/banners/Black Cooking Channel YouTube Channel Art.png' },\n";
output += "        { title: 'Gaming YouTube Art', tags: 'Bee Illustration', file: 'assets/banners/Black Yellow Illustration Bee Gaming YouTube Channel Art.png' },\n";
output += "        { title: 'Beauty Tips Banner', tags: 'Minimalist', file: 'assets/banners/Brown White MInimalist Beauty Tips YouTube Channel Art.png' },\n";
output += "        { title: 'Music Banner', tags: 'Retro Style', file: 'assets/banners/Orange Retro Music YouTube Banner.png' }\n";
output += "    ],\n";

// 5. Posts
output += "    'Posts': [\n";
output += "        { title: 'Social Media Post 1', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173719.png' },\n";
output += "        { title: 'Social Media Post 2', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173732.png' },\n";
output += "        { title: 'Social Media Post 3', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 173749.png' },\n";
output += "        { title: 'Social Media Post 4', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174226.png' },\n";
output += "        { title: 'Social Media Post 5', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174241.png' },\n";
output += "        { title: 'Social Media Post 6', tags: 'Instagram', file: 'assets/posts/Screenshot 2026-09-11 174254.png' }\n";
output += "    ],\n";

// 6. Book Covers
output += "    'Book Covers': [\n";
output += "        { title: 'Book Cover 1', tags: 'Cover Design', file: 'assets/books/0c50dbee-8a79-4e22-b88a-2f75f250b60e.jpg' },\n";
output += "        { title: 'Book Cover 2', tags: 'Cover Design', file: 'assets/books/7f4397f4-6ccb-421c-a491-acb7e83efb8e.jpg' },\n";
output += "        { title: 'Book Concept 1', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171352.png' },\n";
output += "        { title: 'Book Concept 2', tags: 'Concept', file: 'assets/books/Screenshot 2026-09-11 171406.png' }\n";
output += "    ],\n";

// 7. Professional Resumes
output += "    'Professional Resumes': [\n";
output += "        { title: 'Professional Resume', tags: 'Corporate', file: 'assets/CVs/Professional CV Resume.pdf' },\n";
output += "        { title: 'Graphic Designer Resume', tags: 'Minimalist', file: 'assets/CVs/Brown Cream Aesthetic Minimalist Graphic Designer Resume.pdf' },\n";
output += "        { title: 'Mohammad AL_husenat CV', tags: 'Professional', file: 'assets/CVs/Mohammad AL_husenat.pdf' },\n";
output += "        { title: 'Ola Saidam CV', tags: 'Professional', file: 'assets/CVs/Ola Saidam cv 2.pdf' },\n";
output += "        { title: 'Batoole99 Resume', tags: 'Custom', file: 'assets/CVs/batoole99.pdf' },\n";
output += "        { title: 'CV Design 1', tags: 'Visual', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AM.jpeg' },\n";
output += "        { title: 'CV Design 2', tags: 'Visual', file: 'assets/CVs/WhatsApp Image 2026-09-18 at 10.51.54 AMlml.jpeg' }\n";
output += "    ],\n";

// 8. YouTube Thumbnails - ALL files
output += "    'YouTube Thumbnails': [\n";
output += "        { title: 'Urban Outfit Thumbnail', tags: 'Fashion', file: 'assets/thumbs/Black and Brown Modern Urban Outfit Recommendations Youtube Thumbnail.png' },\n";
output += "        { title: 'Music Playlist', tags: 'Music', file: 'assets/thumbs/Orange and White Simple Music Playlist Youtube Thumbnail.png' },\n";
output += "        { title: 'Top 3 Design', tags: 'List Style', file: 'assets/thumbs/top3.jpg' },\n";
output += "        { title: 'Top 4 Design', tags: 'List Style', file: 'assets/thumbs/top4.jpg' },\n";
output += "        { title: 'Thumbnail 1', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.53 AM (1).jpeg' },\n";
output += "        { title: 'Thumbnail 2', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.53 AM (2).jpeg' },\n";
output += "        { title: 'Thumbnail 3', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.54 AM (1).jpeg' },\n";
output += "        { title: 'Thumbnail 4', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.53 AM.jpeg' },\n";
output += "        { title: 'Thumbnail 5', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.56 AM (3).jpeg' },\n";
output += "        { title: 'Thumbnail 6', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.56 AM (4).jpeg' },\n";
output += "        { title: 'Thumbnail 7', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.56 AM (5).jpeg' },\n";
output += "        { title: 'Thumbnail 8', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.56 AM (6).jpeg' },\n";
output += "        { title: 'Thumbnail 9', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.57 AM (1).jpeg' },\n";
output += "        { title: 'Thumbnail 10', tags: 'Creative', file: 'assets/thumbs/WhatsApp Image 2026-09-18 at 10.51.57 AM.jpeg' }\n";
output += "    ],\n";

// 9. Logo Designs
output += "    'Logo Designs': [\n";
output += "        { title: 'Logo Design 1', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 103942.png' },\n";
output += "        { title: 'Logo Design 2', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104002.png' },\n";
output += "        { title: 'Logo Design 3', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104011.png' },\n";
output += "        { title: 'Logo Design 4', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104017.png' },\n";
output += "        { title: 'Logo Design 5', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104024.png' },\n";
output += "        { title: 'Logo Design 6', tags: 'Visual Identity', file: 'assets/brand/Screenshot 2026-09-18 104056.png' },\n";
output += "        { title: 'Brand Concept 1', tags: 'Branding', file: 'assets/brand/WhatsApp Image 2026-09-18 at 10.47.19 AM.jpeg' },\n";
output += "        { title: 'Brand Concept 2', tags: 'Branding', file: 'assets/brand/WhatsApp Image 2026-09-18 at 10.50.03 AM.jpeg' }\n";
output += "    ],\n";

// 10. n8n Workflows
output += "    'n8n Workflows': [\n";
output += "        { title: 'LinkedIn Outreach', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 092826.png' },\n";
output += "        { title: 'Workflow 2', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093048.png' },\n";
output += "        { title: 'Workflow 3', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093220.png' },\n";
output += "        { title: 'Workflow 4', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093512.png' },\n";
output += "        { title: 'Workflow 5', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 093705.png' },\n";
output += "        { title: 'Workflow 6', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 094557.png' },\n";
output += "        { title: 'Workflow 7', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 094958.png' },\n";
output += "        { title: 'Workflow 8', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 095040.png' },\n";
output += "        { title: 'Workflow 9', tags: 'Automation', file: 'assets/n8n/Screenshot 2026-09-18 095054.png' },\n";
output += "        { title: 'LinkedIn Outreach Config', tags: 'JSON', file: 'assets/n8n/n8n-personalized-linkedin-outreach-workflow.json' },\n";
output += "        { title: 'Shopify 3D Video', tags: 'JSON', file: 'assets/n8n/shopify-product-3d-video.json' },\n";
output += "        { title: 'Social Media Agent', tags: 'JSON', file: 'assets/n8n/social-media-content-generation-posting-agent-n8n.json' }\n";
output += "    ],\n";

// 11. PDF Presentations (NEW)
output += "    'PDF Presentations': [\n";
output += "        { title: 'Golden Harvest Market', tags: 'Marketing', file: 'assets/presentation/Golden_Harvest_Market_Excellence.pdf' },\n";
output += "        { title: 'Jericho Organic Dates', tags: 'Agriculture', file: 'assets/presentation/Jericho_Organic_Date_Farming.pdf' },\n";
output += "        { title: 'Marketing Transformation', tags: 'Strategy', file: 'assets/presentation/Marketing_Transformation_Blueprint.pdf' },\n";
output += "        { title: 'Organic Medjool Farming', tags: 'Agriculture', file: 'assets/presentation/Organic_Medjool_Farming_Blueprint.pdf' },\n";
output += "        { title: 'Organic Palm Protection', tags: 'Agriculture', file: 'assets/presentation/Organic_Palm_Protection.pdf' },\n";
output += "        { title: 'Precision Medjool Strategy', tags: 'Strategy', file: 'assets/presentation/Precision_Organic_Medjool_Strategy.pdf' },\n";
output += "        { title: 'Precision Palm Hydrology', tags: 'Agriculture', file: 'assets/presentation/Precision_Palm_Hydrology.pdf' },\n";
output += "        { title: 'Rare Plant Tissue Culture', tags: 'Biotech', file: 'assets/presentation/Rare_Plant_Tissue_Culture.pdf' },\n";
output += "        { title: 'Soil & Compost Engineering', tags: 'Engineering', file: 'assets/presentation/Soil_and_Compost_Engineering.pdf' }\n";
output += "    ],\n";

// 12. Roblox Games - add ALL screenshots
output += "    'Roblox Games': [\n";
const robloxFiles = getFiles('C:/Users/emran/portfolio/assets/RobloxContent', f => f.startsWith('Screenshot'));
robloxFiles.forEach((file, i) => {
    const comma = i < robloxFiles.length - 1 ? ',' : '';
    output += "        { title: 'Game Scene " + (i + 1) + "', tags: 'Roblox', file: 'assets/RobloxContent/" + file + "' }" + comma + "\n";
});
output += "    ]\n";

output += '};';

fs.writeFileSync('C:/Users/emran/portfolio/subcategory-data.js', output, 'utf8');
console.log('Wrote subcategory-data.js with ' + robloxFiles.length + ' Roblox screenshots');
