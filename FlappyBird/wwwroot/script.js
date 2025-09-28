
const GAME_SETTINGS = {
    GRAVITY: 0.09,
    BIRD_JUMP_VELOCITY: -3.7,
    PIPE_SPEED: 1.2,
    PIPE_GAP: 175, 
    PIPE_GENERATION_INTERVAL: 120
};

// --- DEĞİŞKENLER VE SABİTLER ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const bgImage = new Image();
bgImage.src = 'images/background.png';
const birdImage = new Image();
birdImage.src = 'images/bird.png';
const pipeImage = new Image();
pipeImage.src = 'images/pipe.png';


let gameState = 'start';

let bird = { x: 50, y: 150, width: 34, height: 24, gravity: GAME_SETTINGS.GRAVITY, velocity: 0 };
let pipes = [];
let frame = 0;
let score = 0;

// --- ANA FONKSİYONLAR ---

function update() {
    if (gameState !== 'playing') return;
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;
    if (frame % GAME_SETTINGS.PIPE_GENERATION_INTERVAL === 0) {
        let pipeY = Math.floor(Math.random() * (canvas.height - GAME_SETTINGS.PIPE_GAP - 150)) + 75;
        pipes.push({ x: canvas.width, y: pipeY, width: 50, height: canvas.height, passed: false });
    }
    pipes.forEach(pipe => {
        pipe.x -= GAME_SETTINGS.PIPE_SPEED;
        if (pipe.x + pipe.width < bird.x && !pipe.passed) {
            score++;
            pipe.passed = true;
        }
    });
    pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);
    frame++;
}

function draw() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
    pipes.forEach(pipe => {
        ctx.drawImage(pipeImage, pipe.x, pipe.y + GAME_SETTINGS.PIPE_GAP, pipe.width, pipe.height);
        ctx.save();
        ctx.translate(pipe.x + pipe.width, pipe.y);
        ctx.scale(-1, 1);
        ctx.drawImage(pipeImage, 0, 0, pipe.width, -pipe.height);
        ctx.restore();
    });
    drawScore();
    if (gameState === 'start') {
        drawMessage("Başlamak için", "Boşluk Tuşuna Bas");
    }
    if (gameState === 'gameOver') {
        
        drawMessage("Oyun Bitti!", "Tekrar denemek için tıkla.");
    }
}

function checkCollisions() {
    if (gameState !== 'playing') return;
    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        gameState = 'gameOver';
    }
    pipes.forEach(pipe => {
        if (bird.x < pipe.x + pipe.width && bird.x + bird.width > pipe.x &&
            (bird.y < pipe.y || bird.y + bird.height > pipe.y + GAME_SETTINGS.PIPE_GAP)) {
            gameState = 'gameOver';
        }
    });
}

function restartGame() {
    bird.y = 150;
    bird.velocity = 0;
    pipes = [];
    score = 0;
    frame = 0;
    gameState = 'playing';
}


function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.strokeText('Skor: ' + score, 10, 25);
    ctx.fillText('Skor: ' + score, 10, 25);
}

function drawMessage(mainText, subText) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, canvas.height / 2 - 60, canvas.width, 120);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = '26px Arial';
    ctx.fillText(mainText, canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = '18px Arial';
    ctx.fillText(subText, canvas.width / 2, canvas.height / 2 + 20);
    ctx.textAlign = 'left';
}

function gameLoop() {
    update();
    draw();
    checkCollisions();
    requestAnimationFrame(gameLoop);
}


document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        if (gameState === 'start') {
            gameState = 'playing';
        }
        if (gameState === 'playing') {
            bird.velocity = GAME_SETTINGS.BIRD_JUMP_VELOCITY;
        }
    }
});

canvas.addEventListener('click', function () {
    if (gameState === 'gameOver') {
        restartGame();
    }
});


gameLoop();