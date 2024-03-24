window.onload = function () {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');

    document.getElementById('user-name').innerText = "Nice to meet you, " + name + " 님!";
};

const content = "Welcome to my webpage!";
const text = document.querySelector("header h1");

function typings(textIdx = 0) { // textIdx를 파라미터로 사용
    if (textIdx < content.length) {
        let txt = content[textIdx];
        text.innerHTML += txt;
        setTimeout(() => typings(textIdx + 1), 100); // 다음 문자 출력
    } else {
        setTimeout(() => {
            text.textContent = ""; // 전체 문자열 출력 후 텍스트 초기화
            typings(); // 타이핑 효과 다시 시작
        }, 2000); // 전체 문자열이 출력된 후 2초 대기
    }
}

typings(); // 타이핑 효과 시작


// 모든 카드와 모달, 닫기 버튼에 대한 참조
var cards = document.querySelectorAll('.card');
var modals = document.querySelectorAll('.modal');
var closeButtons = document.querySelectorAll('.close-button');

// 카드를 클릭했을 때 해당 모달을 열어주는 이벤트 리스너를 추가
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        var modal = document.getElementById(`modal${index + 1}`);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// 닫기 버튼을 클릭했을 때 모달 닫기
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

// 모달 외부를 클릭했을 때 모달을 닫기
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



function playMusic(musicUrl) {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = musicUrl;
    audioPlayer.play();
    audioPlayer.volume = 0.2;
}

function stopMusic() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}


