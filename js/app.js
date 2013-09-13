$(document).ready(function(){
    $('#header').waypoint(function(direction){
        if(direction == "down"){
            console.log('header') ;
        }
    }, { offset: '5%'});

    $('#section1').waypoint(function(direction){
        if(direction == "down"){
            console.log('section1');
        }
    });

    $('#section2').waypoint(function(direction){
        if(direction == "down"){
            console.log('section2');
        }
    });

    $('#section3').waypoint(function(direction){
        if(direction == "down"){
            console.log('section3');
        }
    });

});
