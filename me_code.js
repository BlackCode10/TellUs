
var slides_num_indicator1 = 1
                
function func1() {
    var slides = document.querySelectorAll('.below1_part3_slide')

    for (var i = 0; i < slides.length; i++) {
        if (slides_num_indicator1-1 == i) {
            document.querySelectorAll('.below1_part3_dash')[i].style.backgroundColor = 'orange'
            document.querySelectorAll('.below1_part3_img')[i].style.boxShadow = '0 0 20px rgba(0, 0, 0, 1)'
            document.querySelectorAll('.below1_part3_img')[i].style.zIndex = 2
            document.querySelectorAll('.below1_part3_img')[i].style.transform = 'scale(1.1)'
            document.querySelector('.below1_part3_slides_inner_cont').style.left = (-i * 400).toString() + 'px'

        } else {
            document.querySelectorAll('.below1_part3_dash')[i].style.backgroundColor = 'rgb(211, 211, 211)'
            document.querySelectorAll('.below1_part3_img')[i].style.boxShadow = 'none'
            document.querySelectorAll('.below1_part3_img')[i].style.zIndex = 1
            document.querySelectorAll('.below1_part3_img')[i].style.transform = 'scale(1)'
        }
    }

    if (slides_num_indicator1 < 3) {
        slides_num_indicator1 += 1
    } else {
        slides_num_indicator1 = 1
    }
}

func1()
setInterval(function() {func1()}, 2000)

function switch_forms1(form_index) {
    // var form_to_move = document.querySelectorAll('.form_below11')[form_index]
    var user_forms_slider1 = document.querySelector('.below1_forms_slider')
    var user_forms_slider_inner1 = document.querySelector('.below1_form_slider_inner_cont')

    if (form_index == 1) {
        user_forms_slider1.style.marginLeft = '28%'
        user_forms_slider_inner1.style.left = `-100%`
    } else if (form_index == 0) {
        user_forms_slider1.style.marginLeft = '-28%'
        user_forms_slider_inner1.style.left = `0`
    }
}


var slides_num_indicator2 = 1
                
function func2() {
    var slides = document.querySelectorAll('.below2_part3_slide')

    for (var i = 0; i < slides.length; i++) {
        if (slides_num_indicator2-1 == i) {
            document.querySelectorAll('.below2_part3_dash')[i].style.backgroundColor = 'orange'
            document.querySelectorAll('.below2_part3_img')[i].style.boxShadow = '0 0 20px rgba(0, 0, 0, 1)'
            document.querySelectorAll('.below2_part3_img')[i].style.zIndex = 2
            document.querySelectorAll('.below2_part3_img')[i].style.transform = 'scale(1.1)'
            document.querySelector('.below2_part3_slides_inner_cont').style.left = (-i * 400).toString() + 'px'

        } else {
            document.querySelectorAll('.below2_part3_dash')[i].style.backgroundColor = 'rgb(211, 211, 211)'
            document.querySelectorAll('.below2_part3_img')[i].style.boxShadow = 'none'
            document.querySelectorAll('.below2_part3_img')[i].style.zIndex = 1
            document.querySelectorAll('.below2_part3_img')[i].style.transform = 'scale(1)'
        }
    }

    if (slides_num_indicator2 < 3) {
        slides_num_indicator2 += 1
    } else {
        slides_num_indicator2 = 1
    }
}

func2()
setInterval(function() {func2()}, 2000)

function switch_forms2(form_index) {
    // var form_to_move = document.querySelectorAll('.form_below21')[form_index]
    var user_forms_slider2 = document.querySelector('.below2_forms_slider')
    var user_forms_slider_inner2 = document.querySelector('.below2_form_slider_inner_cont')

    if (form_index == 1) {
        user_forms_slider2.style.marginLeft = '28%'
        user_forms_slider_inner2.style.left = `-100%`
    } else if (form_index == 0) {
        user_forms_slider2.style.marginLeft = '-28%'
        user_forms_slider_inner2.style.left = `0`
    }
}


var slides_num_indicator3 = 1
                
