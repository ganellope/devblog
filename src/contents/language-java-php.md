---
path: "/language-java-php"
date: "2019-09-30"
title: "자료형,언어 특징(Java - Php)"
---


##🚀목표
1. java와 php 언어의 특징을 알고 있다.
2. 알맞는 자료형을 사용하여 구현할 수 있다.

##

##php(Hypertext preprocessor)🧐
동적 웹 페이지를 위한 언어

- • php 5에서 객체지향 프로그래밍 개념이 추가되었다.
- • 인터프리터 언어이다.
- • 다른 서버 사이드 언어보다 처리속도가 빠르다.
- • 변수 사용 전에 타입 선언을 하지 않는다.(자동으로 적정 타입으로 변경)  



##php 자료형
| 이름 | 설명 | 예시 |
|:--------|:--------:|--------:|
| boolean | 논리형 | true, false |
| integer | 정수형 | 5985 |
| float | 실수형 | 10.365 |
| string | 문자열 | "1", "php"|
| array | 배열 | array("3","5") |
| object | 객체 |  class car(){} |
| null | 널 | null |
| resource | 리소스 | 외부 함수에 대한 리소스 |

> 자료형을 판단하는 함수가 있다.   
ex) gettype() or 자료형 앞에 is붙이기   

---

##

##Java🧐
 - • java8 부터 람다식을 통해 함수 프로그래밍을 지원한다.
 - • 객체지향언어로 캡슐화, 상속, 다형성을 지원한다.
 - • 메모리를 자동으로 관리해준다.
 - • jvm (메모리관리 , gabage collection)위에서 돌아가기 때문에 이식성이 높다.

##java 자료형
1. 기본형
> 반드시 사용전 선언되어야하고 비객체 타입으로 null값을 가질 수 없다.


| type | bits | value |
|:--------|:--------:|--------:|
| byte | 8bits |  -2^7 ~ 2^7-1 |
| short | 16bits | -2^15 ~ 2^15-1 |
| int | 32bits | -2^31 ~ 2^31-1 |
| long | 64bits | -2^63 ~ 2^63-1 |
| float | 32bits | |
| double | 64bits |   |
| char | 16bits | 0 ~ 2^15-1 unsgined |
| boolean | 1bits | true false |

2. Wrapper class
> 기본형을 클래스로 감쌋다. null 삽입 가능

~~~
Integer age = new Integer(30);
Integer obj = 61;
Double avg = new  Double("3.145");


~~~


---

##🐱‍💻결론

_프로그램 제작 시 함수나 실행속도 보안 소스의 복잡도를 확인하고 맞는 언어로 작성하자_



_출처_  
http://tcpschool.com/php/php_intro_intro  
https://beansberries.tistory.com/entry/PHP-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%9E%A5%EB%8B%A8%EC%A0%90  
https://www.w3schools.com/php/php_datatypes.asp    
https://www.php.net/manual/en/function.get-resource-type.php    
https://m.blog.naver.com/PostView.nhn?blogId=eztcpcom&logNo=60211273075&proxyReferer=https%3A%2F%2Fwww.google.com%2F
 https://blogchannel.tistory.com/96     
 https://hoonmaro.tistory.com/9   
 https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4)    
 https://hongku.tistory.com/171  
 https://asfirstalways.tistory.com/158  
 https://jdm.kr/blog/213
