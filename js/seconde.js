document.getElementById("btn").addEventListener("click", function solution() {
    const btn = document.getElementById("btn");
    btn.classList.add("loading");
    btn.textContent = "En cours";

    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    let h2 = document.querySelector(".sol");

    const delta = (b * b) - (4 * a * c);
    console.log(delta);

    function eq2(a, b, c, delta) {
        let x1 = document.getElementById("x1");
        let x2 = document.getElementById("x2");

        if (a === 0) {
            if (b === 0) {
                h2.textContent = "Pas de solution";
            } else {
                if (x1) x1.textContent = `x = ${-c / b}`;
                if (x2) x2.textContent = "";
            }
        } else {
            if (delta < 0) {
                h2.textContent = "Pas de solution";
            } else if (delta === 0) {
                if (x1) x1.textContent = `x = ${-b / (2 * a)}`;
                if (x2) x2.textContent = "";
            } else {
                if (x1) x1.textContent = `x1 = ${(-b - Math.sqrt(delta)) / (2 * a)}`;
                if (x2) x2.textContent = `x2 = ${(-b + Math.sqrt(delta)) / (2 * a)}`;
            }
        }
        h2.classList.add("block");
    }

    setTimeout(() => {
        eq2(a, b, c, delta);

        btn.classList.remove("loading");
        btn.textContent = "Résoudre";
    }, 2000);

    setTimeout(() => {
        document.getElementById("a").value = '';
        document.getElementById("b").value = '';
        document.getElementById("c").value = '';
        let x1 = document.getElementById("x1");
        let x2 = document.getElementById("x2");
        if (x1) x1.textContent = '';
        if (x2) x2.textContent = '';
        h2.classList.remove("block");
        h2.innerHTML = "S = {<span id='x1'></span>; <span id='x2'></span>}";
    }, 5000);
});