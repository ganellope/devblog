---
path: "/algorithm-2"
date: "2019-06-04"
title: "[LEVEL2] 가장 큰 수"
---
---
##Question
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.  
예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.  
0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

##Point
numbers의 길이는 1 이상 100,000 이하입니다.  
numbers의 원소는 0 이상 1,000 이하입니다.  
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.  

##🎓thinking
어떻게 풀어야하나 고민을 했다. 처음에는  `[6,10,2]`  를 문자열 배열로 변경해 substring으로 앞글자가 큰쪽 순으로 배열하려고 하였지만  
만약 앞글자가 같을 경우에 숫자 크기로 비교할 시 끝도 없다는 걸 알아채고 포기했다.  

##Answer
내가 생각해낸 방법
배열 __`[6,10,2]`__  가 있으면 예를 들어 `6+10 == '610'`  와  `10+6 == '106'`을 비교했을 때 뒤에오는 배열의 합이 더 크면 배열 i와 j를 변경해주는 방법을 택했다.
```
public String maxNum(int[] nums){

  for(int i=0; i<nums.length; i++){
    for(int j=i+1; j<nums.length; j++){ //자기자신과 비교할 필요 없으니 i에 1을 더해준다
      if(Integer.parseInt((String.valueOf(nums[i])+String.valueOf(nums[j]))) //문자로 더하고 숫자로 변경해 비교
          < Integer.parseInt((String.valueOf(nums[j])+String.valueOf(nums[i])))){
        int temp = nums[j]; //i와 j순서 바꿔주는 중
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  String answer = "";

  for(int i=0; i<nums.length; i++){
    answer+=String.valueOf(nums[i]); //문자열로 변경해 return
  }

  return answer;
}

```

####💫다른 분들의 생각
Arrays.sort함수에 정렬 기준을 compareTo 함수로 커스텀한 방법
```
public String solution(int[] numbers) {
      String answer = "";

      //int 배열을 String 배열로 변환
      String[] arr = new String[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          arr[i] = (String.valueOf(numbers[i]));
      }

      //배열 정렬, 정렬 규칙으로는 2개를 더하여 더 큰 쪽이 우선순위가 있도록 정렬
      Arrays.sort(arr, new Comparator<String>() {
          @Override
          public int compare(String s1, String s2) {
              return (s2+s1).compareTo(s1+s2);
          }
      });

      //0000 처럼 0으로만 구성되어있으면 0 return
      if (arr[0].equals("0")) return "0";

      //그 외의 경우 순차적으로 연결하여 answer return
      for (int i = 0; i < arr.length; i++) {
          answer+=arr[i];
      }
      return answer;
  }
```

####_출처_
https://programmers.co.kr/learn/courses/30/lessons/42746  
https://developerdk.tistory.com/24
