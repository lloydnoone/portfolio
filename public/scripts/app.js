document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js in home.html')
  const name = document.querySelector('.name')
  const nav = document.querySelector('nav')
  const httpIcon = document.querySelector('.httpIcon')
  let nameX = 0
  let iconX = 0

  function animSlideIn() {
    httpIcon.style.bottom = '22px'
    const timerId = setInterval(() => {
      const navRect = nav.getBoundingClientRect()
      const nameRect = name.getBoundingClientRect()
      const nameWidth = nameRect.right - nameRect.left
      const iconRect = httpIcon.getBoundingClientRect()
      //animate name
      if (!(navRect.right < nameRect.right)) {
        nameX += 1
        name.style.left = `${nameX}px`
      } else if (navRect.right > iconRect.right + nameWidth) {
        iconX += 1
        httpIcon.style.left = `${iconX}px`
      }
    }, 5)
  }

  animSlideIn()
  
})