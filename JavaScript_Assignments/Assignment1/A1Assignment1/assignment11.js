function c(){
    var a=document.getElementById("fah").value;
    if(a=="null" || a=="" ){
      alert("EMPTY FIELD NOT ALLOWED");
    }
    else if(typeof a!=Number){
        alert("Please enter in number");
    }
    else{
      res=(a-32)*(5/9);
      document.getElementById("result").innerHTML="Temperature is: "+res;
    }
    return false;
  }