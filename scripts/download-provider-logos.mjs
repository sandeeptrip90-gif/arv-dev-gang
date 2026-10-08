import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'assets', 'logos');

const PROVIDERS = [
  { id: 'pg-soft', url: 'https://www.pgsoft.com' },
  { id: 'pragmatic-play', url: 'https://www.pragmaticplay.com' },
  { id: 'jili', url: 'https://www.jiligames.com' },
  { id: 'jdb', url: 'https://www.jdbgaming.com' },
  { id: 'cq9', url: 'https://www.cq9gaming.com' },
  { id: 'fc', url: 'https://www.fachai.com' },
  { id: 'tada', url: 'https://www.tadagaming.com' },
  { id: 'evolution', url: 'https://www.evolution.com' },
  { id: 'spribe', url: 'https://www.spribe.co' },
  { id: 'hacksaw', url: 'https://www.hacksawgaming.com' },
  { id: 'nolimit-city', url: 'https://www.nolimitcity.com' },
  { id: 'playngo', url: 'https://www.playngo.com' },
  { id: 'microgaming', url: 'https://www.microgaming.co.uk' },
  { id: 'netent', url: 'https://www.netent.com' },
  { id: 'red-tiger', url: 'https://www.redtigergaming.com' },
  { id: 'playtech', url: 'https://www.playtech.com' },
  { id: 'yggdrasil', url: 'https://www.yggdrasilgaming.com' },
  { id: 'betsoft', url: 'https://www.betsoft.com' },
  { id: 'habanero', url: 'https://www.habanerosystems.com' },
  { id: 'spadegaming', url: 'https://www.spadegaming.com' },
  { id: 'fastspin', url: 'https://fastspin.net' },
  { id: 'kingmaker', url: 'https://www.kingmakergames.co' },
  { id: 'rich88', url: 'https://www.rich88.com' },
  { id: 'relax-gaming', url: 'https://www.relax-gaming.com' },
  { id: 'bgaming', url: 'https://www.bgaming.com' },
  { id: 'booongo', url: 'https://www.bng.gg' },
];

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

function absUrl(src, base) {
  try {
    return new URL(src, base).href;
  } catch {
    return null;
  }
}

function extractLogoCandidates(html, base) {
  const found = [];
  const push = (src, score) => {
    const url = absUrl(src, base);
    if (!url || url.startsWith('data:')) return;
    found.push({ url, score });
  };

  const og = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  if (og) push(og[1], 40);

  const apple = html.match(/<link[^>]+rel=["']apple-touch-icon[^"']*["'][^>]+href=["']([^"']+)/i);
  if (apple) push(apple[1], 20);

  const icon = html.match(/<link[^>]+rel=["'](?:shortcut )?icon["'][^>]+href=["']([^"']+)/i);
  if (icon) push(icon[1], 10);

  const imgRe = /<img\b[^>]*>/gi;
  let m;
  while ((m = imgRe.exec(html))) {
    const tag = m[0];
    const src = tag.match(/src=["']([^"']+)/i)?.[1]
      || tag.match(/data-src=["']([^"']+)/i)?.[1];
    if (!src) continue;
    const blob = tag.toLowerCase();
    let score = 0;
    if (blob.includes('logo')) score += 80;
    if (src.toLowerCase().includes('logo')) score += 50;
    if (/\.(svg|png|webp|jpg|jpeg)(\?|$)/i.test(src)) score += 15;
    if (blob.includes('header') || blob.includes('brand') || blob.includes('nav')) score += 10;
    if (score >= 50) push(src, score);
  }

  const hrefRe = /(?:src|href)=["']([^"']*logo[^"']*\.(?:svg|png|webp|jpg|jpeg)[^"']*)["']/gi;
  while ((m = hrefRe.exec(html))) push(m[1], 60);

  found.sort((a, b) => b.score - a.score);
  const seen = new Set();
  return found.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  }).slice(0, 8);
}

async function download(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8' },
    redirect: 'follow',
  });
  if (!res.ok) return null;
  const type = (res.headers.get('content-type') || '').toLowerCase();
  if (type.includes('text/html')) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 400) return null;
  let ext = 'png';
  if (type.includes('svg') || url.includes('.svg')) ext = 'svg';
  else if (type.includes('webp') || url.includes('.webp')) ext = 'webp';
  else if (type.includes('jpeg') || type.includes('jpg') || url.includes('.jpg') || url.includes('.jpeg')) ext = 'jpg';
  else if (type.includes('png') || url.includes('.png')) ext = 'png';
  return { buf, ext, type, url };
}

async function scrape(id, site) {
  try {
    const res = await fetch(site, {
      headers: { 'User-Agent': UA, Accept: 'text/html' },
      redirect: 'follow',
    });
    if (!res.ok) return { id, ok: false, reason: `site ${res.status}` };
    const html = await res.text();
    const candidates = extractLogoCandidates(html, res.url || site);
    for (const c of candidates) {
      const file = await download(c.url);
      if (file) return { id, ok: true, ...file, from: c.url };
    }
    return { id, ok: false, reason: 'no logo asset', tried: candidates.map((c) => c.url) };
  } catch (err) {
    return { id, ok: false, reason: String(err) };
  }
}

await mkdir(outDir, { recursive: true });
const results = [];
for (const p of PROVIDERS) {
  const r = await scrape(p.id, p.url);
  results.push(r);
  if (r.ok) {
    const dest = path.join(outDir, `${p.id}.${r.ext}`);
    await writeFile(dest, r.buf);
    console.log(`OK  ${p.id}  ${r.ext}  ${r.from}`);
  } else {
    console.log(`FAIL ${p.id}  ${r.reason}`);
  }
}

await writeFile(
  path.join(outDir, '_download-report.json'),
  JSON.stringify(results.map((r) => ({ id: r.id, ok: r.ok, ext: r.ext, from: r.from, reason: r.reason, tried: r.tried })), null, 2),
);
console.log('\nDone.');
