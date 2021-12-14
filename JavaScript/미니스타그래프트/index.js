// drone 클릭하면 spit됨

let hp = 3;
$('#drone').click(function () {
    console.log('드론이 클릭됐습니다.');
    $('#spit').fadeIn(200);
    $('#spit').animate({
        left: '+=250'
    });
    $('#spit').fadeOut(function () {
        hp -= 1;
        $('#hp').text(`HP : ${hp}`);
        if (hp === 0) {
            $('#bunker').fadeOut(300, 'linear');
        }
    });
    $('#spit').animate({
        // 원래 위치로 옮김
        left: '150px'
    })
})
