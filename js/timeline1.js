document.addEventListener('DOMContentLoaded', function() {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    timelineEvents.forEach(event => {
        event.addEventListener('click', () => {
            event.classList.toggle('active');
        });
    });
});