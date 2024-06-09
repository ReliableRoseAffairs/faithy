let username = document.getElementById('name');
let message = document.getElementById('message');
let alertMessage = document.getElementById('alert');
let successMessage = document.getElementById('success');

function send() {
  if (username.value !== '' && message.value !== '') {
        db.collection("birthday-list").add({
            name: username.value,
            message: message.value,
        })
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          successMessage.classList.add('hidden');
        }, 3000)
        username.value = ''
        message.value = ''
  }
        else {
        alertMessage.classList.remove('hidden');
        setTimeout(()=>{
            alertMessage.classList.add('hidden');
        },3000)
    }
}
  