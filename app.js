/* Stroy House — concept site (Lumagen). Static, no build. */
const M = 'media/';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

/* ---------------- i18n ---------------- */
const T = {
  ru: {
    skip: 'К объектам', nav_objects: 'Объекты', nav_process: 'Как работаем', nav_calc: 'Расчёт',
    h1: 'Ремонт квартир и&nbsp;домов под&nbsp;ключ',
    lead: 'Комплектация «под ключ», дизайн интерьера и экстерьера, регулярный технадзор. Гарантия — по договору.',
    cta_calc: 'Рассчитать мой ремонт', cta_call: 'Позвонить', free: 'Консультация по ремонту и дизайну — бесплатно',
    walk_k: 'Пройдите по объекту', next_obj: 'Следующий объект', hint: 'Листайте — камера пройдёт по объекту',
    obj_h: 'Объекты из сторис',
    obj_p: 'Четырнадцать объектов, которые Stroy House показывает в сторис: квартиры и дома в Ташкенте и рядом. Нажмите — и пройдите объект в 3D.',
    pr_h: 'Как идёт ремонт',
    pr_p: 'Все заботы о ремонте берём на себя — от первой консультации до сдачи ключей. Кадры — с объектов Stroy House.',
    s1_h: 'Бесплатная консультация',
    s1_p: 'Позвоните или напишите в Telegram или Директ: подскажем, с чего начать, и рассчитаем стоимость ремонта или дизайн-проекта.',
    s2_h: 'Дизайн интерьера и экстерьера',
    s2_p: 'Проектирование и дизайн в вашем стиле — неоклассика, минимализм, хай-тек. Наша цель — подойти к интерьеру со вкусом и сдать его вам таким же в реальности.',
    s3_h: 'Подбор материалов и мебели',
    s3_p: 'Мебель, технику и все материалы подбирают наши специалисты: помогают с выбором и берут на себя закупку.',
    s4_h: 'Демонтаж и черновые работы',
    s4_p: 'Демонтаж, монтаж сантехники и гипсокартона, тёплые полы — в новостройках и частных домах.',
    s5_h: 'Отделка под регулярным технадзором',
    s5_p: 'Лепнина, декоративные покрытия, плитка, подсветка. Регулярный технадзор следит за качеством работ на объекте.',
    s6_h: 'Мебель на заказ',
    s6_p: 'Кухни, шкафы и прихожие — по размерам вашего объекта.',
    s7_h: 'Сдача ключей и гарантия по договору',
    s7_p: 'Готовый объект передаём хозяевам. Гарантия на работы закрепляется в договоре.',
    tn: 'технадзор',
    c_h: 'Заявка на расчёт ремонта',
    c_p: 'Отметьте параметры объекта — из ответов соберётся сообщение. Отправьте его в Telegram или Директ либо позвоните: консультация бесплатная.',
    f_type: 'Объект', t_flat: 'Квартира', t_house: 'Дом', t_room: 'Отдельное помещение',
    f_state: 'Состояние', st_box: 'Новостройка, коробка', st_rough: 'Новостройка, черновая отделка', st_old: 'Вторичка',
    f_area: 'Площадь', f_dist: 'Район',
    f_need: 'Что нужно', n_turnkey: 'Ремонт под ключ', n_design: 'Дизайн-проект', n_supply: 'Комплектация материалами', n_furn: 'Мебель на заказ', n_ext: 'Экстерьер',
    f_style: 'Стиль', y_neo: 'Неоклассика', y_min: 'Минимализм', y_hitech: 'Хай-тек', y_modern: 'Современный', y_unsure: 'Пока не решили',
    f_budget: 'Ориентир по бюджету', b1: 'до $15 000', b2: '$15 000–30 000', b3: '$30 000–60 000', b4: 'больше $60 000', b0: 'Обсудим при расчёте',
    f_when: 'Когда начать', w_now: 'Как можно скорее', w_month: 'В течение 1–2 месяцев', w_later: 'Позже, пока присматриваюсь',
    f_name: 'Имя', f_note: 'Комментарий', note_ph: 'Например: санузел и кухня, ключи от застройщика в мае',
    ticket_h: 'Ваше сообщение',
    send_call: 'Позвонить +998 90 117 97 07', send_tg: 'Отправить в Telegram', send_ig: 'Отправить в Instagram Direct', send_copy: 'Скопировать текст',
    send_note: 'Перед открытием Telegram или Директа текст копируется — просто вставьте его в чат.',
    foot_sub: 'Ремонт квартир и домов под ключ, Ташкент',
    concept: 'Концепт сайта · Lumagen',
    t_copy: 'Текст скопирован', t_tg: 'Текст скопирован — вставьте его в чат Telegram', t_ig: 'Текст скопирован — вставьте его в Директ',
    frames: 'кадров',
    m: { hi: 'Здравствуйте! Хочу рассчитать ремонт.', obj: 'Объект', area: 'Площадь', dist: 'Район', need: 'Нужно', style: 'Стиль', budget: 'Бюджет', when: 'Начать', name: 'Имя', note: 'Комментарий', m2: 'м²', none: 'уточню при разговоре' },
    districts: ['Юнусабадский', 'Мирзо-Улугбекский', 'Яшнабадский', 'Мирабадский', 'Яккасарайский', 'Сергелийский', 'Чиланзарский', 'Учтепинский', 'Алмазарский', 'Шайхантахурский', 'Бектемирский', 'Янгихаётский', 'Ташкентская область'],
    dist_ph: 'Выберите район',
  },
  uz: {
    skip: 'Obyektlarga', nav_objects: 'Obyektlar', nav_process: 'Qanday ishlaymiz', nav_calc: 'Hisob-kitob',
    h1: 'Kvartira va uylar ta’miri — kalit topshirishgacha',
    lead: 'To‘liq komplektatsiya, interyer va eksteryer dizayni, muntazam texnik nazorat. Kafolat — shartnoma bo‘yicha.',
    cta_calc: 'Ta’mir narxini hisoblash', cta_call: 'Qo‘ng‘iroq qilish', free: 'Ta’mir va dizayn bo‘yicha maslahat — bepul',
    walk_k: 'Obyekt bo‘ylab yuring', next_obj: 'Keyingi obyekt', hint: 'Pastga suring — kamera obyekt bo‘ylab o‘tadi',
    obj_h: 'Storislardagi obyektlar',
    obj_p: 'Stroy House storislarda ko‘rsatgan o‘n to‘rtta obyekt: Toshkent va uning atrofidagi kvartira va uylar. Bosing — obyektni 3D’da ko‘rib chiqing.',
    pr_h: 'Ta’mir qanday o‘tadi',
    pr_p: 'Ta’mir bilan bog‘liq barcha tashvishlarni o‘z zimmamizga olamiz — birinchi maslahatdan kalit topshirishgacha. Kadrlar — Stroy House obyektlaridan.',
    s1_h: 'Bepul maslahat',
    s1_p: 'Qo‘ng‘iroq qiling yoki Telegram va Direct’ga yozing: nimadan boshlashni aytib beramiz va ta’mir yoki dizayn-loyiha narxini hisoblaymiz.',
    s2_h: 'Interyer va eksteryer dizayni',
    s2_p: 'Loyihalash va dizayn sizning uslubingizda — neoklassika, minimalizm, hi-tech. Maqsadimiz — interyeringizga did bilan yondashish va uni sizga real holda topshirish.',
    s3_h: 'Materiallar va mebel tanlash',
    s3_p: 'Mebel, jihoz va barcha materiallarni mutaxassislarimiz tanlaydi: tanlashda yordam beradi va xaridni o‘z zimmasiga oladi.',
    s4_h: 'Demontaj va qora ishlar',
    s4_p: 'Demontaj, santexnika va gipskarton montaji, issiq pol — yangi uylarda ham, xususiy uylarda ham.',
    s5_h: 'Muntazam texnik nazorat ostida pardozlash',
    s5_p: 'Lepnina, dekorativ qoplamalar, kafel, yoritish. Muntazam texnik nazorat obyektdagi ishlar sifatini kuzatib boradi.',
    s6_h: 'Buyurtma asosida mebel',
    s6_p: 'Oshxona, shkaf va dahliz mebellari — obyektingiz o‘lchamlari bo‘yicha.',
    s7_h: 'Kalit topshirish va shartnoma bo‘yicha kafolat',
    s7_p: 'Tayyor obyektni egalariga topshiramiz. Ishlarga kafolat shartnomada belgilanadi.',
    tn: 'texnik nazorat',
    c_h: 'Ta’mir narxini hisoblash uchun ariza',
    c_p: 'Obyekt parametrlarini belgilang — javoblardan xabar tuziladi. Uni Telegram yoki Direct’ga yuboring yoki qo‘ng‘iroq qiling: maslahat bepul.',
    f_type: 'Obyekt', t_flat: 'Kvartira', t_house: 'Hovli uy', t_room: 'Alohida xona',
    f_state: 'Holati', st_box: 'Yangi uy, karobka', st_rough: 'Yangi uy, qora pardoz', st_old: 'Eski uy (ikkilamchi bozor)',
    f_area: 'Maydoni', f_dist: 'Tuman',
    f_need: 'Nima kerak', n_turnkey: 'Kalit topshirish ta’miri', n_design: 'Dizayn-loyiha', n_supply: 'Materiallar bilan ta’minlash', n_furn: 'Buyurtma mebel', n_ext: 'Eksteryer',
    f_style: 'Uslub', y_neo: 'Neoklassika', y_min: 'Minimalizm', y_hitech: 'Hi-tech', y_modern: 'Zamonaviy', y_unsure: 'Hali hal qilmadik',
    f_budget: 'Taxminiy byudjet', b1: '$15 000 gacha', b2: '$15 000–30 000', b3: '$30 000–60 000', b4: '$60 000 dan ortiq', b0: 'Hisob-kitobda kelishamiz',
    f_when: 'Qachon boshlash', w_now: 'Imkon qadar tezroq', w_month: '1–2 oy ichida', w_later: 'Keyinroq, hozircha tanlayapman',
    f_name: 'Ismingiz', f_note: 'Izoh', note_ph: 'Masalan: hammom va oshxona, kalit may oyida beriladi',
    ticket_h: 'Sizning xabaringiz',
    send_call: 'Qo‘ng‘iroq: +998 90 117 97 07', send_tg: 'Telegram’ga yuborish', send_ig: 'Instagram Direct’ga yuborish', send_copy: 'Matnni nusxalash',
    send_note: 'Telegram yoki Direct ochilishidan oldin matn nusxalanadi — uni chatga joylang.',
    foot_sub: 'Kvartira va uylar ta’miri kalit topshirishgacha, Toshkent',
    concept: 'Sayt konsepti · Lumagen',
    t_copy: 'Matn nusxalandi', t_tg: 'Matn nusxalandi — uni Telegram chatiga joylang', t_ig: 'Matn nusxalandi — uni Direct’ga joylang',
    frames: 'kadr',
    m: { hi: 'Assalomu alaykum! Ta’mir narxini hisoblatmoqchiman.', obj: 'Obyekt', area: 'Maydon', dist: 'Tuman', need: 'Kerak', style: 'Uslub', budget: 'Byudjet', when: 'Boshlash', name: 'Ism', note: 'Izoh', m2: 'm²', none: 'suhbatda aniqlashtiraman' },
    districts: ['Yunusobod tumani', 'Mirzo Ulug‘bek tumani', 'Yashnobod tumani', 'Mirobod tumani', 'Yakkasaroy tumani', 'Sergeli tumani', 'Chilonzor tumani', 'Uchtepa tumani', 'Olmazor tumani', 'Shayxontohur tumani', 'Bektemir tumani', 'Yangihayot tumani', 'Toshkent viloyati'],
    dist_ph: 'Tumanni tanlang',
  }
};

