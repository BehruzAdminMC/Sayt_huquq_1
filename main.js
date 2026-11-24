"use strict";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const TOPICS = [
  {
    n: 1, ico: "📜", t: "Huquq va huquq normasi",
    d: "Huquq — davlat o'rnatgan va himoya qiladigan, odamlar xulq-atvorini tartibga soluvchi umummajburiy qoidalar majmui.",
    m: ["Davlat tomonidan o'rnatiladi", "Hamma uchun majburiy (umummajburiy)", "Aniq va rasmiy shaklda yoziladi", "Davlat majburlov kuchi bilan ta'minlanadi"]
  },
  {
    n: 2, ico: "🏛️", t: "Konstitutsiya",
    d: "Konstitutsiya — davlatning asosiy qonuni. U eng oliy yuridik kuchga ega.",
    m: ["Davlat tuzilishi va hokimiyat asoslarini belgilaydi", "Inson huquq va erkinliklarini kafolatlaydi", "Boshqa qonunlar unga zid bo'lmasligi shart", "Konstitutsiya kuni 8-dekabrda nishonlanadi"]
  },
  {
    n: 3, ico: "⚖️", t: "Huquqbuzarlik va javobgarlik",
    d: "Huquqbuzarlik — qonunga xilof, aybli qilmish. Buning uchun yuridik javobgarlik kelib chiqadi.",
    m: ["Jinoyat — eng xavfli huquqbuzarlik", "Ma'muriy huquqbuzarlik", "Intizomiy huquqbuzarlik", "Fuqarolik-huquqiy huquqbuzarlik"]
  },
  {
    n: 4, ico: "🏢", t: "Davlat hokimiyati organlari",
    d: "Davlat hokimiyati uch tarmoqqa bo'linadi. Bu hokimiyat bir joyda to'planib qolmasligi uchun kerak.",
    m: ["Qonun chiqaruvchi — Oliy Majlis", "Ijro etuvchi — Vazirlar Mahkamasi", "Sud hokimiyati — sudlar"]
  },
  {
    n: 5, ico: "👨‍👩‍👧", t: "Inson huquqlari va erkinliklari",
    d: "Har bir inson tug‘ilganidan boshlab huquq va erkinliklarga ega. Ular Konstitutsiya bilan kafolatlanadi.",
    m: ["Hayot huquqi", "Shaxsiy daxlsizlik", "So‘z va e’tiqod erkinligi", "Ta’lim olish huquqi"]
  },
  {
    n: 6, ico: "📚", t: "Huquqiy madaniyat",
    d: "Huquqiy madaniyat — insonning huquqni bilishi, hurmat qilishi va unga amal qilishidir.",
    m: ["Huquqni bilish", "Huquqni hurmat qilish", "Qonunga rioya qilish", "Boshqalarning huquqlarini himoya qilish"]
  }
];

const TERMS = [
  { t: "Huquq", d: "Davlat o'rnatgan va himoya qiladigan umummajburiy xulq-atvor qoidalari majmui." },
  { t: "Konstitutsiya", d: "Davlatning asosiy qonuni, eng oliy yuridik kuchga ega hujjat." },
  { t: "Huquqbuzarlik", d: "Qonunga xilof, aybli va zarar yetkazuvchi qilmish." },
  { t: "Yuridik javobgarlik", d: "Huquqbuzarga nisbatan davlat qo'llaydigan majburlov chorasi." },
  { t: "Huquqiy madaniyat", d: "Insonning huquqni bilishi, hurmat qilishi va unga amal qilishi." },
  { t: "Hokimiyatlar bo'linishi", d: "Davlat hokimiyatining qonun chiqaruvchi, ijro etuvchi va sud tarmoqlariga ajralishi." },
  { t: "Fuqaro", d: "Davlatga mansublikni bildiruvchi va muayyan huquq va majburiyatlarga ega shaxs." },
  { t: "Qonun", d: "Oliy Majlis tomonidan qabul qilinadigan va umummajburiy kuchga ega normativ hujjat." },
  { t: "Sud", d: "Adolatni amalga oshiruvchi mustaqil davlat organi." },
  { t: "Majburiyat", d: "Shaxs qonun yoki shartnoma asosida bajarishi shart bo‘lgan harakat." },
  { t: "Huquq subyekti", d: "Huquq va majburiyatlarga ega bo‘lishi mumkin bo‘lgan shaxs yoki tashkilot." },
  { t: "Norma", d: "Xulq-atvorni tartibga soluvchi umumiy qoida." }
];

