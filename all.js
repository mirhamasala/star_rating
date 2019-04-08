const stars = document.querySelectorAll('.stars .fa-star');
const starsBox = document.querySelector('.stars');

function handleClick(event) {
    event.preventDefault();
    stars.forEach((star) => { star.classList.remove('active') });
    event.currentTarget.classList.add('active');
    starsBox.classList.add('rated');
}

stars.forEach(star => { star.addEventListener('click', handleClick) });
