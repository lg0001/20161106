window.onload=function(){

	/*切换验证码*/
	var oreplace=document.getElementById("replace");
	var obox=document.getElementById("img-box");
	var aimg=obox.getElementsByTagName("img");
console.log(aimg.length-1);
	oreplace.onclick=function(){
		for(var i=0;i<aimg.length;i++){
			if(aimg[i].className=="identifying-pic active"){
				aimg[i].className="identifying-pic";
				if(i<aimg.length-1){
				aimg[++i].className="identifying-pic active";}
				else{ aimg[0].className="identifying-pic active"; }
			}
		}

	};


	/*重置*/
	var oreset=document.getElementById("reset");
	var oaccount=document.getElementById("account");
	var opassword=document.getElementById("password");

	oreset.onclick=function(){

		oaccount.value="";
		opassword.value="";
	};
  console.log(oaccount);

};