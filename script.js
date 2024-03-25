document.addEventListener('DOMContentLoaded', function () {
  const track = document.getElementById('carouselList')
  const slides = Array.from(track.children)
  const nextButton = document.getElementById('nextButton')
  const prevButton = document.getElementById('prevButton')

  let currentIndex = 0
  let slidesToShow = 4
  let slideWidth

  function setSlideWidth() {
    const trackWidth = document.querySelector('.carousel__track-container').offsetWidth
    slideWidth = trackWidth / slidesToShow
    slides.forEach((slide) => {
      slide.style.width = `${slideWidth}px`
    })
    moveToSlide()
  }

  function updateButtons() {
    prevButton.style.display = currentIndex > 0 ? 'block' : 'none'
    nextButton.style.display = currentIndex + slidesToShow < slides.length ? 'block' : 'none'
  }

  function moveToSlide() {
    const moveDistance = currentIndex * slideWidth
    track.style.transform = `translateX(-${moveDistance}px)`
    updateButtons()
  }

  nextButton.addEventListener('click', (e) => {
    if (currentIndex + slidesToShow < slides.length) {
      currentIndex += slidesToShow
      moveToSlide()
    }
  })

  prevButton.addEventListener('click', (e) => {
    if (currentIndex > 0) {
      currentIndex -= slidesToShow
      moveToSlide()
    }
  })

  setSlideWidth()
  window.addEventListener('resize', setSlideWidth)
})
