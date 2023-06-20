// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function initialCats(){
    return cats;

}
function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);

}
function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
}
function appendCat(Broom){
    const newArray = [...cats, Broom];
    return newArray;
}
function prependCat(Arnold){
    const newArray = [Arnold, ...cats];
  return newArray;
}
function removeLastCat() {
    const newArray = cats.slice(0, -1);
    return newArray;
  }
  function removeFirstCat() {
    const newArray = cats.slice(1);
    return newArray;
  }
