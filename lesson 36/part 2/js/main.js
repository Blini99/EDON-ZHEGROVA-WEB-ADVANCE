$('li').click(function(){
    alert('clicked')
});
$('btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('Testing Test')
})
$('#MyDiv')
.click(function(){
    $(this).addClass('cliked');
})
.find('span')
