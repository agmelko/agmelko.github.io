'use strict';
window.addEventListener('DOMContentLoaded', () => {
    // const menu = document.querySelector('.menu'),
    // menuItem = document.querySelectorAll('.menu_item'),
    // hamburger = document.querySelector('.hamburger');
    let headerHeight = document.querySelector("header").offsetHeight;
    let anchors = document.querySelectorAll("a[href^='#']");
    
    window.scrollTo(0,0);

    for (let anchor of anchors) {
        anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let id = anchor.getAttribute("href");
        let element = document.querySelector(id);
        if ((id =='#hall') || (id =='#menu-photo')) {
        element.style.paddingTop = headerHeight + "px";
        element.style.marginTop = -headerHeight + "px";
        element.scrollIntoView({ behavior: "smooth" });
        } else if (id =='#footer'){
            element.scrollIntoView({ behavior: "smooth" }); 
        } else {
            window.scrollTo(0,0);
        };
        
    
        });
        };


    // hamburger.addEventListener('click', () => {
    //     hamburger.classList.toggle('hamburger_active');
    //     menu.classList.toggle('menu_active');
    // });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     })
    // })
})
