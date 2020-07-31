function init() {
    //주민 유효성 검사
    var f = document.querySelector('.ex_jumin input[name=j01]');
    var b = document.querySelector('.ex_jumin input[name=j02]');
    var result = document.querySelector('.ex_jumin div');


    var front = f.value;
    var back = b.value;
 


    function jumin() {
        

        var total = 0;
        for (var i = 0; i < front.length-1; i++) {

            total += front[i] * back[i];
          
        }
        var cNum = 11 - (total % 11);

        if (cNum == front[12]) {
            result.innerHTML = "정상적인 주민번호입니다.";

        } else {
            result.innerHTML = "잘못된 주민번호입니다.";
        }
gender();

    }

    function gender() {
        var gen = front;
        
        var aa = gen[6] == "1" ? "남" : "여";
         console.log(aa);
        result.innerHTML += ' 성별 =' + aa;
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
