availableImages=['../img/2_of_clubs.png','../img/2_of_clubs.png','../img/2_of_diamonds.png','../img/2_of_diamonds.png',
'../img/5_of_diamonds.png','../img/5_of_diamonds.png','../img/9_of_diamonds.png','../img/9_of_diamonds.png',
'../img/7_of_spades.png','../img/7_of_spades.png','../img/4_of_spades.png','../img/4_of_spades.png',
'../img/10_of_hearts.png','../img/10_of_hearts.png','../img/8_of_hearts.png','../img/8_of_hearts.png',
'../img/3_of_hearts.png','../img/3_of_hearts.png','../img/6_of_clubs.png','../img/6_of_clubs.png',
'../img/5_of_spades.png','../img/5_of_spades.png','../img/7_of_hearts.png','../img/7_of_hearts.png']

function start(){
    document.getElementById("selectLevel3").innerHTML="";

    let moves = 0;

    const maindiv = document.getElementById("boardgame");
    while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.lastChild);
    }
    
    const scorediv = document.getElementById("score");
    while (scorediv.firstChild) {
       scorediv.removeChild(scorediv.lastChild);
    }

    var row = document.createElement('div')
    ImagesCopy = JSON.parse(JSON.stringify( availableImages))

    for(let j=1 ; j<=24 ; j++){
        var div = document.createElement('div');
        div.setAttribute('class','imgdiv')
        var image = document.createElement('img')
        randomImg = ImagesCopy.splice(Math.floor(Math.random() * ImagesCopy.length),1);
        image.setAttribute('src',randomImg);
        image.setAttribute('class','hide')
        div.appendChild(image)
        row.appendChild(div);
        
        if(j%8 == 0){
            document.getElementById('boardgame').append(row)
            row = document.createElement('div')
        }

        div.addEventListener('click',function(event){
            moves++;
            let curr = event.currentTarget.children
            let currImg = curr[0]
            var currentlyshowing = document.getElementsByClassName('showimg');
            currentlyshowing = document.getElementsByClassName('showimg');
            let flag = 0;
            if(currentlyshowing.length >= 1){
                for(let i=0 ; i<currentlyshowing.length ; i++)
                {
                    if(currentlyshowing[i].src != currImg.src)
                        currentlyshowing[i].classList.remove('showimg');
                    else{
                        currentlyshowing[i].classList.add('match');
                        currImg.classList.add('match')
                        flag = 1;
                    }
                }
            }

            if(document.getElementsByClassName('match').length == 24){
                alert("You won !! ")
                let button = document.createElement('button');
                button.setAttribute('class' , 'btn btn-warning');
                let node = document.createTextNode("Number of Moves : " + moves);
                button.appendChild(node)
                document.getElementById('score').appendChild(button) 
            }

            if(flag == 0)
                currImg.classList.add('showimg');
        })
    }
}