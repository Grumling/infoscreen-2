import currentTime from "./service.js";

// Glide gallery
new Glide(".glide", {
    type: "carousel",
    autoplay: 6000,
    animationDuration: 1900,
    //animationTimingFunc: "ease-in-out",
    gap: 15,
}).mount();

currentTime();