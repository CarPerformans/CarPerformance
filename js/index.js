const link = document.querySelectorAll('a[href*="#"]');

for(let key of link){
    key.addEventListener('click', e =>{
        e.preventDefault();
        id = key.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    })
}