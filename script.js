// VanillaTilt.init(document.querySelectorAll(".rotating-gradient"), {
//     max: 25, 
//     speed: 400,  // Speed of the enter/exit transition
//     glare: true, // Enables glare effect
//     "max-glare": 0.5, // Maximum glare opacity (0.5 means 50%)
// });
VanillaTilt.init(document.querySelectorAll(".rotating-gradient"), {
    max: 15,       // Maximum tilt rotation
    speed: 400,    // Speed of the enter/exit transition
    glare: true,   // Enables glare effect
    "max-glare": 0.5, // Maximum glare opacity
    scale: 1.05,   // Scale the card for a zoom effect
    perspective: 1000, // Perspective value to control depth
    parallax: true, // Enables parallax effect on the content
    "parallax-background": true // Optional: only if you want a background-specific parallax
});