// drone 클릭하면 spit됨

$('#drone').click(function () {
    console.log('드론이 클릭됐습니다.');
    $('#spit').fadeIn(200);
    $('#spit').animate({
        left: '+=250'
    });
    $('#spit').fadeOut();
    $('#spit').animate({
        // 원래 위치로 옮김
        left: '150px'
    })
})