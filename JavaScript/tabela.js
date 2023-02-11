const semestre1 = document.querySelector("#sem1");
const semestre2 = document.querySelector("#sem2");
const semestre3 = document.querySelector("#sem3");
const semestre4 = document.querySelector("#sem4");
const semestre5 = document.querySelector("#sem5");
const semestre6 = document.querySelector("#sem6");

const table = document.querySelector("#table");


const objetSemestre1 = [
    {disciplina: "Algoritimos e Lógica de Programação",
     ch: "117",
     docente: "Fabio Gomes de Andrade",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Cálculo Diferencial e Integral",
     ch: "100",
     docente: "Naiara Pereira Tavares",
     titulacao: "-",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Inglês Instrumental",
     ch: "33",
     docente: "Daniela Miguel de Souza",
     titulacao: "Mestrado",
     tsi: "3 anos",
     de: "DE",
    },
    {disciplina: "Linguagens de Marcação",
     ch: "67",
     docente: "Diogo Dantas Moreira",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Português Instrumental I",
     ch: "33",
     docente: "Francisco Igor Arraes Alves Rocha",
     titulacao: "Mestrado",
     tsi: "8 anos",
     de: "DE",
    },
    {disciplina: "Fundamentos da Computação",
     ch: "67",
     docente: "Andre Lira Rolim",
     titulacao: "Mestrado",
     tsi: "14 anos",
     de: "DE",
    }
]

const objetSemestre2 = [
    {disciplina: "Estrutura de Dados",
     ch: "100",
     docente: "Andre Lira Rolim",
     titulacao: "Mestrado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Introdução à Redes de Computadores",
     ch: "100",
     docente: "Francisco Daladier Marques Junior",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Linguagens de Script",
     ch: "67",
     docente: "Diogo Dantas Moreira",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Probabilidade e Estatística",
     ch: "83",
     docente: "Alisson de Oliveira Silva",
     titulacao: "Mestrado",
     tsi: "3 anos",
     de: "DE",
    },
    {disciplina: "Gerência de Configuração e Mudanças",
     ch: "33",
     docente: "Francisco Paulo de Freitas Neto",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Sociedade e Tecnologia da Informação",
     ch: "33",
     docente: "Ana Paula da Cruz Pereira de Moraes",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    }
]

const objetSemestre3 = [
    {disciplina: "Metodologia da Pesquisa Científica",
     ch: "33",
     docente: "Demetrio Gabriel Gamboa Marques",
     titulacao: "Mestrado",
     tsi: "8 anos",
     de: "DE",
    },
    {disciplina: "Programação Orientada a Objetos",
     ch: "100",
     docente: "Paulo Ewerton Gomes Fragoso",
     titulacao: "-",
     tsi: "4 anos",
     de: "DE",
    },
    {disciplina: "Sistemas Operacionais",
     ch: "83",
     docente: "Afonso Serafim Jacinto",
     titulacao: "Espec.",
     tsi: "3 anos",
     de: "DE",
    },
    {disciplina: "Bancos de Dados I",
     ch: "117",
     docente: "Fabio Gomes de Andrade",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Processos de Software",
     ch: "83",
     docente: "Francisco Paulo de Freitas Neto",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    }
]

const objetSemestre4 = [
    {disciplina: "Análise e Projeto de Sistema",
     ch: "83",
     docente: "Asheley Emmy Lacerda Alves",
     titulacao: "-",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Banco de Dados II",
     ch: "83",
     docente: "Francisco Paulo de Freitas Neto",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Laboratório de Redes de Computadores",
     ch: "50",
     docente: "Francisco Daladier Marques Junior",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Testes de Software",
     ch: "50",
     docente: "Diogo Dantas Moreira",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Programação Para Web I",
     ch: "83",
     docente: "Paulo Ewerton Gomes Fragoso",
     titulacao: "-",
     tsi: "4 anos",
     de: "DE",
    },
    {disciplina: "Gerência de Projetos de Software",
     ch: "67",
     docente: "Eva Maria Campos Pereira",
     titulacao: "Doutorado",
     tsi: "11 anos",
     de: "DE",
    }
]

