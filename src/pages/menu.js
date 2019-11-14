import React from 'react'
import Layout from '../components/layout'
// import { FaBeer } from 'react-icons/fa'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import menuImg from '../images/menuBcg.jpeg'

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="menu" subtitle={`let's did in `} />
    </PageHeader>
  </Layout>
)

export default MenuPage
