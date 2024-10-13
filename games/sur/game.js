function Game()
{
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
 
// 玩家的位置
let playerX = Math.floor(Math.random() * canvas.width);
let playerY = Math.floor(Math.random() * canvas.height);
 
// 敌人的位置（随机生成）
let enemyX = Math.floor(Math.random() * canvas.width);
let enemyY = Math.floor(Math.random() * canvas.height);
 
// 游戏逻辑
function drawGame() {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 
    // 绘制玩家
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(playerX, playerY, 10, 10);
 
    // 绘制敌人
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(enemyX, enemyY, 10, 10);
 
    // 检查玩家是否被敌人打中
    if (playerX < enemyX + 10 && playerX + 10 > enemyX && playerY < enemyY + 10 && playerY + 10 > enemyY) {
        alert('You win! Please reload and play again!');
        Game();
    }
}

// 控制玩家移动
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
        case 'ArrowLeft':
            playerX -= 5;
 enemyX+= Math.floor(Math.random() * 5) - 15;
 enemyY+= Math.floor(Math.random() * 5) - 15;
            break;
        case 'd':
        case 'ArrowRight':
            playerX += 5;
 enemyX+= Math.floor(Math.random() * 5) - 15;
 enemyY+= Math.floor(Math.random() * 5) - 15;
            break;
        case 'w':
        case 'ArrowUp':
            playerY -= 5;
 enemyX-= Math.floor(Math.random() * 15) - 15;
 enemyY-= Math.floor(Math.random() * 15) - 15;
            break;
        case 's':
        case 'ArrowDown':
            playerY += 5;
 enemyX-= Math.floor(Math.random() * 15) - 15;
 enemyY-= Math.floor(Math.random() * 15) - 15;
            break;
        // 添加其他按键控制（如射击等）
    }
});
// 游戏循环
setInterval(drawGame, 10);
}
Game();