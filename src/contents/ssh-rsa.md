---
path: "/ssh-rsa"
date: "2019-09-30"
title: "SSH 서버 인증(ssh-rsa)"
---


##🚀목표
1. ssh의 사용 이유를 알고 있다.
2. rsa암호화 방식의 장점을 알고 있다.


##SSH(secure shell protocol)
다른 컴퓨터에 로그인하거나 원격 시스템 관리를 위한 응용프로그램 또는 프로토콜(통신 규약)

##
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65878334-61a2ff00-e37d-11e9-93f0-6a19221137f6.png)
##

- • TCP전송만 가능하다.
- • 주로 22번 포트를 사용
- • 암호화된 통신 프로토콜로 중간에 노출이 되어도 안전하게 통신할 수 있다. (스니핑 예방)
- • 데이터를 압축해 암호화해서 전송

- __linux ssh 접속__
~~~
ssh user@hostname
~~~

---


##RSA
- 공개키 암호시스템으로 공개키로 암호화하여 개인키로 복호화한다.
(반대가 될 수 있음)  
- scp파일(서버에 파일 전송)을 이용하여 일일이 패스워드를 입력하지 않아도 된다.

##SSH Key 인증 🧐

- private key
> 클라이언트가 가지고 있고 공개 되면 아무런 인증없이 로그인이 가능해진다.  
로컬에 위치 (SSH-client)

- public key
> public key로 메시지를 암호화 이 메시지는 private key로만 해석할 수 있다.   
리모트에 위치(SSH-Server)  

~~~
  //rsa 암호화 방식으로 키를 생성
  ssh-keygen -t rsa
~~~

__`id_rsa`__ : private key   
__`id_rsa.pub`__ : public key authorized_keys에 입력함



##
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65881446-f1977780-e382-11e9-99d8-83fd3b793313.gif)
##





_출처_

https://hack-cracker.tistory.com/131  
https://opentutorials.org/module/432/3742  
https://arsviator.blogspot.com/2015/04/ssh-ssh-key.html  
https://ko.wikipedia.org/wiki/RSA_%EC%95%94%ED%98%B8  
https://dec9.tistory.com/190
