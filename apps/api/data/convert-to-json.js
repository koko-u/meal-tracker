const fs = require('fs/promises')
const recipes = require('./fake-data')

const FILENAME = 'recipes.json'

fs.writeFile(FILENAME, JSON.stringify(recipes, null, 2))
  .then(() => console.log('Done.'))
  .catch((err) => console.error(err))
