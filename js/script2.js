window.onload=function(){

/*tab-options*/
var otCtrl=document.getElementById("tab-control");
var aP=otCtrl.getElementsByTagName("p");
var oMovie=document.getElementById("movie");
var aSection=oMovie.childNodes;


for(var i=0;i<aP.length;i++){
    aP[i].index=i;
    aP[i].onclick=function(){

      for(var i=0;i<aP.length;i++){
      aP[i].className=" ";
      this.className="active";
    }
        for(var i=0;i<aP.length;i++){
      aSection[i].style.display="none";
      aSection[this.index].style.display="block";
      }
    };

}

 /*tab-options 遮罩层动画效果*/

function getElementsByClassName(cn){
  var oClass=[],
      aEle=oMovie.getElementsByTagName("*");
        for(var i=0;i<aEle.length;i++){
          if(aEle[i].className==cn){
            oClass[oClass.length]=aEle[i];
          }
        }
        return oClass;
}

var oBox=getElementsByClassName("box");
var oMask=getElementsByClassName("movie-mask");
var oInfor=getElementsByClassName("movie-infor");

for(var i=0;i<oBox.length;i++){
    oBox[i].index=i;
    $(oBox[i]).hover(
function(){
        $(oMask[this.index]).slideDown("fast");
        $(oInfor[this.index]).slideDown("fast");
    },
function(){
        $(oMask[this.index]).slideUp("fast");
        $(oInfor[this.index]).slideUp("fast");
    }    

      );
   
    
}




};