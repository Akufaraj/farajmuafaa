document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.project-detail-block');
  if (!blocks.length) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'ecommerce';
  const targetBlock = document.getElementById('detail-' + id);

  blocks.forEach(block => block.classList.remove('active-detail'));

  if (targetBlock) {
    targetBlock.classList.add('active-detail');
    document.title = targetBlock.querySelector('h1').textContent + ' — Faraj Muafa';
  } else {
    // Fallback: show the first project if id is invalid/missing
    blocks[0].classList.add('active-detail');
  }
});