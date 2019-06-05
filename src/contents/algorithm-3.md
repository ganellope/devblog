---
path: "/algorithm-3"
date: "2019-06-04"
title: "[LEVEL2] 문자열 내림차순으로 배치하기"
---

---

##Question
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.  
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

##Point
str은 길이 1 이상인 문자열입니다.

##🎓thinking
1. char을 이용하자!
2. 전 예제에서 봤던 `Arrays.sort` 함수를 커스텀해서 쓰자!

##Answer
```
public String charDesc(String str){
  String[] strArr = new String[str.length()];
  for(int i=0;i<str.length(); i++){
    strArr[i]=str.substring(i,i+1); //문자열을 문자열배열로 변경
  }

  Arrays.sort(strArr,new Comparator<String>() {
          @Override
          public int compare(String s1, String s2) {
            if(str.charAt(str.indexOf(s1)) < str.charAt(str.indexOf(s2))){ //char로 비교한다.
              return 1; //내림차순이니까 작은거를 return 1
            }else if(str.charAt(str.indexOf(s1)) > str.charAt(str.indexOf(s2))){
              return -1;
            }else{
              return 0;
            }
          }
    });

  String temp = "";
  for(int i=0;i<strArr.length; i++){
    temp+=strArr[i];
  }

  return temp;
}
```

####_출처_
https://programmers.co.kr/learn/courses/30/lessons/12917
