import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'logos');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const SITES = [
  { id: 'spribe', url: 'https://www.spribe.co/' },
  { id: 'nolimit-city', url: 'https://www.nolimitcity.com/' },
  { id: 'yggdrasil', url: 'https://www.yggdrasilgaming.com/' },
  { id: 'habanero', url: 'https://www.habanerosystems.com/' },
  { id: 'spadegaming', url: 'https://www.spadegaming.com/' },
  { id: 'fc', url: 'https://www.fachai.com/' },
  { id: 'netent', url: 'https://www.netent.com/' },
  { id: 'red-tiger', url: 'https://www.evolution.com/brands/red-tiger' },
  { id: 'kingmaker', url: 'https://kingmaker.games/' },
  { id: 'fastspin', url: 'https://www.fastspin.net/' },
  { id: 'booongo', url: 'https://www.booongo.com/' },
  { id: 'rich88', url: 'https://rich88.com/' },
];

function abs(src, base) {
  try { return new URL(src, base).href; } catch { return null; }
}

function collect(html, base) {
  const urls = new Set();
  const add = (s) => {
    const u = abs(s, base);
    if (u && !u.startsWith('data:')) urls.add(u);
  };
  for (const m of html.matchAll(/url\((['"]?)([^)'"]+)\1\)/gi)) add(m[2]);
  for (const m of html.matchAll(/(?:src|href|content|data-src|srcset)=["']([^"']+)/gi)) {
    for (const part of m[1].split(',')) add(part.trim().split(' ')[0]);
  }
  return [...urls].filter((u) =>
    /\.(svg|png|webp|jpg|jpeg)(\?|$)/i.test(u) &&
    /logo|brand|wordmark|header|nav|mark/i.test(u)
  );
}

async function get(url) {
  const res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow' });
  return res;
}

for (const site of SITES) {
  try {
    const page = await get(site.url);
    if (!page.ok) {
      console.log(`PAGE FAIL ${site.id} ${page.status}`);
      continue;
    }
    const html = await page.text();
    const cands = collect(html, page.url);
    console.log(`\n${site.id} (${cands.length})`);
    for (const c of cands.slice(0, 15)) console.log('  ', c);
    let saved = false;
    for (const c of cands) {
      try {
        const img = await get(c);
        if (!img.ok) continue;
        const type = (img.headers.get('content-type') || '').toLowerCase();
        if (type.includes('text/html')) continue;
        const buf = Buffer.from(await img.arrayBuffer());
        if (buf.length < 600) continue;
        let ext = 'png';
        if (type.includes('svg') || c.includes('.svg')) ext = 'svg';
        else if (type.includes('webp') || c.includes('.webp')) ext = 'webp';
        else if (type.includes('jpeg') || type.includes('jpg')) ext = 'jpg';
        await writeFile(path.join(outDir, `${site.id}.${ext}`), buf);
        console.log(`  SAVED ${site.id}.${ext} ${buf.length} ${c}`);
        saved = true;
        break;
      } catch {}
    }
    if (!saved) console.log('  none saved');
  } catch (e) {
    console.log(`ERR ${site.id} ${e.message}`);
  }
}
