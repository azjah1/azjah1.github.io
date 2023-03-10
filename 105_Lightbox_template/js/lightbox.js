let lightboxContainer = 
    document.getElementById ("lightboxContainer");
let lightboxBackground = 
    document.getElementById ("lightboxBackground");
let lightbox = 
    document.getElementById ("lightbox");
let lightboxCloser = 
    document.getElementById ("lightboxCloser");

function openLightbox(){
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let moonImage = document.getElementById ("moonImage");
// let boyImage = document.getElementById ("boyImage");
// let buildingImage = document.getElementById ("buildingImage");
// let posterImage = document.getElementById ("posterImage");

// moonImage.onclick = openLightbox;
// boyImage.onclick = openLightbox;
// buildingImage.onclick = openLightbox;
// posterImage.onclick = openLightbox;

function closeLightbox(){
lightboxContainer.classList.remove("display");
lightbox.src = "";
}

lightboxBackground.onclick=closeLightbox;
lightboxCloser.onclick=closeLightbox;

let galleryImages = document.getElementsByClassName("gallery");

for (let i = 0; i < gallery.length; it ){
    let galleryImage = galleryImages[i];
    galleryImage.onclick= openLightbox;
}
let closers = document.getElementsByClassName("closer");
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;}