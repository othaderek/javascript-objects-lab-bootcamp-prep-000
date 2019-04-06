let recipes = { italian: "pasta"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign ({}, recipes)
  delete newObj.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}

