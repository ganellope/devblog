import React from 'react';
import { Link, graphql } from "gatsby"


  const Catgories ({ categories }) => {
    return (
      <ul>
        {categories.SiteMenuQuery.siteMetadata.map(({ menu }) => (
            <li>{menu.label}</li>
        ))}
      </ul>
    )
  }

  export const query = graphql`
  query SiteMenuQuery {
      siteMetadata {
        menu
        {
          label
          path
        }
    }
  }
`
export default Catgories
