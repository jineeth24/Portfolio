function validation(){
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    email_result = reg.test(email);
    var letters = /^[A-Za-z]+$/;

    if(name == ''){
      alert("Enter a valid name please");
      return false
    // }else if(name.length<3){
    //   document.getElementById('name').innerHTML = " please enter a valid name"
    //   return false
    }
    else if (!letters.test(name)) {
      alert("Invalid characters")
      return false
    } 
    else{
      document.getElementById('name').innerHTML=""
      name = true
    }

   
    if(email == ''){
      // document.getElementById('email').innerHTML = "please enter your email"
      alert("Please enter your correct email")
      return false
    }else if(email.length<10){
      // document.getElementById('email').innerHTML = " please enter a valid email"
      alert("Please enter  your correct E-mail")
      return false
    }else if(!email_result){
      alert("Please provide a correct E-mail")
      return false
    } else{
      document.getElementById('email').innerHTML = ""
      email = true
    }


    if(message == ''){
      // document.getElementById('message_error').innerHTML = "please enter any message"
      alert("Message must not be Blank")
      return false
    }else if(message.length<5){
      // document.getElementById('message_error').innerHTML = " please enter atleast 10 characters"
      alert("Message must be more than 10  char")
      return false
    }
    else{
      document.getElementById('message_error').innerHTML = ""
      message = true
    }
}



    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbzMIDvAga-RmyenxP9r3f-sqjvvfhWiZw-5guZuDC1G7v-75SVzXRtrSmKaLDPmTr-T2Q/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })