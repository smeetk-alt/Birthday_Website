// ═══════════════════════════════════════════════════════
//  ASTHA MAG — ULTIMATE EDITION — INTERACTIVITY ENGINE
// ═══════════════════════════════════════════════════════

// ── DATA ──
const galleryData = [
    { img: "1.jpeg", text: "The Rant Partner 🗣️", desc: "For all the times you've listened when I needed to vent. You understand me like no one else." },
    { img: "2.jpeg", text: "Society Bonding 🏠", desc: "From meeting in the society to becoming family. Grateful for every conversation." },
    { img: "3.jpeg", text: "Soul Connection ✨", desc: "You've helped me through things I couldn't even speak about with others." },
    { img: "4.jpeg", text: "Life's Anchor ⚓", desc: "Without you, some situations would have been impossible to handle." },
    { img: "5.jpeg", text: "Family by Choice ❤️", desc: "I consider you more than a friend. You're family to me, through and through." },
    { img: "6.jpeg", text: "The Listener 👂", desc: "Thanks for always being there when I need to rant, and for trusting me with yours." },
    { img: "7.jpeg", text: "Shared Secrets 🤫", desc: "Grateful for the bond where we can talk about anything without judgment." },
    { img: "8.jpeg", text: "Unwavering Support 🫂", desc: "You've had my back in ways that have truly changed my life." },
    { img: "9.jpeg", text: "Late Night Talks 🌙", desc: "Here's to many more nights of sharing our lives and supporting each other." },
    { img: "10.jpeg", text: "Strength & Grace ✨", desc: "I admire how you handle everything life throws at you. You're an inspiration." },
    { img: "11.jpeg", text: "The Best Companion 🌟", desc: "Life is so much better with you navigating it by my side." },
    { img: "12.jpeg", text: "Endless Laughter 😂", desc: "Thanks for the rants that always end in laughter." },
    { img: "13.jpeg", text: "A True Gem 💎", desc: "You are a rare kind of person, Astha. Never change." },
    { img: "14.jpeg", text: "Happy Birthday! 🎈", desc: "To many more years of being each other's person. I love you, fam! 🧿" }
];

// ── CUSTOM CURSOR ──
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (dot) { dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'; }
});

function animateCursor() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    if (ring) { ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; }
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover effects on interactive elements
document.querySelectorAll('a, button, .gallery-card, .article-side-card, .article-main, .editorial-img-wrap, .secret-link, .unlock-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { dot?.classList.add('hover'); ring?.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot?.classList.remove('hover'); ring?.classList.remove('hover'); });
});

// ── SCROLL PROGRESS BAR ──
const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / scrollHeight;
    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
});

// ── PARTICLE CANVAS (HERO) ──
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.3;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = ['rgba(201,168,76,', 'rgba(144,12,63,', 'rgba(184,57,91,'][Math.floor(Math.random() * 3)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color + this.opacity + ')';
            ctx.fill();
        }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    // Draw connections between nearby particles
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    ctx.strokeStyle = `rgba(201,168,76,${0.04 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

// ── LOCK SCREEN ──
const targetDate = new Date("February 21, 2026 00:00:00").getTime();

function unlockSite() {
    document.getElementById('lock-screen').classList.add('lock-open');
    const music = document.getElementById('bgMusic');
    music.volume = 0.3;
    music.play().catch(() => { });
    typeWriter("A Bond Beyond Words — Celebrating friendship, laughter, and everything in between.");
}

document.getElementById('sealBtn').onclick = () => {
    if (targetDate - Date.now() <= 0) { unlockSite(); }
    else { alert("⏳ THE TIME IS NOT YET RIGHT\nThis issue drops when the celebration begins."); }
};

document.getElementById('secretTrigger').onclick = () => {
    const pass = prompt("🔒 EDITOR'S ACCESS\nEnter Override Password:");
    if (pass && pass.toUpperCase() === "ASTHA19") unlockSite();
    else if (pass) alert("⛔ ACCESS DENIED. Nice try though!");
};

// Countdown
setInterval(() => {
    const dist = targetDate - Date.now();
    if (dist > 0) {
        document.getElementById('cd-d').innerText = String(Math.floor(dist / 86400000)).padStart(2, '0');
        document.getElementById('cd-h').innerText = String(Math.floor((dist % 86400000) / 3600000)).padStart(2, '0');
        document.getElementById('cd-m').innerText = String(Math.floor((dist % 3600000) / 60000)).padStart(2, '0');
        document.getElementById('cd-s').innerText = String(Math.floor((dist % 60000) / 1000)).padStart(2, '0');
    } else {
        document.getElementById('countdown-area').innerHTML = '<div style="font-family:Outfit;font-size:1.2rem;font-weight:700;color:#C9A84C;">🎉 TIME TO CELEBRATE! 🎉</div>';
        document.getElementById('sealBtn').style.boxShadow = '0 0 50px rgba(201,168,76,0.4)';
    }
}, 1000);

// ── TYPEWRITER ──
function typeWriter(text) {
    let i = 0;
    const el = document.getElementById('typewriter-target');
    const t = setInterval(() => {
        el.innerText = text.substring(0, i++);
        if (i > text.length) clearInterval(t);
    }, 35);
}

// ── GALLERY — Horizontal Scroll with Drag ──
const galleryTrack = document.getElementById('galleryTrack');
if (galleryTrack) {
    galleryData.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-card' + (idx === 0 ? ' featured' : '');
        card.innerHTML = `
            <img src="${item.img}" alt="${item.text}" loading="lazy">
            <div class="gallery-card-overlay">
                <h3>${item.text}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        card.addEventListener('click', () => openLightbox(item));
        galleryTrack.appendChild(card);
    });

    // Drag to scroll
    let isDragging = false, startX, scrollLeft;
    galleryTrack.addEventListener('mousedown', e => {
        isDragging = true; startX = e.pageX - galleryTrack.offsetLeft;
        scrollLeft = galleryTrack.scrollLeft;
    });
    galleryTrack.addEventListener('mouseleave', () => isDragging = false);
    galleryTrack.addEventListener('mouseup', () => isDragging = false);
    galleryTrack.addEventListener('mousemove', e => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - galleryTrack.offsetLeft;
        galleryTrack.scrollLeft = scrollLeft - (x - startX) * 1.5;
    });
}

