$(".card-header").on("click", function(){
    var theIcon = $(this).find("k")
    if(theIcon.hasClass("fa-caret-right")){
        theIcon.attr("class", "fas fa-caret-down")
    }else{
        theIcon.attr("class", "fas fa-caret-right")
    }
})