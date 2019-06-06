import React from "react"
import Layout from "../components/layout"
import "../css/ui.css"
import "./portfolio.css"
export default () => (
  <Layout>
    <div class="resume-div">
      <h3>프로필</h3>
      <div id="profile">
        <img src="https://user-images.githubusercontent.com/45478754/58774334-6e227100-85b0-11e9-9111-0f48d6e47631.jpg" id="profile-image"></img>
        <div id="profile-content">
          <ul>
            <li>Name : 이가현 Gahyeon Lee</li>
            <li>Addr : 서울시 금천구</li>
            <li>Email : gaehyunee@gmail.com</li>
            <li>Links :
              <a href="https://www.youtube.com/channel/UCtHRehFBuziq3PrQaGdhe3w">Youtube</a>
              <a href="https://twitter.com/gaehyun1">Twitter</a>
              <a href="https://github.com/ganellope">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="resume-div">
        <div>
          <h1>보유기술 <span>(관심분야)</span></h1>
        </div>
        <section>
          <h3>Web-Frontend</h3>
          <ul>
            <li>JavaScript</li>
            <li>Html5</li>
            <li>CSS3</li>
          </ul>
        </section>
        <section>
          <h3>Back-End</h3>
          <ul>
            <li>Java(~8)</li>
            <li>C</li>
            <li>C#</li>
          </ul>
          <ul>
            <li>Python</li>
          </ul>
        </section>
        <section>
          <h3>Framework /Library</h3>
          <ul>
            <li>Spring</li>
            <li>JQuery</li>
            <li>ASP.NET</li>
          </ul>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
          </ul>
        </section>
        <section>
          <h3>Server/DB</h3>
          <ul>
            <li>MySQL/MariaDB</li>
            <li>Oracle</li>
            <li>mssql</li>
            <li>tomcat</li>
            <li>IIS</li>
          </ul>
        </section>

        <section>
          <h3>Tool</h3>
          <ul>
            <li>OZ Report</li>
          </ul>
        </section>
      </div>


      <div class="resume-div">
        <div>
          <h1>Work Experiences</h1>
        </div>

        <section>
          <h3>ziten(짙은) 2017.03~</h3>
          <article>
            생애 첫 회사로 웹 에이전시에서 개발팀에서 일했습니다.
            회사 내에서 자체 CMS를 개발하여 프로젝트에 맞게 변형하는 작업을 하였습니다.
            JAVA개발자로 입사했지만 migration 하며 다양한 언어를 경험했고 마지막에는 개발팀에 혼자 남아
            기획과 고객들과 직접 소통하는 방법을 배웠습니다.
            <span class="used-tech">Used technologies: java,spring,javascript, jquery, MySQL,mssql,oracle,tomcat,IIS,OZ Report</span>
          </article>
        </section>
      </div>


      <div class="resume-div">
        <h1>Projects</h1>
        <section>
          <h3>portfolio project</h3>
          <article>
            <h4>프로젝트 설명</h4>
            <p>
              정적사이트를 제작하기 위해 React 기반의 프레임워크 gatsbyjs를 이용해 개발 netlify를 이용해 배포해
              portfolio 사이트 생성하였다.
            </p>
            <h4>프로젝트 결과</h4>
            <p>
              ui부터 구상하려니 많은 어려움이 있었다. 그동안 backend개발만 하다보니 적응이 어려웠는데 새로운 걸 배우고 사용한다는게
              재밌어 한동안 새벽 2시에 자기도 했다.
              react를 공부하려다보니 기본적으로 알아야하는 지식들이 많았다 예를들어 html,css,javascript es6이다.
              지속적으로 업데이트하면서 학습할 예정이다.
            </p>
          </article>
        </section>
        <section>
          <h3>하나투어 통합 멤버십 앱(2017.03 - 2017.10)</h3>
          <article>
          <ul>
            <li>
              <h4>프로젝트 설명</h4>
              <p>
                  하나투어 관련 멤버십을 통합한 웹앱, cms를 이용한 관리자 페이지 개발
              </p>
            </li>

            <li>
              <h4>프로젝트 결과</h4>
              <p>
                입사 후 처음 하는 프로젝트였으며 spring framework의 전체적인 구조를 이해하며 서브 개발자의 역할을 하였다.
                대부분 api를 통해 받았으며, DB설계를 하며 전체적인 DB구조와 기능을 배웠다.
                질문보다 직접 찾아보고 많은 시행착오를 겪으며 개발을 하여 보다 빨리 적응할 수 있었다.
              </p>
            </li>
          </ul>
          </article>
        </section>

        <section>
          <h3>아라바요 앱(2017.05 - 2018.01)</h3>
          <article>
          <ul>
            <li>
              <h4>프로젝트 설명</h4>
              <p>
                중개인이 원하는 부동산을 찾아 계약을 도와주는 서비스
                모바일 환경을 위한 웹 서비스 개발
              </p>
            </li>
            <li>
              <h4>프로젝트 결과</h4>
              <p>
                진행하면서 수정사항이 많았던 프로젝트로 고객이 이해하기 쉽도록 설명하며
                해결방안을 제시해 설득했다. 이러한 경험을 통해 고객의 니즈를 생각하며 타협점을 찾는 점을 배웠다.
              </p>
            </li>
            </ul>
          </article>
        </section>

        <section>
          <h3>과학창의연례통계 (2018.01 - 2018.02)</h3>
          <article>
            <ul>
              <li>
                <h4>프로젝트 설명</h4>
                <p>과학창의연례 엑셀 데이터를 차트 api를 통해 시각화</p>
              </li>
              <li>
                <h4>프로젝트 결과</h4>
                <p>
                  통계 데이터를 제작 시 직접 데이터를 작성해야했던 불편함을 엑셀 데이터를 바로 읽어올 수 있도록 수정하였다.
                  차트 api는 직접 선택했고 사용자가 원하는 차트를 다양하게 선택할 수 있도록 제공하였다.
                  처음 혼자 진행했던 프로젝트로 전체적인 구조를 잡고 우선순위를 두어 개발했으며 설계의 중요성을 알게되었다.
                </p>
              </li>
            </ul>

          </article>
        </section>

        <section>
          <h3>건설근로자공제회 (2018.05 - 2019.03)</h3>
          <article>
            <ul>
              <li>
                <h4>프로젝트 설명</h4>
                <p>
                건설근로자공제회가 자체적으로 사용하고 있던 프로그램을 웹으로 변환
                전체적인 서비스를 하나로 모으는 작업 하였다.
                </p>
              </li>
              <li>
                <h4>프로젝트 결과</h4>
                <p>
                  asp를 마이그레이션하여 java에 없는 함수를 직접 코딩하여 사용하였다.
                  ozReport 리포팅 툴을 3일간 교육 받고 구현했으며, 기존에 사용하던 데이터베이스의 다이어그램을 제작하였다.
                  각 기능을 담당한 개발자들과 커뮤니케이션하며 모바일과 웹에 기능을 붙이는 역할을 했다.
                  기존에 했던 프로젝트와 달리 상대적으로 규모가 큰 데이터들을 관리하였고
                  어쩌다보니 유지보수를 혼자 맡게 되어 소스를 보며 기능들을 이해하는데 익숙해졌다.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </div>
      <div class="resume-div">
        <h1>유지보수 Project</h1>
        <section>
          <h4>티마크 호텔</h4>
          <ul>
            <li>
              <b>한거</b>
              <p>Wordpress로 제작된 4개의 홈페이지 기능 추가 및 플러그인,서버 관리</p>
            </li>
            <li>
              <b>used technologies</b>
              wordpress, php, apache
            </li>
          </ul>
        </section>

        <section>
          <h4>한국공예디자인문화진흥원</h4>
          <ul>
            <li>
              <b>한거</b>
              <p>로그인 기능 및 리스트 뷰 수정</p>
            </li>
            <li>
              <b>used technologies</b>
              <p>oracle, java, spring, jsp</p>
            </li>
          </ul>
        </section>
        <section>
          <h4>사회보장위원회</h4>
          <ul>
            <li>
              <b>한거</b>
              <p></p>
            </li>
            <li>
              <b>used technologies</b>
              <p>jeus,java, spring, oracle,javascript, JQuery</p>
            </li>
          </ul>
        </section>

        <section>
          <h4>용인시여성회관</h4>
          <ul>
            <li>
              <b>한거</b>
              <p></p>
            </li>
            <li>
              <b>used technologies</b>
              <p>IIS, ASP, mssql, javascript, JQuery</p>
            </li>
          </ul>
        </section>
      </div>
      <div class="resume-div">
        <h1>problem solving</h1>
        <section>
          <h4>content page 관리</h4>
          <article>
            <ul>
              <li>
                <b>문제</b>
                <p>content page 수정 시 운영서버에 직접 적용해야하는 불편함이 있었다 </p>
              </li>
              <li>
                <b>원인</b>
                <p>모든 content page가 파일을 통해서만 수정이 가능하였다</p>
              </li>
              <li>
                <b>측정 (문제의 결과, 심각성)</b>
                <p>자잘한 수정에도 운영서버에 직접 적용해야하는 위험요소가 있었고, 반영하는데 시간이 오래 걸려 고객의 불만이 있었다 </p>
              </li>
              <li>
                <b>해결책</b>
                <p>content page를 db에 저장해 버전 관리 할 수 있게 기획 페이지를 생성하면 시퀀스 넘버를 통해 파일과 연결할 수 있게 개발</p>
              </li>
              <li>
                <b>평가</b>
                <p>수정 시 퍼블단에서 마무리하여 운영에 반영했던 시간이 절약되고 고객이 직접 수정해 사용할 수 있게되었다.</p>
              </li>
            </ul>
          </article>
        </section>
      </div>


      <div  class="resume-div">
        <h1>self-introduction</h1>
        3년차 Back-end개발자 이가현입니다.
        기록하는 걸 조아해 youtube ,blog뭐시기
        새로운 것 배우는ㄱ ㅓ ㅈ앟=해
        하하ㅏㅏㅎ하하ㅏ하하ㅏ하하하하ㅏ하ㅏ하
        
        <section>
          <article>
            <h3>외부활동</h3>
            <ul>
              <li>
                <b>oec 앙트십 스쿨</b>
                <p>
                  기업가적 문제해결 능력 실제 학교에서 문제점을 찾아 개선할 수 있는 해결방안을 찾아 프로젝트를 진행하였음
                </p>
              </li>
              <li>
                <b>[WTD Seoul Meetup] 테크니컬 라이팅</b>
                <p>개발 관련 기록에 대해 관심이 많아져 테크니컬 라이팅 서울 밋업에 참가해 P.O.W.E.R 글쓰기 이론과
                테크니컬 라이터에 관해 알게됨</p>
              </li>
              <li>
                <b>Web관련 컨퍼런스 참가</b>
                <p>
                  으악 리액트 관심많아졌ㅇ 그래서 리액터ㅡ를 이요해 포폴 블로그 만들었어~
                </p>
              </li>
            </ul>
          </article>
        </section>
      </div>



      </div>
  </Layout>

)
