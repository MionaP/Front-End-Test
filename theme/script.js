function onFormSubmit() {

  var uname= document.forms["contactForm"]["username"];
  var email= document.forms["contactForm"]["email"];
  var comment= document.forms["contactForm"]["emaila"];

 if( document.contactForm.username.value == "" ) {
            alert( "Please provide your name!" );
            document.contactForm.username.focus() ;
            return false;
         }

  if( document.contactForm.email.value == "" ) {
            alert( "Please provide your email!" );
            document.contactForm.email.focus() ;
            return false;
         }

  if( document.contactForm.emaila.value == "" ) {
            alert( "Please provide your emaila!" );
            document.contactForm.emaila.focus() ;
            return false;
         }
   if( document.myForm.Name.value.length > 2 ) {
            alert( "Your name su have more than 2 letters" );
            document.myForm.Name.focus() ;
            return false;
         }

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
 {
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}