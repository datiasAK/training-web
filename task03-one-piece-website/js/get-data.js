const URL = "https://static.akurey.com/trainings/OnePieceInformation.json";
const IMG_DIR = "../assets/img/";

async function getData(url) {
  try {
  // CORS is disabled in backend
  const response = await fetch(url);
  data = await response.json();
  return data;

  } catch (error) {
    console.log("Error fetching data");
    console.log(error);
  }
}

function sortData(data) {
  data.islands.sort(sortByName);
  data.characters.sort(sortByName);
  data.mysticObjects.sort(sortByName);
}

function sortByName(a, b) {
  return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
}

function replaceContent(content, element, property) {
  let elements = document.querySelectorAll(element);
  for (let index = 0; index < elements.length; ++index) {
    elements[index][property] = content[index];
  }
}

function replaceCharacters(characterData) {
  //replace names
  replaceContent(characterData.map(character => character.name), ".character__name", "innerHTML");
  //replace images
  let characterSrc = characterData.map(character => character.img);
  addPrefix(characterSrc, IMG_DIR);

  replaceContent(characterSrc, ".character__img", "src");
}

function replaceIslands(islandData) {
  //replace names
  replaceContent(islandData.map(island => island.name), ".card-label__name--island", "innerHTML");
  //replace images
  let islandSrc = islandData.map(island => island.img);
  addPrefix(islandSrc, IMG_DIR);
  replaceContent(islandSrc, ".island__img", "src");
  //replace locations
  replaceContent(islandData.map(island => island.Location), ".card-label__description--island>span", "innerHTML");
}

function replaceObjects(objectData) {
  //replace names
  replaceContent(objectData.map(object => object.name), ".card-label__name--mist", "innerHTML");
  //replace images
  let objectSrc = objectData.map(object => object.img);
  addPrefix(objectSrc, IMG_DIR);
  replaceContent(objectSrc, ".mist-object__img", "src");
  //replace description
  replaceContent(objectData.map(object => object.description), ".card-label__description--mist", "innerHTML");
}

function addPrefix(arr, prefix) {
  for (let index = 0; index < arr.length; ++index) {
    arr[index] = prefix + arr[index];
  }
}

async function updateSections() {
  let onePieceData = await getData(URL);
  sortData(onePieceData);
  replaceCharacters(onePieceData.characters);
  replaceIslands(onePieceData.islands);
  replaceObjects(onePieceData.mysticObjects);
}

updateSections();
