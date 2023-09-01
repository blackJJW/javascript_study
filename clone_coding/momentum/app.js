const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    console.log("title was clicked")
}

function handleMouseEnter() {
   title.innerText = "mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "mouse is gone!"
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
