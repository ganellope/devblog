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
          <h3>보유기술 <span>(관심분야)</span></h3>
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
          <h3>Work Experiences</h3>
        </div>

        <section>
          <h4>ziten(짙은) 2017.03~</h4>
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
        <h3>Projects</h3>
        <section>
          <h4>하나투어 통합 멤버십 앱(2017.03 - 2017.10)</h4>
          <article>
            하나투어 관련 멤버십을 통합한 웹앱, 관리자 페이지 개발
            --많은 데이터들이 api를 통해서만 사용이 가능하였음
            <span></span>
          </article>
        </section>

        <section>
          <h4>아라바요 앱(2017.05 - 2018.01)</h4>
          <article>
            중개인이 원하는 부동산을 찾아 계약을 도와주는 서비스
            --모바일 환경을 위한 웹 서비스 개발
          </article>
        </section>

        <section>
          <h4>과학창의연례통계 (2018.01 - 2018.02)</h4>
          <article>
          엑셀 데이터를  차트  api를 통해 시각화
        --  데이터 직접 입력하는 방식보다 시간 절약
        --  메인개발자로 혼자 한 프로젝트로 커뮤니케이션 방법을 배웠음
          </article>
        </section>

        <section>
          <h4>건설근로자공제회 (2018.05 - 2019.03)</h4>
          <article>
            건설근로자공제회가 자체적으로 사용하고 있던 프로그램을 웹으로 변환
            --전체적인 서비스를 하나로 모으는 작업
            --asp를 java로 마이그레이션했음
            --모든 사용자 화면을 적용했으며 마지막 유지보수는 혼자 맡게되어
            --소스를 보며 프로그램을 이해하는 방법을 익힘
            --ozreport tool을 대표로 3일 동안 교육 후 개발을 맡게됨
          </article>
        </section>
      </div>


      <div class="resume-div">
        <h3>problem solving</h3>
        <section>
          <h4>content page 관리</h4>
          <article>
            --
          </article>
        </section>
      </div>


      <div  class="resume-div">
        <h3>self-introduction</h3>
        <section>
          <article>

          </article>
        </section>
      </div>



      </div>
  </Layout>

)
