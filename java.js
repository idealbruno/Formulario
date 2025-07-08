    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("meuFormulario");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const imagemPerfil = document.getElementById("imagemPerfil").files[0];
        const nomeCompleto = document.getElementById("nomeCompleto").value;
        const idade = document.getElementById("idade").value;
        const rua = document.getElementById("rua").value;
        const bairro = document.getElementById("bairro").value;
        const estado = document.getElementById("estado").value;
        const biografia = document.getElementById("biografia").value;

        console.log("Imagem de Perfil:",imagemPerfil?.name || "Nenhuma imagem");
        console.log("Nome Completo:", nomeCompleto);
        console.log("Idade:", idade);
        console.log("Rua:", rua);
        console.log("Bairro:", bairro);
        console.log("Estado:", estado);
        console.log("Biografia:", biografia);
      });
    });
  