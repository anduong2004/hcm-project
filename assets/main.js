/**
 * main.js — Render flipbook (2-page spread), handle image fallback, animation, timeline, gallery, quiz, quotes
 */

/* Inline fallback placeholder (SVG) as data URI to guarantee available */
const PLACEHOLDER_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'>
    <rect width='100%' height='100%' fill='%23fffdf7'/>
    <g fill='%23334a53' font-family='Merriweather, serif' font-size='28'>
      <text x='50%' y='48%' dominant-baseline='middle' text-anchor='middle'>Hình ảnh tạm thời không hiển thị</text>
      <text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' font-size='20'>Vui lòng kiểm tra kết nối hoặc thử lại sau</text>
    </g>
  </svg>`
)}`;

/* Utility to safely set image src with fallback */
function safeSetImageSrc(imgEl, src) {
  imgEl.src = src;
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = PLACEHOLDER_SVG;
  };
}

/* DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Flipbook (1 trang, hiệu ứng lật mượt) ---------- */
  const bookEl = document.getElementById('book');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const firstBtn = document.getElementById('firstBtn');
  const lastBtn = document.getElementById('lastBtn');
  const pageIndicator = document.getElementById('pageIndicator');

  let current = 0;
  let isAnimating = false;
  const ANIM_DURATION = 720; // ms, match CSS

  function renderPage(idx, direction = '') {
    bookEl.classList.remove('flip-next', 'flip-prev', 'animating');
    bookEl.innerHTML = '';
    const data = BOOK_PAGES[idx];
    if (!data) return;

    const page = document.createElement('article');
    page.className = 'page single';
    page.setAttribute('aria-hidden', 'false');

    const h = document.createElement('h3');
    h.innerHTML = data.title;

    const img = document.createElement('img');
    img.className = 'illustration';
    img.alt = data.title;
    safeSetImageSrc(img, data.img);

    const p = document.createElement('p');
    p.innerHTML = data.content;

    const ev = document.createElement('div');
    ev.className = 'evidence';
    ev.innerHTML = `<strong>Dẫn chứng:</strong> ${data.evidence}`;

    page.appendChild(h);
    page.appendChild(img);
    page.appendChild(p);
    page.appendChild(ev);

    bookEl.appendChild(page);

    pageIndicator.textContent = `${idx + 1} / ${BOOK_PAGES.length}`;
    updateControls();

    // Animation direction
    if (direction) {
      bookEl.classList.add('animating', direction);
      setTimeout(() => {
        bookEl.classList.remove('animating', direction);
      }, ANIM_DURATION);
    }
  }

  function updateControls() {
    prevBtn.disabled = current <= 0 || isAnimating;
    firstBtn.disabled = current <= 0 || isAnimating;
    nextBtn.disabled = current >= BOOK_PAGES.length - 1 || isAnimating;
    lastBtn.disabled = current >= BOOK_PAGES.length - 1 || isAnimating;
    [prevBtn, nextBtn, firstBtn, lastBtn].forEach(b => b.style.opacity = b.disabled ? '0.5' : '1');
  }

  function goNext() {
    if (isAnimating || current >= BOOK_PAGES.length - 1) return;
    isAnimating = true;
    renderPage(current + 1, 'flip-next');
    setTimeout(() => {
      current++;
      renderPage(current);
      isAnimating = false;
    }, ANIM_DURATION);
  }
  function goPrev() {
    if (isAnimating || current <= 0) return;
    isAnimating = true;
    renderPage(current - 1, 'flip-prev');
    setTimeout(() => {
      current--;
      renderPage(current);
      isAnimating = false;
    }, ANIM_DURATION);
  }
  function goFirst() { if (!isAnimating) { current = 0; renderPage(current); } }
  function goLast() { if (!isAnimating) { current = BOOK_PAGES.length - 1; renderPage(current); } }

  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);
  firstBtn.addEventListener('click', goFirst);
  lastBtn.addEventListener('click', goLast);

  // keyboard nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  });

  // touch swipe
  let startX = null;
  bookEl.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  bookEl.addEventListener('touchend', (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) goNext();
    if (dx > 40) goPrev();
    startX = null;
  });

  // init
  renderPage(current);

  /* ---------- Timeline ---------- */
  const timelineList = document.getElementById('timelineList');
  TIMELINE.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline-item';
    el.innerHTML = `<div class="year">${item.year}</div><div class="desc">${item.text}</div>`;
    timelineList.appendChild(el);
  });

  /* ---------- Gallery (lightbox) ---------- */
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  const lightImg = document.createElement('img');
  lightbox.appendChild(lightImg);
  document.body.appendChild(lightbox);
  lightbox.addEventListener('click', () => lightbox.classList.remove('open'));

  GALLERY.forEach(g => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    const img = document.createElement('img');
    img.alt = g.alt || '';
    safeSetImageSrc(img, g.src);
    item.appendChild(img);
    item.addEventListener('click', () => {
      safeSetImageSrc(lightImg, g.src);
      lightbox.classList.add('open');
    });
    galleryGrid.appendChild(item);
  });

  /* ---------- Quiz ---------- */
  const quizWrap = document.getElementById('quizWrap');
  const quizResult = document.getElementById('quizResult');
  let userAnswers = new Array(QUIZ.length).fill(null);

  QUIZ.forEach((q, qi) => {
    const qEl = document.createElement('div');
    qEl.className = 'q-item';
    qEl.innerHTML = `<h4>${qi + 1}. ${q.q}</h4>`;
    const opts = document.createElement('div');
    opts.className = 'options';
    q.choices.forEach((c, ci) => {
      const opt = document.createElement('div');
      opt.className = 'option';
      opt.textContent = c;
      opt.addEventListener('click', () => {
        Array.from(opts.children).forEach(ch => ch.classList.remove('selected'));
        opt.classList.add('selected');
        userAnswers[qi] = ci;
      });
      opts.appendChild(opt);
    });
    qEl.appendChild(opts);
    quizWrap.appendChild(qEl);
  });

  const submitBtn = document.createElement('button');
  submitBtn.className = 'btn primary';
  submitBtn.textContent = 'Nộp bài & xem điểm';
  submitBtn.addEventListener('click', () => {
    let score = 0;
    for (let i = 0; i < QUIZ.length; i++) {
      if (userAnswers[i] === QUIZ[i].ans) score++;
    }
    quizResult.style.display = 'block';
    quizResult.innerHTML = `<div class="section"><h3>Kết quả: ${score} / ${QUIZ.length}</h3><p>${generateFeedback(score)}</p></div>`;
    quizResult.scrollIntoView({ behavior: 'smooth' });
  });
  quizWrap.appendChild(submitBtn);

  function generateFeedback(score) {
    const pct = Math.round((score / QUIZ.length) * 100);
    if (pct === 100) return "Tuyệt vời! Bạn nắm chắc phần này.";
    if (pct >= 70) return "Tốt! Chỉ vài chỗ cần ôn lại.";
    if (pct >= 40) return "Cần ôn thêm; xem lại flipbook.";
    return "Hãy đọc lại nội dung và thử lần nữa.";
  }

  /* ---------- Quotes carousel ---------- */
  const quotesCarousel = document.getElementById('quotesCarousel');
  let qi = 0;
  function renderQuote(i) {
    quotesCarousel.innerHTML = `<div class="quote-card" style="opacity:0;transition:opacity 0.6s;">“${QUOTES[i].text}” — <strong>${QUOTES[i].src}</strong></div>`;
    setTimeout(() => {
      const card = quotesCarousel.querySelector('.quote-card');
      if (card) card.style.opacity = 1;
    }, 50);
  }
  renderQuote(qi);
  setInterval(() => { qi = (qi + 1) % QUOTES.length; renderQuote(qi); }, 4200);
});
