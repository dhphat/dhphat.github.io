// JavaScript Document

function openNews01()
{
	window.location.href="news01.html";
}

function openNews02()
{
	window.location.href="news02.html";
}

function openNews03()
{
	window.location.href="news03.html";
}
function animationNews()
{
	var newsa= document.getElementById("newsa");
	var newsb= document.getElementById("newsb");
	var newsc= document.getElementById("newsc");
	setTimeout(function()
			  {
		newsa.style.opacity="1";
	},500)
	setTimeout(function()
			  {
		newsb.style.opacity="1";
	},1000)
	setTimeout(function()
			  {
		newsc.style.opacity="1";
	},1500)
}
function animationimg(x)
{
	var imgk=document.getElementById(x);
	imgk.style.opacity="1";
}