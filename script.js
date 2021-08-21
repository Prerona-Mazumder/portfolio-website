$(document).ready(function()
{
    $(window).scroll(function()
    {
        // sticky navbar on scroll script
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }else
        {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
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
    var typed = new Typed(".typing", 
    {
        strings: ["Freelancer", "Developer", "Photographer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    }
    );

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Developer", "Photographer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /*Skills*/
    const skillsContent = document.getElementsByClassName('skills_content'),
          skillsHeader = document.querySelectorAll('.skills_header')

    function toggleskills()
        {
            let itemClass = this.parentNode.className

            for (i=0; i<skillsContent.length; i++)
            {
               skillsContent[i].className = "skills_content skills_close"
            }

            if(itemClass === "skills_content skills_close")
            {
                this.parentNode.className = "skills_content skills_open"
            }
            
        }
        
        skillsHeader.forEach((el) =>
        {
            el.addEventListener('click', toggleskills)
        }
    )

// qualification
const tabs = document.querySelectorAll('[data-target]'),
tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
tab.addEventListener('click', () =>{
  const target = document.querySelector(tab.dataset.target)
  tabcontents.forEach(tabcontent =>{
      tabcontent.classList.remove('qualification_active')
  })
  target.classList.add('qualification_active')
  tabs.forEach(tab =>{
      tab.classList.remove('qualification_active')
  })
  tab.classList.add('qualification_active')
})

})

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


