/\* 데이터를 가져온다
데이터를 가져온다
-> 통신을 한다.
-> HTTP 프로토콜
-> 요청과 응답
-> 요청을 하는 주체 : 클라이언트
-> Request HTTP 를 서버에게 보냄
-> 응답을 하는 주체 : 서버
-> Response HTTP 를 클라이언트에게 보냄
요청을 할 때 필요한 정보
-"서버"의 주소 (domain) - HTTP Method - GET ,POST ,PUT, DELTE, PATCH - 위 메서드들을 CRUD에 대응하게 끔 API를 구성하는 것 - 리소스의 위치 정보를 그대로 url 패스로 구성한는 것

      - GET 방식 요청을 읽기(R) 에다가 연결하는 것
      - GET "https://www.api.com/posts/100/comments/30"
      - PUT "https://www.api.com/posts/100/comments/30"
      - POST "https://www.api.com/posts/100/comments/30"
      - PATCH "https://www.api.com/posts/100/comments/30"
      - DELETE "https://www.api.com/posts/100/comments/30"

\*/

#fetch

- 장점 :
  1. 설치를 안해도 된다. 내장함수다
  2. 모든 브라우저에서 기본적으로 호환이 된다.
- 단점 :
  1. 외부 라이브러리들에 비해서 상대적으로 사용편의성이 떨어진다.
- 그럼 언제 fetch를 쓸까?
  - 내가 만약 npm 패키지를 만든다! 이 패키지는 가능한 다른 패키지에 의존적이지 않을 수록 좋겠죠.
  - 
#Axios

- 장점 :
  1. fetch에 비해 사용편의성이 높다
     - baseURL을 설정할 수 있어서 반복적으로 host를 작성할 필요가 없다.
     - 인스턴스화 해서 사용할 수 있다.
     - 인터셉터를 사용할 수 있다.
     - 자동으로 JSON을 JS객체로 변환해 준다.
     - HTTP 메서드 이름과 대응하는 인스턴스 메서드를 가지고 있다.
- 단점 :
  1. 별도로 설치하거나 불러다 사용해야 한다.
  2. (따라서) 프로젝트의 용량이 커진다. 사용자의 인터넷 환경이 느릴경우 영향을 줄 수 있다.









    
function Link ({children}){


  return (

    <div>{chidren}</div>
  )
}






