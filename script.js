function generateNumber(){

    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = result;
    resultadoDiv.classList.add('show');


    if (min >= max) {
        alert("O valor mínimo deve ser MENOR que o valor máximo.");
        return;
    }
}