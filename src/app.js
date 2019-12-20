import '../src/styles.scss'

document.addEventListener('DOMContentLoaded', () => {

  console.log('app.js in home.html')
  const name = document.querySelector('.name')
  const nav = document.querySelector('nav')
  const httpIcon = document.querySelector('.httpIcon')
  const arrowTarget = document.querySelector('.arrowTarget')
  const slashB = document.querySelector('.iconSlashB')
  const slashA = document.querySelector('.iconSlashA')
  const colon = document.querySelector('.iconColon')
  let nameX = 0
  let iconX = 0
  let iconY = 0
  let bounceAmount = 0

  function arrowBounce() {
    bounceAmount = parseInt(httpIcon.style.bottom.replace('px',''))
    let goingUp = true
    const timerId = setInterval(() => {
      const iconRect = httpIcon.getBoundingClientRect()
      const targetRect = arrowTarget.getBoundingClientRect()
      if (goingUp) {
        console.log('target', targetRect.bottom)
        bounceAmount += 1
        httpIcon.style.bottom = `${bounceAmount}px`
        if (iconRect.bottom < targetRect.top) goingUp = false
      } else {
        bounceAmount -= 1
        httpIcon.style.bottom = `${bounceAmount}px`
        if (iconRect.bottom > targetRect.bottom) goingUp = true
      }
    }, 10)
  }

  function iconToArrow() {
    let rotateBAmount = 0
    let rotateAAmount = 0
    const timerId = setInterval(() => {
      slashB.style.transform = `rotate(${rotateBAmount}deg) translate(30px, 5px)`
      slashA.style.transform = `rotate(${rotateAAmount}deg) translate(10px, 15px)`
      colon.style.transform = 'translateX(1px)'
      if (rotateBAmount < 125) rotateBAmount += 1
      if (rotateAAmount < 20) rotateAAmount += 1
      if (rotateBAmount >= 125 && rotateAAmount >= 20) clearInterval(timerId)
    }, 10)
  }

  function initArrow() {
    iconToArrow()
    const targetRect = arrowTarget.getBoundingClientRect()
    const timerId = setInterval(() => {
      const iconRect = httpIcon.getBoundingClientRect()
      if (iconRect.left > targetRect.left) {
        iconX -= 5
        httpIcon.style.left = `${iconX}px`
      }
      if (iconRect.bottom < targetRect.bottom) {
        iconY -= 5
        httpIcon.style.bottom = `${iconY}px`
      } else {
        clearInterval(timerId)
        arrowBounce()
      }
    }, 10)
  }

  function initAnim() {
    httpIcon.style.bottom = '22px'
    const timerId = setInterval(() => {
      const navRect = nav.getBoundingClientRect()
      const nameRect = name.getBoundingClientRect()
      const nameWidth = nameRect.right - nameRect.left
      const iconRect = httpIcon.getBoundingClientRect()
      //animate name
      if (navRect.right > nameRect.right) {
        nameX += 5
        name.style.left = `${nameX}px`
      } else if (navRect.right > iconRect.right + nameWidth) {
        iconX += 5
        httpIcon.style.left = `${iconX}px`
      } else {
        clearInterval(timerId)
        initArrow()
      }
    }, 10)
  }

  initAnim()
  
})