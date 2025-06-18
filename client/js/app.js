// client/js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('greet-btn');
  const out = document.getElementById('greet-text');

  if (!btn || !out) {
    console.error('Couldnt find #greet-btn or #greet-text in the DOM');
    return;
  }

  btn.addEventListener('click', async () => {
    out.textContent = 'Loading…';
    try {
      const res = await fetch('/api/greeting');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const { text } = await res.json(); 
      out.textContent = text;
    } catch (err) {
      console.error('Fetch /api/greeting failed:', err);
      out.textContent = '⚠ Could not load greeting.';
    }
  });
});
