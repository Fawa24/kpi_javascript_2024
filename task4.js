document.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', event => {
      alert(`Hello, ${event.target.textContent}`);
  });
});
