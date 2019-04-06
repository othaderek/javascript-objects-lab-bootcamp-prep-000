let recipes = { italian: "pasta"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  
}

function deleteFromObjectByKey(recipes, key) {
  delete recipes.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  
}