function func3() {
    var slides = document.querySelectorAll('.below3_part3_slide')

    for (var i = 0; i < slides.length; i++) {
        if (slides_num_indicator3-1 == i) {
            document.querySelectorAll('.below3_part3_dash')[i].style.backgroundColor = 'orange'
            document.querySelectorAll('.below3_part3_img')[i].style.boxShadow = '0 0 20px rgba(0, 0, 0, 1)'
            document.querySelectorAll('.below3_part3_img')[i].style.zIndex = 2
            document.querySelectorAll('.below3_part3_img')[i].style.transform = 'scale(1.1)'
            document.querySelector('.below3_part3_slides_inner_cont').style.left = (-i * 400).toString() + 'px'

        } else {
            document.querySelectorAll('.below3_part3_dash')[i].style.backgroundColor = 'rgb(211, 211, 211)'
            document.querySelectorAll('.below3_part3_img')[i].style.boxShadow = 'none'
            document.querySelectorAll('.below3_part3_img')[i].style.zIndex = 1
            document.querySelectorAll('.below3_part3_img')[i].style.transform = 'scale(1)'
        }
    }

    if (slides_num_indicator3 < 3) {
        slides_num_indicator3 += 1
    } else {
        slides_num_indicator3 = 1
    }
}

func3()
setInterval(function() {func3()}, 2000)

function switch_forms3(form_index) {
    // var form_to_move = document.querySelectorAll('.form_below31')[form_index]
    var user_forms_slider3 = document.querySelector('.below3_forms_slider')
    var user_forms_slider_inner3 = document.querySelector('.below3_form_slider_inner_cont')

    if (form_index == 1) {
        user_forms_slider3.style.marginLeft = '28%'
        user_forms_slider_inner3.style.left = `-100%`
    } else if (form_index == 0) {
        user_forms_slider3.style.marginLeft = '-28%'
        user_forms_slider_inner3.style.left = `0`
    }
}


var logo_ticks = document.querySelectorAll('.nav_logo_tick')
var clicks_nav_icon = 0
var logo_is_hover = false

// $('.navbar').css('width', '65px')
// $('.nav_logo').css('display', 'none')
// $('.app_name').css('display', 'none')
// $('.nav_icon').css('margin-left', 'calc((65px / 2) - (20px / 2))')

logo_ticks.forEach(function(elem) {
    elem.style.height = (parseInt(document.querySelector(`#${elem.id}`).dataset.len[0]) * 10).toString() + 'px'
})

function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();

    rand = Math.floor( rand * difference);
    rand = rand + min;

    return rand;
}

function roundNearest5(num) {
    return Math.round(num / 5) * 5;
}

document.querySelector('.nav_logo').addEventListener('mouseover', function() {
    logo_is_hover = true
    setInterval(function() {
        if (logo_is_hover == true) {
            logo_ticks.forEach(function(elem) {
                console.log(roundNearest5(generateRandom(parseInt(document.querySelector(`#${elem.id}`).dataset.len[0]) * 10, parseInt(document.querySelector(`#${elem.id}`).dataset.len[1]) * 10)))
                random_num = roundNearest5(generateRandom(parseInt(document.querySelector(`#${elem.id}`).dataset.len[0]) * 10, parseInt(document.querySelector(`#${elem.id}`).dataset.len[1]) * 10))
                elem.style.height = (random_num).toString() + 'px'
            })
        }
    }, 200)
})

document.querySelector('.nav_logo').onmouseout = function() {
    logo_is_hover = false
    logo_ticks.forEach(function(elem) {
        elem.style.height = (parseInt(document.querySelector(`#${elem.id}`).dataset.len[0]) * 10).toString() + 'px'
    })
}

function change_nav() {
    clicks_nav_icon += 1

    if (clicks_nav_icon % 2 == 0) {
        $('.navbar').css('width', '65px')
        $('body').css('margin-left', '0px')

        $('.nav_logo').css('display', 'none')
        $('.app_name').css('display', 'none')

        $('.nav_icon').css('margin-left', 'calc((65px / 2) - (20px / 2))')
    } else {
        $('.navbar').css('width', '320px')
        $('body').css('margin-left', '185px')

        $('.nav_logo').css('display', 'flex')
        $('.app_name').css('display', 'flex')

        $('.nav_icon').css('margin-left', 'auto')
    }
}

