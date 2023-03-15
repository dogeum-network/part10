const fs = require('fs')

const data = fs.readFileSync('./metadata/metadata.json', 'utf-8')
const jsonData = JSON.parse(data)

for (let i = 0; i < jsonData.length; i++) {
  fs.writeFileSync(`./metadatas/${i + 1}`, JSON.stringify(jsonData[i]), (err) => {
    console.log(err)
  })
}
