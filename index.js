let recipes = { italian: "pasta"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  const n = recipes
  n[key] = value
  return n
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign ({}, recipes)
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}

