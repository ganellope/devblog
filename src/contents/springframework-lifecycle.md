---
path: "/springframework-lifecycle"
date: "2019-10-06"
title: "Spring Framework LifeCycle"
---

---

##Spring LifeCycle

![ex_screenshot](https://user-images.githubusercontent.com/45478754/66265619-37cc5b00-e809-11e9-8b23-ea3f1300a745.png)
[브라우저의 Request를 받고 Response를 하기까지의 mvc흐름]

##
#

1. DispatcherServlet이 요청을 처리하기 전에 filter에서 처리를 한다. (대표적으로 인코딩 : web.xml에서 filter 설정)

2. DispatcherServlet은 적절한 컨트롤러를 선택하는 작업을 HandlerMapping에 전달 한다.  HandlerMapping은 URL에 맵핑된 컨트롤러를 선택한 후 DispatcherServlet에 전달한다.

3. DispatcherServlet 은 Controller의 로직을 실행한 후 HandlerAdapter로 전달
4. HandlerAdapter는 Controller의 로직을 처리한다.

5. Controller는 비즈니스 로직을 실행하고 처리 결과를 Model에 설정한 후 뷰 이름을 HandlerAdapter에 전달한다.

6. DispatcherServlet은 뷰이름에 해당하는 작업을 ViewResolver로 전달한 후 ViewResolver가 매핑된 뷰를 반환해준다.

7. DispatcherServlet은 controller와 model에서 처리된 결과를 뷰에 전달해준다.

9. 뷰는 모델 데이터의 응답을 반환해준다.





###Dispatcher Servlet
  - Servlet Container에서 http 프로토콜을 통해 들어오는 모든 요청을 계층의 제일 앞에서 처리해주는 것
  - DispatcherServlet이 처리하게 url패턴을 정해줘야한다. (기존에는 web.xml에 모두 등록)

###HandlerMapping
  - dispatcherservlet에서 들어오는 요청을 컨트롤러에 맵핑 해주는 것

###ViewResolver
view이름으로부터 사용될 view 객체를 맵핑하는 역할





_출처_   

https://all-record.tistory.com/164    
https://galid1.tistory.com/527  
http://terasolunaorg.github.io/guideline/1.0.1.RELEASE/en/Overview/SpringMVCOverview.html#id2  
