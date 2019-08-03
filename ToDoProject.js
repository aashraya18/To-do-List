// // Check of specific to dos by clicking
// $("li").click(function()
// {	//if li is grey
// 		//turn it black
// 		console.log($(this).css("color"))
// 		if($(this).css("color") === "rgb(128, 128, 128)")
// 		{
// 			$(this).css("color","black");	
// 			$(this).css("text-decoration","none")
// 		}
// 	//else
// 		//turn it grey
// 		else
// 		{
// 			$(this).css("color","grey");
// 			$(this).css("text-decoration","line-through");
// 		}
	
// })
// ALL this can be done in 2 lines by making a classs in css
$("ul").on("click","li",function(){
	$(this).toggleClass("complete")
})

//Click on X to delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(function()
		{
			$(this).remove();
		})
	//.parent() will give access to parent of span i.e. li
	event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
	if(event.which===13)
		{
			console.log(event);
			console.log($(this))
			//grabbing the new todo text from input
			var todotext = $(this).val();
			$(this).context.value="";
			//create a new li and add to ul
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todotext+"</li>");
		}
})
$("h1 i").click(function()
{
	$("input[type='text']").fadeToggle();
})
//visit uigradient.com to get good gradients i.e the background that we have used
// to get icons like + sign and delete symbols go to fontawesome