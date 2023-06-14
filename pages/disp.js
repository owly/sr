var tableBody = document.getElementById("table-body");
var customTitles = [
    "Church Service Interrupted",
    "Interruption at Church",
    "Disruption in Church",
    "The Hospital Visit",
    "Dr. Jekyll's Confrontation with Dr. Heath",
    "Jekyll's Ethical Dilemma",
    "Jekyll's Experiments",
    "Jekyll Defends His Research",
    "Dr. Jekyll Defends His Research",
    "Jekyll defends unorthodox research on the soul",
    "Sir Charles",
    "Jekyll and Beatrix Share Their Melody",
    "Jekyll's Dilemma",
    "The Encounter",
    "Girl in Distress",
    "Jekyll's Flirtation and Advice",
    "Dr. Jekyll's Temptation",
    "Jekyll's Experiments",
    "Jeckyll's Descent",
    "Jekyll's Experimentation",
    "Jekyll's Transformation",
    "Jeckyll and Beatrix's Encounter",
    "The Engagement",
    "Devastating News From Beatrix",
    "Jekyll transforms into Mr. Hyde and seeks out Ivy Pearson",
    "Hyde's First Night Out",
    "Hyde Meets Ivy",
    "Hyde starts a fight at the Palace of Varieties",
    "Hyde Offers Ivy a New Life",
    "Hyde Confronts Ivy",
    "Mr. Hyde Confronts Ivy and Marcia",
    "Hyde Continues to Manipulate Ivy",
    "Hyde and Ivy",
    "Hyde's Manipulation of Ivy",
    "Ivy's Dilemma",
    "Proposal and Announcement",
    "Jekyll Discovers Ivy's Plight",
    "Ivy Seeks Help",
    "Jekyll's Transformation",
    "Hyde Attacks Ivy",
    "Hyde's Rampage",
    "Hyde's Robbery and Family Troubles",
    "The Package",
    "Hyde and Lanyon's Showdown",
    "Jekyll's Confession",
    "Paradise Lost",
    "The Escape of Hyde",
    "Hyde flees to Jekyll's laboratory",
    "The Fall of Dr. Jekyll",
    
];
var customNumbers = [
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 9],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 2],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 1],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 0],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 4],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 5],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 8],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 5],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 4],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 4],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 11],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 10],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 0, 9, 8, 9, 7, 7, 7, 8, 0],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 7],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 1, 9, 8, 9, 7, 7, 7, 8, 8],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 3],
    [9, 8, 2, 8, 9, 7, 7, 7, 8, 2],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 4],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 5],
    [9, 8, 9, 3, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 4, 3, 7, 6, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 5, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 5, 7, 8, 6],
    [3, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 1, 9, 0, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 1, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 11, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 12, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 3, 4, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    [9, 8, 9, 8, 9, 7, 7, 7, 8, 6],
    
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
      var value = currentCustomNumbers[j];
      var valueCell = document.createElement("td");
      valueCell.textContent = value;
      
      if (value >= 9) {
        valueCell.style.backgroundColor = "green";
      } else if (value >= 7 && value <= 8) {
        valueCell.style.backgroundColor = "lightgreen";
      } else if (value >= 5 && value <= 6) {
        valueCell.style.backgroundColor = "yellow";
      } else if (value == 4) {
        valueCell.style.backgroundColor = "rgba(255, 255, 145, 0.984)";
      } else if (value == 3) {
        valueCell.style.backgroundColor = "pink";
      } else {
        valueCell.style.backgroundColor = "red";
      }
      
      row.appendChild(valueCell);
    }
  
    tableBody.appendChild(row);
  }