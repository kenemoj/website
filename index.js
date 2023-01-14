var navLinks = document.getElementById("navLinks");

            function showMenu(){
                navLinks.style.right = "0";
            }
            function hideMenu(){
                navLinks.style.right = "-200px";
            };

const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const boxElements = document.querySelectorAll('.box');
boxElements.forEach((el) => obeserver.observe(el));  