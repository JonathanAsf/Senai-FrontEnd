const galleryImgs = document.querySelectorAll('.img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox__close');

function openLightbox(src, alt = 'Imagem ampliada') {
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Imagem ampliada';
  lightbox.classList.add('open');
  document.body.classList.add('modal-open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.classList.remove('modal-open');
  lightbox.setAttribute('aria-hidden', 'true');
  setTimeout(() => { lightboxImg.src = ''; }, 150);
}

galleryImgs.forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightbox.addEventListener('click', (e) => {
  const clickedOutside = !e.target.closest('.lightbox__img') && !e.target.closest('.lightbox__close');
  if (clickedOutside) closeLightbox();
});

closeBtn.addEventListener('click', closeLightbox);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});
