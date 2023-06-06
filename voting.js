var votes = [0, 0, 0, 0, 0];

function vote(option) {
    votes[option]++;
    displayResults();
}

function displayResults() {
    var votingResults = document.getElementById("votingResults");
    votingResults.innerHTML = "";

    for (var i = 0; i < votes.length; i++) {
        var optionCount = votes[i];
        var optionEmoji = getEmoji(i);
        var optionResult = document.createElement("div");
        optionResult.textContent = optionEmoji;
        votingResults.appendChild(optionResult);

        var countElement = document.createElement("span");
        countElement.textContent = optionCount;
        optionResult.appendChild(countElement);
    }
}

function getEmoji(option) {
    var emojis = ["😄", "😊", "😐", "😕", "😢"];
    if (option >= 0 && option < emojis.length) {
        return emojis[option];
    } else {
        return "";
    }
}

displayResults();