const objetSemestre5 = [
    {disciplina: "Programação Para Dispositivos Móveis",
     ch: "67",
     docente: "Fabio Abrantes Diniz",
     titulacao: "-",
     tsi: "6 anos",
     de: "DE",
    },
    {disciplina: "Segurança de Dados",
     ch: "83",
     docente: "Francisco Daladier Marques Junior",
     titulacao: "Doutorado",
     tsi: "14 anos",
     de: "DE",
    },
    {disciplina: "Interação Humano-Computador",
     ch: "67",
     docente: "Asheley Emmy Lacerda Alves",
     titulacao: "-",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Padrões de Projeto de Software",
     ch: "83",
     docente: "Diogo Dantas Moreira",
     titulacao: "Mestrado",
     tsi: "9 anos",
     de: "DE",
    },
    {disciplina: "Desenvolvimento de Aplicações Corporativas",
     ch: "100",
     docente: "Asheley Emmy Lacerda Alves",
     titulacao: "-",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Trabalho de Conclusão de Curso I",
     ch: "33",
     docente: "Fabio Abrantes Diniz",
     titulacao: "-",
     tsi: "6 anos",
     de: "DE",
    }
]

const objetSemestre6 = [
    {disciplina: "Relações Humanas no Trabalho",
     ch: "67",
     docente: "Mariana Ferreira Pessoa",
     titulacao: "Mestrado",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Programação Para Web II",
     ch: "83",
     docente: "Paulo Ewerton Gomes Fragoso",
     titulacao: "-",
     tsi: "4 anos",
     de: "DE",
    },
    {disciplina: "Sistemas Distribuídos",
     ch: "83",
     docente: "Afonso Serafim Jacinto",
     titulacao: "Espec.",
     tsi: "3 anos",
     de: "DE",
    },
    {disciplina: "Gestão da Tecnologia da Informação e Comunicação",
     ch: "83",
     docente: "Fabio Abrantes Diniz",
     titulacao: "-",
     tsi: "6 anos",
     de: "DE",
    },
    {disciplina: "Empreendedorismo",
     ch: "67",
     docente: "Mariana Ferreira Pessoa",
     titulacao: "Mestrado",
     tsi: "1 ano",
     de: "TI",
    },
    {disciplina: "Trabalho de Conclusão de Curso II",
     ch: "67",
     docente: "Fabio Abrantes Diniz",
     titulacao: "-",
     tsi: "6 anos",
     de: "DE",
    },
    {disciplina: "Libras 1",
    ch: "50",
    docente: "Bruno Veloso de Farias Ribeiro",
    titulacao: "Espec.",
    tsi: "3 anos",
    de: "TP",
   }
]

function cabecalhoTable (){
    let tr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");
    let th6 = document.createElement("th");

    th5.classList.add("none");
    th6.classList.add("none");

    th1.textContent = "Disciplinas";
    th2.textContent = "CH";
    th3.textContent = "Docente";
    th4.textContent = "Titulação";
    th5.textContent = "TSI";
    th6.textContent = "RT"

    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    table.appendChild(tr);
}

function tableElements (objeto){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td5.classList.add("none");
    td6.classList.add("none");

    td1.textContent = objeto.disciplina;
    td2.textContent = objeto.ch;
    td3.textContent = objeto.docente;
    td4.textContent = objeto.titulacao;
    td5.textContent = objeto.tsi;
    td6.textContent = objeto.de;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
}

window.addEventListener("load", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre1) {
        tableElements(objetSemestre1[k]);
    }
});

semestre1.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre1) {
        tableElements(objetSemestre1[k]);
    }
});

semestre2.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre2) {
        tableElements(objetSemestre2[k]);
    }
});

semestre3.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre3) {
        tableElements(objetSemestre3[k]);
    }
});

semestre4.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre4) {
        tableElements(objetSemestre4[k]);
    }
});

semestre5.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre5) {
        tableElements(objetSemestre5[k]);
    }
});

semestre6.addEventListener("click", ()=>{
    table.textContent = "";
    cabecalhoTable();
    for (const k in objetSemestre6) {
        tableElements(objetSemestre6[k]);
    }
});