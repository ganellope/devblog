---
path: "/in-memorydb"
date: "2019-09-28"
title: "메모리 DB(Redis, 멤캐쉬드 메모리)"
---


##🚀목표
1. In-memory DB를 사용하는 이유를 알고 실제 적용되는 사례를 찾아보자  
2. memcached와 redis를 비교하고 상황에 맞는 선택을 할 수 있다.   
3. redis를 잘 사용하는 법을 알자  
4. redis 솔루션 개념을 알고 있다.

---
## In-memory DB를 사용하는 이유  🤷‍

#### 실시간 처리 요구 증대 -> 하드웨어 구매 유지 관리 -> 기업 입장에서는 부담    

* • hdd 기반 데이터 처리 방식은 데이터 양이 급증할 경우 과부화나 병목현상이 발생한다  
* • 하드디스크가 아닌 처리 속도가 빠른 메모리에서 실시관 관리하여 데이터 처리시간을 단축할 수 있다.  
* • 전원이 꺼지면 데이터가 삭제되기 때문에 날라 가도 상관없는 임시데이터를 저장하는데 주로 쓰인다.

> ex) 로그인세션

* _✔ 하지만  메모리 특성상 영구적으로 데이터를 관리하기 어렵고 용량이 제한적이다._


---

##In-Memory Database란? 🧐
- • 데이터가 메인메모리에 설치되어 운영된다. (메모리의 가격이 용량대비 낮아졌다)
- • RDBMS보다 내부가 더 단순하며 적은 CPU 명령을 실행하여 빠르다
- • key-value 방식으로 저장
- • 저장공간에 제약이 있다. (물론 RDBMS도 그렇다.)
- • 메모리 사용으로 input / output이 빠르다.
- • 오픈소스 프로젝트다.
- • 많은 프로그래밍 언어를 지원한다.
###🍪memcached  
2003년 Brad fitzpartrick에 의해 개발
이후 Perl에서 C로 다시 작성되었다.  
__✔ 장점__  
- • 멀티스레드이므로 쉽게 확장할 수 있다.(수평적 확장)  
-> Redis 3.0 에서는 가능해졌다.  
- • 트래픽이 많은 웹 사이트를 처리하는 데 좋다.(응답속도가 안정적)  
- • 데이터 타입이 String뿐이다. 읽기 전용이므로 복잡하지 않다.  

-     
__✔ 단점__    
- • restart시 데이터가 손실되고 캐시를 다시 작성하는데 많은 비용이 든다.  
- • LRU 삭제 정책만 지원한다.  

__메모리 구조__  
클라이언트가 전송한 데이터를 데이터 크기에 따라 slab class를 선택한 후 그 slab class가 포함된 chunk목록에 저장  
->메모리 조각이 발생하지 않지만 공간 낭비를 일으킬 수 있다.
###🍪redis
2009년 Salvatore Sanfilippo에 의해 개발

__장점__  
- • 다양한 데이터 구조를 지원한다.
- • 캐시 관리 부분에서는 redis가 낫다.(가장 최근에 사용한 알고리즘 사용 새로운 데이터와 크기가 비슷한 데이터를 임의로 제거)
- • key-value 값을 512MB를 허용한다. (memcached는 key 250byte value는 1MB)
- • 데이터를 복제할 수 있다.

__단점__  
- • 싱글스레드이다.
- • 메모리 파편화 이슈가 생길 수 있다.

__메모리 구조__  
메모리 할당 후 메모리 블록 헤더에 메모리 크기를 저장  
-> 이 부분은 나중에


__`복잡한 구조와 작업을 지원할 때는 redis 가능한 단순한 모델이 필요한 경우는 memcached`__


---

##Redis Persistence - 데이터 저장 🐱‍💻

###🍪__RDB (Snapshotting)__
- 지정된 간격으로 데이터 세트의 특정 시점 스냅샷을 수행해 데이터 전체를 바이너리 파일로 저장한다.
- save와 bgsave 방식이 있다.  

>  _• save_  
 > blocking 방식으로 순간적으로 redis의 모든 동작을 정지시키고 그 떄 snapshot을 disk에 저장한다  
 _• bgsave_  
 > non-blocking 방식으로 별도의 process를 띄운 후 명령어 수행 당시의 메모리 snapshot을 disk에 저장  

__✔장점__
- • 단일 시잠 파일이므로 백업에 적합하다.
- • 재난 복구에 매우 유용하다.
- • 빠른 재시작    
-  
__✔단점__
- • redis가 작동을 멈출 경우 snapshot추출 이후 데이터는 유실된다.  
-    

###🍪 __AOP(Append On File)__
- 기본적으로 non-blocking call 방식
- 서버가 수신한 write/update 연산 모두를 log파일에 기록
- 재시작할 때 write/update 연산을 순차적으로 재실행 하여 데이터를 복구

__✔장점__
- • 서버가 다운딜 경우 데이터 유실이 발생하지 않음
- • text file 이므로 수정이 가능해 실수로 잘못된 명령어를 날렸을 경우 shutdown하고 수정한 후 restart 하면 정상적으로 DB를 살릴 수 있다.  
__✔단점__
- • RDB 파일보다 용량이 크다.
- • 복구 시 wirte/update 연산을 다시 재실행하여 restart가 느리다.

---

####

##💥redis를 잘 사용해야하는 이유
1. 싱글쓰레드여서 모든 키를 보여주는 keys 명령어나 모든 데이터를 삭제하는 flushall 사용 시 다른 서비스를 요청하는 명령은 못 받아들인다.
2. 32bit 환경에서는 최대 3GB 메모리만 사용 가능하지만 64bit 시스템에서는 제약이 없어 os의 가상메모리까지 쓰다가 한계를 인식하지 못해 문제를 일으킬 수 있다.  
 -> mexmemory 설정 : maxmemory이상 사용하면 메모리 정책에 따라 과거 키들이 삭제
