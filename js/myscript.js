        // Javascript
document.querySelector('.portfolio').addEventListener('click', function(e) {
    if(e.target.classList.contains('main-image-compprof')) {
        document.querySelector('#compprof').classList.add('on');
        document.querySelector('#compprof img').src = 'img/company-profile-1.png';
        overlay('#compprof', 'img/company-profile-');
    } else if(e.target.classList.contains('main-image-gsj')) {
        document.getElementById('gsj').classList.add('on');
        document.querySelector('#gsj img').src = 'img/game-suit-jawa-1.png';
        overlay('#gsj', 'img/game-suit-jawa-');
    } else if(e.target.classList.contains('main-image-travel-landing')) {
        document.getElementById('travel-landing-over').classList.add('on');
        document.querySelector('#travel-landing-over img').src = 'img/Travel-LP-1.png';
        overlay('#travel-landing-over', 'img/Travel-LP-');
    }
});

let urutan = ["1","2","3"];
let i = 0;

function overlay(id, gambar) {
    document.querySelector(id).addEventListener('click', function(e) {
        if(e.target.classList.contains('previous')) { 
            document.querySelector(id + ' img').src = gambar + urutan[i--] + ".png";
            if(i == -1) i = 2;
        };
        if(e.target.classList.contains('next')) {
            document.querySelector(id + ' img').src = gambar + urutan[i++] + '.png';
            if(i == 3) i = 0;
        };
        if (e.target.classList.contains('close-btn')) {
            document.querySelector(id).classList.remove('on');
        };
    });
    
};
    














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