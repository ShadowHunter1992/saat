
var boyukEqreb=document.getElementsByClassName("boyukeqreb")[0];
var ortaEqreb=document.getElementsByClassName("orta")[0];
var kicikEqreb=document.getElementsByClassName("kicik")[0];
function vaxt(){
	 indi=new Date();
     saniye=indi.getSeconds();
	 deqiqe=indi.getMinutes();
	 saat=indi.getHours();
	

	 saniyedeg=((saniye/60)*360)+90;
	deqiqedeg=((deqiqe/60)*360)+90;
	 saatdeg=(((saat/12))*360)+90+(deqiqe/2);

 boyukEqreb.style.transform="rotate("+saniyedeg+"deg)";
 ortaEqreb.style.transform="rotate("+deqiqedeg+"deg)";
 kicikEqreb.style.transform="rotate("+saatdeg+"deg)";


}
vaxt()
setInterval(vaxt,1000);