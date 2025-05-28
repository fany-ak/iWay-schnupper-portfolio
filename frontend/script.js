// const constantVariable = "NO CHANGE";
// var globalVariable = "globally available";
// let localVariable = "local";

// console.log(sagHallo(true));
// console.log(sagHallo(12));
// console.log(sagHallo("Tiffany"));

// types
// float = kommazahlen (1.5453543)
// number = ganze zahlen (1, 2, 150, etc.)
// string = test ("test text")
// boolean = (true or false)
// array = liste ([element1, element2, element3])
// object = {"name": "dylan", "age": 24, "married": false}

let kpopAlbums = [
  {
    name: "INeverDie",
    songs: [
      {
        name: "tomboy",
        lenght: 3,
      },
      {
        name: "mybag",
        lenght: 2,
      },
    ],
  },
  {
    name: "assemble25",
    songs: [
      {
        name: "alive",
        lenght: 3,
      },
    ],
  },
  {
    name: "girlsGeneration",
    songs: [
      {
        name: "gee",
        lenght: 1,
      },
      {
        name: "genie",
        lenght: 5,
      },
      {
        name: "hoot",
        lenght: 2,
      },
    ],
  },
];

function sagHallo(name) {
  return `Hallo, ${name}`;
  // wird nicht ausgeführt
  console.log("TEST TEST");
}

function myFunction() {
  document.body.classList.toggle("dark-mode");
}


function forLoopShowcase() {
  console.log(kpopAlbums.length);
  console.log(kpopAlbums[2]);

  let simpleList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let index = 0; index < simpleList.length; index++) {
    const element = simpleList[index];
    // console.log(element);
  }

  let listInList = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  ];

  for (let index = 0; index < listInList.length; index++) {
    const element = listInList[index];
    // console.log(element);
  }
}
forLoopShowcase();

function ifStatementShowcase(number) {
  // if (kpopAlbums[0].name == "INeverDie") {
  //   return "Album is INeverDie";
  // }

  if (number === 10) {
    return "number is 10";
  }
  // else if optional
  else if (number <= 5) {
    return "number is smaller than 5";
  }
  // else wenn nichts zutrifft auch optional
  else {
    return "number is neither 10 or 5";
  }
}

function whileShowcase() {
  // let firstAlbum = kpopAlbums[0];

  let counter = 1;
  // zählt solange der zähler kleiner als 5 ist
  while (counter < 5) {
    console.log(counter);
    // zählt dem zähler + 1 hinzu
    counter++;
    //   if (firstAlbum.name == "INeverDie") {
    //     for (let index = 0; index < firstAlbum.songs.length; index++) {
    //       const element = firstAlbum.songs[index];
    //       console.log(element.name);
    //     }
    //   }
  }
}
whileShowcase();
// console.log(ifStatementShowcase(7));
// console.log(ifStatementShowcase("10"));
// console.log(ifStatementShowcase(4));
// let valueOfShowcase = dylansShowcase();
// console.log(valueOfShowcase);

function berechne() {
  let zahl1 = parseFloat(document.getElementById("zahl1").value);
  let zahl2 = parseFloat(document.getElementById("zahl2").value);
  let operator = document.getElementById("operator").value;
  let result = 0;

  console.log(operator);
  if (operator == "+") {
    result = zahl1 + zahl2;
    console.log(result);
  } else if (operator == "-") {
    result = zahl1 - zahl2;
    console.log(result);
  } else if (operator == "/") {
    result = zahl1 / zahl2;
    console.log(result);
  } else if (operator == "*") {
    result = zahl1 * zahl2;
    console.log(result);
  }
  document.getElementById("ergebnis").textContent = `Ergebnis: ${result}`;
}

function changePage() {
  var pageSelector = document.getElementById("pageSelector");

  function updatePage() {
    var selectedPage = pageSelector.value;

    // Fetch the new page content
    fetch(selectedPage)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
      })
      .catch((error) => console.error("Error loading page:", error));
  }

  // Set initial page on load
  updatePage();

  // Update page on selection change
  pageSelector.addEventListener("change", updatePage);
}
window.onload = changePage;
