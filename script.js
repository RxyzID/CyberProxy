// Smooth scroll for navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60, // Adjust for sticky header
      behavior: 'smooth'
    });
  });
});
