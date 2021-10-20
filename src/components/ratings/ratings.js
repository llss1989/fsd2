const buildRatings = (el) => {
  const rate = Number(el.className.slice(-1));
  for (let i = 1; i < 6; i += 1) {
    const currentModificator = i <= rate ? 'star' : 'star_border';
    const currentIcon = document.createElement('div');
    currentIcon.classList.add('ratings__icon');
    currentIcon.classList.add(`ratings__icon_${currentModificator}`);
    el.append(currentIcon);
  }
};

const ratingElements = document.querySelectorAll('.ratings');
[...ratingElements].map(buildRatings);
