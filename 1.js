$(function(){
    $("#navbartoggle").blur(function(event){
        var screenwidth = window.innerWidth;
        if(screenwidth<768){
            $("#collapsibleNavbar").collapse('hide');
        }
    });
    $("#nav-list").click(function(){
        $(this).css("background-color","green")
    })
});