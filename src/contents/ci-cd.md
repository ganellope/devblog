---
path: "/ci-cd"
date: "2019-10-05"
title: "CI/CD"
---


---
## 🧠CI(Continuous Integration)란?

*개발자들이 각자 개발한 소스코드를 모아서 한꺼번에 빌드하는 통합 빌드의 과정을 주기적으로 실행*

- ✔build , test를 실시하는 프로세스를 상시로 실시해주는 것 = __지속적 통합__  
- ✔commit된 소스를 주기적으로 폴링해서 컴파일 등의 과정을 수행하며 신규 또는 수정된 소스코드에 결함이 있는지 여부를 지속적으로 검증한다.

## 🧠CD(Continuous Delivery or Continuous Deploy) 란?

개발자들이 짧은 주기로 소프트웨어를 개발하는 소프트웨어 접근의 하나로 언제든지 신뢰 가능한 수준으로 출시될 수 있도록 보증하기 위한 것이다. 더 빠르고 주기적으로 빌드하고 테스트하고 출시하는 것을 목표로 한다.

- ✔__지속적 배포__
- ✔기본적으로 CI가 구성되어 있어야한다.

## 🧠CI/CD의 차이점

![ex_screenshot](https://user-images.githubusercontent.com/45478754/66267871-35c4c500-e826-11e9-9dbd-d3d6b944cd5b.png)

- • ci는 개발자들을 위한 자동화 프로세스로 코드 충돌을 방지하고 정기적인 빌드 및 테스트를 거쳐 공유 repository에 병합
- • cd는 적용한 변경사항이 버그 테스트를 거쳐 repository에 자동으로 업로드 되는 것이다. (빌드 서버에 의해 패키징된 다음 릴리즈 가능으로 표시되기 전에 테스트)
- • cd는 프로덕션 환경으로 배포하는 작업을 자동화한다.
- • CI는 build의 자동화 CD는 Deploy에 대한 자동화

## 🧠CI 시스템 구축을 위한 핵심 구성요소

1. CI Server
    - 빌드 프로세스를 관리하는 서버
    - ex) Jenkins
2. SCM(Source Code Management)
    - 소스코드 형상 관리(개정과 백업절차 자동화)
    - svn, git 등
3. build Tool
    - 컴파일, 테스트 등을 통해 동작 가능한 소프트웨어를 생성하는 도구
    - 형상관리 소스를 가져와 컴파일 하여 실행 파일로 만드는 과정
    - maven, gradle 등

**CI 수행절차**

1. 소스코드를 컴파일
2. 컴파일된 파일을 배포 형태로 패키징
3. 정적 분석 수행 (실행하지 않고 코드 레벨에서 분석 : 미사용 변수, 비어있는 코드 블락, 불필요한 오브젝트 생성)
4. 분석 결과를 리포팅
5. 패키징 파일을 테스트 서버에 배포


![ex_screenshot](https://user-images.githubusercontent.com/45478754/66267872-39f0e280-e826-11e9-9778-2693469089fd.png)


production 배포까지의 자동화  


---


*출처*

[https://onlywis.tistory.com/9](https://onlywis.tistory.com/9)  

[https://jhleed.tistory.com/130](https://jhleed.tistory.com/130)

[https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

[https://osc131.tistory.com/11](https://osc131.tistory.com/11)

[https://www.redhat.com/ko/topics/devops/what-is-ci-cd](https://www.redhat.com/ko/topics/devops/what-is-ci-cd)  

[http://woowabros.github.io/experience/2018/06/26/bros-cicd.html](http://woowabros.github.io/experience/2018/06/26/bros-cicd.html)  

[https://helloworld-88.tistory.com/50](https://helloworld-88.tistory.com/50)

 [https://asfirstalways.tistory.com/303](https://asfirstalways.tistory.com/303)
