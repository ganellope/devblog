---
path: "/make-gatsby-blog"
date: "2019-06-05"
title: "gatsby 이용하여 blog 만들기 "
---

---
##사용하게 된 이유
원래 Jekyll을 이용하여 정적사이트를 만들다가 (hexo로도 만들었었음) 친구의 추천과 react를 써보고 싶은 마음에  
얼른 gatsby를 이용해 blog를 만들게 되었다.  
솔직히 글 올리는게 젤 중요한데 계속 다른곳에 집중하다보니 반성하고 이번에 확실히 결정을 내렸다.  
gatsbyjs를 사용하자!  

##Gatsby란?
gatsby는 정적사이트를 생성하기 위한 도구이다. 원래 대부분 hexo나 jekyll을 이용했었는데  
react를 사용하는 gatsby가 인기를 끌게 되었다.  
사실 어느 것을 써도 무방하지만 react를 사용한다는 것이 굉장히 매력적으로 다가온다.  
gatsby는 GraphQL으로 필요한 데이터를 가져온다. (GraphQL은 아직 잘 모르겠다.)  
`Gatsby 홈페이지` https://www.gatsbyjs.org/


##🚀본격적으로 blog를 만들어보자!

  앞서 `npm`과 `node.js`는 설치되어 있어야한다.

  1. gatsby 설치하기
  ```
   npm install — global gatsby-cli
  ```
  2. gatsby blog 생성
  ```
  gatsby new [blog 폴더명]
  ```
  저는 테마를 사용하지 않았지만 만약 사용하고 싶다면
  ```
    gatsby new [blog 폴더명] [테마주소]
  ```
  3. blog 폴더로 이동
  ```
    cd [blog 폴더명]
  ```
  4. 개발모드로 시작
  ```
    gatsby develop
  ```
  localhost:8000으로 접속하면 확인해볼수 있다.  
`localhost:8000/___graphqld` 입력 시 쿼리확인 해볼 수 있음!


##🧐markdown page를 생성해보자
blog를 생성했을 때 `README.md`이란 markdown으로 만들어진 파일이 있다.  

__markdown이란__  -> [확인해보기](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4)  
처음에는 문법보고 이게 뭐야 태그로 쓰는게 더 낫겠다 했는데 써보니까,,아닙니다 글쓰기 굉장히 편합니다  
본격적으로 markdown page 생성하는 방법을 알아봅시다.


1. __plugin 설치__  
파일을 읽기위한 plugin
```
  npm install --save gatsby-source-filesystem
```
설치 후 __`gatsby-config.js`__ 파일에 추가
```
#각자 markdown page를 사용하고 싶은 폴더에 path설정
plugins: [
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/[path]`,
    name: "markdown-pages",
  },
},
]
```
다음으로 markdown 인 파일을 인식하고 그 내용을 읽을 수 있는 plugin 설치
```
  npm install --save gatsby-transformer-remark
```
설치 후 __`gatsby-config.js`__ 파일에 추가  
```
plugins: [
{
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/[path]`,
    name: "markdown-pages",
  },
},
`gatsby-transformer-remark`,
]
```

2. __markdown을 Html로 변경하기 위한 템플릿 만들기__  

저같은 경우는 ./blogTemplate.js 경로에 만들었습니다.  

```
import React from "react"
import { graphql } from "gatsby"

export default function Template({
data, // this prop will be injected by the GraphQL query below.
}) {
const { markdownRemark } = data // data.markdownRemark holds our post data
const { frontmatter, html } = markdownRemark
return (
  <div className="blog-post-container">
    <div className="blog-post">
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
)
}

export const pageQuery = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`

```

3. __Node API를 사용하여 정적 페이지를 생성__   
__`gatsby-node.js`__ 파일에 추가  

```
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
const { createPage } = actions

const blogPostTemplate = path.resolve(`./blogTemplate.js`)

return graphql(`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`).then(result => {
  if (result.errors) {
    return Promise.reject(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
})
}

```

__markdown 페이지 작성 시__


```
---
path: "/blog/my-first-post"
date: "2017-11-07"
title: "My first blog post"
---

```

path,date,title은 추가해주세요



_출처_
https://www.gatsbyjs.org/docs/adding-markdown-pages/
https://wonism.github.io/create-blog-with-gatsby/
