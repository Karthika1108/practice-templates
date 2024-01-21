var nameElement=document.getElementById('name');
    var emailElement=document.getElementById('email');
    var psdElement=document.getElementById('psd');
    var CpsdElement=document.getElementById('Cpsd');
    var btn=document.getElementById('btn')
    var form=document.querySelector('#form');
    form.addEventListener('submit',(eve)=>{
      eve.preventDefault();
      validates();
    });
    function validates(){
        const nameVal=nameElement.value.trim();
        const emailVal=emailElement.value.trim();
        const psdVal=psdElement.value.trim()
        const CpsdVal=CpsdElement.value.trim()
      
        if(nameVal===''){
            error(nameElement,'Required');
        }
        else{
            success(nameElement);
        }
        if(emailVal===''){
            error(emailElement,'Required');
        }
        else if(!validateEmail(emailVal)){
            error(emailElement,'Enter valid email');
        }
        else{
            success(emailElement);
        }
        if(psdVal===''){
            error(psdElement,'Required');
        }
        else if(psdVal.length<8){
            error(psdElement,'Atleast 8 character needed');
        }
        else{
            success(psdElement);
        }
        if(CpsdVal===''){
            error(CpsdElement,'Required')
        }
        else if(CpsdVal!==psdVal){
            error(CpsdElement,'Password does not match');
        }
        else{
            success(CpsdElement);
        }
    }
    function error(element,msg){
        var parent=element.parentElement;
        var errorElement=parent.querySelector('#error');
        errorElement.innerText=msg;
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function success(element){
        var parent=element.parentElement;
        var errorElement=parent.querySelector('#error');
        errorElement.innerText='';
        parent.classList.add('success')
        parent.classList.remove('error')
    }
      const validateEmail=(email)=>{
        return String(email).toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };
       