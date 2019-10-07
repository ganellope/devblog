---
path: "/lalavelframework-lifecycle"
date: "2019-10-05"
title: "Lalavel framework LifeCycle"
---

---
##🧠Lalavel Framework lifecycle


![ex_screenshot](https://user-images.githubusercontent.com/45478754/66266611-cdbab280-e816-11e9-8e9d-7e5d060a0cad.png)


1. 모든 요청의 시작점은 __`public/index.php`__ 파일이다.(프레임워크를 실행하기 위한 로딩의 시작점)

2. composer가 autoload.php파일을 생성하고 bootstrap(php 환경을 로드하는 프로세스)에서 lalavel 응용 프로그램 객체를 가져온다.  
>
 __`bootstrap/app.php`__ : 앱을 로드하고 초기화 

 __`bootstrap/services.php`__ : 서비스를 더 빨리 로드하기 위해 응용 프로그램에 저장    
 __`bootstrap/autoload.php`__:  패키지가 로드  
class나 interface가 없는 경우 자동으로 호출

> __composer__  
php의 의존성 관리를 의한 도구  
필요로 하는 라이브러리를 선언하고 설치 및 업데이트 관리  
`composer.json` 파일에 정의


3. http kernel에서는 애플리케이션 요청 전 통과해야하는 미들웨어처리, 응답 요청 처리, 세션 처리, 쿠키 암호화
> HTTP 미들웨어 : http 요청을 간편하게 필터링, `app/Http/Middleware` 안에 들어있음  
ex) 사용자 인증

4. Service Providers는 애플리케이션에 필요한 클래스로 제공하는 서비스가 실제로 필요한 경우에만 로드해준다.
 __`config/app.php`__ 파일의 __`providers `__ 베열에 설정되어있다.

5.  `route.php` (라우팅 규칙이 정의됭 있다) 파일이 로드되면 request 객체가 응용 프로그램으로 전송되어 경로를 전달한다.
-> 정확한 경로를 찾아 컨트롤러 기능을 호출

6. 컨트롤러는 입력을 확인 후 모델을 호출하고 뷰를 호출한다.


 ---    
##🧠Lalavel Directory 구조

###App
애플리케이션의 핵심코드

###bootstrap
부트스트래핑을 담당하는 `app.php`을 가지고 있다.  
라우트나 서비스 캐시 파일같은 퍼포먼스 향상을 위한 `cache` 디렉토리를 가지고 있다

###Config
애플리케이션의 설정 파일

###Database
마이그레이션 파일 등

###public
애플리케이션에 진입하는 requet요청들에 대한 진입점 역할
오토로딩 설정하는 `index.php` 파일이나 css, js 파일을 지니고 있다.

###resource
뷰파일과 다국어 파일이 들어있다.

###Routes
애플리캐이션에 정의된 라우트 파일이 들어있다.  
__`web.php`__  
세션 상태, 쿠키 암호와 , CSRF(피해자의 의지와는 상관없이 공격자가 위도한 행위로 웹 사이트 공격)보호 기능 제공

###storage
파일 캐시 등 컴파일된 프레임워크에서 생성된 파일이 저장되어있다.

###tests
자동화된 테스트가 포함


_출처_  
https://stackoverflow.com/questions/46095426/what-is-bootstrapping-in-laravel    
https://laravel.kr/docs/5.7/providers    
https://www.techcluesblog.com/laravel-request-lifecycle/   
https://dongvelopment.tistory.com/26     
https://laravel.kr/docs/5.7/structure  ㄴ
