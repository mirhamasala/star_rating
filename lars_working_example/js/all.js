const stars = document.querySelectorAll('.stars .fas');
const starsContainer = document.querySelector('.stars');
const currentRating = localStorage.getItem('starRating') || 0;

stars.forEach((item) => {
  item.addEventListener('click', handleClick);
})

function handleClick(event) {
  event.preventDefault();

  const currentValue = event.currentTarget.dataset.value;
  stars.forEach((star) => { star.classList.remove('active') })
  event.currentTarget.classList.add('active');
  starsContainer.classList.add('rated');
  localStorage.setItem('starRating', currentValue);
}

document.addEventListener('DOMContentLoaded', (event) => {
  if(currentRating === 0) {
    return;
  }
  starsContainer.classList.add('rated');
  document.querySelector(`[data-value="${currentRating}"]`).classList.add('active');
})
