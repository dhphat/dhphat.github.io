// JavaScript Document
var pos=0;

	function tup()
	{
		if (pos!=2)
			pos++; else (pos=0);
			
		var dis=pos*700;
		var slidein= document.getElementById("slidein");	slidein.style.top="-"+dis+"px";
	}
		function tdown()
	{
		if (pos!=0)
			pos--; else (pos=2);
			
		var dis=pos*700;
		var slidein= document.getElementById("slidein"); 
		slidein.style.top="-"+dis+"px";
	}

function autoTurn()
	{
		setInterval(function()
				   {
			if (pos!=2)
			pos++; else (pos=0);
			
		var dis=pos*700;
		var slidein= document.getElementById("slidein");	slidein.style.top="-"+dis+"px";
			
		}, 5000);
	}

function openEvents()
{
	window.location.href="events.html";
}

function exitAds()
{
	var x=document.getElementById("ads");
	x.style.opacity='0';
	setTimeout(function()
			  {
		x.style.visibility="hidden";
	},500)
	
}