$(document).on("mousedown", "[data-ripple]", function(e) {

    var $self = $(this);
    
    if($self.is(".btn-disabled")) {
        return;
    }

    if($self.closest("[data-ripple]")) {
        e.stopPropagation();
    }
    
    var initPos = $self.css("position"),
        offs = $self.offset(),
        x = e.pageX - offs.left,
        y = e.pageY - offs.top,
        dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
        $ripple = $('<div/>', {class : "ripple",appendTo : $self 
    });
    
    if(!initPos || initPos==="static") {
        $self.css({position:"relative"});
    }
    
    $('<div/>', {
        class : "rippleWave",
        css : {
            background: $self.data("ripple"),
            width: dia,
            height: dia,
            left: x - (dia/2),
            top: y - (dia/2),
        },
        appendTo : $ripple,
        one : {
            animationend : function(){
                $ripple.remove();
            }
        }
    });
});


var home_options = document.querySelectorAll('.home_option')
var home_options_btns = document.querySelectorAll('.home_option_btn')
var og_btn_txt = ''
var home_option_clicked = false

home_options.forEach(function(elem) {
    elem.addEventListener('mouseover', function() {
        if (home_option_clicked == false) {
            for (var i = 0; i < home_options.length; i++) {
                if (elem != home_options[i]) {
                    home_options[i].style.width = `${(window.innerWidth - (window.innerWidth / 2.65)) / 2}px`
                } else {
                    home_options[i].style.width = `${window.innerWidth / 2.65}px`
                }
            }
        }
    })
})

document.querySelector('.home_options').onmouseout = function(event) {
    if (home_option_clicked == false) {
        for (var i = 0; i < home_options.length; i++) {
            home_options[i].style.width = `${window.innerWidth / 3}px`
        }
    }
}

home_options_btns.forEach(function(elem) {
    elem.addEventListener('click', function() {
        var below_section = document.querySelector(`.below${parseInt(elem.id.charAt(elem.id.length - 1))}_section`)
        console.log(below_section)
        the_elem_slides_num_indicator = parseInt(elem.id.charAt(elem.id.length - 1)) - 1
        home_option_clicked = !home_option_clicked

        if (home_option_clicked == true) {
            for (var i = 0; i < home_options.length; i++) {
                document.querySelector('.home_options').style.overflowY = 'scroll'
                home_options[i].style.transform = 'skewY(5deg)'
                elem.style.transform = 'skewY(-5deg)'
                document.querySelector(`#home_option_img${parseInt(elem.id.charAt(elem.id.length - 1))}`).style.transform = 'skewY(-5deg)'
                below_section.style.display = 'flex'

                home_options[i].style.transition = 'width 0.3s, height 0.3s ease-in 0.3s, border-radius 0.3s ease-in 0.3s, transform 0.3s'

                document.querySelector('.home_options').style.width = 'calc(400% - 65px)'
                var home_option_width = document.querySelector('.home_options').offsetWidth

                document.querySelectorAll('.home_option_txt_cont')[i].style.transform = 'scale(1.75) skewY(-5deg)'
                home_options[i].style.width = `${home_option_width}px`
                // home_options[i].style.height = `97%`

                if (the_elem_slides_num_indicator == i) {
                    document.querySelector('.home_options').style.marginLeft = `calc((${-i} * ${home_option_width}px) + 65px)`
                    // home_options[i].style.borderRadius = '0% 0% 50% 50% / 0% 0% 15% 15%'

                    og_btn_txt = elem.innerHTML
                    elem.innerText = 'Go Back'
                }
            }
        } else if (home_option_clicked == false) {
            for (var i = 0; i < home_options.length; i++) {
                document.querySelector('.home_options').style.overflowY = 'hidden'
                elem.style.transform = 'skewY(0deg)'
                document.querySelector(`#home_option_img${parseInt(elem.id.charAt(elem.id.length - 1))}`).style.transform = 'skewY(0deg)'
                below_section.style.display = 'none'
                home_options[i].style.transform = 'skewY(0deg)'

                elem.innerText = og_btn_txt
                home_options[i].style.transition = 'width 0.3s ease-in-out, height 0.3s, border-radius 0.2s, transform 0.3s'

                document.querySelector('.home_options').style.width = 'calc(100% - 65px)'
                document.querySelectorAll('.home_option_txt_cont')[i].style.transform = 'scale(1) skewY(0deg)'
                
                home_options[i].style.width = '25%'
                // home_options[i].style.height = `100%`

                document.querySelector('.home_options').style.marginLeft = `65px`
                // home_options[i].style.borderRadius = '0'
            }
        }
    })
})