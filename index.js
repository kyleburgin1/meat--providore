const closeBtn = document.querySelector(".close-btn");
const sideNav = document.getElementById("my-sidenav");
const menuBtn = document.querySelector(".menu-button");




menuBtn.addEventListener("click", function(){
    sideNav.style.width = "250px";
    sideNav.style.borderLeft = "8px double #ffffff";
    
});

closeBtn.addEventListener("click", function(){
    sideNav.style.width = "0";
    sideNav.style.borderLeft = "none";
});


/*function openNav(){
    sideNav.style.width = "250px";
};*/

/*function closeNav(){
    sideNav.style.width = "0";
};*/
