// Efeito Parallax com JavaScript para melhor compatibilidade móvel
document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    // A velocidade do efeito. Ajuste o valor '0.5' para mais rápido ou mais lento.
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + 'px';
});