// ── LIGHTBOX ──
const lightbox = document.getElementById('lightbox');
function openLightbox(item) {
    document.getElementById('lb-img').src = item.img;
    document.getElementById('lb-title').innerText = item.text;
    document.getElementById('lb-desc').innerText = item.desc;
    lightbox.classList.add('active');
}
lightbox.onclick = () => lightbox.classList.remove('active');

// ── PUZZLE ──
function checkPuzzle() {
    const val = document.getElementById('missingChar').value.toUpperCase();
    const msg = document.getElementById('puzzle-msg');
    if (val === "K") {
        msg.innerText = "✨ ASSEMBLING CAKE...";
        msg.style.color = "#C9A84C";
        startCake();
    } else {
        msg.innerText = "❌ TRY AGAIN!";
        msg.style.color = "#B8395B";
    }
}
window.checkPuzzle = checkPuzzle;

// ── CAKE ──
function startCake() {
    const section = document.getElementById('cake-section');
    section.style.display = 'block';
    setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    const stage = document.getElementById('cake-stage');
    stage.innerHTML = '';

    ['base', 'mid', 'top'].forEach((type, i) => {
        const l = document.createElement('div');
        l.className = `mg-layer ${type}`;
        l.innerHTML = `<div class="mg-icing"></div>`;
        stage.appendChild(l);
        setTimeout(() => l.classList.add('mg-drop'), i * 500);
    });

    setTimeout(() => {
        const candle = document.createElement('div');
        candle.className = 'mg-candle';
        candle.innerHTML = '<div class="mg-flame" id="mgFlame"></div>';
        candle.onclick = () => {
            document.getElementById('mgFlame').style.display = 'none';
            const inst = document.getElementById('cake-instruction');
            inst.innerText = "🎂 Happy Birthday Astha! 🧿";
            inst.style.fontSize = '1.6rem';
            inst.style.color = '#C9A84C';
            confetti({ particleCount: 250, spread: 100, origin: { y: 0.6 }, colors: ['#C9A84C', '#900C3F', '#581845', '#B8395B'] });
            setTimeout(() => confetti({ particleCount: 100, spread: 60, origin: { y: 0.5 } }), 600);
        };
        stage.appendChild(candle);
        setTimeout(() => {
            candle.classList.add('mg-grow');
            document.getElementById('cake-instruction').style.opacity = '1';
        }, 100);
    }, 1800);
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => observer.observe(el));

// ── SHAKE TO REVEAL ──
function revealEditorChoice() {
    const overlay = document.getElementById('shakeOverlay');
    if (overlay && !overlay.classList.contains('revealed')) {
        overlay.classList.add('revealed');
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#C9A84C', '#900C3F', '#581845', '#B8395B'] });
    }
}
window.revealEditorChoice = revealEditorChoice;

let lastX, lastY, lastZ, moveCounter = 0;
window.addEventListener('devicemotion', function (event) {
    let acc = event.accelerationIncludingGravity;
    let x = acc.x, y = acc.y, z = acc.z;
    if (lastX !== undefined) {
        if (Math.abs(x - lastX) + Math.abs(y - lastY) + Math.abs(z - lastZ) > 25) {
            moveCounter++;
            if (moveCounter > 5) { revealEditorChoice(); moveCounter = 0; }
        }
    }
    lastX = x; lastY = y; lastZ = z;
});

// ── PARALLAX on mouse move (editorial images) ──
document.addEventListener('mousemove', e => {
    const mx = (e.clientX / window.innerWidth - 0.5) * 2;
    const my = (e.clientY / window.innerHeight - 0.5) * 2;
    document.querySelectorAll('.orb').forEach((orb, i) => {
        const depth = (i + 1) * 8;
        orb.style.transform = `translate(${mx * depth}px, ${my * depth}px)`;
    });
});

// ── SMOOTH ENTRANCE for editorial images on scroll ──
document.querySelectorAll('.editorial-img-wrap').forEach(wrap => {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'perspective(1000px) rotateY(0deg)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.2 });
    wrap.style.opacity = '0';
    wrap.style.transform = 'perspective(1000px) rotateY(-8deg)';
    wrap.style.transition = 'transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 1s ease';
    imgObserver.observe(wrap);
});
