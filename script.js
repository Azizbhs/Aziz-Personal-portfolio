//scrolling
function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

function scrollToProjects() {
    scrollToElement('.section-title');
}

link1.addEventListener('click', ()=>{
    scrollToElement('.container');
});

link2.addEventListener('click', ()=>{
    scrollToElement('.skills');
});

link4.addEventListener('click', ()=>{
    scrollToElement('.contact');
});

link3.addEventListener('click',scrollToProjects);
link5.addEventListener('click',scrollToProjects);




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
