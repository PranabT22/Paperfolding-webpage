const sections = document.querySelectorAll('.fold-section');
let currentIndex = 0;

function showSection(index) {
  sections.forEach((sec, i) => {
    sec.style.display = i === index ? 'block' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSection(currentIndex);

  document.getElementById('prev').onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSection(currentIndex);
    }
  };

  document.getElementById('next').onclick = () => {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      showSection(currentIndex);
    }
  };
});
