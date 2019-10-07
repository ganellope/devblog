---
path: "/java8"
date: "2019-10-07"
title: "java8 특징 (Optional, Stream, Future)"
---

---
#🧠Optional
- • NullpointException 문제를 해결하기 위한 방법을 제공
- • Optional 사용 시 객체를 생성해야 한다.
- • 모든 타입의 참조 변수를 저장할 수 있다.
- • Import java.util.optional

기존 코드
~~~
if(Student.getName() !=null){
       to do something 	
}



~~~

---

### 1.객체 생성
__✔Optional.of__
- Value가 null인 경우 NullPointException처리 반드시 값이 있어야 할 경우 사용
~~~
Optional<String> opt = Optional.of(“값”);
~~~

__✔Optional.ofNullable__
- Value가 null일 가능성이 있을 경우 사용
~~~
Optional<String> opt = Optional.ofNullable(“값”);
~~~

__✔Optional.empty__
- 조건에 따라 분기를 태워야하고 반활할 값이 없는 경우 사용
~~~
Optional<String> opt = Optional.empty();
~~~

---


### 2. 객체에 접근
__✔ifPresent__
- 최종적인 값이 비어있지 않으면 ifPresent()의 메서드 내용을 수행하지 않는다
~~~
Optional<Strinfg> opt = Optional.of(“값”).isPresent((value) ->{
});
~~~

__✔isPresent__
- 객체 여부 확인 boolean값 반환
~~~
Optional.of(“값”).isPresent(); //true
~~~

__✔get__
- Optional 객체에 저장된 값을 반환함 nullable이여도 값이 null이라면 Exception 발생


---



### 3. Null 대체값 지정
~~~
//기존에 사용한 방법
String value = "";

if(value != null) {
}else {
}



System.out.println("--------orElse-----------");
String test = Optional.of("값").orElse(elseMethod());
System.out.println("orElse : " + test);

