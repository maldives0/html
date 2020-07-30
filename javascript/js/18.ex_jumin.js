function init() {
    //주민 유효성 검사
    var j01 = document.querySelector('.ex_jumin input[name=j01]');
    var j02 = document.querySelector('.ex_jumin input[name=j02]');
    var result = document.querySelector('.ex_jumin div');
   
    var arr = j01.value;
console.log(arr);
    var key = j02.value;

    
    var a = arr + key;


    function jumin() {
        gender();
        var total = 0;
        for (var i in a) {

            total += arr[i] * key[i];
        }
        var cNum = 11 - (total % 11);

        if (cNum == key[12]) {
            result.textContent = "정상적인 주민번호입니다.";

        } else {
            result.textContent = "잘못된 주민번호입니다.";
        }


    }

    function gender() {
        var gen = key;
        var aa = gen[0] == "1" ? "남" : "여";
        result.innerHTML += '성별:' + aa;
        //  삼합연산자: if문을 한 줄로 표현한다
        //  ? 앞쪽은 조건 = if(gen[0]==1)
        //      : =  "남" else  "여"
        //    }
    }
    //실행명령              


    //이벤트
    var btn = document.querySelector('.ex_jumin button');
    btn.addEventListener('click', jumin);
}
window.addEventListener('DOMContentLoaded', init);
