$(document).ready(function() {
    console.log('loaded')

    var img = $('img:first')
    var imgPosition = img.position()
    var $window = $(window)
    var windowWidth = $window.width()
    var llama = document.querySelector('#llama')

    // document.addEventListener("keydown", llamaJump, false)
    $(document).on('keydown', function(e) {
        if (e.keyCode === 32) {
            $('#llama').addClass('jumped')
        }
    }).on('keyup', function() {
        $('#llama').removeClass('jumped')
    })
    //    var timeoutId = setTimeOut(llamaGround, 1000)
    //   function llamaGround () {
    //      $('#llama').removeClass('jumped')
    //   }
    //
    // })

    // Llama Jump Function
    // function llamaJump(e) {
    //   console.log("jump function runs");
    //     console.log("llama jumped");
    //     llama.classList.add('jumped')
    //     // llama.style.top = 32 + "%"
    // }

    // console.log(windowWidth);
    // console.log("left is: " + imgPosition.left)

    // Moving Background Function and Interval
    function movingBackground () {
        img.css('left', imgPosition.left -= 10)
        if (imgPosition.left < -windowWidth / 2.2) {
            img.css('left', imgPosition.left = 0)
        }
    }
    setInterval(movingBackground, 1000 / 50)

})
