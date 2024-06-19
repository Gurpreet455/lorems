// slider
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let slideIndex = 0;

    // Show initial set of boxes
    showSlides();

    function showSlides() {
        const totalBoxes = slider.children.length;
        const maxSlides = 3;
        
        // Calculate the starting index for the current slide
        let startIndex = slideIndex * maxSlides;
        let endIndex = startIndex + maxSlides;

        // Ensure endIndex does not exceed total number of boxes
        if (endIndex > totalBoxes) {
            endIndex = totalBoxes;
            startIndex = Math.max(0, endIndex - maxSlides);
        }

        // Hide all boxes
        for (let i = 0; i < totalBoxes; i++) {
            slider.children[i].style.display = "none";
        }

        // Show only the selected range of boxes
        for (let i = startIndex; i < endIndex; i++) {
            slider.children[i].style.display = "block";
        }
    }

    // Next button functionality
    nextBtn.addEventListener("click", function() {
        const totalBoxes = slider.children.length;
        const maxSlides = 3;
        
        slideIndex++;
        if (slideIndex * maxSlides >= totalBoxes) {
            slideIndex = 0;
        }
        
        showSlides();
    });

    // Previous button functionality
    prevBtn.addEventListener("click", function() {
        const totalBoxes = slider.children.length;
        const maxSlides = 3;
        
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = Math.floor(totalBoxes / maxSlides) - (totalBoxes % maxSlides === 0 ? 1 : 0);
        }
        
        showSlides();
    });
});


// slider

// faq
document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const title = item.querySelector(".accordion-title");

        title.addEventListener("click", function() {
            // Toggle accordion content visibility
            const content = item.querySelector(".accordion-content");
            content.style.display = content.style.display === "block" ? "none" : "block";

            // Toggle active class for styling
            item.classList.toggle("active");
        });
    });
});


// faq

// video
const videoBox = document.querySelector('.video-box');
const video = videoBox.querySelector('.video-box-video');

videoBox.addEventListener('click', () => {
  videoBox.classList.add('playing');
  video.play();
});