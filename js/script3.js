window.onload=function(){


/*select-tags*/
var oSelectTags=document.getElementById("select-tags");
var aA=oSelectTags.getElementsByTagName("a");
console.log(aA);


for(var i=0;i<aA.length;i++){

    aA[i].onclick=function(){

      for(var i=0;i<aA.length;i++){
      aA[i].className=" ";
      this.className="current";
    }

    };

}



/*sort*/
var oSort=document.getElementById("sort");
var allA=oSort.getElementsByTagName("a");
console.log(allA);


for(var i=0;i<allA.length;i++){

    allA[i].onclick=function(){

      for(var i=0;i<allA.length;i++){
      allA[i].className=" ";
      this.className="active";
    }

    };

}




/*CinemaList*/
var oCinemaList=document.getElementById("content");

/*getElementsByClassName*/
function getElementsByClassName(cn){
  var oClass=[],
      aEle=oCinemaList.getElementsByTagName("*");
        for(var i=0;i<aEle.length;i++){
          if(aEle[i].className==cn){
            oClass[oClass.length]=aEle[i];
          }
        }
        return oClass;
}

var aCinemaBox=getElementsByClassName("cinema-box");
var aBuy=getElementsByClassName("right-buy");
console.log(aBuy);

aBuy[0].style.display="block";
/*利用一组数组控制另外一组数组时以索引值为媒介*/
for(var i=0;i<aCinemaBox.length;i++){
  aCinemaBox[i].index=i;
  aCinemaBox[i].onmouseover=function(){
    for(var j=0;j<aBuy.length;j++){
      aBuy[j].style.display="none";
    }
     aBuy[this.index].style.display="block";
  };
}


/*点击查看更多*/
var obtn=document.getElementById("add-btn");
var ohidden=document.getElementById("hidden");

obtn.onclick=function(){

  ohidden.style.display="block";
  this.style.display="none";
};








};