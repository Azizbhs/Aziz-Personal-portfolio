//Emailjs
const contactForm = document.getElementById('contact-form'),
   contactEmail = document.getElementById('contact-email')


const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_9ogbtgj', 'template_y5hnfml', '#contact-form', 'hShofulLNGUNmVDAp')
                    .then(() => {
                        contactEmail.textContent = 'Email sent ✔️'
                         setTimeout(() =>{
                         contactEmail.textContent = ''
                         }, 4000)

                         contactForm.reset()
                    }, () => {
                        contactEmail.textContent = 'Failed! ❌'
                    });
}

contactForm.addEventListener('submit', sendEmail)
