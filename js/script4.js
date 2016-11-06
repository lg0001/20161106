window.onload=function(){
          

          /*detail-wrap*/
       var oWrap=document.getElementById("detail-wrap");
       var oDiv=document.getElementById("detail-infor");
       var aSpan=oDiv.getElementsByTagName("span");
       var aA=oDiv.getElementsByTagName("a");


       aA[0].onclick=function(){
        oWrap.style.height="460px";
       	aSpan[0].className="";
       	aSpan[1].className="ondisplay";
       	aA[0].className="";
       	aA[1].className="shrink-btn ondisplay";
       }


       aA[1].onclick=function(){
       	oWrap.style.height="";
       	aSpan[1].className="";
       	aSpan[0].className="ondisplay";
       	aA[1].className="";
       	aA[0].className="shrink-btn ondisplay";
       }





   /*select-tags*/
var osta=document.getElementById("select-tags-area");
var ostc=document.getElementById("select-tags-cinema");
var ostd=document.getElementById("select-tags-date");
var aA1=osta.getElementsByTagName("a");
var aA2=ostc.getElementsByTagName("a");
var aA3=ostd.getElementsByTagName("a");



for(var i=0;i<aA1.length;i++){

    aA1[i].onclick=function(){

      for(var i=0;i<aA1.length;i++){
      aA1[i].className=" ";
      this.className="current";
    }

    };

}

for(var i=0;i<aA2.length;i++){

    aA2[i].onclick=function(){

      for(var i=0;i<aA2.length;i++){
      aA2[i].className=" ";
      this.className="current";
    }

    };

}

for(var i=0;i<aA3.length;i++){

    aA3[i].onclick=function(){

      for(var i=0;i<aA3.length;i++){
      aA3[i].className=" ";
      this.className="current";
    }

    };

}







};