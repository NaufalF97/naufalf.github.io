        // Javascript
document.querySelector('.portfolio').addEventListener('click', function(e) {
    if(e.target.classList.contains('main-image-compprof')) {
        document.querySelector('#compprof').style.display = 'inline-block';
    };

});

let urutan = ["0","1","2","3","4"];
let i = 1;
    document.querySelector('#compprof').addEventListener('click', function(e) {
        if(e.target.classList.contains('previous')) { 
            document.querySelector('#compprof img').src = "img/company-profile-" + urutan[i--] + ".png";
            if(i == 0 || i == 4) i = 3;
        };
        if(e.target.classList.contains('next')) {
            document.querySelector('#compprof img').src = 'img/company-profile-' + urutan[i++] + ".png";
            if(i == 0 || i == 4) i = 1;
        };
        if (e.target.classList.contains('close-btn')) {
            document.querySelector('#compprof').style.display = 'none';
        };
    });














        // JQuery

$(document).ready(function () {
    // init
    $(".cdev").circlos();
});

$(window).scroll(function () {
    // header
    var winScroll = $(this).scrollTop();

    $('.banner_info').css({
        'transform': 'translate(0px, ' + winScroll / 10 + '%)'
    })

    // edu dan organ
    if (winScroll > $('.background').offset().top - 250) {
        $('.edu-col').each(function (i) {
            setTimeout(function () {
                $('.edu-col').eq(i).addClass('muncul');
            }, 300 * (i + 1))
        })
    }

    if (winScroll > $('#organ-exp').offset().top - 300) {
        $('.organ-col').each(function (i) {
            setTimeout(function () {
                $('.organ-col').eq(i).addClass('muncul');
            }, 300 * (i + 1))
        })
    }
})

// Carousel Portfolio

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    lazyLoad: true,
    merge: true,
    video: true,
    responsive: {
        480: {
            items: 1
        },

        678: {
            items: 1
        },

        960: {
            items: 1
        }
    }
});