var tableBody = document.getElementById("table-body");
var customTitles = [
    "The Introduction",
    "Danny and Wendy discuss moving to the hotel",
    "",
    "Job News and Bloody Hallways",
    "Doctor's Examination",
    "Conventional Doctor Visit",
    "Arrival at the Hotel",
    "Arrival at the Hotel",
    "Introduction to the Hotel and Staff",
    "Mrs. Torrance's Kitchen Tour",
    "Halloran Gives Tour of Storeroom",
    "Ice Cream Break",
    "Conversation with Halloran",
    "A Moment of Normalcy",
    "Exploring the Maze and Hotel",
    "Writer's Block and Relationship Tension",
    "Wendy Contacts the Rangers",
    "Danny's Encounter with Grady Girls",
    "Danny and Wendy's Interactions",
    "Father-Son Relationship",
    "Jack's Nightmare",
    "Jack's Descent into Alcoholism",
    "Revealing the Truth",
    "Room 237",
    "Investigating Danny's Claim",
    "Jack lashes out at Wendy and destroys objects in the kitchen",
    "The Return of Jack Torrance",
    "The Caretaker's Secret",
    "Jack and Grady's conversation",
    "Danny's Nightmare",
    "Halloran Makes Plans to Get to Overlook Hotel",
    "Halloran travels through a snowstorm",
    "Wendy Finds Jack's Typewriter",
    "",
    "JACK and WENDY's Conflict",
    "Wendy Escapes to the Snowcat",
    "Jack and Grady's Conversation",
    "Red Rum",
    "The Shining - Axe Attack",
    "The Overlook Hotel Massacre",
    "The Chase through the Maze",
    "The Chase",
    "Escape and Tragedy",
];
var customNumbers = [
    [7.5, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 2, 7, 8, 8, 6, 4],
    [2, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [4, 8, 7, 8, 8, 6, 5],
    [7, 3, 4, 8, 8, 6, 4],
    [7, 8, 7, 8, 6, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 3],
    [7, 8, 7, 8, 8, 6, 6],
    [7, 8, 7, 8, 8, 6, 9],
    [7, 8, 7, 8, 8, 6, 8],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 7],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 8],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 6],
    [2, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [4, 8, 7, 8, 8, 6, 5],
    [7, 3, 4, 8, 8, 6, 4],
    [7, 8, 7, 6, 8, 6, 4],
    [7, 8, 7, 8, 5, 6, 3],
    [2, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [4, 8, 7, 8, 8, 6, 5],
    [7, 3, 4, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
];

for (var i = 0; i < customNumbers.length; i++) {
    var row = document.createElement("tr");

    var countCell = document.createElement("th");
    countCell.setAttribute("scope", "row");
    countCell.textContent = i + 1;
    row.appendChild(countCell);

    var titleCell = document.createElement("td");
    titleCell.textContent = customTitles[i];
    row.appendChild(titleCell);

    var blankCell = document.createElement("td");
    blankCell.textContent = " ";
    row.appendChild(blankCell);

    var currentCustomNumbers = customNumbers[i];
    for (var j = 0; j < currentCustomNumbers.length; j++) {
        var valueCell = document.createElement("td");
        valueCell.textContent = currentCustomNumbers[j];
        
        // Set background color based on value
        var value = currentCustomNumbers[j];
        if (value >= 7) {
            valueCell.style.backgroundColor = "green";
        } else if (value >= 6 && value < 7) {
            valueCell.style.backgroundColor = "lightgreen";
        } else if (value >= 5 && value < 6) {
            valueCell.style.backgroundColor = "yellow";
        } else if (value >= 4 && value < 5) {
            valueCell.style.backgroundColor = "rgba(255, 255, 145, 0.984)";
        } else if (value >= 3 && value < 4) {
            valueCell.style.backgroundColor = "pink";
        } else {
            valueCell.style.backgroundColor = "red";
        }
        
        row.appendChild(valueCell);
    }

    tableBody.appendChild(row);
}
