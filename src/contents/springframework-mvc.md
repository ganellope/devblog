---
path: "/springframework-mvc"
date: "2019-10-06"
title: "Spring mvc 패턴"
---

---
##mvc(model-view-controller)

![ex_screenshot](https://user-images.githubusercontent.com/45478754/66266081-84b33000-e80f-11e9-9a44-0f0d23ce3d4d.png)


1. 사용자의 Action들은 Controller에 들어오게 된다.

2. Controller는 사용자의 Action를 확인하고, Model을 업데이트한다.

3. Controller는 Model을 나타내줄 View를 선택한다.

4. View는 Model을 이용하여 화면을 나타낸다.


###🧠controller
- 모델에 명령을 보내 모델의 상태를 변경할 수 있다.
- 모델이나 뷰의 정보를 알고 있어야 한다.
- 모델이나 뷰의 변경을 모니터링

mvc1 방식에서는 servlet과 jsp가 같이 쓰여서 jsp가 controller 역할을 수행  
-> mvc2방식에서는 servlet이 controller 역할 수행

__✔servlet__  
>  java를 이용해 웹페이지를 동적으로 생성 클라이언트의 HTTP 요청에 대해 특정 기능을 수행, HTML문서를 생성등의 응답을 하는 인터넷 서버 프로그램  

###🧠model
_모델의 상태가 변화가 있을 때 컨트롤러와 뷰에 통보_
- 프로그램 내부 데이터 처리(DB와 연동하여 사용자가 입력한 데이터나 출력 데이터를 다룬다)
- 사용자가 원하는 모든 데이터를 가지고 있어야 한다.
- 뷰나 컨트롤러에 대해서 어떤 정보도 알지 못한다.
- 변경이 일어나면 변경 통지에 대한 처리방법을 구현해야한다.

__✔Business Layer__  
 > service 클래스로 controller계층과 Persitence 계층 사이를 연결하는 역할 두계층이 직접적으로 통신하지 못하게한다.  
핵심 업무를 어떻게 처리할지 기술

__✔Persistence Layer__    
> DAO(Data Acess Object) class가 담당  
DB에서 데이터를 꺼내와 객체와하며 데이터를 저장, 수정, 삭제한다.  
-> DB나 파일에 접근하여 데이터를 CRUD

__✔Domain Model Layer__  
> 데이터 객체를 의미한다.  
속성에 접근하기 위한 setter, getter 메소드만 가진다.  
DB의 모든 정보를 일일이 객체를 만들지 않고 domain model 계층을 이용한다.

###🧠view
_사용자가 볼 결과물을 생성하기 위해 모델로부터 정보를 얻어옴_
- 모델이 가지고 있는 정보를 따로 저장하지 않는다.
- 변경이 일어나면 변경통지에 대한 처리 방법을 구현한다.

---

###mvc 패턴을 사용하는 이유
위에서 아래로 쭉 구현하다 보면 편하지만 비즈니스 로직과 컨트롤 코드가 섞여 있어서 소스를 읽기 힘들고 수정하다가 다른 부분에 영향을 끼칠 가능성이 높다. 또한 기능이 추가될수록 필요한 부분을
찾기 힘들고 확장하는게 힘들어졌다.

-> mvc패턴 방식으로 구현하면 이부분에 대한 해답을 찾을 수 있다.

###mvc패턴의 한계
복잡한 대규모 프로그램을 개발하다보니 view와 model이 복잡하게 연결되어 controller가 뚱뚱해졌다.
그러나 실제로는 View에서 Model을 이용하기 때문에 View와 Model은 의존적이다. View와 Model의 의존성을 완벽하기 분리하기 위한 새로운 패턴이 등장하기도 했다.



---

_출처_  
https://hanee24.github.io/2018/02/14/what-is-mvc-pattern/  
https://na27.tistory.com/224  
https://coding-factory.tistory.com/69  
https://jusungpark.tistory.com/15  
https://m.blog.naver.com/jhc9639/220967034588  
https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC?source=post_page-----1d74fac6e256  
https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256  
https://victorydntmd.tistory.com/119  
https://nickjoit.tistory.com/9
