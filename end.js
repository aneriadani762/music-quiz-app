const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

//storing scores in local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


//top score is 5
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    
    const score = {
    score: mostRecentScore,
    name: username.value,
};

 //pushes score to array
highScores.push(score);

//sorting the score to get top 5
highScores.sort((a,b) => a.score - b.score);

//splice(adds/removes) after index 5
highScores.splice(5);

localStorage.setItem('highScores', JSON.stringify(highScores));

//console.log(JSON.parse(highScores));

//goes to index.html
window.location.assign('/');

alert("Your Score is Saved!");

};
