function checkAnswers() {
    let answers = [];
    answers.push(document.getElementById("france").value);
    answers.push(document.getElementById("spider").value);
    answers.push(document.getElementById("lake").value);

    if(answers[0] == "Parijs" && answers[1] == 8 && answers[2] == "IJsselmeer"){
        document.getElementById("answer").innerHTML = "Alle antwoorden zijn correct!";
    }else {
        document.getElementById("answer").innerHTML = "Niet alle antwoorden zijn correct.";
    }

}