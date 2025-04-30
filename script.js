function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.ceil(document.querySelector(".input-max").value);

    if (min >= max) {
        alert("o valor min tem que ser menor que o valor max")
    }

    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert("número sendo sorteado...........")
        alert (result)
    }

}
