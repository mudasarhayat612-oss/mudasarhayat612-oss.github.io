const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Mobile menu
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu'
  );
});

// Close menu after clicking a navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
});

// Highlight the current section in the navigation
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');

          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  {
    rootMargin: '-35% 0px -55% 0px'
  }
);

sections.forEach(section => observer.observe(section));

// Current year
document.getElementById('year').textContent = new Date().getFullYear();
