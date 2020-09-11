var result = Math.floor(Math.random()*100);
console.log(result);
var guess = document.getElementById('btn');
var testNum = 5;
var pastGuess = ''
function reload (){
    
    location.reload();
}
guess.addEventListener('click', function(){
    var guessNum = document.getElementById('input').value;
    console.log(guessNum);
    if(testNum>=1){
        if(guessNum < result){
            testNum--;
            document.getElementById('title').innerHTML= 
            'Sorry your guess is too low. ' + 'You have ' + testNum + ' turns left';
            document.getElementById('title').style.backgroundColor = 'red';
        }
        else if(guessNum > result){
            testNum--;
            document.getElementById('title').innerHTML= 
            'Sorry your guess is too high ' + 'You have ' + testNum + ' turns left';
            document.getElementById('title').style.backgroundColor = 'red';
        }
        else if (guessNum == result){
            testNum--;
            document.getElementById('title').innerHTML= 
            'Congratulations!! You guessed correctly';
            document.getElementById('title').style.backgroundColor = 'green';
            document.getElementById('btn').disabled = true;
            var i = 5;
            setInterval(() => {
                document.getElementById('count').innerHTML = 'Restart in '+  i  + ' seconds...';
                i-=1;
            }, 1000);
            
            setTimeout(reload, 5000);
            
            
        }
    }
    else{
        document.getElementById('description').innerHTML= 'You lose :(((';
        document.getElementById('btn').disabled = true;
        var i = 5;
        setInterval(() => {
            document.getElementById('count').innerHTML = 'Restart in '+  i  + ' seconds...';
            i-=1;
        }, 1000);
        setTimeout(reload, 5000);
      
        
    }
    pastGuess = pastGuess + guessNum + '<br>';
    document.getElementById('past').innerHTML = pastGuess;
});
