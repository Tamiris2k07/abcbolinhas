

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");


menuBtn.addEventListener("click", function () {

    menu.classList.toggle("open");

});




const links = document.querySelectorAll("#menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("open");

    });

});




document.getElementById("ano").textContent =
    new Date().getFullYear();




const modal =
    document.getElementById("modal");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalTexto =
    document.getElementById("modalTexto");


const descricoes = {

    "Windows Server":
        "Conhecimentos relacionados a servidores, infraestrutura e administração de ambientes Windows.",

    "Linux":
        "Conhecimentos relacionados a sistemas Linux e administração de ambientes.",

    "Redes":
        "Estudos relacionados a conectividade, infraestrutura e fundamentos de redes.",

    "Oracle SQL":
        "Conhecimentos de banco de dados e utilização de consultas SQL.",

    "GLPI":
        "Ferramenta utilizada para suporte técnico, chamados e gerenciamento de ativos.",

    "MV / SoulMV":
        "Contato com sistemas de gestão e atividades relacionadas ao suporte.",

    "Hardware":
        "Conhecimentos relacionados a componentes, manutenção e diagnóstico de computadores.",

    "Suporte Técnico":
        "Atendimento, identificação de problemas e busca de soluções técnicas."

};




function mostrarSkill(skill) {

    modalTitulo.textContent = skill;

    modalTexto.textContent =
        descricoes[skill];

    modal.classList.add("show");

}



function fecharModal() {

    modal.classList.remove("show");

}


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        fecharModal();

    }

});



document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});