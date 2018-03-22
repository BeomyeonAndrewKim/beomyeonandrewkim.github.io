[Daily Algorithm_JavaScript] Level1. 삼각형 출력하기

### Question

#### Source https://programmers.co.kr/learn/challenge_codes/101

> printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
> 다음을 참고해 `*`(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printTriangle 메소드를 완성하세요
> printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다.
>
> 높이가 3일때
>
> ```
> *
> **
> ***
>
> ```
>
> 높이가 5일때
>
> ```
> *
> **
> ***
> ****
> *****
> ```

### My solution

```javascript
function printTriangle(num) {
let answer='';
for(let i=1;i<=num;i++) answer+='*'.repeat(i)+'\n';
return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );
```

보통 코딩학원에서 자바스크립트를 배울때 풀어보는 대표 예제 중 하나이다. ```for``` 루프를 배운 후 1번 예제로 많이 나오는데 간단하다. ```i=1```부터 넣고 인자로 받은 숫자까지 반복을 하는데 String의 ```repeat``` 메소드를 활용해서 i번 만큼 *를 반복하면 된다. 여기서는 String의 개행문자 ```('\n')```을 꼭 활용하라 했기 때문에 마지막에 더했다. 

여기서 해맸던게 ```('\n')```에서 ```'\'```는 우리가 일반적으로 부르는 슬래시 ```/```가 아니다! 보통 엔터키 위에 존재하는 키를 누르면 나오는 백슬래시``` \```이다. 주의해야 한다.

#### Other Solutions

#### Best of Best

> 잘만 활용한다면 최소한으로도 충분하다 -쥘 베른,'80일간의 세계 일주' 중에서

```javascript
function printTriangle(num) {
  return num < 1 ? "" : printTriangle(num-1) + "*".repeat(num) + "\n";
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );
```

아름다운 함수에서 절대 빠지지 않는 재귀함수를 활용했다. if조건문의 길이를 줄여주는 삼항연산자까지 더했으니 이보다 더 아름다운 함수가! 

javascript에서 재귀함수에 대한 설명과 예제가 잘 나와있는 [링크](http://webclub.tistory.com/72)(출처: 웹클럽)

먼저 인자로 받은 Number값이 1보다 작을 경우에는 ""로 빈컨텐츠를 리턴한다. 그리고 1보다 클 경우에는 앞에 인자로 받은 Number값에 -1이 들어간 함수 자신이 들어간다. 이 부분이 재귀함수를 만들어 주는 포인트다. 이 부분이 앞에 있어야 삼각형 모양이 나온다. 만약에 역삼각형을 만들고 싶다면 재귀함수 부분을 뒤로 보내면 된다.

보통 뛰어난 개발자는 Javascript에서 재귀함수를 자유자재로 잘 쓰는 것 같다. 정규표현식과 같이 틈틈히 공부해나간다면 뛰어난 개발자가 되는 지름길이 되겠다.

