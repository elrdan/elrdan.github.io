---
sidebar_position: 2
sidebar_label: 2) C언어
keywords: [정보처리기사 실기]
hide_title: true
---

## C언어 기본
1. **C언어 기본 구조**
   - C언어는 본문 전에 처리하는 전처리 부분과 본문으로 구성되어 있습니다.
   - 헤더는 xxx.h 파일로 되어 있고, 헤더 안에는 프로그래밍에 필요한 함수들이 포함되어 있습니다.
2. **전처리기**
   1. **전처리기(Preprocessor) 개념** 
      - 전처리기는 실행 파일을 생성하는 과정에서 소스 파일 내에 존재하는 전처리 지시문을 처리하는 작업입니다.
   2. **전처리기 종류**
      |종류|설명|
      |:---:|:---|
      |#include| * C언어 프로그램에 헤더 파일을 포함할 때 사용하는 전처리기 |
      |#define| * 매크로를 정의할 때 사용하는 전처리기 <br/> * 상숫값을 지정하기 위한 예약어로 구문의 상수로 치환할 때 사용하는 전처리기 |
   ```
   #include <stdio.h>
   #define A 67
   
   int main() {
     printf("C언어 %d", A);
     return 0;
   }
   
   출력: C언어 67
   
   코드 해설
   1. stdio.h 헤더 파일을 읽어옴 (printf 함수가 포함)
   2. A를 67로 변환
   3. main함수 실행(프로그램이 제일 처음실행되는 부분)
   4. printf()함수를 통해 A값을 출력(%d는 10진수 출력시 사용)
   5. 함수 반환값이 int형이기 때문에 return 0을 반환 후 종료합니다. <- 0은 일반적으로 성공적으로 완료를 뜻합니다.
   ```
   
## 자료형
1. **자료형(Data Type)의 개념**
   - 자료형은 프로그래밍 언어에서 실수, 정수와 같은 여러 종류의 데이터를 식별하는 형태입니다.
   - 메모리 공간을 효율적으로 사용하고 2진수 데이터를 다양한 형태로 사용하기 위해 존재합니다. 
2. **자료형 유형**
   - 자료형의 유형은 문자형, 정수형, 부동 소수점 형이 있다.
   <br/>
   |유형|설명|선언 형식|
   |:---:|:---:|:---:|
   |문자<br/>(Character)|* 문자 하나를 저장하고자 할 때 사용하는 자료형|char|
   |정수<br/>(Integer)|* 정수값을 저장하고자 할 때 사용하는 자료형|int|
   |부동 소수점<br/>(Floating Point)|* 소수점을 포함하는 실수값을 저장하고자 할 때 사용하는 자료형| float, double|
3. **식별자(Identifier) 개념**
   - 식별자는 변수, 상수, 함수 등 서로 구분하기 위해서 사용되는 이름입니다.
   - 프로그램의 구성요소를 구별하기 위해 사용합니다.