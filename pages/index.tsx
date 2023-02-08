import { services } from "../data"
// import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
// import { IService } from "../types"
import ServiceCard from "@/components/ServiceCard"

const index = () => {

  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Chemical engineering student with 1+ years of frontend dev experience using React, Vue.js & Next.js.
        Skilled in HTML, CSS, JS & user-centered design.
        Passionate about staying up-to-date with industry trends 
        & delivering high-quality solutions. Committed to innovation & impact."
      </h5>
      <div 
        className="flex-grow p-4 mt-5 bg-gray-400" 
        style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>

            <div className="grid gap-6 lg:grid-cols-2">
          {
            services.map((service) => (

              <div className="bg-gray-200 rounded-lg lg:col-span-1">
                <ServiceCard  service={service}/>
              </div>

            ))}
            </div>

      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
  
//   const res  = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('SERVER', services)

//   return {
//     props: {
//       services: data.services,
//     }
//   }

// }

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