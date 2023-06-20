

const movies = [
    ["a few good men", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 4.2],
    ["A Quiet Place", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["American beauty", 8.1, 7.8, 6.9, 6, 8.3, 7.4, 2.2],
    ["American hustle", 8.1, 7.8, 6.9, 5.9, 8.3, 7.4, 8.2],
    ["Arsenic and old lace", 8.1, 7.8, .9, 7.9, 8.3, 7.4, 8.2],
    ["Avatar", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Birdman", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Black mirror 304", 8.1, 3.2, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Black panther", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Blade Runner", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Bonnie and Clyde", 8.1, 4.2, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Boyz in the hood", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Casablanca", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["citizen Kane", 8.1, 7.8, 6.9, 9.3, 8.3, 7.4, 8.2],
    ["Clerks", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Dead pool", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["die hard", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Die hard", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Donnie Darko", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Dr. Jekyll and Mr Hyde", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Dr. Strangelove", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Easy A", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Erin Brokovich", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Everything everywhere all at once", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["face off", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["fight Club", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["get out", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Get Out", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["glass Onion Knives Out", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Good Will Hunting", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["groundhog day", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["heathers", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Her", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Inception", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Knives Out", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Labyrinth", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["legally blonde", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Manhattan murder mystery", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Midnight cowboy", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Mr Smith goes to Washington", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Pan's Labyrinth", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Rambo", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Rear Window", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["scream", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["sense 8", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["severance (TV)", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["some like it hot", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Sorry to bother you", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Spy kids", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["T2", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the 5th element", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["The apartment", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the black list (TV)", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the boys (TV)", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the dark knight rises", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the pursuit of happyness", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the Shining", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["the sweet hereafter", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["The Usual Suspects", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["There's something about Mary", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Titanic", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["True Blood", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],
    ["Vice", 8.1, 7.8, 6.9, 7.9, 8.3, 7.4, 8.2],

];


const tableBody = document.getElementById("tableBody");

movies.map(movie => {
  const row = document.createElement("tr");

  // Create the link element
  const link = document.createElement("a");
  link.href = "#" + movie[0]; // Set the link URL

  const cell = document.createElement("td");
  cell.appendChild(link);

  // Set the link text to the movie title
  link.textContent = movie[0];

  // Append the link cell to the row
  row.appendChild(cell);

  // Iterate over the rest of the movie data
  for (let index = 1; index < movie.length; index++) {
    const data = movie[index];
    const cell = document.createElement("td");
    cell.textContent = data;
    if (index === 1) {
      cell.style.fontWeight = "bold";
    }
    applyBackgroundColor(cell, data);
    row.appendChild(cell);
  }

  // Append the row to the table body
  tableBody.appendChild(row);
});

function applyBackgroundColor(cell, value) {
  if (value >= 8) {
    cell.style.backgroundColor = "green";
  } else if (value >= 7 && value < 8) {
    cell.style.backgroundColor = "lightgreen";
  } else if (value >= 6 && value < 7) {
    cell.style.backgroundColor = "yellow";
  } else if (value >= 5 && value < 6) {
    cell.style.backgroundColor = "rgba(255, 255, 145, 0.984)";
  } else if (value >= 4 && value < 5) {
    cell.style.backgroundColor = "pink";
  } else if (value < 4) {
    cell.style.backgroundColor = "red";
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}