const QUIZ = [
  { q: "Konstitutsiya qanday yuridik kuchga ega?", o: ["Oddiy qonun kuchiga", "Eng oliy yuridik kuchga", "Faqat tavsiya kuchiga", "Faqat hukumat qarori kuchiga"], a: 1, e: "Konstitutsiya — asosiy qonun, boshqa hujjatlar unga zid bo'lmasligi kerak." },
  { q: "Quyidagilardan qaysi biri huquq normasining belgisi EMAS?", o: ["Davlat tomonidan o'rnatiladi", "Umummajburiy", "Faqat xohlaganlar bajaradi", "Davlat majburlov kuchi bilan ta'minlanadi"], a: 2, e: "Huquq normasi hamma uchun majburiy, uni ixtiyoriy bajarib bo'lmaydi." },
  { q: "Huquqbuzarliklarning eng xavflisi qaysi?", o: ["Intizomiy huquqbuzarlik", "Ma'muriy huquqbuzarlik", "Jinoyat", "Fuqarolik-huquqiy nizo"], a: 2, e: "Jinoyat — jamiyat uchun eng xavfli qilmish." },
  { q: "Qonun chiqaruvchi hokimiyat organi qaysi?", o: ["Vazirlar Mahkamasi", "Oliy Majlis", "Sudlar", "Hokimliklar"], a: 1, e: "Qonunlarni Oliy Majlis qabul qiladi." },
  { q: "Konstitutsiya kuni qaysi sanada nishonlanadi?", o: ["1-sentabr", "21-mart", "8-dekabr", "9-may"], a: 2, e: "Konstitutsiya kuni har yili 8-dekabrda nishonlanadi." },
  { q: "Davlat hokimiyati nechta tarmoqqa bo‘linadi?", o: ["2 ta", "3 ta", "4 ta", "5 ta"], a: 1, e: "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyati." },
  { q: "Ijro etuvchi hokimiyatni qaysi organ amalga oshiradi?", o: ["Oliy Majlis", "Vazirlar Mahkamasi", "Oliy sud", "Prokuratura"], a: 1, e: "Hukumat — Vazirlar Mahkamasi ijro etuvchi hokimiyatdir." },
  { q: "Huquqning asosiy manbai nima?", o: ["Urf-odat", "Konstitutsiya va qonunlar", "Faqat sud qarorlari", "Xorijiy qonunlar"], a: 1, e: "O‘zbekistonda huquqning asosiy manbai Konstitutsiya va qonunlardir." },
  { q: "Inson huquqlari qayerda kafolatlanadi?", o: ["Faqat oilada", "Konstitutsiyada", "Faqat maktabda", "Faqat ish joyida"], a: 1, e: "Konstitutsiya inson huquq va erkinliklarini kafolatlaydi." },
  { q: "Yuridik javobgarlik nima uchun qo‘llaniladi?", o: ["Mukofotlash uchun", "Huquqbuzarlik uchun", "O‘qish uchun", "Sport uchun"], a: 1, e: "Yuridik javobgarlik huquqbuzarlik sodir etgan shaxsga nisbatan qo‘llaniladi." },
  { q: "Sud hokimiyati mustaqilmi?", o: ["Yo‘q, hukumatga bo‘ysunadi", "Ha, mustaqil", "Faqat Prezidentga bo‘ysunadi", "Faqat Oliy Majlisga bo‘ysunadi"], a: 1, e: "Sud hokimiyati mustaqil va faqat qonunga bo‘ysunadi." },
  { q: "Huquqiy madaniyat nima?", o: ["Faqat advokatlarning bilimi", "Huquqni bilish, hurmat qilish va unga amal qilish", "Faqat qonun yozish", "Faqat sudda ishlash"], a: 1, e: "Huquqiy madaniyat — huquqni bilish, hurmat qilish va rioya qilishdir." },
  { q: "Fuqaro nima?", o: ["Faqat yoshi katta odam", "Davlatga mansub va huquq-majburiyatlarga ega shaxs", "Faqat o‘qituvchi", "Faqat harbiy"], a: 1, e: "Fuqaro — muayyan davlatga mansublikni bildiruvchi shaxs." },
  { q: "Qonun qabul qilish huquqi kimga tegishli?", o: ["Faqat Prezidentga", "Oliy Majlisga", "Faqat Vazirlar Mahkamasiga", "Faqat sudlarga"], a: 1, e: "Qonunlarni Oliy Majlis qabul qiladi." },
  { q: "Jinoyat uchun qanday javobgarlik keladi?", o: ["Faqat ogohlantirish", "Jinoiy javobgarlik", "Faqat uy ishi", "Hech qanday"], a: 1, e: "Jinoyat uchun jinoiy javobgarlik kelib chiqadi." },
  { q: "Konstitutsiya qachon qabul qilingan (O‘zbekiston)?", o: ["1991-yil", "1992-yil", "1995-yil", "2000-yil"], a: 1, e: "O‘zbekiston Respublikasi Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan." },
  { q: "Hokimiyatlar bo‘linishi nima uchun kerak?", o: ["Hokimiyat bir joyda to‘planib qolmasligi uchun", "Faqat chiroyli ko‘rinishi uchun", "Faqat saylov uchun", "Hech narsa uchun"], a: 0, e: "Hokimiyatlar bo‘linishi — hokimiyatning suiiste’mol qilinishining oldini oladi." },
  { q: "Ta’lim olish huquqi kimga tegishli?", o: ["Faqat boy oilalarga", "Har bir fuqaroga", "Faqat o‘g‘il bolalarga", "Faqat shaharda yashovchilarga"], a: 1, e: "Har bir fuqaro ta’lim olish huquqiga ega." },
  { q: "Prokuratura nima vazifani bajaradi?", o: ["Qonunlarni yozadi", "Qonunlar ijrosini nazorat qiladi", "Faqat soliq yig‘adi", "Faqat maktab quradi"], a: 1, e: "Prokuratura qonunlarning aniq va bir xilda ijro etilishini nazorat qiladi." },
  { q: "Qonunga rioya qilish — bu nima?", o: ["Ixtiyoriy ish", "Har bir fuqaroning majburiyati", "Faqat politsiyaning ishi", "Faqat o‘qituvchilarning ishi"], a: 1, e: "Qonunga rioya qilish — har bir fuqaroning asosiy majburiyatidir." },
  { q: "Qaysi organ adolatni amalga oshiradi?", o: ["Hokimlik", "Sud", "Maktab", "Do‘kon"], a: 1, e: "Adolatni sud amalga oshiradi." },
  { q: "Konstitutsiyaga zid qonun qabul qilish mumkinmi?", o: ["Ha, mumkin", "Yo‘q, mumkin emas", "Faqat Prezident ruxsati bilan", "Faqat sud ruxsati bilan"], a: 1, e: "Hech qanday qonun Konstitutsiyaga zid bo‘lishi mumkin emas." },
  { q: "Davlat ramzlari nimalardan iborat?", o: ["Faqat bayroq", "Bayroq, gerb, madhiya", "Faqat madhiya", "Faqat gerb"], a: 1, e: "Davlat ramzlari — bayroq, gerb va madhiyadir." },
  { q: "Insonning eng asosiy huquqi qaysi?", o: ["Mashina sotib olish", "Hayot huquqi", "Telefon o‘ynash", "Televizor ko‘rish"], a: 1, e: "Hayot huquqi — eng asosiy va daxlsiz huquqdir." },
  { q: "Huquqni bilmaslik — bu nima?", o: ["Javobgarlikdan ozod qiladi", "Javobgarlikdan ozod qilmaydi", "Mukofot beradi", "Hech narsa"], a: 1, e: "Qonunni bilmaslik javobgarlikdan ozod qilmaydi." }
];

