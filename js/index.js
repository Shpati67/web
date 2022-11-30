const skillItems = Array.from(document.getElementsByClassName('skill-box'));

skillItems.forEach((skillItem) => {
  const width = skillItem.getAttribute('skill-value');
  const skillValueSpan = skillItem.querySelector('.percent-text');
  skillValueSpan.innerText = `${width}%`;
  const skillbar = skillItem.querySelector('.skill-bar');
  skillbar.style.width = `${width}%`;
});