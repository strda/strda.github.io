const scriptURL = 'https://script.google.com/macros/s/AKfycbzdvMrMJ5PwaN6W7kiLrj5Vxjie81GMV4npae0EeRcKc1Ss9uKmmMNK6buQYKfLVzLj/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})