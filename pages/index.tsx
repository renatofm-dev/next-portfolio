import { fadeInUp, routeAnimate, stagger } from "@/animations";
import { services } from "../data";
import ServiceCard from "@/components/ServiceCard";
import {motion} from "framer-motion";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

import Head from "next/head";

const index: NextPage = (endpoint) => {
  console.log(endpoint)

  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimate} initial="initial" animate="animate" exit="exit">
      <Head>
        <title>Renato Martins | Portfolio</title>
      </Head>

      <h6 className="my-3 font-medium">
        Chemical engineering student with 1+ years of frontend dev experience using React, Vue.js & Next.js.
        Skilled in HTML, CSS, JS & user-centered design.
        Passionate about staying up-to-date with industry trends 
        & delivering high-quality solutions. Committed to innovation & impact."
      </h6>
      <div 
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" 
        style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h4 className="my-3 text-xl font-bold tracking-wide">What I Offer</h4>

          <motion.div className="grid gap-6 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
          {
            services.map((service) => (

              <motion.div
                key={service.title} 
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
                variants={fadeInUp}

              >
                <ServiceCard  service={service}/>
              </motion.div>

            ))}
          </motion.div>
      </div>
    </motion.div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context:GetServerSidePropsContext) => {
  
  // const res  = await fetch(`${process.env.VERCEL_URL}/api/services`)
  // const data = await res.json()
  // console.log(process.env.VERCEL_URL)

  return {
    props: {
      endpoint: process.env.VERCEL_URL
    }
  }

}

// export const getStaticProps = async (context:GetStaticPropsContext) => {
  
//   const res  = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }

// }