/* ---------------- objects (from IG highlights) ---------------- */
const VIDS = { h00: [0, 7], h01: [0, 7], h02: [0, 7], h04: [5, 7], h05: [0, 1], h06: [0, 3], h07: [0, 1, 3], h08: [0, 2], h09: [0, 6], h10: [0, 4], h11: [0, 3], h12: [0, 7], h13: [0, 4] };
const hasVid = (tag, i) => { const v = VIDS[tag]; if (!v) return false; if (tag === 'h07') return v.includes(i); return i >= v[0] && i <= v[1]; };
const OBJ = [
  { tag: 'h13', n: 10, ru: ['Izza', 'От черновых работ до готового интерьера'], uz: ['Izza', 'Qora ishlardan tayyor interyergacha'], s: ['процесс и результат', 'jarayon va natija'] },
  { tag: 'h00', n: 11, skip: [7], ru: ['Сергели 500', 'Сергели'], uz: ['Sergeli 500', 'Sergeli'], s: ['Сергели', 'Sergeli'] },
  { tag: 'h01', n: 13, skip: [10], ru: ['Хасанбой, 350 м²', 'Частный дом · 350 м² · тёплые полы, черновые работы'], uz: ['Xasanboy, 350 m²', 'Xususiy uy · 350 m² · issiq pol, qora ishlar'], s: ['дом · 350 м²', 'uy · 350 m²'] },
  { tag: 'h02', n: 13, ru: ['Новза, 75 м²', 'Новза, Хамза · 75 м² · от коробки до готовой квартиры'], uz: ['Novza, 75 m²', 'Novza, Hamza · 75 m² · karobkadan tayyor kvartiragacha'], s: ['75 м²', '75 m²'] },
  { tag: 'h03', n: 20, ru: ['Toshciti', 'Ташкент Сити'], uz: ['Toshciti', 'Toshkent Siti'], s: ['Ташкент Сити', 'Toshkent Siti'] },
  { tag: 'h04', n: 14, skip: [9], ru: ['Parkwood', 'Новостройка Parkwood · 40 м²'], uz: ['Parkwood', 'Parkwood yangi uyi · 40 m²'], s: ['40 м²', '40 m²'] },
  { tag: 'h05', n: 2, ru: ['Юнусабад', 'Юнусабад · монтаж гипсокартона'], uz: ['Yunusobod', 'Yunusobod · gipskarton montaji'], s: ['гипсокартон', 'gipskarton'] },
  { tag: 'h06', n: 8, ru: ['Паркент', 'Паркент'], uz: ['Parkent', 'Parkent'], s: ['Паркент', 'Parkent'] },
  { tag: 'h07', n: 18, ru: ['Labzak 125', 'Лабзак · рабочий процесс и готовые комнаты'], uz: ['Labzak 125', 'Labzak · ish jarayoni va tayyor xonalar'], s: ['Лабзак', 'Labzak'] },
  { tag: 'h08', n: 3, ru: ['Сергели, 75 м²', 'Сергели, массив Строителей · 75 м²'], uz: ['Sergeli, 75 m²', 'Sergeli, Quruvchilar massivi · 75 m²'], s: ['75 м²', '75 m²'] },
  { tag: 'h09', n: 15, ru: ['Кукча, 91 м²', 'Махалля Кукча · 91 м²'], uz: ['Ko‘kcha, 91 m²', 'Ko‘kcha mahallasi · 91 m²'], s: ['91 м²', '91 m²'] },
  { tag: 'h10', n: 18, ru: ['Yunusobod 88', 'ЖК Yunusobod Residence · 88 м²'], uz: ['Yunusobod 88', 'Yunusobod Residence TJM · 88 m²'], s: ['88 м²', '88 m²'] },
  { tag: 'h11', n: 4, ru: ['ЖК «Кон Ота»', 'Ремонт под ключ: демонтаж, монтаж сантехники'], uz: ['«Kon Ota» TJM', 'Kalit topshirish ta’miri: demontaj, santexnika montaji'], s: ['демонтаж', 'demontaj'] },
  { tag: 'h12', n: 15, ru: ['Sergeli Modern', 'ЖК Modern Sergeli · рабочий процесс и подбор материалов'], uz: ['Sergeli Modern', 'Modern Sergeli TJM · ish jarayoni va materiallar tanlash'], s: ['Сергели', 'Sergeli'] },
];
OBJ.forEach(o => {
  o.frames = [];
  for (let i = 0; i < o.n; i++) if (!(o.skip || []).includes(i)) {
    const b = `${M}hl/${o.tag}_${String(i).padStart(2, '0')}`;
    o.frames.push({ img: b + '.jpg', vid: hasVid(o.tag, i) ? b + '.mp4' : null });
  }
});