(function bg() {
  const c = $("#bg"), x = c.getContext("2d");
  let W, H, P = [];
  const mouse = { x: -999, y: -999 };
  const resize = () => {
    W = c.width = innerWidth; H = c.height = innerHeight;
    P = Array.from({ length: Math.min(90, W / 14) }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 1.8 + .6
    }));
  };
  addEventListener("resize", resize); resize();
  addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  (function loop() {
    x.clearRect(0, 0, W, H);
    for (const p of P) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      x.fillStyle = "rgba(245,196,81,.7)";
      x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
    }
    for (let i = 0; i < P.length; i++) {
      for (let j = i + 1; j < P.length; j++) {
        const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
        if (d < 120) {
          x.strokeStyle = `rgba(245,196,81,${.12 * (1 - d / 120)})`;
          x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke();
        }
      }
    }
    for (const p of P) {
      const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (d < 160) {
        x.strokeStyle = `rgba(255,157,46,${.4 * (1 - d / 160)})`;
        x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(mouse.x, mouse.y); x.stroke();
      }
    }
    requestAnimationFrame(loop);
  })();
})();

addEventListener("mousemove", e => {
  const g = $("#glow");
  g.style.left = e.clientX + "px";
  g.style.top = e.clientY + "px";
});
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#bar").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
});

