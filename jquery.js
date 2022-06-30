// THEME COLORS
var primaryBlack='#232323';
var primaryWhite='#F2F2F2';
// dark mode toggle status
var darkMode = false;
var switchStatus;

$(document).ready(function(){
    $("#darkMode").on('change', function() {
        if ($(this).is(':checked')) {
            switchStatus = $(this).is(':checked');
            document.documentElement.style.setProperty('--background-color', primaryBlack);
            document.documentElement.style.setProperty('--text-color', primaryWhite);
        }
        else {
           switchStatus = $(this).is(':checked');
           document.documentElement.style.setProperty('--background-color', primaryWhite);
           document.documentElement.style.setProperty('--text-color', primaryBlack);
        }
        // $("body").get(0).style.setProperty("--color", "hotpink");
    });
});