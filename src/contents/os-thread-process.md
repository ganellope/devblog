---
path: "/os-thread-process"
date: "2019-09-29"
title: "OS단 Process, Thread "
---


##🚀목표
1. process의 구성 단위를 알고 설명할 수 있다.
2. process와 thread의 차이를 알고 있다.

---

##


##Process

####_" 실행중인 프로그램이다. "_
프로그램이 메모리에 적재되어 실행되는 작업의 단위

- 프로세스당 최소 1개의 스레드를 가지고 있다.


##Process 메모리 구조🐱‍💻  
- • 프로세스 하나당 하나씩  
- • code,data 영역은 컴파일 시 크기가 결정, heap, stack 영역은 런타임 시 크기 결정  
##
##
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65835178-b473ac80-e2d2-11e9-8410-86aa770d2cbe.png)       
- __Data__
> 전역변수 , static 변수

- __Code__  
> 실행 파일의 명령어(소스코드)  
기계어로 제어됨

- __heap__
> 동적 메모리 영억 메모리 주소 값에 의해서만 참조

- __stack__
> 지역변수, 함수 호출 파라미터, 리턴값  
 자동으로 사라지는 임시 메모리 영역  

---
##




##PCB(Process Control Block)🐱‍💻  
프로세스 관리를 위해 필요한 정보가 있는 운영체제 커널 자료구조  
• 프로세스가 완료되면 PCB도 제거된다.  
• 문맥교환을 위해 필요함  

- __`PID(Process IDentification)`__
> 각 프로세스를 식별하기 위한 번호  

- __`프로세스 상태(Process State)`__   
##
##   
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65833855-63f55280-e2c4-11e9-9eaf-c7ef099f87a4.jpg)
- - __new__ : 프로세스가 생성되는 상태(프로그램을 실행 시켰을 때)
- - __running__ : CPU에서 수행되고 있는 상태
> -> 어떤 프로세스를 실행시키냐는 스케줄링에 의해 결정  

- - __Ready__ : 메모리에 할당되어 실행을 기다리고 있는 상태(실행되기 위한 모든 자원을 얻었다.)
- - __Waiting__ : 실행되다가 i/o 작업을 기다리고 있는 상태
- - __Terminated__ : 프로세스 종료


- __`CPU 레지스터 저장영역`__  
 > 프로그램 계수기(Program Counter):  다음에 실행될 프로세스의 포인터(주소를 저장)
 명령어 포인터라고도 함    
- __`CPU 스케줄링 정보`__
> 우선순위, CPU 점유시간

- __`메모리 관리 정보`__  
> 프로세스의 주소 공간

- __`프로세스 계정 정보`__
> 소유자나 부모 정보 , 페이지 테이블 정보  
 페이지 테이블 : 페이징 기법에서 사용되는 자료구조
- __`입출력 상태 정보`__  
> 프로세스에 할당된 입출력장치, 개방된 파일 목록

---
##


##thread🐱‍💻  
프로세스 내에서 실행되는 흐름 단위
- __`thread 기본데이터`__ : 고유 ID, 코드 , 데이터, 프로그램 카운터
- __`thread 특정데이터(TSD : Thread-specific-Data)`__ : 개별 데이터 공간이 필요할 경우 특정 데이터를 저장할 수 있다.   

##

![ex_screenshot](https://user-images.githubusercontent.com/45478754/65876385-a11b1c80-e378-11e9-9c17-7d5ab2ddd9ca.png)  

##

- • 종료가 보장되지 않는다.(중단신호를 마스킹하는 것이 불가능 )
- • 각 별도의 메모리를 가지는 멀티 프로세스와 달리 멀티 스레드는 프로세스내에 메모리 공유하여 사용한다.
- • 실행 순서는 보장되지 않는다.
- • 자식 프로세스를 생성하여 사용하는 것보다 자원 비용과 공유를 쉽게 할 수 있다.
- • 현재 상태의 자원을 공유한다.  

### 🍪thread의 종류

1. __user-level Thread__  


- • 커널 영역 상위에서 라이브러리(동기화, 스케줄링)를 통해 사용된다.
- • 동일한 메모리 영역에서 스레드가 관리되므로 빠르다.
- • 하나의 스레드가 중단되면 다른 스레드 역시 모드 중단된다. -> 커널이 프로세스 내부의 스레드를 인식 못하기 때문에


2. __kernel-level Thread__  


- • 커널 영역에서 os가 지원하는 스레드 기능을 사용하고 커널이 관리한다.
- • 중단되어도 프로세스 내의 다른 스레드는 계속 실행된다.
- • user-level Thread에 비해 느리다.
- • 커널 자료구조에 접근할 수 있다.
- • 프로세스당 하나 이상의 커널 스레드가 있다.

---

##

##Thread issue🐱‍💻  
##

![ex_screenshot](https://user-images.githubusercontent.com/45478754/65876888-e1c76580-e379-11e9-8e21-b594e2eb97b3.png)  

##

- •  __fork()__
> fork를 호출한 스레드만 가진 프로세스를 생성할 경우 이외의 스레드 자원은 해제되지 않아 메모리 릭 문제가 발생할 수 있다.

- • __deadlock__
> 프로그램의 문제를 줄이기 위해 접근 권한을 너무 신중하게 약속한 나머지 접근 할 수 없는 권한을 얻기 위해 무한정 기다린다.

 - • __Increased Complexity(복잡성 증가)__

 - • __Complications due to Concrrency(동시성으로 인한 복잡성)__

 - • __Difficult to Identity Errors(오류 식별 어려움)__

 - • __Testing Complications(테스트 복잡성)__
> 순서를 예측하기 어렵다.

 - • __Unpredictable result(예측할 수 없는 결과)__
> 전역변수 등 동일한 메모리 사용으로 인한 문제

 - • __Complications for Porting Existing code(기존 코드 포팅의 복잡성)__
 > 정적 변수를 제거하고 스레드로 부터 안전하지 않은 걸 제거해야 한다.




_출처_  
https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html    
https://jhnyang.tistory.com/7    
https://operatingsystems.tistory.com/entry/OS-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EA%B4%80%EB%A6%ACProcess-Management    
https://jwprogramming.tistory.com/15   
https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%A0%9C%EC%96%B4_%EB%B8%94%EB%A1%9D    
https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%84%9C_%EB%A0%88%EC%A7%80%EC%8A%A4%ED%84%B0  
https://jwprogrammin.tistory.com/16    
https://recorda.tistory.com/entry/20160503%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B5%AC%EC%A1%B0  
https://bowbowbow.tistory.com/16 

[https://ko.wikipedia.org/wiki/스레드_(컴퓨팅)](https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C_(%EC%BB%B4%ED%93%A8%ED%8C%85))

[https://boanin.tistory.com/84](https://boanin.tistory.com/84)

[https://en.wikipedia.org/wiki/Thread_(computing)#KERNEL](https://en.wikipedia.org/wiki/Thread_(computing)#KERNEL)  

[https://blog.seulgi.kim/2016/03/fork-in-multithread.html](https://blog.seulgi.kim/2016/03/fork-in-multithread.html)    

[https://myeonguni.tistory.com/682](https://myeonguni.tistory.com/682)  

[http://blog.naver.com/PostView.nhn?blogId=jwyoon25&logNo=221313149487&categoryNo=8&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search](http://blog.naver.com/PostView.nhn?blogId=jwyoon25&logNo=221313149487&categoryNo=8&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search)

[https://www.tutorialspoint.com/major-issues-with-multi-threaded-programs](https://www.tutorialspoint.com/major-issues-with-multi-threaded-programs)  →
