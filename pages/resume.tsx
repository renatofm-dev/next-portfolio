import Bar from '@/components/Bar';
import { languages, tools } from '@/data';
import React from 'react';
import {motion} from 'framer-motion';
import { fadeInUp, routeAnimate } from '@/animations';

const resume = () => {



  return (
    <motion.div className='px-6 py-2' variants={routeAnimate} initial="initial" animate="animate" exit="exit">
      {/* education and exp. */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className='my-3 text-2xl font-bold '>Education</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Chemical engineering student</h5>
            <p className='font-semibold'>lorem...</p>
            <p className='my-3'>lorem...</p>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className='my-3 text-2xl font-bold '>Experience</h5>
          <div>
            <h5 className='my-2 text-xl font-bold'>Frontend Developer Jr.</h5>
            <p className='font-semibold'>lorem...</p>
            <p className='my-3'>lorem...</p>
          </div>
        </motion.div>
      </div>
      {/* Lenguages and tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className='my-2'>
            {
              languages.map(language => <Bar data={language} key={language.name}/>)
            }
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className='my-2'>
            {
              tools.map(tool => <Bar data={tool} key={tool.name}/>)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}


export default resume