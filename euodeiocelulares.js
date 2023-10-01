function toggleMobileMenu(event) {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
    event.stopPropagation(); // Impede a propagação do evento para o div pai
}