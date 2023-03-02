$(document).ready(function () {

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

    function visitorsMessage() {
        $.getJSON("https://api.countapi.xyz/hit/rmarcais.github.io/pagevisitors", function(response) {
            const visits = response.value;
            $("#visits").append(`You are the <span class='span-orange'> ${visits}th</span> visitor. Welcome on <span class='span-orange'>board</span> !`);
        });
    }

    visitorsMessage();

});
