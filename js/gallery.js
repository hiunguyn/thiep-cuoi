document.addEventListener('DOMContentLoaded', () => {
    // Simple Lightbox
    const galleryImages = document.querySelectorAll('.gallery-item img, .gallery-card img');

    // Create Lightbox Elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'none';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '2000';
    lightbox.style.cursor = 'pointer';

    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.border = '5px solid #fff';

    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});