(function typing() {
  const lines = [
    "Huquqni bilgan — o'zini himoya qila oladi.",
    "Konstitutsiya — barcha qonunlarning asosi.",
    "BSB-3 ga birga tayyorlanamiz!",
    "Huquqiy madaniyat — har bir fuqaroning fazilati."
  ];
  let li = 0, ci = 0, del = false;
  const el = $("#typed");
  (function tick() {
    const s = lines[li];
    el.textContent = s.slice(0, ci);
    if (!del && ci === s.length) { del = true; return setTimeout(tick, 1800); }
    if (del && ci === 0) { del = false; li = (li + 1) % lines.length; }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 28 : 55);
  })();
})();

const counters = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to;
  let n = 0;
  const step = () => {
    n += 1;
    el.textContent = n;
    if (n < to) setTimeout(step, 90);
  };
  step();
  counters.unobserve(el);
}), { threshold: .6 });
$$(".stat b").forEach(b => counters.observe(b));

(function topics() {
  const tabs = $("#tabs"), cards = $("#cards");
  tabs.innerHTML = `<button class="tab on" data-f="0">Hammasi</button>` +
    TOPICS.map(r => `<button class="tab" data-f="${r.n}">${r.n}-mavzu</button>`).join("");

  cards.innerHTML = TOPICS.map(r => `
    <article class="card reveal" data-n="${r.n}">
      <span class="ico">${r.ico}</span>
      <h3>${r.t}</h3>
      <p>${r.d}</p>
      <ul class="more">${r.m.map(i => `<li>${i}</li>`).join("")}</ul>
    </article>
  `).join("");

  tabs.addEventListener("click", e => {
    const t = e.target.closest(".tab");
    if (!t) return;
    $$(".tab", tabs).forEach(b => b.classList.toggle("on", b === t));
    $$(".card", cards).forEach(c => {
      c.classList.toggle("dim", t.dataset.f !== "0" && c.dataset.n !== t.dataset.f);
    });
  });

  $$(".card", cards).forEach(c => {
    c.addEventListener("click", () => c.classList.toggle("open"));
    c.addEventListener("mousemove", e => {
      const r = c.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      c.style.setProperty("--mx", px * 100 + "%");
      c.style.setProperty("--my", py * 100 + "%");
      c.style.transform = `rotateY(${(px - .5) * 12}deg) rotateX(${(.5 - py) * 12}deg) translateZ(6px)`;
    });
    c.addEventListener("mouseleave", () => c.style.transform = "");
  });
})();

(function flips() {
  const box = $("#flips");
  box.innerHTML = TERMS.map(t => `
    <div class="flip reveal">
      <div class="flip-in">
        <div class="face front">${t.t}</div>
        <div class="face back">${t.d}</div>
      </div>
    </div>
  `).join("");
  $$(".flip", box).forEach(f => f.addEventListener("click", () => f.classList.toggle("on")));
})();

const rev = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: .12 });
$$(".sec h2, .quiz, .stat, .card, .flip").forEach(el => {
  el.classList.add("reveal");
  rev.observe(el);
});
$$(".card, .flip").forEach((c, i) => {
  c.style.transitionDelay = (i % 4) * 0.1 + "s";
});