/* ---------------- state / lang ---------------- */
const qs = new URLSearchParams(location.search);
let lang = qs.get('lang') || localStorage.getItem('sh_lang') || 'ru';
if (!T[lang]) lang = 'ru';
let cur = 0;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) || (navigator.deviceMemory && navigator.deviceMemory <= 2) || navigator.connection?.saveData;
const t = k => T[lang][k] ?? T.ru[k] ?? k;

function applyLang() {
  document.documentElement.lang = lang === 'uz' ? 'uz' : 'ru';
  $$('[data-i18n]').forEach(el => { const v = t(el.dataset.i18n); if (v) el.innerHTML = v; });
  $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  $$('.step.tn').forEach(s => s.dataset.tn = t('tn'));
  buildRail(); buildList(); fillDistricts(); updateCard(true); renderMsg();
}
$$('.lang button').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang; localStorage.setItem('sh_lang', lang);
  const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u);
  applyLang();
}));

/* ---------------- toast ---------------- */
let toastT;
function toast(msg) { const el = $('.toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), 2600); }

/* ---------------- rail + list ---------------- */
function buildRail() {
  const rail = $('.rail'); rail.innerHTML = '';
  OBJ.forEach((o, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', i === cur);
    b.innerHTML = `<b>${o[lang][0]}</b><small>${o.s[lang === 'uz' ? 1 : 0]}</small>`;
    b.addEventListener('click', () => selectObj(i, false));
    rail.appendChild(b);
  });
}
function buildList() {
  const ol = $('.obj-list'); ol.innerHTML = '';
  OBJ.forEach((o, i) => {
    const li = document.createElement('li'); li.className = 'obj-row';
    const pick = [0, 0.33, 0.66, 1].map(f => o.frames[Math.round(f * (o.frames.length - 1))].img);
    const uniq = [...new Set(pick)];
    li.innerHTML = `<button type="button"><span class="or-name">${o[lang][0]}</span><span class="or-meta">${o[lang][1]} · ${o.frames.length} ${t('frames')}</span><span class="or-thumbs">${uniq.map(s => `<img src="${s}" alt="" loading="lazy" decoding="async">`).join('')}</span></button>`;
    li.querySelector('button').addEventListener('click', () => selectObj(i, true));
    ol.appendChild(li);
  });
}
function updateCard(silent) {
  const o = OBJ[cur];
  $('.obj-name').textContent = o[lang][0];
  $('.obj-meta').textContent = o[lang][1];
  $('.tot').textContent = String(o.frames.length).padStart(2, '0');
  $$('.rail button').forEach((b, i) => b.setAttribute('aria-selected', i === cur));
  if (!silent) { const sel = $$('.rail button')[cur]; sel?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduce ? 'auto' : 'smooth' }); }
}

