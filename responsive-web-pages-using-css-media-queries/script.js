const updateLabel = () => {
  const width = window.innerWidth;
  let label = '';

  if (width <= 480) {
    label = 'Mobile (≤ 480px) — Stacked Layout';
  } else if (width <= 768) {
    label = 'Tablet (≤ 768px) — Stacked Layout';
  } else if (width <= 1024) {
    label = 'Small Desktop (≤ 1024px) — Side by Side';
  } else {
    label = 'Large Desktop (> 1024px) — Side by Side';
  }

  let indicator = document.getElementById('screen-indicator');

  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'screen-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 16px;
      right: 16px;
      background-color: #1a202c;
      color: #a3e635;
      font-family: monospace;
      font-size: 13px;
      padding: 8px 14px;
      border-radius: 8px;
      z-index: 999;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(indicator);
  }

  indicator.textContent = `${width}px — ${label}`;
};

updateLabel();
window.addEventListener('resize', updateLabel);
