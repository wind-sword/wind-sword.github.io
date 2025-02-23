// 点击照片放大
const photos = document.querySelectorAll('.photo-grid img');
photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photo.classList.toggle('enlarged');
    });
});