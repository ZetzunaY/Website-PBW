const slideBtn = document.querySelector('.slide-counter');
const slideNum = document.querySelector('.slide-counter span');
const heroDesc = document.querySelector('.hero-content p');

if (slideBtn && heroDesc) {
    const slides = [
        heroDesc.innerText,
        "Membantu pendidik menyajikan rekomendasi materi yang adaptif sesuai kemampuan siswa.",
        "Mengotomatiskan evaluasi administratif agar guru lebih fokus mendampingi siswa.",
        "Mendorong literasi digital dan etika penggunaan AI di lingkungan akademik."
    ];
    let index = 0;
    slideBtn.style.cursor = "pointer";

    slideBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        slideNum.innerText = index + 1;
        heroDesc.innerText = slides[index];
    });
}

document.querySelectorAll('.contact-details li').forEach(item => {
    if (item.innerText.includes('Email:')) {
        item.style.cursor = "pointer";
        item.title = "Klik untuk menyalin email";
        item.addEventListener('click', () => {
            const email = item.innerText.replace('Email:', '').trim();
            navigator.clipboard.writeText(email);
            alert("Email berhasil disalin: " + email);
        });
    }
});

const footerInfo = document.querySelector('.footer-info');
if (footerInfo) {
    fetch('info.php')
        .then(res => res.text())
        .then(data => footerInfo.insertAdjacentHTML('beforeend', data))
        .catch(() => {});
}