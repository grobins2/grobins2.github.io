$(document).ready(function(){
    $('#header').waypoint(function(direction){
        if(direction == "down"){
            console.log('header') ;
            $('#inner').animate({scrollTop: 500}, 1000);
        }
    }, { offset: '0%', context: '#inner'});

    $('#section1').waypoint(function(direction){
        if(direction == "down"){
            console.log('section1');
            $('#inner').animate({scrollTop: 1000}, 1000);
        }
    }, {context: '#inner'});

    $('#section2').waypoint(function(direction){
        if(direction == "down"){
            console.log('section2');
            $('#inner').animate({scrollTop: 1500}, 1000);
        }
    }, {context: '#inner'});

    $('#section3').waypoint(function(direction){
        if(direction == "down"){
            console.log('section3');
            $('#inner').animate({scrollTop: 2000}, 1000);
        }
    }, {context: '#inner'});


    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    var scrollbarWidth = function () {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);        

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    };

    $("#inner").css('height', windowHeight + 'px');
    $("#inner").css('width', (windowWidth + scrollbarWidth())  + "px");

    $(window).resize(function(){
        windowHeight = $(window).height();
        windowWidth = $(window).width();
        $("#inner").css('height', windowHeight + 'px');
        $("#inner").css('width', (windowWidth + scrollbarWidth()) + "px");
    });
});

