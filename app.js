const boxes = document.querySelectorAll(".box");

const answers = [
    "Yes, we accept all major credit cards including Visa & MasterCard.",
    "Yes, we support local farmers by using fresh local products.",
    "Yes, we use organic ingredients for healthy food."
];

function toggle(index) {

    const box = boxes[index];
    let answer = box.querySelector(".answer");
    const plus = box.querySelector(".plus");
    const minus = box.querySelector(".minus");

    if (!answer) {
        answer = document.createElement("p");
        answer.className = "answer";
        answer.innerText = answers[index];
        box.appendChild(answer);
    }

    if (answer.style.display === "block") {
        answer.style.display = "none";
        plus.style.display = "inline-block";
        minus.style.display = "none";
        return;
    }

    boxes.forEach((b, i) => {
        const a = b.querySelector(".answer");
        const p = b.querySelector(".plus");
        const m = b.querySelector(".minus");

        if (a) a.style.display = "none";
        p.style.display = "inline-block";
        m.style.display = "none";
    });

    answer.style.display = "block";
    plus.style.display = "none";
    minus.style.display = "inline-block";
}