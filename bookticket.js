// JavaScript Document
var customer=[];
		var arr=["green","pink","gray","blue","purple"]
		var flag=[0,0,0,0,0,0,0]
		var flagNo=[0,0,0,0,0]
		var flagh=[0,0,0]
	function startText(x,y)
		{
			var t= document.getElementById(x);
			t.style.width="400px";
			t.style.border="1px solid "+arr[y];
			
		}
	function endText(x,y)
		{
			var t=document.getElementById(x);
			t.style.width="0px";
			t.style.border="0px solid "+arr[y];
		}
	function checkFname()
		{
			var q1=document.getElementById("q1");
			var span1= document.getElementById("span1");
			var txt=/^[a-zA-Z ]{2,50}$/;
			var txt2=/[a-zA-z]/
			if (q1.value.length==0)
				{
					flag[0]=0;flagNo[0]=0;
					span1.style.opacity="0";
					customer[0]=null;
				}
			else if (txt.test(q1.value)==false || txt2.test(q1.value)==false )
				{
					flag[0]=0; flagNo[0]=1;
					span1.style.opacity="1";
					span1.innerHTML="*It's not a name";
					customer[0]=null;
				}
			else {
				span1.style.opacity="0";
				flag[0]=1;
				customer[0]=q1.value;
				
				}
		}
		
	function checkMail()
		{
			var q3=document.getElementById("q3");
			var span3= document.getElementById("span3");
			var txt=/^\w+[@][a-zA-Z]+([.][a-zA-Z]+){1,2}$/;
			if (q3.value.length==0)
				{
					flag[2]=0;flagNo[2]=0;
					span3.style.opacity="0";
					customer[2]=null;
				}
			else
			if (txt.test(q3.value)==false)
				{
					flag[2]=0;flagNo[2]=1;
					span3.style.opacity="1";
					span3.innerHTML="*It's not a Mail";
					customer[2]=null;
				}
			else {
				span3.style.opacity="0";
				flag[2]=1;
				customer[2]=q3.value;
				}
		}
	function checkPhone()
		{
			var q4=document.getElementById("q4");
			var span4= document.getElementById("span4");
			var txt=/^[0-9]{7,13}$/;
			if (q4.value.length==0)
				{
					flag[3]=0;flagNo[3]=0;
					span4.style.opacity="0";
					customer[3]=null;
				}
			else
			if (txt.test(q4.value)==false)
				{
					flag[3]=0;flagNo[3]=1;
					span4.style.opacity="1";
					span4.innerHTML="*It's not a number";
					customer[3]=null;
				}
			else
				{
				span4.style.opacity="0";
				flag[3]=1;
					customer[3]=q4.value;
				}
		}
		function checkAddress()
		{
			var q5=document.getElementById("q5");
			var span5= document.getElementById("span5");
			var txt3=/\w/;
			if (q5.value.length==0)
				{
					flag[4]=0;flagNo[4]=0;
					span5.style.opacity="0";
					customer[4]=null;
				}
			else
			if (q5.value.length<5 || txt3.test(q5.value)==false)
				{
					flag[4]=0;flagNo[4]=1;
					span5.style.opacity="1";
					span5.innerHTML="It's not an Address";
					customer[4]=null;
				}
			else
				{
				span5.style.opacity="0";
				flag[4]=1;
				customer[4]=q5.value;
				}
		}
		function checkDate()
		{
			var q2=document.getElementById("q2");
			var span2= document.getElementById("span2");
			var nddate= q2.value;
			var k=nddate.split("-");
			if(nddate==null) 
			{
				flagNo[1]=0;
				flag[1]=0;
				customer[1]=null;
			}
			else
			if (k[0]>2001)
				{
					flag[1]=0;flagNo[1]=1;
					span2.style.opacity="1";
					span2.innerHTML="*You don'have enough age to buy ticket";
					customer[1]=null;
				}
			else {
					flag[1]=1;
					span2.style.opacity="0";
					customer[1]=q2.value;
				}
		}
		function chooseOptionw(e,x,y,z,t)
		{
			var d=document.getElementById(e);
			var a=document.getElementById(x);
			var b=document.getElementById(y);
			var c=document.getElementById(z);					
			d.style.opacity='0';
			a.style.opacity='1';				
			b.style.opacity='1';
			c.style.opacity='1';
			checkAmountOfTicket();
			
				}
		function chooseOption(e,x,y,z,t)
		{
			var d=document.getElementById(e);
			var a=document.getElementById(x);
			var b=document.getElementById(y);
			var c=document.getElementById(z);
			if(flagh[t]==0)
				{
					
			d.style.opacity='0';
			a.style.opacity='1';				
			b.style.opacity='1';
			c.style.opacity='1';
			var k=t+1;
			flagh[t]=1;
					for (var i=1;i<=3;i++)
				{				document.getElementById("number"+i+k).value="0";
				}
				}
			else
			if(flagh[t]==1)
				{
			d.style.opacity='0.6';
			a.style.opacity='0';
			b.style.opacity='0';
			c.style.opacity='0';	
			flagh[t]=0;
			checkAmountOfTicket()
			
				}
			
		}
		
		function confirmYes()
		{
			
			document.getElementById("registerb").style.opacity='0';
			document.getElementById("registera").style.backgroundColor="white";
			
			setTimeout(function()
					  {
					
					document.getElementById("registerc").style.opacity='1';
						}
					   ,800
					  )
			setTimeout(function()
					  {
				
				
				
				document.getElementById("registerb").style.opacity='1';
		document.getElementById("registera").style.backgroundColor="#F03DA8";
						}
					  ,2000)
		}
		function confirmNo()
		{
			
			setTimeout(function()
					  {
				register.style.backgroundColor="#00AFD1";
						}  
					  ,1000)
		}
	function checkAmountOfTicket()
	{ 
		var totalChange = document.getElementById("totalChange");
		customer[17]=0;
		for(var i=1;i<=3;i++)
			for (var j=1;j<=3;j++)
				{
					var dark= document.getElementById("dark"+i+j);
					var about= document.getElementById("about"+i+j);
					var numberk= document.getElementById("number"+i+j);
					if (numberk.value==null|| parseInt(numberk.value)!=numberk.value|| numberk.value==0 || flagh[j-1]==0)
						{
						about.style.top="110px";
						dark.style.opacity="0.6";
						if(j==1) customer[i+j+6]=0;	
							else if(j==2) customer[i+j+8]=0;	
							else if(j==3) customer[i+j+10]=0;	
							
						}
					else 
						{
							about.style.top="142px";
							dark.style.opacity="0";
							if(j==1) customer[i+j+6]=numberk.value;	
							else if(j==2) customer[i+j+8]=numberk.value;	
							else if(j==3) customer[i+j+10]=numberk.value;	
						}
						}
		
		for (var i=8;i<=16;i++)
			{
				if (i%3==2)
			customer[17]=customer[17]+parseInt(customer[i]);
			else if (i%3==0)
			customer[17]=customer[17]+parseInt(customer[i])*2;
			else if (i%3==1)
			customer[17]=customer[17]+parseInt(customer[i])*3;
			if (customer[17]==0)
			{totalChange.innerHTML="Cash: 0 VND";
			 flag[5]=0
			}
				else 
				{totalChange.innerHTML="Cash: "+customer[17]+".000.000 VND";
				 flag[5]=1;
				}
			}
		if (flag[5]==0) 
			document.getElementById("cfirm").style.opacity="1";
		else
			document.getElementById("cfirm").style.opacity="0";
		
				}
	
	function inputTicket(x,y)
		{
			var a= document.getElementById(x);
			var b=document.getElementById(y);
			
			a.style.top="142px";
			b.style.opacity="0";
			
		}
	
		function registerConfirm()
		{
			var s=0;
			for (var i=0;i<flag.length;i++)
				s=s+flag[i];
			var count=0;
			for (var i=8;i<=10;i++)
				{
					count=count+customer[i];
				}
			if (count==0) customer[5]=0; else customer[5]=1;
			 count=0;
			for (var i=11;i<=13;i++)
				{
					count=count+customer[i];
				}
			if (count==0) customer[6]=0; else customer[6]=1;
			 count=0;
			for (var i=14;i<=16;i++)
				{
					count=count+customer[i];
				}
			if (count==0) customer[7]=0; else customer[7]=1;
				
			if (s==6 && ( customer[5]!=0 || customer[6]!=0|| customer[7]!=0))
			{confirmYes(); 
			 window.localStorage.setItem("fullname",customer[0]);
			 window.localStorage.setItem("dateOfBirth",customer[1]);
			 window.localStorage.setItem("email",customer[2]);
			 window.localStorage.setItem("phoneNumber",customer[3]);
			 window.localStorage.setItem("address",customer[4]);
			 window.localStorage.setItem("taylor",customer[5]);
			 window.localStorage.setItem("katy",customer[6]);
			 window.localStorage.setItem("selena",customer[7]);
			 window.localStorage.setItem("numTaylor",customer[8]+','+customer[9]+','+customer[10]);
			 window.localStorage.setItem("numKaty",customer[11]+','+customer[12]+','+customer[13]);
			 window.localStorage.setItem("numSelena",customer[14]+','+customer[15]+','+customer[16]);
			 window.localStorage.setItem("total",customer[17]);
			 setTimeout(function()
					   {
				 window.location.href="bookticket2.html";
			 },2000)

			 
			}
			else {
				confirmNo();
				for(var i=0;i<flag.length-1;i++)
					if (flag[i]==0 && flagNo[i]==0) 
						{

							var k=i+1;
							var span=document.getElementById("span"+k);
							span.innerHTML="*You put empty";
							span.style.opacity="1";
						}
					
					}
		}

		function getBook()
		{
			var a=window.localStorage.getItem("fullname");
			var q1=document.getElementById("q1");
				q1.value=a;customer[0]=a;
			if (a!=null) flag[0]=1;
			var b=window.localStorage.getItem("dateOfBirth");
			var q2=document.getElementById("q2");
				q2.value=b;customer[1]=b;
			if (b!=null) flag[1]=1;
			var c=window.localStorage.getItem("email");
			var q3=document.getElementById("q3");
				q3.value=c;customer[2]=c;
			if (c!=null) flag[2]=1;
			var d=window.localStorage.getItem("phoneNumber");
			var q4=document.getElementById("q4");
				q4.value=d;customer[3]=d;
			if (d!=null) flag[3]=1;
			var e=window.localStorage.getItem("address");
			var q5=document.getElementById("q5");
				q5.value=e;customer[4]=e;
			if (e!=null) flag[4]=1;
			var f=window.localStorage.getItem("numTaylor");
			var arr=f.split(",");
				for (var i=1;i<=3;i++)
					{
						document.getElementById("number"+i+"1").value=arr[i-1];
						customer[9-i]=arr[i-1];
					}
			var g=window.localStorage.getItem("numKaty");
			var arr2=g.split(",");
				for (var i=1;i<=3;i++)
					{
						document.getElementById("number"+i+"2").value=arr2[i-1];
						customer[12-i]=arr[i-1];
					}
			var h=window.localStorage.getItem("numSelena");
			var arr3=h.split(",");
				for (var i=1;i<=3;i++)
					{
						document.getElementById("number"+i+"3").value=arr3[i-1];
						customer[15-i]=arr[i-1];
					}
			var o=window.localStorage.getItem("taylor");
			customer[5]=o;
			var p=window.localStorage.getItem("katy");
			customer[6]=p;
			
			var q=window.localStorage.getItem("selena");
			customer[7]=q;
			if(customer[5]==1) 
			{chooseOptionw('darka','option11','option21','option31',0);
			 flagh[0]=1;
			}
			if(customer[6]==1) 
			{chooseOptionw('darkb','option12','option22','option32',1);
			 flagh[1]=1;
			}
			if(customer[7]==1) 
			{chooseOptionw('darkc','option13','option23','option33',2);
			 flagh[2]=1;
			}
				
			
		}
