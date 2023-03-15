const fs = require('fs')

const propertyData = require('./json/property.json')

let metadata = []

function generateMetadata(name, img, background, bread, face, eyebrow, nose, effect, item) {
  return {
    name: name,
    image: img,
    attributes: [
      {
        trait_type: 'background',
        value: background,
      },
      {
        trait_type: 'bread',
        value: bread,
      },
      {
        trait_type: 'face',
        value: face,
      },
      {
        trait_type: 'eyebrow',
        value: eyebrow,
      },
      {
        trait_type: 'nose',
        value: nose,
      },
      {
        trait_type: 'effect',
        value: effect,
      },
      {
        trait_type: 'item',
        value: item,
      },
    ],
  }
}

for (let i = 0; i < propertyData.length; i++) {
  const name = `Bbaguette #${i + 1}`
  const img = `https://storage.googleapis.com/fastcampus-geth/img/${i + 1}.png`

  const background = propertyData[i].background
  const bread = propertyData[i].bread
  const face = propertyData[i].face
  const eyebrow = propertyData[i].eyebrow
  const nose = propertyData[i].nose
  const effect = propertyData[i].effect
  const item = propertyData[i].item

  const data = generateMetadata(name, img, background, bread, face, eyebrow, nose, effect, item)
  metadata.push(data)
}

const saveData = (arr) => {
  const finished = (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Data saved successfully!')
    }
  }
  const jsonData = JSON.stringify(arr, null, 2)
  fs.writeFile('metadata/metadata.json', jsonData, finished)
}

saveData(metadata)