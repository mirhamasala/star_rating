const stars = document.querySelectorAll('.stars .fa-star');
const starsBox = document.querySelector('.stars');

stars.forEach(star => {
    star.addEventListener('click', handleClick);
})

function handleClick(event) {
    event.currentTarget.classList.add('active');
    starsBox.classList.add('rated');
}
