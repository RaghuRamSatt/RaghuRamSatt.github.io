document.addEventListener('DOMContentLoaded', function() {
    const heroAnimation = document.getElementById('hero-animation');
    const jumbledElement = document.getElementById('jumbled-text');
    const organizedElement = document.getElementById('organized-text');
    const homeSection = document.getElementById('home-section');

    // Create jumbled text
    const jumbledText = homeSection.innerText.replace(/\s+/g, ' ').trim().split('').sort(() => Math.random() - 0.5).join('');
    jumbledElement.textContent = jumbledText;

    // Animate transition after a delay
    setTimeout(() => {
        jumbledElement.style.opacity = 0;
        setTimeout(() => {
            jumbledElement.style.display = 'none';
            organizedElement.innerHTML = homeSection.innerHTML;
            organizedElement.classList.remove('hidden');
            organizedElement.style.opacity = 1;
            
            setTimeout(() => {
                heroAnimation.style.opacity = 0;
                setTimeout(() => {
                    heroAnimation.style.display = 'none';
                    document.body.classList.add('loaded');
                    // Initialize Owl Carousel after animation
                    $('.home-slider').owlCarousel({
                        loop: true,
                        autoplay: true,
                        margin: 0,
                        animateOut: 'fadeOut',
                        animateIn: 'fadeIn',
                        nav: false,
                        autoplayHoverPause: false,
                        items: 1,
                        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
                        responsive: {
                            0: { items: 1 },
                            600: { items: 1 },
                            1000: { items: 1 }
                        }
                    });
                }, 1000);
            }, 2000);
        }, 1000);
    }, 3000);
});