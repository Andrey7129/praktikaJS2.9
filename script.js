let count = 0;
let clickbutton = document.getElementById("clickbutton");
let disp = document.getElementById("counter");
 
clickbutton.onclick = function () {
            count++;
disp.innerHTML = count;
}

 const emailInput = document.getElementById("email");
 const errorMessage = document.getElementById("errorMessage");
 const submitBtn = document.getElementById("submitBtn");
  
     emailInput.addEventListener('input', function validate (form_id,email) {  
     const emailValue = emailInput.value;  
     if ( ! emailInput.value ) {
        document.document.getElementById( 'label[for="email"]' );
        valid = false;
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!emailPattern.test(emailValue)) {  
            $('#valid').span('Не верно');
            } else {  
                $('#valid').span('Верно');
            }   
        }     
    });