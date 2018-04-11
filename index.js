const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}

function appendKitten(name) {
  var n_arr = [...kittens, name];
  return n_arr
}

function prependKitten(name) {
  var n_arr = [name, ...kittens];
  return n_arr
}

function removeLastKitten() {
  var n_kittens = kittens.slice(0,2)
  return n_kittens
}

function removeFirstKitten() {
  var n_kittens = kittens.slice(1,2)
  return n_kittens
}