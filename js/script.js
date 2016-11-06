window.onload=function(){

  /*slider*/
var oDiv=document.getElementById("slider");
var oUl=oDiv.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
var aImg=oUl.getElementsByTagName("img");


var oCtrl=document.getElementById("ctrl");
var aA=oCtrl.getElementsByTagName("a");


var imgwidth=1920;/*单张图片的宽度*/
var iNow=0;       /*当前控制按钮的序号*/
var iNow2=0;      /*当前图片的序号*/
oUl.style.width = aImg.length*imgwidth + "px";/*虽然使图片浮动了，但由于ul的宽度限制，图片无法横向排成一排，
                                                所以对ul的宽度进行动态设置*/


for(var i=0;i<aA.length;i++){
    aA[i].index=i;

    aA[i].onclick=function(){                /*按钮点击时触发函数，让所有控制按钮的颜色都变为非活动状态时的颜色
                                             再使当前受到点击的按钮显现活动状态时的颜色。
                                             同时使ul定位到合适位置*/
            for(var i=0;i<aA.length;i++){
        aA[i].className=" ";
        this.className="on";
           }

           // oUl.style.left= -this.index*imgwidth + "px";         //原生js进行切换
           $(oUl).animate({left:-this.index*imgwidth + "px"});//jQuery引入切换函数
           iNow=this.index;
           iNow2=this.index;
        };
        }

 var timer=setInterval(toRun,3000);/*定时器*/

function toRun(){       /*自动轮播图片的函数，同样是根据当前按钮的序号来定位ul的位置*/
  if(iNow==aA.length-1){
    aLi[0].style.position="relative";
    aLi[0].style.left=aLi.length*imgwidth+'px';
    iNow=0;
  }
  else{
         iNow++;
    }
    iNow2++;
 
   for(var i=0;i<aA.length;i++){
       aA[i].className=" ";
    }
       aA[iNow].className="on";
       $(oUl).animate({left:-iNow2*imgwidth + "px"},function(){
       if(iNow==0){
       aLi[0].style.position="static";
       oUl.style.left=0;
       iNow2=0;
       }/*无缝切换*/
     });

       for(var i=0;i<aImg.length;i++){
        aImg[i].onmouseout=function(){

          timer=setInterval(toRun,3000);

        }
        aImg[i].onmouseover=function(){
          clearInterval(timer);
        }
       }
       
       
}






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

function getByClass(cn){
  var oClass=[],
      aEle=oMovie.getElementsByTagName("*");
        for(var i=0;i<aEle.length;i++){
          if(aEle[i].className==cn){
            oClass[oClass.length]=aEle[i];
          }
        }
        return oClass;
}

var oMovieBox=document.getElementsByName("movie-box");
var oMask=getByClass("movie-mask");
var oInfor=getByClass("movie-infor");
console.log(oMovieBox);
for(var i=0;i<oMovieBox.length;i++){
    oMovieBox[i].index=i;
    $(oMovieBox[i]).hover(
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





/*列表切换效果*/
var oWrap=document.getElementById("box-wrap");

/*getElementsByClassName*/
function getElementsByClassName(cn){
  var oClass=[],
        aEle=oWrap.getElementsByTagName("*");
        for(var i=0;i<aEle.length;i++){
          if(aEle[i].className==cn){
            oClass[oClass.length]=aEle[i];
          }
        }
        return oClass;
}

var aBox=getElementsByClassName("box");
var aResume=getElementsByClassName("resume");
var aDetail=getElementsByClassName("detail");

aResume[0].style.display="none";
aDetail[0].style.display="block";
/*利用一组数组控制另外一组数组时以索引值为媒介*/
for(var i=0;i<aBox.length;i++){
  aBox[i].index=i;
  aBox[i].onmouseover=function(){
    for(var j=0;j<aResume.length;j++){
      aResume[j].style.display="block";
      aDetail[j].style.display="none";
    }
     aResume[this.index].style.display="none";
     aDetail[this.index].style.display="block";
  };
}




/*列表切换效果2*/
var oWrap2=document.getElementById("box-wrap2");

/*getElementsByClassName*/
function getElementsByClassName2(cn){
  var oClass=[],
        aEle=oWrap2.getElementsByTagName("*");
        for(var i=0;i<aEle.length;i++){
          if(aEle[i].className==cn){
            oClass[oClass.length]=aEle[i];
          }
        }
        return oClass;
}

var aBox2=getElementsByClassName2("box2");
var aResume2=getElementsByClassName2("resume2");
var aDetail2=getElementsByClassName2("detail2");

aResume2[0].style.display="none";
aDetail2[0].style.display="block";
/*利用一组数组控制另外一组数组时以索引值为媒介*/
for(var i=0;i<aBox2.length;i++){
  aBox2[i].index=i;
  aBox2[i].onmouseover=function(){
    for(var j=0;j<aResume2.length;j++){
      aResume2[j].style.display="block";
      aDetail2[j].style.display="none";
    }
     aResume2[this.index].style.display="none";
     aDetail2[this.index].style.display="block";
  };
}

};