3. Collection 사용 시 처리시간이 서비스에 지장을 줄 만큼 오래 걸리기 때문에 굳이 사용하려면 1만건 미만으로만 처리
4. redis서버 장애 요인 99.9%가 RDB가 차지한다. 싱글쓰레가 아니라 fork() 방식을 사용해도 메모리를 2배로 잡아먹기에 RDB설정값을 잘 조정해서 사용해야 한다.

---

##

##redis Replication (레디스 복제)

서버 구성시 장애를 대비하기 위해서 사용  
master/slave 방식을 통해 관리하고 master는 `read/write`   slave는 `read` 전용으로 사용하는 걸 권장하고 있다.

- • 비동기 복제를 한다.
- • 복제서버는 default가 읽기 전용이다. (replica-read-only : default yes)  
- • /etc/redis/redis.conf파일을 수정하여 사용한다.

- • __slave 설정__
~~~
slaveof [master ip] [master port]
masterauth [master pw]
~~~

---


##redis sentinel 🐱‍💻
"서버에 대한 상태를 감시한다 "
- • 상태를 체크할 떄 다수결에 의해 결정되므로 가급적 홀수로 구성한다.
- • 운영중이 서버에 구성해도 되고 독립적으로 구성할 수 있다 ( port만 다르면 된다.)  
- • sentinel.conf 파일로 환경설정

###🐇하는 작업
 • __모니터링__
   > master와 slave가 정상적으로 작동하는지 지속적으로 확인한다  

 • __알림__
   > api를 통해 시스템 관리자에게 문제가 있을 경우 알려준다 ( email or sns)  

 • __자동 페일오버__
   > master가 정상적이지 않은 경우 자동적으로 slave가 master로 승격하여 자동으로 조치해주며   
   다른 slave들은 새로 승격된 master로 미러링 할 수 있도록 해준다.

#
#  

__`sdown(subjectively Down condition)`__
> sentinel이 master와 접속이 끊겼다.   
is-master-down-after-milliseconds로 설정한 시간 동안 ping요청에 대한 응답을 받지 못하면 판단   
주관적 다운 상태이다.  

__`odown(Objectively Down condition)`__  
> 과반수 이상이 장애라고 생각 장애 조치를 취하는 단계이다.  
객관적 다운 상태이다.  


---

#
#

##redis Cluster 🐱‍💻  
##
![ex_screenshot](https://user-images.githubusercontent.com/45478754/65875251-7a5be680-e376-11e9-8a4b-6d140495832d.png)    

##  

- • multi master multi slave 구조이다.
- • 서버들을 하나로 묶어 시스템을 사용하게 한다 -> 트래픽을 서버들이 나눠서 처리할 수 있고, 장애가 일어나도 서로 보완
- • TCP Port를 사용해서 통신하는데 기본적으로 redis TCP port와 노드간 통신을 위한 포트의 간격을 10000으로 한다.  
- • data sharding(데이터 샤딩) :  DBMS밖에서 데이터를 나누는 방식 - > scale out가능




##
##
##
_- 출처_   
[http://redisgate.kr/redis/configuration/replication.php](http://redisgate.kr/redis/configuration/replication.php)

[https://redis.io/topics/sentinel](https://redis.io/topics/sentinel)

[https://redis.io/topics/sentinel#more-advanced-concepts](https://redis.io/topics/sentinel#more-advanced-concepts)

[https://jdm.kr/blog/159](https://jdm.kr/blog/159)

[https://daddyprogrammer.org/post/1601/redis-cluster/](https://daddyprogrammer.org/post/1601/redis-cluster/)

[http://redisgate.jp/redis/cluster/cluster_introduction.php](http://redisgate.jp/redis/cluster/cluster_introduction.php)

[https://velog.io/@jnsorn/Redis-6.-Redis-Cluster-사용하기-Cluster-Proxy](https://velog.io/@jnsorn/Redis-6.-Redis-Cluster-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-Cluster-Proxy)

[https://y0c.github.io/2018/10/21/redis-cluster/](https://y0c.github.io/2018/10/21/redis-cluster/)

[https://code-factory.tistory.com/12](https://code-factory.tistory.com/12)

[https://m.blog.naver.com/PostView.nhn?blogId=dandywoobin&logNo=10170958496&proxyReferer=https%3A%2F%2Fwww.google.com%2F](https://m.blog.naver.com/PostView.nhn?blogId=dandywoobin&logNo=10170958496&proxyReferer=https%3A%2F%2Fwww.google.com%2F)  
https://aws.amazon.com/ko/elasticache/redis-vs-memcached/  
https://www.infoworld.com/article/3063161/why-redis-beats-memcached-for-caching.html  
https://medium.com/@Alibaba_Cloud/redis-vs-memcached-in-memory-data-storage-systems-3395279b0941  
https://redis.io/topics/persistence   
https://toma0912.tistory.com/83  
https://ko.wikipedia.org/wiki/%EC%9D%B8%EB%A9%94%EB%AA%A8%EB%A6%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4  
https://velog.io/@jnsorn/Redis-4.-protocol   
https://engkimbs.tistory.com/869   
https://www.zdnet.co.kr/view/?no=20131119174125   
http://www.jidum.com/jidums/view.do?jidumId=260   
https://www.samsungsds.com/global/ko/support/insights/In-Memory-Data-Grid.html  
http://redisgate.kr/redis/configuration/persistence.php   
