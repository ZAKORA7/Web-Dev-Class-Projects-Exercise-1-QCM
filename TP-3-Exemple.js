const SubBtn = document.getElementById("submit-btn");
const Result = document.getElementById("result");

const QI = document.getElementsByName("QI");
const QII = document.getElementsByName("QII");
const QIII = document.getElementsByName("QIII");
const QIV = document.getElementsByName("QIV");

let RepenceCorrect = [0, 0, 2, 1]; // indices of correct answers

let RepenceChoisis = [];

function CherkRadio(radio) {
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            RepenceChoisis.push(i);
        }
    }
}

function CherkAllRadio(RI, RII, RIII, RIV) {
    RepenceChoisis = []; // reset before checking
    let RL = [RI, RII, RIII, RIV];
    for (let i = 0; i < RL.length; i++) {
        CherkRadio(RL[i]);
    }
}

function correct(A, B) {
    let Score = 0;

    if (A.length === B.length) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] === B[i]) {
                Score += 1;
            }
        }
        Result.innerText = "Votre score est: " + Score + "/" + A.length;
    } else {
        Result.innerText = "Répondez à toutes les questions avant de valider le formulaire.";
    }
}

function final(RI, RII, RIII, RIV, A, B) {
    CherkAllRadio(RI, RII, RIII, RIV);
    correct(A, B);
}

SubBtn.onclick = function (event) {
    event.preventDefault(); // prevent form reload
    final(QI, QII, QIII, QIV, RepenceChoisis, RepenceCorrect);
};
