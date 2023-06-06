document.addEventListener("DOMContentLoaded", function () {
  const c = (el) => document.querySelector(el);
  const cs = (el) => document.querySelectorAll(el);

  //Listagem dos modelos
  modeloFilme.map((item, index) => {
    let modeloItem = c(".cards .card").cloneNode(true);

    modeloItem.querySelector(".icon img").src = item.img;
    modeloItem.querySelector(".content h3").innerHTML = item.name;
    modeloItem.querySelector(".content p").innerHTML = item.sinopse;
    modeloItem.querySelector(".card a").href = item.link;

    c(".exibir-filmes").append(modeloItem);

    var button = modeloItem.querySelector("#botao_ler"); // Alteração aqui

    button.addEventListener("click", function () {
      var card = this.parentNode; // Alteração aqui
      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        return (button.textContent = "Ler menos");
      }

      button.textContent = "Ler mais";
    });
  });
});
