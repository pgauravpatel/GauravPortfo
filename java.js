$(document).ready(function(){
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        $('.button-area button').text('Sending..')
        // Collect the form data
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        // Send the email using EmailJS
        emailjs.send('service_u5zzg2a', 'template_nw5zgoc', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            $('#contact-form')[0].reset();
            // alert('Your message has been sent successfully!');
            $.toast({
                heading: 'Success',
                text: 'Your message has been sent successfully!',
                showHideTransition: 'slide',
                icon: 'success',
                position : 'top-right',
                bgColor : 'white',              
                textColor : 'crimson', 
            })
            $('.button-area button').text('Send message')
        }, function(error) {
            console.log('Failed to send email.', error);
            alert('Failed to send your message. Please try again later.');
        });

    });

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 100){
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
        //again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
})
