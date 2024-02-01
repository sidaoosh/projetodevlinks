function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag de imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light "sid2.png"
    img.setAttribute("src", "./assets/sid2.png")
  }
  //se tiver sem light mode, manter imagem "sid.png"
  else img.setAttribute("src", "./assets/sid.png")
}
