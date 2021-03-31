
        function validateform()
        {
            //name check
            var name=document.f1.fname.value;
            
            if(name==""){
            
                alert("Please enter the name");
                return false;
            }
            //number check
            var number=document.f1.fnum.value;

            if(number==""){
                alert("Please enter the mobile number");
                return false;
            }else{
                if(isNaN(number)){
                    alert("Please enter the valid mobile number");
                    return false;
                   }
                 }
            //email check
            var email=document.f1.mail.value;
            
            if(email==""){
                alert("Please enter the email");
                return false;
            }
               else
               {
            
                var atposition=z.indexOf("@");
                var dotposition=z.lastIndexOf(".");
            
                  if(atposition<1 || dotposition+2 || dotposition+2>=z.length)
                         {
               
                           alert("Please enter the valid email address");
                           return false;
                         }
            
                 }
           /* var atposition=z.indexOf("@");
            var dotposition=z.lastIndexOf(".");

            if((x=="")||(atposition<1 || dotposition+2 || dotposition+2>=z.length))
            {
                alert("name can't be blanked");
                return false;
            }
            else if(password.length<6)
            {
               alert("Password must be atleast 6 characters long.");
               return false;
            }*/
        }
    