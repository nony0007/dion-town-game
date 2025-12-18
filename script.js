const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const player = { x: 50, y: 50, size: 20 };
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.fillRect(player.x, player.y, player.size, player.size);
  requestAnimationFrame(draw);
}
document.addEventListener('keydown', (e) => {
  const speed = 5;
  if (e.key === 'ArrowUp') player.y -= speed;
  if (e.key === 'ArrowDown') player.y += speed;
  if (e.key === 'ArrowLeft') player.x -= speed;
  if (e.key === 'ArrowRight') player.x += speed;
  if (e.key === 't') trade();
  if (e.key === 'c') cheat();
  if (e.key === 'f') farm();
});
function trade() {
  alert('Trading functionality is not yet implemented.');
}
function cheat() {
  alert('Cheat mode activated! (placeholder)');
}
function farm() {
  alert('Farming... (placeholder)');
}
draw();
