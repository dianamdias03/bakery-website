function sendMessage(){
    const template_params = {
        name: document.querySelector('input[name=name]').value,
        phone: document.querySelector('input[name=phone]').value,
        email: document.querySelector('input[name=email]').value,
        message: document.querySelector('textarea[name=message]').value
    }

    emailjs.send("service_gxgxxte", "template_3416mn6", template_params, "G4-038UlVmM6p55zx").then((response) => {
        console.log("Email enviado: " + response.status, response.text)
        document.querySelector('input[name=name]').value='';
        document.querySelector('input[name=phone]').value='';
        document.querySelector('input[name=email]').value='';
        document.querySelector('textarea[name=message]').value='';
    }, (err) => {
        console.log("Erro: " + err.message)
    })
}

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;

        console.log(windowHeight);
        console.log(elementTop)

        if(elementTop < windowHeight){
            reveal.classList.add("active");
        }else{
            reveal.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);

//window.addEventListener("mouseout", clickOutsideMenu);

function menuShow(){
    var ul = document.querySelector('.menu');
    var menuBtn = document.querySelector('menu-responsive');
    if(ul.classList.contains('open')){
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}

function revealContact(){
    console.log(document.getElementById('contact'))
    document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function clickOutsideMenu(){
    var ul = document.querySelector('.menu');
    ul.classList.remove('open');
}

function backToIndex(){
    window.location.href = '../index.html';
    revealContact();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}