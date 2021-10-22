import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import * as styles from './Layout.module.scss'
import { Helmet } from 'react-helmet'
import '../../styles/index.scss'

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.title}</title>
      </Helmet>
      <div className={styles.wrapper}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
