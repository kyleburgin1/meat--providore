const closeBtn = document.querySelector(".close-btn");
const sideNav = document.getElementById("my-sidenav");
const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", function(){
    sideNav.style.width = "250px";
})

closeBtn.addEventListener("click", function(){
    sideNav.style.width = "0";
});


/*function openNav(){
    sideNav.style.width = "250px";
};*/

/*function closeNav(){
    sideNav.style.width = "0";
};*/
