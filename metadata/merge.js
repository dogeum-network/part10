const mergeImages = require('merge-images')
const { Canvas, Image } = require('canvas')
const propertydata = require('./json/property.json')
const fs = require('fs')

async function imageGenerate(num) {
  const imgData = propertydata[num]
  const imgSrc = [
    { src: `./images/background/${imgData.background}.png` },
    { src: `./images/bread/${imgData.bread}.png` },
    { src: `./images/face/${imgData.face}.png` },
    { src: `./images/eyebrow/${imgData.eyebrow}.png` },
    { src: `./images/nose/${imgData.nose}.png` },
    { src: `./images/effect/${imgData.effect}.png` },
    { src: `./images/item/${imgData.item}.png` },
  ]
  const b64 = await mergeImages(imgSrc, {
    Canvas: Canvas,
    Image: Image,
    width: 512,
    height: 512,
  })
  const base64Img = b64.split(',')[1]
  const base64DecodedText = Buffer.from(base64Img, 'base64')
  fs.writeFileSync(`./merged/${imgData.id}.png`, base64DecodedText, 'base64')
  console.log(`success: ${imgData.id}.png`)
}

async function gen() {
  for (let i = 0; i < 1000; i++) {
    await imageGenerate(i)
  }
}

gen()