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
  let index = 0;
  
  document.addEventListener('keydown', (event) => {
    const press = event.key;
    if (event.key in codes) {
      index++;

    }
  })
}
