$(document).ready(function(){
    $('#cart').hide()
    $('#bag').mouseenter(function(){
        $('#cart').show()
    })
    $('#bag').mouseleave(function(){
        $('#cart').hide()
    })

})