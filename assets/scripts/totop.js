// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    var i = window.pageYOffset;
    var int = setInterval(function(){
        i = i-30;
        document.body.scrollTop = i; // For Safari
        document.documentElement.scrollTop = i; // For Chrome, Firefox, IE and Opera
        if(window.pageYOffset <= 0) { clearInterval(int); }
    });
    
}