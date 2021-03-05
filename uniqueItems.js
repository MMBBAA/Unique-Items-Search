	window.onload=function(){
		document.getElementById("clear").addEventListener("click", clear);
		document.getElementById("user").addEventListener("keyup", test);			
	}

	function test(){
		var word=document.getElementById("user").value;
		duplicateEncode(word);
	}

	function clear(){
		document.getElementById("rdo").innerHTML="";
        	document.getElementById("user").innerHTML="";
	}
	
	function duplicateEncode(word){
	
		let empty=[];//array with word repeated without filtering
		let rdo;//final answer
		let compare=word.toLowerCase().split("");//word converted to array in Lowercase	
		let repeated=[];//words repeated
 
 		for(var i=0;i<compare.length;i++){
 			for(var j=0;j<compare.length;j++){
 				if(compare[i]==compare[j]&&i!=j){
 					empty.push(compare[i]);	
 				}
 			}
 		}
 	
 		rdo=repeated=[...new Set(empty)].toString().replace(/,/g," ");
 		document.getElementById("rdo").innerHTML=`Items repeated: ${rdo}`;
	}
