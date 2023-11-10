let hisoblash=document.getElementById("hisob")

hisoblash.onclick= function sumDouble(a,b){
    let a1 =+document.getElementById("son1").value
    let b1 =+document.getElementById("son2").value
    let result =document.getElementById("natija")
    if(a1==b1){
      return result.innerHTML=(a1+b1)*2;
    }
    else{
      return result.innerHTML=a1+b1;
    }
    
  }