$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Front end Developer", "PHP Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Front end Developer", "PHP Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Hire Me
// Open the contact form modal
function openContactForm() {
    document.getElementById('contactModal').style.display = 'block';
}

// Close the contact form modal
function closeContactForm() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close modal if clicked outside the modal content
window.onclick = function(event) {
    let modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Example form submission handling (you can modify as needed)
document.getElementById('hireMeForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    alert("Thank you for your message! We will be in touch.");
    closeContactForm(); // Close modal after submission
};



function openHireMeModal() {
    document.getElementById('hireMeModal').style.display = 'block';
}

// Function to close the modal
function closeHireMeModal() {
    document.getElementById('hireMeModal').style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('hireMeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}