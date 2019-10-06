---
path: "/redis-rdb-setting"
date: "2019-09-29"
title: "Redis RDB 설정값"
---
---


**save**

- 서버가 메모리의 내용을 자동으로 dump하는 시점 관련 설정

~~~
    #300초(5분) 동안에 10번의 키변경
    save 400 10
    #이벤트를 사용하지 않는다.
    save ""
~~~

**stop-writes-on-bgsave-error**

- 백그라운드에서 dump 중 에러가 발생했을 때 처리 설정
~~~
    #실패 시 모든 쓰기 요청 거부
    stop-writes-on-bgsave-error yes

    #쓰기 요청은 처리하지만 데이터는 저장하지 않는다
    stop-writes-on-bgsave-error no
~~~


**rdbcompression**

- 스냅샷 파일의 압축 여부 (cpu사용량 up, rdb file size down)
~~~
    #기본값 yes
    rdbcompression yes
~~~
**rdbchecksum**

- 스냅샷 파일을 로딩할 때 checksum이 일치하지 않으면 redis를 실행하지 않는다
~~~
    #기본값 yes
    rdbchecksum yes
~~~
**dir**

- redis가 생성하는 파일의 기본 위치 working directory 저장
- 기본값  ./
~~~
    dir [directory path]
~~~
**dbfilename**

- RDB 파일 이름 지정
~~~
    dbfilename [filename]
~~~
**수동으로 저장할 때**  
~~~
    redis-cli save

    #자식 프로세스 생성
    redis-cli bgsave
~~~
