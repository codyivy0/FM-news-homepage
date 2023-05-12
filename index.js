const overlay = document.querySelector('.overlay');
const mobileLinks = document.querySelector('.mobile-links');
const menuIcon = document.getElementById('mobile-menu-icon');
const closeBtn = document.getElementById('menu-close-button');

menuIcon.onclick = function() {
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
    mobileLinks.style.display = 'none';
  } else {
    overlay.style.display = 'block';
    mobileLinks.style.display = 'flex';
  }
}
closeBtn.onclick = function() {
    overlay.style.display = 'none';
    mobileLinks.style.display = 'none';
  }