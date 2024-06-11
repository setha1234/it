var scrollItem = "";

const Container = document.getElementById("Bar");

window.addEventListener("scroll", function(){
    const scroller = document.documentElement.scrollTop;
    if (scroller < scrollItem){
        Container.style.top = "0"
    }
    else{
        Container.style.top = "-100px"
    }
     scrollItem = scroller ;
})