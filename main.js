
let formIn;

let modalContainer;



const getForm = () =>{
    
    formIn = document.getElementById('form_container');
    formIn.classList.add('form_containerActive');
    
}

const btnInForm = document.getElementById('btnInForm');
btnInForm.addEventListener('click', getForm);


const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  
let terms = document.forms["form"]["terms"].checked;
    if(terms == true){
        let name = document.getElementById('inputName').value;
        let email = document.getElementById('inputEmail').value;
        let address = document.getElementById('inputAddress').value;
        let city = document.getElementById('inputCity').value;
        let state = document.getElementById('inputState').value;
        let phone = document.getElementById('inputPhone').value;
        let zip = document.getElementById('inputZip').value;
      
        let modalContainer = document.createElement('div');
        modalContainer.classList.add('modalContainer');
        document.body.append(modalContainer);
      
        let modalContent = document.createElement('div');
        
        modalContainer.appendChild(modalContent);
        modalContent.classList.add('modalContent');
      
        let nameModal = document.createElement('p');
        nameModal.textContent = `Nombre: ${ name}`;
        modalContent.appendChild(nameModal);
      
        let emailModal = document.createElement('p');
        emailModal.textContent = `Email: ${email}`;
        modalContent.appendChild(emailModal);
      
        let addressModal = document.createElement('p');
        addressModal.textContent = `Dirección: ${address}`;
        modalContent.appendChild(addressModal);
        
        let cityModal = document.createElement('p');
        cityModal.textContent = `Ciudad: ${city}`;
        modalContent.appendChild(cityModal);
      
        let stateModal = document.createElement('p');
        stateModal.textContent = `Estado / País: ${state}`;
        modalContent.appendChild(stateModal);
      
        let phoneModal = document.createElement('p');
        phoneModal.textContent = `Teléfono: ${phone}`;
        modalContent.appendChild(phoneModal);
      
        let zipModal = document.createElement('p');
        zipModal.textContent = `CP: ${zip}`;
        modalContent.appendChild(zipModal);
      
        let btnConfirm = document.createElement('button');
        btnConfirm.classList.add('btnConfirm');
        btnConfirm.textContent = "Confirmar";
        modalContent.appendChild(btnConfirm);
      
      
      btnConfirm.addEventListener('click', ()=>{
          modalContainer.removeChild(modalContent);
          let complete = document.createElement('div');
          complete.classList.add('complete');
          modalContainer.appendChild(complete);
          let message = document.createElement('h2');
          message.classList.add('message');
          message.textContent = `Tu compra ha sido confirmada. Hemos enviado los detalles a tu correo: ${email}. Muchas Gracias por tu Compra!`; 
          complete.appendChild(message);

          setTimeout(()=>{
             // modalContainer.removeChild(complete);
              document.body.removeChild(modalContainer);
              modalContainer.classList.remove('form_containerActive');
              modalContainer.classList.add('form_container');
          },2000);

      });
} 
else{
    let checkmessage = document.getElementById('chkVer');
    checkVal = document.createElement('p');
    checkVal.textContent = "Debes aceptar los términos";
    checkmessage.appendChild(checkVal);
    
    setTimeout(()=>{
        checkmessage.remove(checkVal);
    }, 1500)
    

}
} )