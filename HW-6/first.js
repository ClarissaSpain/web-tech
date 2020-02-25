// 1. Page 1 - Gather first name, last name, age
// 2. Add all the information to JSON and include a **attempts** key with the value of zero.
// 3. Allow the player to play the memory matching game. @
// 4. Keep track of the number of attempts made to complete the game. @
// 5. When the player finishes, redirect to the final page. @
// 6. On the last page, display the player's name, age, and attempts.

//Author: Claire Spain
//Updated: 2/23/2020
//Purpose: Hw 6 for Web Tech: Arrays
//Referenced: Web Dev Simplified https://www.youtube.com/watch?v=28VfzEiJgy4&list=WL&index=6&t=368s
//----------------------------------------------------------------------------

function retrieveData(){
  var data = {};
  data.firstname = document.getElementById("firstName").value;
  data.lastname = document.getElementById("lastName").value;
  data.age = document.getElementById("age").value;
  localStorage.setItem("data", JSON.stringify(data));
}

function sendName(){
    document.getElementById("name").innerHTML = JSON.parse(data).firstname;
}
//Audio
class AudioController {
  constructor() {
    this.bgMusic = new Audio('Assets/Audio/Mii_music.mp3');
    this.flipSound = new Audio('Assets/Audio/flip.wav');
    this.matchSound = new Audio('Assets/Audio/match.wav');
    this.victorySound = new Audio('Assets/Audio/victory.wav');
    this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
    this.bgMusic.volume = 0.5;
    this.bgMusic.loop = true;
  }
  startMusic() {
    this.bgMusic.play();
  }
  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
  }
  flip() {
    this.flipSound.play();
  }
  match() {
    this.matchSound.play();
  }
  victory() {
    this.stopMusic();
    this.victorySound.play();
  }
  gameOver() {
    this.stopMusic();
    this.gameOverSound.play();
  }
}


//Creating the arrays so they match with the cards.
class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById('time-remaining')
    this.ticker = document.getElementById('flips');
    this.audioController = new AudioController();
  }

  startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;
    setTimeout(() => {
      this.audioController.startMusic();
      this.shuffleCards(this.cardsArray);
      this.countdown = this.startCountdown();
      this.busy = false;
    }, 500)
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0)
        this.gameOver();
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countdown);
    this.audioController.gameOver();
    document.getElementById('game-over-text').classList.add('visible');
  }
  victory() {
    clearInterval(this.countdown);
    this.audioController.victory();
    document.getElementById('victory-text').classList.add('visible');
  }
  hideCards() {
    this.cardsArray.forEach(card => {
      card.classList.remove('visible');
      card.classList.remove('matched');
    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add('visible');

      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else
      this.cardMismatch(card, this.cardToCheck);

    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    this.audioController.match();
    if (this.matchedCards.length === this.cardsArray.length)
      this.victory();
  }
  cardMismatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove('visible');
      card2.classList.remove('visible');
      this.busy = false;
    }, 1000);
  }
  // Fisher-Yates Shuffle Algorithm:
  shuffleCards(cardsArray) {
    for (let i = cardsArray.length - 1; i > 0; i--) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      cardsArray[randIndex].style.order = i;
      cardsArray[i].style.order = randIndex;
    }
  }
  getCardType(card) {
    return card.getElementsByClassName('card-value')[0].src;
  }
  canFlipCard(card) {
    return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('card'));
  let game = new MixOrMatch(100, cards);

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      game.startGame();
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      game.flipCard(card);
    });
  });

}
