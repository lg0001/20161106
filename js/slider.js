window.onload=function(){
var oDiv=document.getElementById("slider");
var oUl=oDiv.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
var aImg=oUl.getElementsByTagName("img"window.onload=function(){
var oDiv=document.getElementById("slider");
var oUl=oDiv.getElementsByTagName("ul")[0];
var aLi=oUl.getElementsByTagName("li");
var aImg=oUl.getElementsByTagName("img");


var oCtrl=document.getElementById("ctrl");
var aA=oCtrl.getElementsByTagName("a");


var imgwidth=1920;/*单张图片的宽度*/
var iNow=0;       /*当前控制按钮的序号*/
var iNow2=0;
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
        };
        }

setInterval(toRun,3000);/*定时器*/

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
       
       
}


};


);


var oCtrl=document.getElementById("ctrl");
var aA=oCtrl.getElementsByTagName("a");


var imgwidth=1920;/*单张图片的宽度*/
var iNow=0;       /*当前控制按钮的序号*/
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
        };
        }

setInterval(toRun,3000);/*定时器*/

function toRun(){       /*自动轮播图片的函数，同样是根据当前按钮的序号来定位ul的位置*/
	if(iNow==aA.length-1){
    iNow=0;
	}
	else{
         iNow++;
    }
 
   for(var i=0;i<aA.length;i++){
       aA[i].className=" ";
    }
       aA[iNow].className="on";
       $(oUl).animate({left:-iNow*imgwidth + "px"});
       // oUl.style.left= -iNow*imgwidth + "px";         //原生js进行切换
       
}



var otCtrl=document.getElementById("tab-control");
var aP=otCtrl.getElementsByTagName("p");
var oMovie=document.getElementById("movie");
var aSection=oMovie.childNodes;
console.log(aSection);

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


};


