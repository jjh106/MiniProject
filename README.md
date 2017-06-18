# MiniProject

### # [LayOut연습](https://jjh106.github.io/MiniProject/wireframe/index.html)

> float, flex-box 등을 활용한 배치 연습과제

---

### # [RWD연습](https://jjh106.github.io/MiniProject/rwd/index.html)

> breaking point 
>
> * mobile : max-width 759px
> * tablet : min-width 760px and max-width 959px
> * desktop : min-width 960px

---

### # [Image hover](https://jjh106.github.io/MiniProject/hover-effect_image/index.html)

---

### # [Button hover](https://jjh106.github.io/MiniProject/hover-effect_button/index.html)

---

### # Responsible Image

> 서로 다른 크기의 이미지를 사용하여 같은크기의 반응형 이미지 만들기
>
> Break Point : 640px , 960px

* #### [No.1](https://jjh106.github.io/MiniProject/responsible_image/content_image/index.html)

  * 이미지 태그를 활용한 반응형 이미지

* #### [No.2](https://jjh106.github.io/MiniProject/responsible_image/background_image/index.html)

  * 배경이미지를 활용한 반응형 이미지

---

### # [Carousel](https://jjh106.github.io/MiniProject/carousel/index.html)

---

### # [Flip card](https://jjh106.github.io/MiniProject/flip-card/index.html)

---

### # [Clock](https://jjh106.github.io/MiniProject/clock/index.html)

> 현재 날짜와 시간을 실시간으로 나타내는 시계

* new Date()
  * 자바스크립트의 내장 객체로 날짜 및 시간과 관련된 유용한 기능이 담겨 있다.

> 사용된 메소드

* getFullYear()
  * 로컬시간을 사용하여 연도를 반환.
* getMonth()
  * 로컬시간을 사용하여 월을 반환.
  * 0(1월)부터 11(12월)까지의 정수값을 리턴하므로 +1을 해줌.
* getDate()
  * 로컬시간을 사용하여 일(월 기준)을 반환.
* getDay()
  * 로컬시간을 사용하여 요일을 반환.
* getHours()
  * 로컬시간을 사용하여 시간을 반환.
* getMinutes()
  * 로컬시간을 사용하여 분을 반환.
* getSeconds()
  * 로컬시간을 사용하여 초를 반환.

***zero함수**

* 숫자가 한자리 수일 때 앞에 '0'을 붙여 두자리수로 출력 되도록 도와주는 함수

```javascript
var zero = function(number, position) {
  number = number + '';
  return number.length >= position ? number : new Array(position - number.length +1).join('0') + number;
}

// 같은 기능 다른 코드
var zero = function(num, digit) {
  var a = '';
  num = num.toString();
  if(num.length < digit) {
    for(i = 0; i < digit - num.length; i++) {
      a += '0';
    }
  }
  return a + num;
}
```

> setTimeout은 동작이 한번 일어나며 실행 중 다른 setTimeout으로 인해 함수가 호출되도 기존에 실행된 함수에 영향을 주지 않는다.
>
> setInterval은 동작이 반복적으로 일어나며 실행중 다른 setInterval로 인해 함수가 호출되면 기존에 실행된 함수는 종료된다.

---



