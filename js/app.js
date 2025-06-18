// client/js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('greet-btn');
  const out = document.getElementById('greet-text');

  if (!btn || !out) {
    console.error('Missing #greet-btn or #greet-text');
    return;
  }

  btn.addEventListener('click', async () => {
    console.log('greet-btn clicked');
    const res = await fetch('data/db.json');
    console.log('fetch returned', res.status);
    const list = await res.json();
    console.log('parsed JSON', list);
    const text = list[Math.floor(Math.random() * list.length)];
    document.getElementById('greet-text').innerHTML = text;
  });
});