/* ---------------- scroll helpers (Lenis) ---------------- */
let lenis = null;
const isTouch = matchMedia('(pointer: coarse)').matches;
if (!reduce && !isTouch && window.Lenis) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  if (window.gsap) { gsap.ticker.add(tm => lenis.raf(tm * 1000)); gsap.ticker.lagSmoothing(0); }
  else { const r = tm => { lenis.raf(tm); requestAnimationFrame(r); }; requestAnimationFrame(r); }
  if (window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
}
function scrollToY(y, immediate) {
  if (lenis) lenis.scrollTo(y, { immediate: !!immediate, duration: 1.2 });
  else window.scrollTo({ top: y, behavior: immediate || reduce ? 'auto' : 'smooth' });
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href'); const el = id.length > 1 && $(id); if (!el) return;
  e.preventDefault(); scrollToY(el.getBoundingClientRect().top + scrollY - (id === '#walk' ? 0 : 64));
}));

/* ---------------- walkthrough ---------------- */
const walk = $('#walk');
function walkProgress() {
  const r = walk.getBoundingClientRect(); const span = r.height - innerHeight;
  return span > 0 ? clamp(-r.top / span) : 0;
}
function walkStartY(p = 0) { return walk.offsetTop + p * (walk.offsetHeight - innerHeight); }

let gl = null; // set when WebGL is running
function selectObj(i, jump) {
  if (i === cur && !jump) return;
  cur = i; updateCard();
  if (gl) gl.setObject(i); else buildStrip();
  if (jump) scrollToY(gl ? walkStartY(0.07) : walk.offsetTop);
  else if (gl && walkProgress() > 0.1) scrollToY(walkStartY(0.07));
}
$('.obj-next').addEventListener('click', () => selectObj((cur + 1) % OBJ.length, true));

function buildStrip() {
  const s = $('.strip'); s.innerHTML = '';
  OBJ[cur].frames.forEach((f, k) => { const im = new Image(); im.src = f.img; im.alt = `${OBJ[cur][lang][0]} — ${k + 1}`; im.loading = k < 3 ? 'eager' : 'lazy'; im.decoding = 'async'; s.appendChild(im); });
  s.scrollLeft = 0;
}

function canWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (_) { return false; }
}

