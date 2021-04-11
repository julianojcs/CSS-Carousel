document.querySelector("#items").addEventListener("wheel", (e) => {
  if(e.deltaY > 0) {
    e.target.scrollBy(1,0)
  } else {
    e.target.scrollBy(-1,0)
  }
})

document.querySelector("#before").addEventListener("click", () => {
  document.querySelector("#items").scrollBy(-1,0)
})

document.querySelector("#after").addEventListener("click", () => {
  document.querySelector("#items").scrollBy(1,0)
})