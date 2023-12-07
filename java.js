function result()
{
	var score=0;
	if(document.getElementById('helyes1').checked)
		{	score++;
		}
	if(document.getElementById('helyes2').checked)
		{	score++;
		}
	if(document.getElementById('helyes3').checked)
		{	score++;
		}
    if(document.getElementById('helyes4').checked)
 alert("Gratulálok! Elért pontok: "+score);
 

}