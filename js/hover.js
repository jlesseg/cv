const slideshow = document.querySelector('.slideshow')
const images = document.querySelectorAll("img")

slideshow.addEventListener("mousemove", function(){
    const x = event.offsetX
    const width = this.offsetWidth

    const percentage = x / width
    const imageNumber = Math.floor (percentage * images.length)

    images.forEach(image => {
        image.style.zIndex = 0
    })

    images[imageNumber].style.zIndex = 1

})