const fs = require('fs')

let metadata = []

function genMetadata(name, imgURL) {
  return {
    name: name,
    image: imgURL,
    attributes: [
      {
        trait_type: 'Bbaguette',
        value: 'Bbaguette',
      },
    ],
  }
}

for (let i = 0; i < 1000; i++) {
  let name = `Bbaguette #${i + 1}`
  let imgURL = `https://storage.googleapis.com/fastcampus-geth/unreveal-img/unreaveal.png`

  let data = genMetadata(name, imgURL)
  metadata.push(data)
}

for (let i = 0; i < metadata.length; i++) {
  fs.writeFileSync(`./unreveal/${i + 1}`, JSON.stringify(metadata[i]), (err) => {
    console.log(err)
  })
}
