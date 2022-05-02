const game = new Game();
game.initialize();

function Game() {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score span');
    const moles = document.querySelectorAll('.mole');
    const [failAudio, hitAudio] = document.querySelectorAll('audio');
    const playerName = document.querySelector('.play-form__input');
    const leaderBoardScore = document.querySelectorAll('.leaderboard-item__score');
    const leaderBoardName = document.querySelectorAll('.leaderboard-item__name');
    const minPeepTime = 1000;
    const maxPeepTime = 1000;
    let lastHole;
    let timeUp = true;
    let score = 0;

    this.initialize = () => {
        moles.forEach(mole => mole.addEventListener('click', this.bonk));
        holes.forEach(hole => hole.addEventListener('click', (e) => {
            if(!e.target.classList.contains('mole') && !timeUp) {
                failAudio.play();
            }
        }));
    }

    this.randomTime = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    this.randomHole = holes => {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) return this.randomHole(holes);
        lastHole = hole;
        return hole;
    }

    this.peep = () => {
        const time = this.randomTime(minPeepTime, maxPeepTime);
        const hole = this.randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) this.peep();
        }, time);
    }

    this.startGame = () => {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        this.peep();
        setTimeout(() => {
            timeUp = true;
            this.saveScore();
        }, 10000)
    }

    this.bonk = e => {
        if (!e.isTrusted) return;
        if(e.target.parentElement.classList.contains('up')) {
            score++;
            hitAudio.play();
            e.target.parentElement.classList.remove('up');
            scoreBoard.textContent = score;
        }
    }
    
    this.saveScore = () => {
        const score = scoreBoard.textContent;
        for (let i = 0; i < leaderBoardScore.length; i++) {
            if (parseInt(score) > parseInt(leaderBoardScore[i].textContent)) {
                for (let j = leaderBoardScore.length - 1; j > i; j--) {
                    leaderBoardScore[j].textContent = leaderBoardScore[j - 1].textContent;
                    leaderBoardName[j].textContent = leaderBoardName[j - 1].textContent;
                }
                leaderBoardScore[i].textContent = score;
                leaderBoardName[i].textContent = playerName.value;
                break;
            }
        }
    }
}
