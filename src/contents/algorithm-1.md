---
path: "/algorithm-1"
date: "2019-06-03"
title: "[LEVEL1] 소수의 합"
---

***

##Question
2부터 N까지의 모든 소수의 합을 구하세요.
N이 7이라면 {2,3,5,7} = 17을 출력 하시면 됩니다.
N의 범위는 2이상 10,000,000이하 입니다.
효율성 테스트의 모든 시간 제한은 1초입니다.

###🎓소수란?
소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

##Point
1.소수는 2빼고 다 홀수다<br/>
2.자기자신과 1만 나머지가 0이다
```
  5%1 == 0
  5%2 == 1
  5%3 == 2
  5%4 == 1
  5%5 == 0
```


##Answer
```
public long sumPrimeNum(long num){
        if(num==2){
            return 2;
        }else if(num<=1){ //1보다 작고 음수일 경우 0을 return
            return 0;
        }

        long sum  = 2; //홀수만 체크하기 위해서
        boolean check=true;
        for(int i=3; i<=num; i+=2){ //홀수만
            check=true;
            for(int j=2; j<i; j++){ //2~ i-1까지 체크
                if(i%j==0) { //나머지가 0인경우
                    check = false;
                    break; //더 이상 볼 필요 없다!
                }
            }//for j

            if(check){
                sum = sum+i;
            }

        } // for i

        return sum;
    }
```

####_출처_
https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)
https://programmers.co.kr/learn/courses/30/lessons/14406
