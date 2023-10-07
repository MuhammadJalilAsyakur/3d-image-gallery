const cursor = document.querySelector(".cursor");
document.body.addEventListener("mousemove", onMouseMove);


function onMouseMove(e) {
    gsap.to(cursor, 0.0125, {
        x: e.pageX - 5,
        y: e.pageY - 5,
    });
}

let blocks = document.querySelectorAll(".block");
let duration = 0.25;
let stagger = duration;
let repeatDelay = 0.075 * (blocks.length - 1);

gsap.from(blocks, 5, {
    scale: 0,
    top: "50%",
    left: "50%",
    transform: "translateZ(-200px)",
    stagger: {
        each: duration,
        repeat: -1,
        repeatDelay: repeatDelay,
    },
})

let previuosGif = null;

blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        if (previuosGif) {
            previuosGif.remove();
        }

        const gif = document.createElement("img");
        gif.src = "assets/explosion.gif";
        gif.style.position = "absolute";
        gif.style.left = ` ${x - 10}px`;
        gif.style.top = `${y - 10}px`;
        gif.style.transform = 'scale(2.5)';
        gif.style.pointerEvents = 'none';

        document.body.appendChild(gif);

        setTimeout(() => {
            gif.src = ""
        }, 500);

        block.style.display = "none";
        setTimeout(() => {
            block.style.display = "block";
        }, 500);
    })


});

