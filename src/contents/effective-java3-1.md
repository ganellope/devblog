---
path: "/effective-java3-1"
date: "2019-06-17"
title: "EFFECTIVE JAVA3 1.생성자 대신 static factory method를 고려하라"
---
---

보통 class의 인스턴스는 생성자를 통해 얻는다.
정적 팬터리 메서드를 이용해서도 인스턴스를 반환받을 수 있다.  
이 방식의 장점 단점을 알아보자
##장점  

###1. 이름을 명확히 설명할 수 있다.  
생성자는 객체의 특징을 명확하게 설명해주지 못한다.  
클래스는 하나의 생성자만 추가할 수 있고 파라미터에 변화를 주어 여러개를 생성하기도 하지만 정확히  
확인하기 힘들다.  
`static factory method`는 개수의 제약이 없고 잘 드러내는 명칭으로 만들 수 있다.

```
    public Student(int num){}

    public static Student getStudentNum(int num){
      return new Student(num);
    }
```

###2. 호출될 때 마다 인스턴스를 새로 생성하지 않아도 된다.
불 필요한 객체를 생성하지 않아도 된다!  
__싱글턴(singleton)__ 패턴으로 만들 수 있다.  

```
  private static Student student;

  public static Student gatStudent(){
    if(student == null ){
      student = new Student();
    }

    return student;
  }

```

### 3. 반환 타입의 하위 타입 객체를 반환할 수 있다.
상위 객체를 상속한 하위 객체를 반환할 수 있다.  
구현한 클래스를 다 공개하지 않아도 되게 된다.
```
public static Student getClass(String student){
    if(student.equals("girl")){
      return new girl();
    }else if(student.equals("boy")){
      return new boy();
    }else{
      return new Student();
    }
}
```

__하위 클래스__
```
  public Class girl extends Student{
    public girl(){}
  }
```
### 4. 입력 매개변수에 따라 매번 다른 클래스의 객체를 반환할 수 있다.

실체 클래스의 객체를 반환하지 않아도 된다.  
또 다른 클래스를 사용해도 된다.  



###5. 같은 매개변수를 사용해도 된다.
기존 생성자는 중복 타입의 매개변수를 사용할 수 없었다.  
정적 매개변수는 매개변수가 같아도 명칭이 다르면 사용 가능!

```
  public static Student getName(string name){}
  public static Student getStudentNum(String name){}
```


##단점  


###1. public 이나 protected 생성자가 없으면 정적 팩터리만 있으면 하위 클래스 만들 수 없음
상속을 하려면 public이나 protected 생성자가 꼭 필요하다.


###2. 정적 팩터리 메서드는 찾기 어렵다.
생성자처럼 api설명이 명확하지 않으니 인스턴스를 만들 떄 찾아봐야 한다.  
하지만 이름을 규약에 따라 잘 지으면 크게 문제되지 않는다.    

  `static factory method 명명 방식`
  1. from
  2. of
  3. valueOf
  4. instance or getInstance
  5. create or newInstance
  6. getType
  7. newType
  8. type


_출처_  
_effective java 조슈아 블로크 (인사이트)_