(function quiz() {
  const box = $("#quizBox");
  let i = 0, score = 0, locked = false;
  let currentOptions = [];
  let currentCorrect = 0;

  function shuffle(arr) {
    const a = [...arr];
    for (let j = a.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [a[j], a[k]] = [a[k], a[j]];
    }
    return a;
  }

  function show() {
    const Q = QUIZ[i];
    locked = false;

    const originalCorrectText = Q.o[Q.a];
    currentOptions = shuffle(Q.o);
    currentCorrect = currentOptions.indexOf(originalCorrectText);

    box.innerHTML = `
      <div class="qtop">
        <span>Savol ${i + 1} / ${QUIZ.length}</span>
        <span>To'g'ri: ${score}</span>
      </div>
      <div class="qprog"><div style="width:${(i / QUIZ.length) * 100}%"></div></div>
      <div class="qtext">${Q.q}</div>
      ${currentOptions.map((t, k) => `
        <button class="opt" data-k="${k}" style="animation-delay:${k * .07}s">
          ${String.fromCharCode(65 + k)}. ${t}
        </button>
      `).join("")}
      <div class="expl" id="expl"></div>
      <div class="help-box" id="helpBox"></div>
      <button class="btn help" id="helpBtn">Yordam kerakmi?</button>
      <button class="btn" id="next" style="display:none;margin-left:10px">
        ${i === QUIZ.length - 1 ? "Natijani ko'rish" : "Keyingi savol"}
      </button>
    `;

    $$(".opt", box).forEach(b => {
      b.onclick = () => answer(+b.dataset.k);
    });

    $("#helpBtn").onclick = () => {
      const hb = $("#helpBox");
      hb.innerHTML = `<strong>To'g'ri javob:</strong> ${String.fromCharCode(65 + currentCorrect)}. ${currentOptions[currentCorrect]}<br><br>${Q.e}`;
      hb.classList.add("show");
      $("#helpBtn").style.display = "none";
    };

    $("#next").onclick = () => {
      i++;
      if (i < QUIZ.length) show();
      else finish();
    };
  }

  function answer(k) {
    if (locked) return;
    locked = true;
    const Q = QUIZ[i];
    const bs = $$(".opt", box);
    bs.forEach(b => b.disabled = true);
    bs[currentCorrect].classList.add("ok");
    if (k === currentCorrect) {
      score++;
      confetti(0.35);
    } else {
      bs[k].classList.add("bad");
    }
    $("#expl").textContent = Q.e;
    $("#next").style.display = "inline-block";
    $("#helpBtn").style.display = "none";
  }

  function finish() {
    const msg = score === 25 ? "Mukammal! BSB-3 ga to'liq tayyorsiz!" :
                score >= 20 ? "Juda yaxshi natija!" :
                score >= 15 ? "Yaxshi, lekin yana mashq qiling." :
                "Mavzularni qayta o'qib chiqing.";
    box.innerHTML = `
      <div class="result">
        <div class="big">${score} / ${QUIZ.length}</div>
        <p>${msg}</p>
        <br>
        <button class="btn" id="again">Qayta boshlash</button>
      </div>
    `;
    $("#again").onclick = () => {
      i = 0;
      score = 0;
      show();
    };
    if (score >= 15) confetti(1);
  }

  show();
})();

function confetti(power = 1) {
  const c = $("#fx"), x = c.getContext("2d");
  c.width = innerWidth;
  c.height = innerHeight;
  const cols = ["#f5c451", "#ff9d2e", "#ffffff", "#3ddc97", "#ff7b9c"];
  const ps = Array.from({ length: 160 * power }, () => ({
    x: innerWidth / 2,
    y: innerHeight * .55,
    vx: (Math.random() - .5) * 18,
    vy: -Math.random() * 18 - 5,
    s: Math.random() * 8 + 3,
    c: cols[Math.floor(Math.random() * cols.length)],
    r: Math.random() * 6,
    life: 1
  }));
  (function f() {
    x.clearRect(0, 0, c.width, c.height);
    let alive = false;
    for (const p of ps) {
      p.vy += .38;
      p.x += p.vx;
      p.y += p.vy;
      p.r += .2;
      p.life -= .0075;
      if (p.life > 0) {
        alive = true;
        x.save();
        x.globalAlpha = p.life;
        x.translate(p.x, p.y);
        x.rotate(p.r);
        x.fillStyle = p.c;
        x.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6);
        x.restore();
      }
    }
    if (alive) requestAnimationFrame(f);
    else x.clearRect(0, 0, c.width, c.height);
  })();
}