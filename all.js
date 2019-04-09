const stars = document.querySelectorAll('.stars .fa-star');
const starsBox = document.querySelector('.stars');
const currentRating = localStorage.getItem('starRating') || 0;

stars.forEach(star => { star.addEventListener('click', handleClick) });

function handleClick(event) {
    event.preventDefault();
    const currentValue = event.currentTarget.dataset.value;
    stars.forEach((star) => { star.classList.remove('active') });
    event.currentTarget.classList.add('active');
    starsBox.classList.add('rated');
    localStorage.setItem('starRating', currentValue);
}

document.addEventListener('DOMContentLoaded', () => {
    if (currentRating === 0) {
        return;
    }
    starsBox.classList.add('rated');
    starsBox.querySelector(`[data-value="${currentRating}"]`).classList.add('active');
});