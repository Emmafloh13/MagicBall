const ask = () => {

    //leer pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
        //recibir respuesta cuando pregunta a la bola
        let answer = magicBall();
       //imprimir
       answerInput.value = answer;
    }else {
        answerInput.value = "Preguntas algo !!"; 
    }
 
};

//Funcion de la bola
const magicBall = () =>{
    let randomNumber = Math.floor(Math.random() * 8);
    let eightball = '';
        switch (randomNumber){
            case 1:
             eightball = 'It is certain';
            break
            case 2:
             eightball = 'It is decidedly so';
            break;
            case 3:
             eightball = 'Reply hazy try again';
            break;
            case 4:
             eightball = 'Cannot predict now';
            break;
            case 5: 
             eightball = 'Do not count on it';
            break;
            case 6:
             eightball = 'My sources say no';
            break;
            case 7:
             eightball = 'Outlook not so good';
            break;
            case 8:
             eightball = 'Signs point to yes';
            break;                    
    }
    return eightball;
}
    