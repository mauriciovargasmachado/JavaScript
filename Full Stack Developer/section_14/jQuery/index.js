//$("h1").addClass("big_title").text("good Bye!!!")

//$("button").html("<em>Hey</em>")

$("h1").click(function(){
    $("h1").css("color","green");
});

$("button").click(function(){
    $("h1").css("color","red")
})

//$(document).keypress(function(event){
//    $("h1").text(event.key);
//})

$("h1").on("mouseover",function(){
    $("h1").css("color","blue")
})