System.out.println("--------orElseGet-----------");
String test2 = Optional.of("값2").orElseGet(() -> elseMethod());
System.out.println("orElseGet : "+test2);
~~~
![ex_screenshot](https://user-images.githubusercontent.com/45478754/66309949-768e0e00-e8fa-11e9-96fc-2bcb2ffc8fe0.PNG)

__✔orElse__
-       값이 존재하면 값을 반환, 존재하지 않으면 기본값 지정
-       내부 객체와 상관없이 값을 출력  

__✔orElseGet__
- 값이 존재하지 않으면 기본값으로 함수를 지정
-     내부 객체가 null인 경우에만 출력  
__✔orElseThrow__
- 값이 존재하지 않으면 예외를 발생


---


### 4. 사용법
__✔map__  
> null이 아니면 mapper를 이용해 변환한 값을 저장하는 Optional객체를 리턴

~~~
Optional<tube> tube1 = Optional.of(tube.getTube(null,"girl","duck"));

String tubeName = tube1.map(tube::getName)
                .orElse("null일때");
System.out.println("tube : "+tubeName);
~~~
![ex_screenshot](https://user-images.githubusercontent.com/45478754/66311561-46e10500-e8fe-11e9-8cf2-267c8b7916b4.PNG)  
__✔filter__  
값이 참이면 필터를 통과시키고 거짓이면 빈 Optional 객체를 반환
~~~
Optional<tube> tube1 = Optional.of(tube.getTube(null,"MALE","duck"));

System.out.println(tube1.filter(o -> o.getGender().equals("MALE")).isPresent());  //true

~~~



__✔flatMap__  
 map과 하는 일은 같지만 flatMap은 제너릭이 Optional 객체이다

---


##Anti Pattern
~~~
Optional<String> opt = Optional.empty();  
if(opt.isPresent()){}   // ifPresent
~~~



---

##    
##        
##    


#🧠Stream
- • 배열또는 컬렌션 함수 여러 개를 조합해서 원하는 결과를 필터링
- • 람다 표현을 통해 코드의 양을 줄일 수 있다.
- • java.util.stream
- • 공통 메소드들이 정의되어있는 BaseStream아래에 Steam, InteStream, LongStream, DoubleStream 처럼 타입 요소를 처리하는 스트림이 있다.
- • 구조는 크게 Stream생성, 중간처리 최종처리으로 나뉜다.  
 	-> 객체 집합.Stream생성().중간처리().최종처리()

```
중간 처리 : 요소들의 매핑, 필터링, 정렬  
최종 처리 : 반복, 카운트, 평균, 총합
```

---



###Stream 생성🧐

__Arrays.stream__  
배열로 스트림 생성

```
String[] arr = new String[]{“a”,”b”,”c”};
Stream<String> stream = Arrays.stream(arr);
```

__stream__  
컬렉션 타입(Collection, List,Set)은 stream 메소드를 이용하여 생성

__empty__  
empty stream 요소가 없을 때 null 대신에 사용

__of__    
지정된 값으로 Stream 생성
```
Stream<String> stream = Stream.of(“a”,”b,”c”);
```

__iterate__  
초기값과 람다식을 이용해서 다음에 들어갈 요소를 만든다. 사이즈가 무한하기 때문에 사이즈를 제한해야한다.
```
	Stream<Integer> stream = Stream.iterate(10, n -> n+1).limit(5); //10,11,12,13,14
```

__concat__  
Stream 연결해서 사용

	Stream<String> stream1 = Stream.of(“a”,”b”,”c”);
	Stream<String> stream2 = Stream.of(“d”,”e”,”f”);
	Stream<String> stream3 = Stream.concat(stream1, stream2);

---



###중간 처리 연산🧐

__filter__  
요소들을 조건에 따라 걸러내는 작업
```
//distinct() 중복제거
InteStream(1,2,2,3,3,3,4,4,4,5,5,5,5,6,6,7);
stream.distinct().forEach(System.out::print); //1,2,3,4,5,6,7

 Stream.of("gahyeon","jisu","tube").filter(name->name.contains("e")); //gahyeon, tube

```

__map__  
특정형태로 변환하거나 원하는 필드로만 반환할 때 사용
```
String [] name = {"tube","apaech","muzi"};
ArrayList<String> list = new ArrayList<>(Arrays.asList(name));

Stream<String> nameStream = list.stream().map(String::toUpperCase).sorted(); //APAECH,MUZI,TUBE

```


__sorted__  
요소들을 정렬해준다.


__peek__   
연산이 올바르게 처리했는지 확인할 때 사용 연산 사이에 여러 번 사용 가능하다.  
```
int sum = IntStream.of(1,2,3,4,5,6,7,8,9,10,11,12,13,14).filter(num -> num%2 == 0)
				  .peek(System.out::println)    //2,4,6,8,10,12,14
				  .sum();

```

---

###최종 처리 연산🧐

__forEach__  

Stream 요소 반복

__matching__  
  > boolean값을 반환

- allMatch : 하나라도 조건을 만족한다.
- anyMatch : 모두 조건을 만족한다.
- noneMatch : 모두 조건을 만족하지 않는다.

__collect__  

필터링하고 매핑된 요소들로 구성된 새로운 컬렉션을 생성
```
String [] name = {"tube","apaech","muzi"};



ArrayList<String> list = new ArrayList<>(Arrays.asList(name));

list.stream().filter(names-> names.contains("e")).collect(Collectors.toList()); //[tube,apeach]

list.stream().filter(names-> names.contains("e")).collect(Collectors.joining(", ", "(", ")"));
//(tube,apech)


```


---




##🧠Future
- 비동기 계산의 결과를 나타내는 interface

_출처_

https://itstory.tk/entry/Java-8-OptionalorElse-vs-OptionalorElseGet
https://jdm.kr/blog/234
https://www.daleseo.com/java8-optional-effective/
https://futurecreator.github.io/2018/08/14/java-8-optional/
https://multifrontgarden.tistory.com/131




https://effectivesquid.tistory.com/entry/Java-Stream%EC%9D%B4%EB%9E%80
https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html
https://futurecreator.github.io/2018/08/26/java-8-streams/
https://ryan-han.com/post/java/java-stream/	 //flatMap 테스트
https://ict-nroo.tistory.com/43   스트림의 종류
https://aljjabaegi.tistory.com/397
https://ict-nroo.tistory.com/43 제일 잘 설명
https://effectivesquid.tistory.com/entry/Java-Stream%EC%9D%B4%EB%9E%80
https://jeong-pro.tistory.com/165
https://jongmin92.github.io/2019/03/31/Java/java-async-1/

http://tcpschool.com/java/java_intro_java8
http://pigbrain.github.io/java/2016/04/04/Java8_on_Java
https://juyoung-1008.tistory.com/49
https://blog.fupfin.com/?p=27
https://slenderankle.tistory.com/278
https://m.blog.naver.com/PostView.nhn?blogId=hancury&logNo=220153312739&proxyReferer=https%3A%2F%2Fwww.google.com%2F
