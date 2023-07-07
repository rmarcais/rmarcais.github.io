$(document).ready(function () {

    $('#age').text(calculate_age(new Date(2003, 6, 3)) + ' yo');

    const mybutton = document.getElementById("top-btn");

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
    }

    window.onscroll = function() {scrollFunction()};

    function hideExperiences() {

        $("#comptacom").addClass( "d-none" );
        $("#holberton").addClass( "d-none" );
        $("#volunteering").addClass( "d-none" );
    }

    function showExperience(id) {
        hideExperiences();

        $(id).removeClass( "d-none" )
    }

    function activateButton(id) {
        if ($("#comptacom-btn").hasClass( "active-btn" )) {
            $("#comptacom-btn").removeClass("active-btn");
        }
        if ($("#holberton-btn").hasClass( "active-btn" )) {
            $("#holberton-btn").removeClass("active-btn");
        }
        if ($("#volunteering-btn").hasClass( "active-btn" )) {
            $("#volunteering-btn").removeClass("active-btn");
        }

        $(id).addClass("active-btn");
    }

    $("#comptacom-btn").click(function() {
        showExperience("#comptacom");
        activateButton("#comptacom-btn");
    });

    $("#holberton-btn").click(function() {
        showExperience("#holberton");
        activateButton("#holberton-btn");
    });

    $("#volunteering-btn").click(function() {
        showExperience("#volunteering");
        activateButton("#volunteering-btn");
    });

    showExperience("#comptacom");
    activateButton("#comptacom-btn");

});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function calculate_age(dob) { 
    var diff_ms = Date.now() - dob;
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
