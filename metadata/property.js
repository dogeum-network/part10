const fs = require('fs')

function generateRandomValue(val) {
  return Math.floor(Math.random() * val) + 1
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
  fs.writeFile('json/property.json', jsonData, finished)
}

function getBackground(val) {
  if (val > 0 && val <= 166) {
    return 'blue'
  } else if (val > 166 && val <= 332) {
    return 'green'
  } else if (val > 332 && val <= 498) {
    return 'pink'
  } else if (val > 498 && val <= 664) {
    return 'purple'
  } else if (val > 664 && val <= 830) {
    return 'red'
  } else {
    return 'yellow'
  }
}

function getBread(val) {
  if (val > 0 && val <= 100) {
    return 'bread'
  } else if (val > 100 && val <= 200) {
    return 'chocolate'
  } else if (val > 200 && val <= 300) {
    return 'pink'
  } else if (val > 300 && val <= 400) {
    return 'sour'
  } else if (val > 400 && val <= 500) {
    return 'sugar'
  } else if (val > 500 && val <= 600) {
    return 'toffee'
  } else if (val > 600 && val <= 700) {
    return 'sweetpotato'
  } else if (val > 700 && val <= 800) {
    return 'wrapper'
  } else if (val > 800 && val <= 850) {
    return 'blacksesame'
  } else if (val > 850 && val <= 900) {
    return 'mintchocolate'
  } else if (val > 900 && val <= 950) {
    return 'sponge'
  } else {
    return 'zombie'
  }
}

function getFace(val) {
  if (val > 0 && val <= 1000) {
    return 'basic'
  }
}

function getEyebrow(val) {
  if (val > 0 && val <= 700) {
    return 'none'
  } else if (val > 700 && val <= 800) {
    return 'angry'
  } else if (val > 800 && val <= 900) {
    return 'sad'
  } else {
    return 'sinnoseuke'
  }
}

function getNose(val) {
  if (val > 0 && val <= 900) {
    return 'none'
  } else if (val > 900 && val <= 950) {
    return 'nose'
  } else {
    return 'uglynose'
  }
}

function getEffect(val) {
  if (val > 0 && val <= 900) {
    return 'none'
  } else if (val > 900 && val <= 950) {
    return 'blusher'
  } else {
    return 'dot'
  }
}

function getItem(val) {
  if (val > 0 && val <= 500) {
    return 'none'
  } else if (val > 500 && val <= 540) {
    return 'alcoholic'
  } else if (val > 540 && val <= 580) {
    return 'band'
  } else if (val > 580 && val <= 615) {
    return 'bride'
  } else if (val > 615 && val <= 650) {
    return 'bubbleshower'
  } else if (val > 650 && val <= 685) {
    return 'gentleman'
  } else if (val > 685 && val <= 720) {
    return 'groomblack'
  } else if (val > 720 && val <= 755) {
    return 'groomblue'
  } else if (val > 755 && val <= 790) {
    return 'gun'
  } else if (val > 790 && val <= 825) {
    return 'laurelwreath'
  } else if (val > 825 && val <= 860) {
    return 'lightning'
  } else if (val > 860 && val <= 895) {
    return 'sunglass'
  } else if (val > 895 && val <= 930) {
    return 'superman'
  } else if (val > 930 && val <= 965) {
    return 'maskpack'
  } else {
    return 'ghost'
  }
}

let data = []
const quantity = 1000
const percent = 1000

for (let i = 0; i < quantity; i++) {
  const nft = {
    id: i + 1,
    background: getBackground(generateRandomValue(percent)),
    bread: getBread(generateRandomValue(percent)),
    face: getFace(generateRandomValue(percent)),
    eyebrow: getEyebrow(generateRandomValue(percent)),
    nose: getNose(generateRandomValue(percent)),
    effect: getEffect(generateRandomValue(percent)),
    item: getItem(generateRandomValue(percent)),
  }

  let duplication = true

  data.some((dataObj) => {
    if (
      dataObj.background === nft.background &&
      dataObj.bread === nft.bread &&
      dataObj.face === nft.face &&
      dataObj.eyebrow === nft.eyebrow &&
      dataObj.nose === nft.nose &&
      dataObj.effect === nft.effect &&
      dataObj.item === nft.item
    ) {
      console.log('중복', i + 1)
      duplication = false
      i = i - 1
    }
  })
  if (duplication === true) {
    data.push(nft)
  }
}

saveData(data)
