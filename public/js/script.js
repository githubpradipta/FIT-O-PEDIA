'use strict';



/**
 * add event on element
 */

const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

const data=[
    {
        no:1
    },
    {
        no:2
    },
    {
        no:3
    },
    {
        no:4
    },
    {
        no:5
    },
    {
        no:6
    },
    {
        no:7
    },
    {
        no:8
    },
    {
        no:9
    },
    {
        no:10
    },
]

// const lists=document.querySelector('.blog-list');
const classlist=document.querySelector('.class-list')

// data.map((data)=>{
//     const Element = document.createElement('li')
//     Element.classList.add('scrollbar-item')
//     Element.innerHTML = `<div class="card-banner img-holder" style="--width: 440; --height: 270;">
//     <img src="../images/blog-1.jpg" width="440" height="270" loading="lazy"
//         alt="Going to the gym for the first time" class="img-cover">

//     <time class="card-meta" datetime="2022-07-07">7 July 2022</time>
// </div>

// <div class="card-content">

//     <h3 class="h3">
//         <a href="#" class="card-title">${data.no}</a>
//     </h3>

//     <p class="card-text">
//         Praesent id ipsum pellentesque lectus dapibus condimentum curabitur eget risus
//         quam. In hac habitasse platea dictumst.
//     </p>

//     <a href="#" class="btn-link has-before">Read More</a>

// </div>

// </div>`
// lists.appendChild(Element);
// })
const classdata=[
    {
        image:"weightlifting.jpeg",
        icon:"class-icon-1.png",
        title:"Weight Lifting",
        des:"“Everybody wants to be a bodybuilder but don’t nobody want to lift heavy ass weights!” – Ronnie Coleman",
        progress_value:"85%",
    },
    {
        image:"cardio.jpeg",
        icon:"class-icon-2.png",
        title:"Cardio & Strenght",
        des:"The vision of a champion is bent over, drenched in sweat, at the point of exhaustion, when nobody else is looking.” —Mia Hamm, pro soccer player",
        progress_value:"75%",
    },
    {
        image:"yoga.jpeg",
        icon:"class-icon-3.png",
        title:"Power of Yoga",
        des:"Yoga is not to be performed; it is to be lived. Yoga doesn’t care about what you have been; it cares about the person you are becoming. Aadil Palkhivala",
        progress_value:"90%",
    },
    {
        image:"fit.jpeg",
        icon:"class-icon-4.png",
        title:"The Ultimate  Fitness Pack",
        des:"Your mind is a powerful tool and by filling it with positive messages, phrases, and sayings, they can help motivate you to keep going when you might want to give up.",
        progress_value:"47%",
    },
    
    
]
classdata.map((data)=>{
    const Element = document.createElement('li')
    Element.classList.add('scrollbar-item')
    Element.innerHTML = `<div class="class-card">

    <figure class="card-banner img-holder" style="--width: 416; --height: 240;">
        <img src="../images/${data.image}" width="416" height="240" loading="lazy"
            alt="Weight Lifting" class="img-cover">
    </figure>

    <div class="card-content">

        <div class="title-wrapper">
            <img src="../images/${data.icon}" width="52" height="52" aria-hidden="true"
                alt="" class="title-icon">

            <h3 class="h3">
                <a href="#" class="card-title">${data.title}</a>
            </h3>
        </div>

        <p class="card-text">
        ${data.des}
        </p>

        <div class="card-progress">

            <div class="progress-wrapper">
                <p class="progress-label">Class Full</p>

                <span class="progress-value">${data.progress_value}</span>
            </div>

            <div class="progress-bg">
                <div class="progress-bar" style="width: ${data.progress_value}"></div>
            </div>

        </div>

    </div>

</div>`
classlist.appendChild(Element);
})
