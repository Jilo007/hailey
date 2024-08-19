document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentTestimonial = 0;

    function updateTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
        document.querySelector('.testimonial-container').style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial > 0) ? currentTestimonial - 1 : testimonials.length - 1;
        updateTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial < testimonials.length - 1) ? currentTestimonial + 1 : 0;
        updateTestimonial(currentTestimonial);
    });

    setInterval(() => {
        nextBtn.click();
    }, 5000);
});
