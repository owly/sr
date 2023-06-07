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
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
    [7, 8, 7, 8, 8, 6, 4],
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
        row.appendChild(valueCell);
    }

    tableBody.appendChild(row);
}