const nextButtonComponent = () => ({
  init() {
    const modelList = ['firstModel', 'secondModel', 'thirdModel', 'fourthModel', 'fifthModel']

    const model = document.getElementById('model')
    const nextButton = document.getElementById('nextbutton')
    nextButton.style.display = 'block'

    const bg1 = require('./assets/images/one.jpg')
    const bg2 = require('./assets/images/two.jpg')
    let buttonBackground = bg1

    let idx = 1
    const nextModel = () => {
      if (buttonBackground === bg1) {
        buttonBackground = bg2
      } else {
        buttonBackground = bg1
      }
      nextButton.style.backgroundImage = `url(${buttonBackground})`
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#${modelList[idx]}`)
      // model.setAttribute('animation-mixer', 'clip: Action; loop: once; clampWhenFinished: true')
      idx = (idx + 1) % modelList.length
    }
    nextButton.onclick = nextModel
  },
})

export {nextButtonComponent}