async function initGL() {
  const THREE = await import('three');
  const canvas = $('.gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  const world = new THREE.Group(); scene.add(world);

  const PH = 3.2, PW = 1.8, D = 6.4, XS = 1.25, FLOOR = -PH / 2 - 0.04;
  const geo = new THREE.PlaneGeometry(PW, PH, 24, 24);
  const loader = new THREE.TextureLoader();
  const blank = new THREE.DataTexture(new Uint8Array([58, 57, 53, 255]), 1, 1); blank.needsUpdate = true;

  const vert = `
    uniform float uVel; uniform float uRefl;
    varying vec2 vUv; varying float vZ;
    void main(){
      vUv = uv; vec3 p = position;
      float b = sin(uv.y * 3.14159);
      p.z -= b * uVel * 0.9;
      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      vZ = -mv.z;
      gl_Position = projectionMatrix * mv;
    }`;
  const frag = `
    uniform sampler2D uTex; uniform vec2 uRatio; uniform float uAlpha, uVel, uReveal, uTime, uRefl, uHas, uFocus;
    varying vec2 vUv; varying float vZ;
    float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
    float n2(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
    void main(){
      vec2 uv = (vUv - 0.5) * uRatio + 0.5;
      float sh = clamp(uVel, -1.5, 1.5) * 0.012;
      vec3 c = vec3(texture2D(uTex, uv + vec2(0., sh)).r, texture2D(uTex, uv).g, texture2D(uTex, uv - vec2(0., sh)).b);
      if (uHas < .5) c = vec3(.23,.225,.21) + .03 * n2(vUv * 6. + uTime * .3);
      // dissolve with a warm LED seam
      float n = n2(vUv * 5.0) * .7 + n2(vUv * 13.0) * .3;
      float e = uReveal * 1.25 - .12;
      float vis = 1. - smoothstep(e - .015, e + .015, n);
      float seam = (1. - smoothstep(0., .06, abs(n - e))) * (1. - step(.999, uReveal)) * step(.001, uReveal);
      c += vec3(1., .84, .58) * seam * 1.6;
      // soft focus falloff toward edges (lens), lift when in focus
      float vig = smoothstep(1.05, .35, length((vUv - .5) * vec2(1.25, .9)));
      c *= mix(.72, 1., vig);
      c = mix(c * .82, c, uFocus);
      // warm cove line along the top edge
      float led = (1. - smoothstep(0., .007, abs(vUv.y - .997))) * uFocus;
      c += vec3(1., .86, .6) * led * .9;
      float a = uAlpha * vis;
      if (uRefl > .5) { a *= pow(1. - vUv.y, 4.) * .22; c *= .8; }
      gl_FragColor = vec4(c, a);
      #include <colorspace_fragment>
    }`;

  function mkMat(refl) {
    return new THREE.ShaderMaterial({
      uniforms: { uTex: { value: blank }, uRatio: { value: new THREE.Vector2(1, 1) }, uAlpha: { value: 0 }, uVel: { value: 0 }, uReveal: { value: 0 }, uTime: { value: 0 }, uRefl: { value: refl ? 1 : 0 }, uHas: { value: 0 }, uFocus: { value: 0 } },
      vertexShader: vert, fragmentShader: frag, transparent: true, depthWrite: false, side: THREE.DoubleSide
    });
  }

  // dust: abstract depth particles in warm light
  const DN = 700, dpos = new Float32Array(DN * 3);
  for (let i = 0; i < DN; i++) { dpos[i * 3] = (Math.random() - .5) * 12; dpos[i * 3 + 1] = (Math.random() - .5) * 7; dpos[i * 3 + 2] = 8 - Math.random() * 140; }
  const dgeo = new THREE.BufferGeometry(); dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dc = document.createElement('canvas'); dc.width = dc.height = 32; const dx = dc.getContext('2d');
  const dg = dx.createRadialGradient(16, 16, 0, 16, 16, 16); dg.addColorStop(0, 'rgba(255,255,255,1)'); dg.addColorStop(.4, 'rgba(255,255,255,.5)'); dg.addColorStop(1, 'rgba(255,255,255,0)');
  dx.fillStyle = dg; dx.fillRect(0, 0, 32, 32);
  const dmat = new THREE.PointsMaterial({ color: 0xf2d49b, size: 0.03, map: new THREE.CanvasTexture(dc), transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  const dust = new THREE.Points(dgeo, dmat); scene.add(dust);


  let planes = [], token = 0;
  const pending = new Set();

  function build(i, startHidden) {
    const my = ++token;
    planes.forEach(p => { world.remove(p.mesh); world.remove(p.refl); p.mat.dispose(); p.rmat.dispose(); p.tex && p.tex !== blank && p.tex.dispose(); if (p.video) { p.video.pause(); p.video.removeAttribute('src'); p.video.load(); p.vtex?.dispose(); } });
    planes = [];
    OBJ[i].frames.forEach((f, k) => {
      const side = k % 2 === 0 ? 1 : -1;
      const mat = mkMat(false), rmat = mkMat(true);
      rmat.uniforms = Object.assign({}, mat.uniforms, { uRefl: { value: 1 } });
      const mesh = new THREE.Mesh(geo, mat), refl = new THREE.Mesh(geo, rmat);
      const x = side * XS, z = -k * D, y = 0;
      mesh.position.set(x, y, z); mesh.rotation.y = -side * 0.16;
      refl.position.set(x, FLOOR * 2 - y, z); refl.rotation.y = -side * 0.16; refl.scale.y = -1;
      world.add(mesh, refl);
      const p = { mesh, refl, mat, rmat, x, z, f, tex: null, video: null, vtex: null, usingVideo: false };
      mat.uniforms.uReveal.value = startHidden ? 0 : 1;
      planes.push(p);
      const ld = () => loader.load(f.img, tex => {
        if (my !== token) { tex.dispose(); return; }
        tex.colorSpace = THREE.SRGBColorSpace; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.anisotropy = 4;
        p.tex = tex; setTex(p, tex, tex.image.width / tex.image.height);
      });
      if (k < 4) ld(); else setTimeout(ld, 120 * k);
    });
    if (startHidden && window.gsap) planes.forEach((p, k) => gsap.to(p.mat.uniforms.uReveal, { value: 1, duration: 1.3, delay: .05 * Math.min(k, 6), ease: 'power2.out' }));
    else planes.forEach(p => p.mat.uniforms.uReveal.value = 1);
  }
  function setTex(p, tex, aspect) {
    const pa = PW / PH; const u = p.mat.uniforms;
    u.uTex.value = tex; u.uHas.value = 1;
    if (aspect > pa) u.uRatio.value.set(pa / aspect, 1); else u.uRatio.value.set(1, aspect / pa);
  }

  let active = -1;
  function manageVideo(idx) {
    if (idx === active) return;
    const prev = planes[active];
    if (prev && prev.video) { prev.video.pause(); if (prev.tex) setTex(prev, prev.tex, prev.tex.image.width / prev.tex.image.height); prev.usingVideo = false; }
    active = idx;
    const p = planes[idx]; if (!p || !p.f.vid || reduce) return;
    if (!p.video) {
      const v = document.createElement('video');
      v.muted = true; v.playsInline = true; v.loop = true; v.preload = 'none'; v.crossOrigin = 'anonymous';
      v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.src = p.f.vid;
      p.video = v; p.vtex = new THREE.VideoTexture(v); p.vtex.colorSpace = THREE.SRGBColorSpace;
      v.addEventListener('playing', () => { if (planes[active] === p && v.videoWidth) { setTex(p, p.vtex, v.videoWidth / v.videoHeight); p.usingVideo = true; } });
    } else if (p.video.videoWidth) { setTex(p, p.vtex, p.video.videoWidth / p.video.videoHeight); }
    p.video.play().catch(() => {});
  }

  function setObject(i) {
    const out = planes;
    if (window.gsap && out.length) {
      out.forEach(p => gsap.to(p.mat.uniforms.uReveal, { value: 0, duration: .55, ease: 'power2.in' }));
      gsap.delayedCall(.5, () => { active = -1; build(i, true); });
    } else { active = -1; build(i, false); }
  }

  // sizing
  let W = 1, H = 1, dist = 7, distWalk = 7, distHero = 7, heroSy = 0, desk = true;
  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    desk = W / H > 1.05 && W > 760;
    const tanh = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * 2;
    const wfit = (PW / .78) / (tanh * camera.aspect);
    distWalk = Math.max(PH / (desk ? .74 : .44) / tanh, wfit);
    distHero = Math.max(PH / .74 / tanh, wfit);
    heroSy = 0;
    if (!desk) {
      // mobile: the photo lives only in the free band between the hero buttons and the rail
      const sr = canvas.getBoundingClientRect();
      const hb = $('.hero').getBoundingClientRect().bottom - sr.top + 20;
      const rt = $('.rail').getBoundingClientRect().top - sr.top - 4;
      const band = Math.max(60, rt - hb);
      distHero = PH / (band * .84 / H) / tanh;
      heroSy = (hb + rt) / 2 - H / 2;
    }
    dist = distWalk;
  }
  addEventListener('resize', resize); resize();
  document.fonts?.ready.then(resize);
  $$('.lang button').forEach(b => b.addEventListener('click', () => setTimeout(resize, 30)));

  // pointer parallax
  const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { ptr.tx = e.clientX / innerWidth - .5; ptr.ty = e.clientY / innerHeight - .5; } }, { passive: true });

  let fS = 0, fPrev = 0, vel = 0, running = true, visible = true, last = performance.now();
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) loop(); else planes[active]?.video?.pause(); }, { threshold: 0 });
  io.observe(walk);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && visible) loop(); });

  const hero = $('.hero'), bar = $('.led-bar'), curEl = $('.cur');
  let raf = 0;
  function loop() { if (!raf) raf = requestAnimationFrame(frame); }
  function frame(now) {
    raf = 0;
    if (!visible || document.hidden) return;
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    const N = planes.length || 1;
    const p = walkProgress();
    // dwell mapping: camera rests at each frame, flies between them
    const pp = clamp((p - .04) / .94);
    const fRaw = pp * (N - 1);
    fS = lerp(fS, fRaw, 1 - Math.pow(.0009, dt));
    const i0 = Math.floor(fS), tt = fS - i0;
    const s = sstep(.22, .78, tt);
    const fz = i0 + s;
    vel = lerp(vel, (fS - fPrev) / Math.max(dt, .001) * .6, .12); fPrev = fS;

    const heroK = 1 - sstep(0, .045, p);
    dist = lerp(distWalk, distHero, heroK);
    const pa = planes[Math.min(i0, N - 1)], pb = planes[Math.min(i0 + 1, N - 1)];
    const cx = pa && pb ? lerp(pa.x, pb.x, s) * (W / H > 1.05 ? .9 : 1) : 0;
    ptr.x = lerp(ptr.x, ptr.tx, .05); ptr.y = lerp(ptr.y, ptr.ty, .05);
    camera.position.set(cx + ptr.x * .35, -ptr.y * .2, -fz * D + dist);
    camera.lookAt(cx + ptr.x * .1, 0, -fz * D - 4);
    camera.rotation.z = -vel * .01;

    // frame the plane: right side on desktop, lower on mobile while hero text shows
    const sx = desk ? W * (.19 + .02 * heroK) : 0;
    const sy = desk ? 0 : lerp(-.07 * H, heroSy, heroK);
    camera.setViewOffset(W, H, -sx, -sy, W, H);

    planes.forEach((q, k) => {
      const dz = camera.position.z - q.z;
      let a = sstep(dist * .18, dist * .62, dz) * (1 - sstep(D * 2.2, D * 4.2, dz));
      const u = q.mat.uniforms;
      u.uAlpha.value = a; u.uVel.value = vel; u.uTime.value = now / 1000;
      u.uFocus.value = 1 - clamp(Math.abs(k - fS) * 1.4);
      q.mesh.visible = q.refl.visible = a > .002;
      q.rmat.uniforms.uAlpha.value = a;
    });
    const near = Math.round(fS);
    manageVideo(near);
    const pv = planes[near]; if (pv && pv.usingVideo && pv.vtex) pv.vtex.needsUpdate = true;

    dust.position.z = 0; dust.rotation.y = Math.sin(now / 9000) * .02;
    dmat.opacity = .45 + .1 * Math.sin(now / 1600);

    // DOM sync
    hero.style.opacity = heroK; hero.style.transform = `translateY(${(1 - heroK) * -30}px)`; hero.style.visibility = heroK < .01 ? 'hidden' : 'visible';
    walk.classList.toggle('walking', p > .035);
    walk.classList.toggle('at-end', p > .965);
    bar.style.width = (N > 1 ? fS / (N - 1) * 100 : 100) + '%';
    curEl.textContent = String(Math.min(N, near + 1)).padStart(2, '0');

    renderer.render(scene, camera);
    loop();
  }

  build(cur, true);
  loop();
  return { setObject };
}

