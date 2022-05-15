let inputData = document.querySelector('#diaEscolhido');
let imgData = document.querySelector('#imagemAPOD');

let sendDateBut = document.querySelector('#enviarData');
sendDateBut.addEventListener('click', function(event){
    event.preventDefault();
    addImageAPOD();
    })

function addImageAPOD(){
    let dayOfChoice = document.querySelector('#diaEscolhido[type="date"]').value

    $.ajax({

        url: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dayOfChoice}`,

        success: function(result){

            console.log(result)

        imgData = result.hdurl
        $('#imagemAPOD').attr('src', imgData)
        }

    })

}
