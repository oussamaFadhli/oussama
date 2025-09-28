
import React from 'react'
import Layout from '../layout/Layout'
import { Features, Hero, Services, Projects, Contact, ScrollToTopButton } from '@/components/ui'
const page = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features />
        <Services />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </Layout>
    </>
  )
}

export default page
