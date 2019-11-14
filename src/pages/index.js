import React from 'react'
// import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import QuickInfo from '../components/homePageComponents/QuickInfo'
import Gallery from '../components/homePageComponents/Gallery'
import Menu from '../components/homePageComponents/Menu'
import { Link } from 'gatsby'
import img from '../images/homeBcg.jpeg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="zapiecek" subtitle="Kowalowa 69 33-161">
        <Link to="/menu/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
