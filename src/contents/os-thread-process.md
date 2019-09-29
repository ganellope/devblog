---
path: "/os-thread-process"
date: "2019-09-29"
title: "OS단 Process, Thread "
---


##🚀목표
1. process의 구성 단위를 알고 설명할 수 있다.
2. process와 thread의 차이를 알고 있다.


##Process  

####_" 실행중인 프로그램이다. "_
프로그램이 메모리에 적재되어 실행되는 작업의 단위

- 프로세스당 최소 1개의 스레드를 가지고 있다.

##Process 메모리 구조
프로세스 하나당 하나씩  
code,data 영역은 컴파일 시 크기가 결정, heap, stack 영역은 런타임 시 크기 결정  
##
##
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65835178-b473ac80-e2d2-11e9-8410-86aa770d2cbe.png)       
- Data
> 전역변수 , static 변수

- Code  
> 실행 파일의 명령어(소스코드)  
기계어로 제어됨

- heap
> 동적 메모리 영억 메모리 주소 값에 의해서만 참조

- stack
> 지역변수, 함수 호출 파라미터, 리턴값  
 자동으로 사라지는 임시 메모리 영역  



##PCB(Process Control Block)
프로세스 관리를 위해 필요한 정보가 있는 운영체제 커널 자료구조  
프로세스가 완료되면 PCB도 제거된다.  
문맥교환을 위해 필요함  

- __`PID(Process IDentification)`__
> 각 프로세스를 식별하기 위한 번호  

- __`프로세스 상태(Process State)`__   
##
##   
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65833855-63f55280-e2c4-11e9-9eaf-c7ef099f87a4.jpg)
- __new__ : 프로세스가 생성되는 상태(프로그램을 실행 시켰을 때)
- __running__ : CPU에서 수행되고 있는 상태
> -> 어떤 프로세스를 실행시키냐는 스케줄링에 의해 결정  

- __Ready__ : 메모리에 할당되어 실행을 기다리고 있는 상태(실행되기 위한 모든 자원을 얻었다.)
- __Waiting__ : 실행되다가 i/o 작업을 기다리고 있는 상태
- __Terminated__ : 프로세스 종료


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


##thread
프로세스 내의 작업단위
종료가 보장되지 않는다.(중단신호를 마스킹하는 것이 불가능 )

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
