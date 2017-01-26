var hamburger, hamburgerUl, filterUl, filterButton, article, header, stories, bookmarks, i;
hamburger = document.querySelector("nav > img");
hamburgerUl = document.querySelector("nav ul");
filterUl = document.querySelector("aside ul");
filterButton = document.querySelector("aside legend");
article = document.querySelector("header article");
header = document.querySelector("header");
stories = document.querySelectorAll("main article");
bookmarks = document.querySelectorAll("footer i");

function menuSlide() {
    hamburgerUl.classList.toggle("visible");
}
function filterToggle(){
    filterUl.classList.toggle("noDisplay");
}
function backgroundIn(){
    header.classList.add("kinderboek_bg");
}

function backgroundOut(){
    header.classList.remove("kinderboek_bg");
}
function shake(){
    this.classList.add("shake");
}
function changeIcon(){
    console.log(this.innerHTML);
    if(this.innerHTML == 'bookmark_border'){
        this.innerHTML = 'bookmark';
    }
    else if(this.innerHTML == 'bookmark'){
        this.innerHTML = 'bookmark_border';
    }
}

hamburger.addEventListener("click", menuSlide);
filterButton.addEventListener("click", filterToggle);
article.addEventListener("mouseover", backgroundIn);
article.addEventListener("mouseout", backgroundOut);

for(i = 0; i < stories.length; i++){
    stories[i].addEventListener("mouseover", shake);
}

for(i = 0; i < bookmarks.length; i++){
   bookmarks[i].addEventListener('click', changeIcon);
}
