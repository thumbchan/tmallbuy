
var onoff=0;
$(".carbox .left span").click(function(){
	
	if(onoff===0){
		$(".carbox").animate({"right":"0px"},500);
		onoff=1;
	}
	
	else if(onoff===1){
		$(".carbox").animate({"right":"-220px"},500);
		onoff=0;
	}
	
	
})