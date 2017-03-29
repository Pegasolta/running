$(document).ready(function() {
    console.log('loaded')

    var img = $('img:first')
    var imgPosition = img.position()
    var $window = $(window)
    var windowWidth = $window.width()
    var llama = document.querySelector('#llama')

    // Llama Jump Function
    $(document).on('keydown', function(e) {
        if (e.keyCode === 32) {
            $("#llama").addClass("jumped")
        }
    }).on('keyup', function() {
      // if (llama top is 13%) {}
        $('#llama').removeClass('jumped')
    })

    // Moving Background Function and Interval
    function movingBackground() {
        img.css('left', imgPosition.left -= 10)
        if (imgPosition.left < -windowWidth / 2.2) {
            img.css('left', imgPosition.left = 0)
        }
    }
    setInterval(movingBackground, 1000 / 50)

})


// Constructor specifies base properties for Rock
function rock(height, width, multiplier) {
  this.height = height
  this.width = width
  this.multiplier = multiplier
}
