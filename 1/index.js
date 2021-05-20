

var numofWon=0;

var numofLost=0;



for(var i=1;i<=5;i++)
{

var guesNumber= parseInt(prompt("Enter  your  First Number"));

var randoMnumber = Math.floor(Math.random()*5)+1;




if(guesNumber==randoMnumber)

{
console.log("you have won");

numofWon++;

}
else {
	console.log("you have lost Rnadom number was:"+randoMnumber);

	numofLost++;
}


}

document.write("Total number  of won = "+numofWon+"<br>");

document.write("Total number lost = "+numofLost+"<br>");
























































