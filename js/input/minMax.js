﻿$(document).ready(function () {

    //Tratamento de todos os inputs do tipo MinMax 
    $(".minMaxInput").each(function () {
        trazerMinMax(this)
    });
});

function trazerMinMax(objeto) {

    var valores;

    if ($(objeto).hasClass("mmHosti")) {
        valores = ["Inofensivos", "Pacíficos", "Neutros", "Ameaçadores", "Agressivos"];
    }
    else if ($(objeto).hasClass("mmAltura")) {
        valores = ["Nanica", "Baixa", "Média", "Alta", "Gigante"];
    }
    else if ($(objeto).hasClass("mmCorpo")) {
        valores = ["Raquítico", "Magro", "Normal", "Gordo", "Obeso"];
    }
    else if ($(objeto).hasClass("mmDesiSocial")) {
        valores = ["Muito Desigual", "Pouco Desigual", "Sem Desigualdades"]; //Bugado na aba de Mundo->Economia
    }

    //Cria o MinMax no objeto atual, não modificar
    $(objeto).ionRangeSlider({
        from: 2,
        values: valores,
        type: 'single',
        hasGrid: false
    });
}