/* ---------------- process steps ---------------- */
function mediaOf(spec) {
  const [k, v] = [spec.slice(0, 1), spec.slice(2)];
  if (k === 'i') return { img: M + v };
  if (v.includes('|')) { const [src, poster] = v.split('|'); return { vid: src, img: poster }; }
  return { vid: `${M}v/${v}.mp4`, img: `${M}vp/${v}_1.jpg` };
}
function initSteps() {
  const steps = $$('.step');
  steps.forEach((s, i) => { if (i >= 3) s.classList.add('tn'); });
  const frame = $('.sm-frame'), img = $('img', frame), vid = $('video', frame);
  const wide = matchMedia('(min-width: 1001px)');
  // inline media for narrow screens
  steps.forEach(s => {
    const m = mediaOf(s.dataset.media);
    let el;
    if (m.vid) { el = document.createElement('video'); el.muted = true; el.playsInline = true; el.loop = true; el.preload = 'none'; el.poster = m.img; el.dataset.src = m.vid; el.setAttribute('muted', ''); el.setAttribute('playsinline', ''); }
    else { el = new Image(); el.loading = 'lazy'; el.decoding = 'async'; el.src = m.img; el.alt = ''; }
    el.className = 'm-inline'; s.appendChild(el);
  });
  const vio = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target; if (!(v instanceof HTMLVideoElement) || reduce) return;
    if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); } else v.pause();
  }), { threshold: .4 });
  $$('video.m-inline').forEach(v => vio.observe(v));

  let on = -1;
  function show(i) {
    if (i === on) return; on = i;
    steps.forEach((s, k) => s.classList.toggle('on', k === i));
    if (!wide.matches) return;
    const m = mediaOf(steps[i].dataset.media);
    img.src = m.img;
    frame.classList.remove('vid'); vid.pause();
    if (m.vid && !reduce) { vid.poster = m.img; vid.src = m.vid; vid.play().then(() => frame.classList.add('vid')).catch(() => {}); }
    if (window.gsap && !reduce) gsap.fromTo(frame, { rotateY: -8, scale: .97 }, { rotateY: 0, scale: 1, duration: .8, ease: 'power3.out' });
  }
  const sio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) show(steps.indexOf(e.target)); }), { rootMargin: '-45% 0px -45% 0px' });
  steps.forEach(s => sio.observe(s));
  show(0);
  // video only plays when the process section is visible
  new IntersectionObserver(es => { if (!es[0].isIntersecting) vid.pause(); else if (frame.classList.contains('vid')) vid.play().catch(() => {}); }).observe($('.process'));

  // tilt with light (pointer only; touch gets the plain frame)
  const host = $('.step-media');
  host.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || reduce) return;
    const r = frame.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    frame.style.transform = `perspective(1100px) rotateY(${(x - .5) * 10}deg) rotateX(${(.5 - y) * 8}deg)`;
    frame.style.setProperty('--lx', x * 100 + '%'); frame.style.setProperty('--ly', y * 100 + '%');
  });
  host.addEventListener('pointerleave', () => { frame.style.transform = ''; });
  $('.step-media').style.pointerEvents = 'auto';

  // technadzor LED line grows with progress through the steps
  const line = $('.tn-line span'), list = $('.step-list');
  const upd = () => {
    const r = list.getBoundingClientRect(); const k = clamp((innerHeight * .5 - r.top) / r.height);
    const s3 = steps[3].offsetTop / list.offsetHeight;
    line.style.top = (s3 * 100) + '%';
    line.style.height = Math.max(0, (k - s3)) * 100 + '%';
  };
  addEventListener('scroll', upd, { passive: true }); upd();
}

