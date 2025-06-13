function toggleMode() {
    const html = document.documentElement

    //ajustar os botões para que o mesmo ligue e mude o mode
    if (html.classList.contains("light")) {
        html.classList.remove("light")
    } else {
        html.classList.add("light")
    }

    // ou eu posso usar de maneira mais simples....
    // html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //deve substituir a imagem
    if (html.classList.contains("light")) {
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar-dark.png")
    }

    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de Julia Schmidt sorrindo timidamente com uma blusa preta, ambiente com boa iluminação")
    } else {
        img.setAttribute("alt","Foto de Julia Schmidt sorrindo com uma blusa preta, ambiente com boa iluminação")
    }
}