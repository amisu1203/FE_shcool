let now = new Date();
let start = new Date('2021-12-03');

// 며칠째인지 계산
let timeDiffLove = now.getTime() - start.getTime(); // ms로 계산됨
let loving = Math.floor(timeDiffLove / (1000 * 60 * 60 * 24)) + 1; // 시작일부터 1일로 계산하므로 +1
$('#loving').text(`${loving}일째`);

// 발렌타인데이까지 남은 날짜
let valentine = new Date('2022-02-14');
let timeDiffVal = valentine.getTime() - now.getTime(); // ms로 계산됨
let daysLeftVal = Math.floor(timeDiffVal/(1000 * 60 * 60 * 24)) + 1;
$('#valentine').text(`${daysLeftVal}일 남음`);

// 1000일의 날짜와 남은 날짜
var thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24)); // 시작일부터 천일까지를 ms로 계산
let timeDiffThou = thousand.getTime() - now.getTime();
let daysLeftThou = Math.floor(timeDiffThou/(1000 * 60 * 60 * 24)) + 1;
let DateThou = `${thousand.getFullYear()}.${thousand.getMonth()+1}.${thousand.getDate()}` // 천일이 언제인지

$('#thousand').text(`${daysLeftThou}일 남음`);
$('#thousand-date').text(DateThou);