function getData(){
		var a=window.localStorage.getItem("fullname");
		var b=window.localStorage.getItem("dateOfBirth");
		var c=window.localStorage.getItem("email");
		var d=window.localStorage.getItem("phoneNumber");
		var e=window.localStorage.getItem("address");
		var f=window.localStorage.getItem("taylor");
		var g=window.localStorage.getItem("katy");
		var h=window.localStorage.getItem("selena");
		var cash=window.localStorage.getItem("total");
		document.getElementById("fullname1").innerHTML=a;
		document.getElementById("dateOfBirth1").innerHTML=b;
		document.getElementById("email1").innerHTML=c;
		document.getElementById("phonenumber1").innerHTML=d;
		document.getElementById("address1").innerHTML=e;
		document.getElementById("cash1").innerHTML=cash+".000.000 VND";
		
		if (f==1)
		{
			document.getElementById("detailSinger1").innerHTML="Taylor Swift ";;
			
			document.getElementById("detail1").style.height="40px";
			var tic=window.localStorage.getItem("numTaylor");
			var arr2=tic.split(",");
			if (arr2[0]!=0) document.getElementById("amount1").innerHTML=" "+arr2[0]+"(GA)";
			if (arr2[1]!=0) document.getElementById("amount2").innerHTML=" "+arr2[1]+" (VIP)";
			if (arr2[2]!=0) document.getElementById("amount3").innerHTML=" "+arr2[2]+" (SVIP)";
		}
	if (g==1)
		{
			var y=document.getElementById("detailSinger2");
			y.innerHTML="Katy Perry  ";
			document.getElementById("detail2").style.height="40px";
			var tic=window.localStorage.getItem("numKaty");
			var arr2=tic.split(",");
			if (arr2[0]!=0) document.getElementById("amount4").innerHTML=" "+arr2[0]+"(GA)";
			if (arr2[1]!=0) document.getElementById("amount5").innerHTML=" "+arr2[1]+"(VIP)";
			if (arr2[2]!=0) document.getElementById("amount6").innerHTML=" "+arr2[2]+"(SVIP)";
		}
	if (h==1)
		{
			var y=document.getElementById("detailSinger3");
			y.innerHTML="Selena Gomez ";
			document.getElementById("detail3").style.height="40px";
			var tic=window.localStorage.getItem("numSelena");
			var arr2=tic.split(",");
			if (arr2[0]!=0) document.getElementById("amount7").innerHTML=" "+arr2[0]+"(GA)";
			if (arr2[1]!=0) document.getElementById("amount8").innerHTML=" "+arr2[1]+"(VIP)";
			if (arr2[2]!=0) document.getElementById("amount9").innerHTML=" "+arr2[2]+"(SVIP)";
		}
	}
	function completeBook()
	{
		alert("Thank you for your buying. We will contact you later");
		window.localStorage.clear();
		window.location.replace("homepage.html");
		
	}
	function comeBackHomepage()
	{
		window.localStorage.clear();
		window.location.href="homepage.html";
	}
	function comeBackBook()
	{
		window.location.href="bookticket.html";
	}

function animationBook()
{
	var allbook=document.getElementById("allbook");
	var optionbook1= document.getElementById("optionbook1");
	var optionbook2= document.getElementById("optionbook2");
	var optionbook3= document.getElementById("optionbook3");
	var cfirm= document.getElementById("cfirm");
	var totalChange= document.getElementById("totalChange");
	setTimeout(function()
			   {
			  allbook.style.opacity="1";
				}
			  ,100)
	setTimeout(function()
			   {
			  optionbook1.style.opacity="1";
				}
			  ,300)
	setTimeout(function()
			   {
			  optionbook2.style.opacity="1";
				}
			  ,600)
	setTimeout(function()
			   {
			  optionbook3.style.opacity="1";
				}
			  ,900)
	setTimeout(function()
			   {
			  cfirm.style.opacity="1";
				totalChange.style.opacity="1";
				}
			  ,1200)
	
}