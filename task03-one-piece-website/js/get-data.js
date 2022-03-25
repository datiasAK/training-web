"use strict";

const URL = "https://static.akurey.com/trainings/OnePieceInformation.json";
const IMG_DIR = "../assets/img/";

function getData(url) {
  return fetch(url).then(response => response.json()).catch(error => {
    console.log("Error fetching data: " + error);
  });
}

function replaceContent(content, element, property) {
  let elements = document.querySelectorAll(element);
  for (let index = 0; index < elements.length; ++index) {
    elements[index][property] = content[index];
  }
}

function updateSections() {
  getData(URL).then(function(onePieceData) {
    sortData(onePieceData);
    updateImgPaths(onePieceData);
    // character section
    updateSection(onePieceData.characters, ["name", "img"], [".character__name", ".character__img"], ["innerHTML", "src"]);

    // islands section
    updateSection(onePieceData.islands, ["name", "img", "Location"], 
                                        [".card-label__name--island", ".island__img", ".card-label__description--island>span"],
                                        ["innerHTML", "src", "innerHTML"]);

    // mystic objects section
    updateSection(onePieceData.mysticObjects, ["name", "img", "description"],
                                              [".card-label__name--mist", ".mist-object__img", ".card-label__description--mist"],
                                              ["innerHTML", "src", "innerHTML"]);
  });
}

/**
 * Updates the specified elements with the given data. Values, selectors and properties must have the same index in 
 * their respective arrays to address the same element. 
 * 
 * @param {object[]} data list of objects with the data to be applied
 * @param {string[]} values list of values to be taken from each object in data e.g data[value[0]]
 * @param {string[]} selectors list of css selectors to get the html elements from the DOM
 * @param {string[]} properties list of properties of the html element to be modified
 */
function updateSection(data, values, selectors, properties) {
  for (let index = 0; index < values.length; ++index) {
    replaceContent(data.map(item => item[values[index]]), selectors[index], properties[index]);
  }
}

function sortData(data) {
  data.islands.sort(sortByName);
  data.characters.sort(sortByName);
  data.mysticObjects.sort(sortByName);
}

function updateImgPaths(data) {
  Object.keys(data).forEach(function(property) { 
    if (typeof data[property] == "object" && property !== null) { 
        updateImgPaths(data[property]);
    }
    else if (property == "img") {
        data[property] = IMG_DIR + data[property];
    }
  })
}

function sortByName(a, b) {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
}

updateSections();
