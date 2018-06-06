// JavaScript Document

function showDetail0()
{
	var x=document.getElementById("detailOpen");
	x.style.visibility="visible";
	x.style.opacity="1";
	x.style.top="50px";
	
	var a=document.getElementById("information0");
	var b=document.getElementById("ticketOption0");
	var c=document.getElementById("stage0");
	a.style.visibility="visible";
	b.style.visibility="visible";
	c.style.visibility="visible";
	
	var y=document.getElementById("information");
	y.innerHTML="<p>8:00PM | DECEMBER 1, 2017</p><p>PHU THO STADIUM, HO CHI MINH CITY</p>"
	showDetail2();
}

function closeDetail()
{
	var x=document.getElementById("detailOpen");
	setTimeout(function(){
						 
		x.style.opacity="0";
	},20
	)
	x.style.visibility="hidden";
	
	var a=document.getElementById("information0");
	var b=document.getElementById("ticketOption0");
	var c=document.getElementById("stage0");
	var d=document.getElementById("information");
	var e=document.getElementById("ticketOption");
	var f=document.getElementById("stage");
	a.style.visibility="hidden";
	b.style.visibility="hidden";
	c.style.visibility="hidden";
	d.style.visibility="hidden";
	e.style.visibility="hidden";
	f.style.visibility="hidden";
}

function showDetail()
{
	var x=document.getElementById("information0");
	var y=document.getElementById("information");
	var z=document.getElementById("ticketOption");
	var t=document.getElementById("stage");
	y.style.visibility="visible";
	z.style.visibility="hidden";
	t.style.visibility="hidden";
	x.style.backgroundColor="#e7008a";
	x.style.color="white";
	
	var m=document.getElementById("ticketOption0");
	var n=document.getElementById("stage0");
	m.style.backgroundColor="white";
	m.style.color="#e7008a";
	n.style.backgroundColor="white";
	n.style.color="#e7008a";
}

function showDetail2()
{
	var x=document.getElementById("ticketOption0");
	var z=document.getElementById("information");
	var y=document.getElementById("ticketOption");
	var t=document.getElementById("stage");
	y.style.visibility="visible";
	z.style.visibility="hidden";
	t.style.visibility="hidden";
	x.style.backgroundColor="#e7008a";
	x.style.color="white";
	
	var m=document.getElementById("stage0");
	var n=document.getElementById("information0");
	m.style.backgroundColor="white";
	m.style.color="#e7008a";
	n.style.backgroundColor="white";
	n.style.color="#e7008a";
}

function showDetail3()
{
	var x=document.getElementById("stage0");
	var t=document.getElementById("information");
	var z=document.getElementById("ticketOption");
	var y=document.getElementById("stage");
	y.style.visibility="visible";
	z.style.visibility="hidden";
	t.style.visibility="hidden";
	x.style.backgroundColor="#e7008a";
	x.style.color="white";
	
	var m=document.getElementById("ticketOption0");
	var n=document.getElementById("information0");
	m.style.backgroundColor="white";
	m.style.color="#e7008a";
	n.style.backgroundColor="white";
	n.style.color="#e7008a";
}

function showDetailKaty()
{
	var x=document.getElementById("detailOpen");
	showDetail0();
	x.style.top="500px";
	var y=document.getElementById("information");
	y.innerHTML="<p>8:00PM | DECEMBER 3, 2017</p><p>PHU THO STADIUM, HO CHI MINH CITY</p>";
}

function showDetailSelena()
{
	var x=document.getElementById("detailOpen");
	showDetail0();
	x.style.top="950px";
	var y=document.getElementById("information");
	y.innerHTML="<p>8:00PM | DECEMBER 5, 2017</p><p>PHU THO STADIUM, HO CHI MINH CITY</p>";
}

function moveToBook()
	{
		window.location.href="bookticket.html";
	}
function animationEvent()
{
	var singera= document.getElementById("singera");
	var singerb= document.getElementById("singerb");
	var singerc= document.getElementById("singerc");
	var detailOpen= document.getElementById("detailOpen");
	setTimeout(function()
			  {
		singera.style.opacity="1";
	},500)
	setTimeout(function()
			  {
		singerb.style.opacity="1";
	},1000)
	setTimeout(function()
			  {
		singerc.style.opacity="1";
	},1500)
	setTimeout(function()
			  {
		detailOpen.style.opacity="1";
	},2000)
	
}