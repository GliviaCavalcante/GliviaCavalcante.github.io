const form = document.getElementById('form');

form.addEventListener ('submit', function(event) {
    event.preventDefault();

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    const imc = (peso / (altura * altura)).toFixed(2);

    const valor = document.getElementById('valor');
    let descricao = '';

  
    document.getElementById('informs').classList.remove('hidden');

    valor.classList.add('anormal');

    if (imc < 18.5) {
        
        descricao = 'Cuidado! Você está abaixo do peso!';
    }else if (imc >= 18.5 && imc <= 25){
        valor.classList.remove('anormal');
        valor.classList.add('normal');
        descricao = 'Você está no peso ideal!';      
    }else if (imc > 25 && imc <= 30){
        
        descricao = 'Cuidado! Você está com sobrepeso!';
    }else if(imc > 35 && imc <= 40){
      
        descricao = 'Cuidado! Você está com obesidade severa!';
    }else {
    
        descricao = 'Cuidado! Você está com obesidade morbida!';
    }
    valor.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao;
});