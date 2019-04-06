let recipes = { italian: "pasta"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign ({}, recipes)
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}

