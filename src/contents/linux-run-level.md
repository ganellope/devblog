---
path: "/linux-run-level"
date: "2019-09-28"
title: "리눅스 구동 Run level(부팅단계)"
---

##🚀목표
1. 7가지 모드의 특징을 알고 사용되는 이유를 알고 있다.

##init process
linux가 수행되면 커널이 제일 먼저 실행시키는 process로 커널이 모든 제어권을 init에게 넘기다.

- • PID가 1번이다.
- • OS동작시 필요한 환경값들을 설정 and process를 실행시켜주는 역할  
- • 손상되면 부팅 불가  

##runlevel이란? 🧐
서비스의 실행을 단계별로 구분하여 적용 낮은 단계일수록 시스템 시작 시 불러오는 드라이버나 데몬 수가 적다.  

- • 보통 0~6까지 7가지 모드가 있다.
- • 리눅스마다 조금씩 다르다 (0: 정지, 1: 싱글모드, 6: 재시작 은 같다.)
- • 부팅 과정 마지막단계에서 모든 프로세스의 부모 프로세스인 init 프로세스를 생성할 때 참조하는 것 (pid 1번)
- • `/etc/inittab` 파일에 runlevel 간단하게 설명 or runlevel을 변경할 수 있다. (관리자 모드에서만 변경 가능)
~~~
# Default runlevel. The runlevels used by RHS are:
#   0 - halt (Do NOT set initdefault to this)
#   1 - Single user mode
#   2 - Multiuser, without NFS (The same as 3, if you do not have networking)
#   3 - Full multiuser mode
#   4 - unused
#   5 - X11
#   6 - reboot (Do NOT set initdefault to this)
~~~

- • init 명령어는 단순히 runlevel을 변경해서 부팅하는 명령어로 시스템 종료 후에는 적용되지 않는다.
- • __`/sbin/runlevel`__ 을 실행하면 현재 runlevel을 알 수 있다.



##런레벨 Run level 🤔
- __`0 - halt (Do not set initdefault to this)`__
> 시스템 종료를 의미 init 0 명령어 실행 시 전원off
- __`1 - Single user mode`__
> 단일 사용자 모드 -> 관리자 쉘을 얻게 됨  
> 시스템 복원 모드라고도 함 네트워크가 작동하지 않는다.
- __`2 - Multiuser, without NFS( The same as 3, if you do not have networking)`__
> NFS를 지원하지 않는 다중 사용자 모드 네트워크 사용불가  
> __NFS__ : linux 컴퓨터끼리 저장공간을 공유할 수 있도록 해주는 시스템
- __`3 - Full multiuser mode`__
> CUI모드의 다중 사용자 모드  일반적으로 사용하는 level   
> 모든 네트워크 기능을 지원한다.   
> 다중사용자모드와 네트워크를 지원하고 빠른 처리속도가 필요한 서버용 운영체제 모드로 적합하다.
- __`4 - unused`__
> 기본적으로 사용하지 않지만 호환성을 위해 runlevel3과 같은 것으로 취급되고 있다.   
> 사용자가 설정을 정의해서 사용 가능하다.
- __`5 - X11`__
> 기본적으로는 runlevel3과 동일하다.    
> X Window 환경으로 실행된 멀티유저 모드(GUI)
- __`6 - reboot (Do NOT set initdefault to this)`__  
> 재부팅
> runlevel6으로 설정시 무한 재부팅 상태가 된다 😮


##
##


_출처_  
https://en.wikipedia.org/wiki/Runlevel    
http://faq.hostway.co.kr/Linux_ETC/1584  
http://blog.naver.com/PostView.nhn?blogId=ryangjm&logNo=10148922552&parentCategoryNo=&categoryNo=8&viewDate=&isShowPopularPosts=false&from=postView  
https://talkingaboutme.tistory.com/entry/Linux-init-process  
https://www.leafcats.com/91  
https://kateee.tistory.com/51  
http://blog.naver.com/PostView.nhn?blogId=dudwo567890&logNo=130153397628
https://hypen1117.tistory.com/entry/%EB%9F%B0%EB%A0%88%EB%B2%A8Runlevel   
https://haerakai.tistory.com/3   
https://til.chann.kr/linux/runlevel-summary   
https://www.linux.co.kr/home/lecture/?leccode=10256
