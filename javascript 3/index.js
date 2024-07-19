

function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var phno=document.validateform.phno.value;
    var address=document.validateform.address.value;


    if(fname==null||fname==""){
        alert("fname should not be blank");
    
         return false;
    }
    else if(lname==null||lname==""){
        alert("lname should not be blank");
    
         return false;
    }

    else if((phno==null||phno=="")){
        alert("phno should not blank");
        return false;

    }
    else if(!(phno>='0'&&phno<='9')){
        alert("phno should be number");
        return false;
        
    }
    else if(city==null||city==""){
        alert("city should not blank");
        return false;
    }
    else if(address==null||address==""){
        alert("address should not blank");
        return false;
    }

}

