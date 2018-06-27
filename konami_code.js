const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (event.key in codes) {
      alert
      
    }
  })
}
