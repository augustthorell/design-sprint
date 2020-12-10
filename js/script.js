window.onscroll = function() {
    if(window.pageYOffset >= 500) {
        
        document.querySelector('.go-to-top').style.visibility="visible";
    }else {
        document.querySelector('.go-to-top').style.visibility="hidden";
    }
};