/* ---------------- composer ---------------- */
const form = { type: 'flat', state: 'box', area: 80, district: '', need: ['turnkey'], style: 'neo', budget: 'b0', when: 'now' };
const LBL = {
  type: { flat: 't_flat', house: 't_house', room: 't_room' },
  state: { box: 'st_box', rough: 'st_rough', old: 'st_old' },
  need: { turnkey: 'n_turnkey', design: 'n_design', supply: 'n_supply', furn: 'n_furn', ext: 'n_ext' },
  style: { neo: 'y_neo', min: 'y_min', hitech: 'y_hitech', modern: 'y_modern', unsure: 'y_unsure' },
  budget: { b0: 'b0', b1: 'b1', b2: 'b2', b3: 'b3', b4: 'b4' },
  when: { now: 'w_now', month: 'w_month', later: 'w_later' }
};
const low = s => s.charAt(0).toLowerCase() + s.slice(1);
function buildMsg() {
  const m = t('m'); const L = [];
  L.push(m.hi, '');
  L.push(`${m.obj}: ${low(t(LBL.type[form.type]))}, ${low(t(LBL.state[form.state]))}`);
  L.push(`${m.area}: ${form.area} ${m.m2}`);
  L.push(`${m.dist}: ${form.district !== '' ? t('districts')[+form.district] : m.none}`);
  L.push(`${m.need}: ${form.need.length ? form.need.map(n => low(t(LBL.need[n]))).join(', ') : m.none}`);
  L.push(`${m.style}: ${low(t(LBL.style[form.style]))}`);
  L.push(`${m.budget}: ${form.budget === 'b0' ? low(t('b0')) : t(LBL.budget[form.budget])}`);
  L.push(`${m.when}: ${low(t(LBL.when[form.when]))}`);
  const nm = $('#name').value.trim(), nt = $('#note').value.trim();
  if (nm) L.push(`${m.name}: ${nm}`);
  if (nt) L.push(`${m.note}: ${nt}`);
  return L.join('\n');
}
function renderMsg() { $('#msg').textContent = buildMsg(); }
function fillDistricts() {
  const sel = $('#district'); const v = form.district;
  sel.innerHTML = `<option value="">${t('dist_ph')}</option>` + t('districts').map((d, i) => `<option value="${i}">${d}</option>`).join('');
  sel.value = v;
}
function initComposer() {
  $$('.seg').forEach(g => {
    const f = g.dataset.field, multi = g.classList.contains('multi');
    g.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (multi) {
        const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on);
        form[f] = $$('button', g).filter(x => x.getAttribute('aria-pressed') === 'true').map(x => x.dataset.v);
      } else { $$('button', g).forEach(x => x.setAttribute('aria-pressed', x === b)); form[f] = b.dataset.v; }
      renderMsg();
    });
  });
  const r = $('#area'), n = $('#areaN');
  const fill = () => r.style.setProperty('--fill', ((r.value - r.min) / (r.max - r.min) * 100) + '%');
  r.addEventListener('input', () => { n.value = r.value; form.area = +r.value; fill(); renderMsg(); });
  n.addEventListener('input', () => { const v = Math.round(+n.value || 0); if (v > 0) { form.area = v; r.value = Math.min(600, Math.max(10, v)); fill(); renderMsg(); } });
  fill();
  $('#district').addEventListener('change', e => { form.district = e.target.value; renderMsg(); });
  ['#name', '#note'].forEach(s => $(s).addEventListener('input', renderMsg));
  $$('[data-send]').forEach(b => b.addEventListener('click', async () => {
    const kind = b.dataset.send; const text = buildMsg();
    const ok = await copy(text);
    if (kind === 'copy') { toast(ok ? t('t_copy') : text); return; }
    toast(kind === 'tg' ? t('t_tg') : t('t_ig'));
    const url = kind === 'tg' ? 'https://t.me/stroyhouse_uz' : 'https://ig.me/m/stroyhouse_uz';
    setTimeout(() => window.open(url, '_blank', 'noopener'), 350);
  }));
}
async function copy(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch (_) {
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (_) {} ta.remove(); return ok;
  }
}

/* ---------------- header tone ---------------- */
function initHeader() {
  const top = $('.top');
  const upd = () => { const r = walk.getBoundingClientRect(); const f = $('.foot').getBoundingClientRect(); top.classList.toggle('light', r.bottom < 70 && f.top > 70); };
  addEventListener('scroll', upd, { passive: true }); upd();
}

/* ---------------- boot ---------------- */
applyLang();
initComposer();
initSteps();
initHeader();
const use3D = !reduce && !lowPower && !qs.has('no3d') && canWebGL();
if (use3D) {
  initGL().then(api => { gl = api; }).catch(err => { console.warn('3D off', err); document.documentElement.classList.add('no3d'); buildStrip(); });
} else { document.documentElement.classList.add('no3d'); buildStrip(); }
