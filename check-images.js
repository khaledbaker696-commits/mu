const fs = require('fs');
const https = require('https');

function checkFile(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const regex = /images\.unsplash\.com\/(photo-[a-z0-9-]+\?[^"'\)]+)/g;
    const matches = [];
    let m;
    while ((m = regex.exec(content)) !== null) {
        matches.push('images.unsplash.com/' + m[1]);
    }
    const unique = [...new Set(matches)];
    console.log('\n=== ' + filename + ' === Found ' + unique.length + ' unique URLs');

    let pending = unique.length;
    let broken = [];
    let ok = [];

    if (pending === 0) {
        console.log('No Unsplash URLs found');
        return;
    }

    unique.forEach((url, i) => {
        setTimeout(() => {
            https.get('https://' + url, {timeout: 15000}, (res) => {
                const code = res.statusCode;
                if (code === 200) ok.push(url);
                else broken.push({url, code});
                if (--pending === 0) finish();
            }).on('error', (e) => {
                broken.push({url, code: 'ERR: ' + e.message});
                if (--pending === 0) finish();
            });
        }, i * 300);
    });

    function finish() {
        console.log('\n--- OK: ' + ok.length + ' | BROKEN: ' + broken.length + ' ---');
        if (broken.length > 0) {
            console.log('\nBROKEN IMAGES:');
            broken.forEach(b => console.log(b.code + ' - ' + b.url));
        } else {
            console.log('\nAll images are working!');
        }
    }
}

checkFile('index.html');
setTimeout(() => checkFile('script.js'), 8000);
