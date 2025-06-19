import React from 'react'
import Navigation from '../../components/Navigation'
import { FaNewspaper } from 'react-icons/fa'
import image from "../../assets/w3.png"
import Footer from '../../components/Footer'

const About = () => {
  return (
  <div className='w-[100%] h-[100vh] first-line:overflow-y-auto relative '>
    <Navigation/>
    <div className='w-[100%] h-[100vh] flex lg:items-center md:items-start'>
       
      <div className='lg:px-56 md:px-16 px-4 lg:mt-[69rem] md:mt-44 mt-32'>
        
       <div className='flex items-center gap-4 mb-4 '><FaNewspaper size={25} className='text-green'/><h1 className='text-2xl font-bold'>Intro</h1></div>
        <div className='mb-4'>
          <div data-aos="fade-right" className='lg:border-2 md:border-2 border-0 cursor-pointer border-green p-2 lg:w-[70%] md:w-[90%] w-fit rounded-2xl'>
            <p className='font-semibold text-green mb-2'>
              This water solution company typically provides products and services related to water management, purification, and conservation.
            </p>

            <p className='font-bold text-sm mb-4'>
               Water is a critical resource for any organization. Our solution is designed to provide: 
            </p>

            <p><span className='font-bold text-green mb-2'>1.</span> Reliable access to clean and potable water. </p>
            <p><span className='font-bold text-green mb-2'>2.</span> Efficient management of water resources to reduce waste. </p>
            <p><span className='font-bold text-green mb-2'>3.</span> Sustainable systems that meet environmental standards. . </p>
          </div>
        </div>


        <div className='flex items-center gap-4 mb-4 '><FaNewspaper size={25} className='text-green'/><h1 className='text-2xl font-bold'>Scope of Services</h1></div>
        <div className='mb-4'>
          <div data-aos="fade-right" className='lg:border-2 md:border-2 border-0 cursor-pointer border-green p-2 lg:w-[70%] md:w-[90%] w-fit rounded-2xl mb-4'>
            <p className='font-semibold text-green mb-2'>
              Our services include: 
            </p>

            <p><span className='font-bold text-green mb-2'>1. Water Quality Assessment:</span>  Comprehensive testing of water sources. Identification of contaminants and required treatment solutions. </p>

            <p className='mb-3'><span className='font-bold text-green mb-2'>2. Water Filtration and Treatment: </span>  Installation of advanced filtration systems. </p>

            <p>Reverse osmosis, UV sterilization, or other treatment technologies as needed.  </p>
          </div>
        </div>
          
          <img src={image} className='lg:w-44 md:w-52 w-fit'/>

        <div className='mb-4'>
          <div data-aos="fade-right" className='lg:border-2 md:border-2 border-0 cursor-pointer border-green p-2 lg:w-[95%] md:w-[90%] w-fit rounded-2xl'>
          
            <p className='mb-2'><span className='font-bold text-green mb-2'>1. Wastewater Treatment:</span> Sewage Treatment Plants (STPs): To treat and recycle wastewater. Effluent Treatment Plants (ETPs): For treating industrial wastewater. </p>

            <p className='mb-2'><span className='font-bold text-green mb-2'>2. Conducting programs on (SOLUTION TO POOR HYDRATION):</span>Creating awareness to people on quality of water and environmental sanity. </p>

            <p className='mb-2'>
              <span className='font-bold text-green mb-2'>3. Rainwater Harvesting and Storage:</span> 
              : Rainwater Collection Systems:
              Gutters, filters, and downspouts. 
              Storage Tanks: Specialized tanks with UV protection for rainwater. 
               Filtration Units: To make harvested water safe for use.
             </p>
            <p className='mb-2'>
              <span className='font-bold text-green mb-2'>4. Installation of Solar Powered Submersible pumps: </span> 
                For irrigation in remote areas.
             </p>
            <p className='mb-2'>
              <span className='font-bold text-green mb-2'>5. Agricultural Water Solutions:</span> 
                 Drip Irrigation Systems: For efficient water delivery to crops. 
                  Sprinkler Systems: For even water distribution in fields. 
             </p>
            <p className='mb-2'>
              <span className='font-bold text-green mb-2'>6. Hydro Electric Power Generation: </span> 
                To provide electric power supply using waste water for constant generation.
             </p>
          </div>
        </div>

        <h1 className='text-2xl font-bold mb-2'>Key Benefits:</h1>
        <p className=' gap-2'>
          <span className='font-bold text-6xl text-green'>.</span>
           Cost Savings: Reduction in water wastage and utility costs. 
        </p>
        <p className=' gap-2 -mt-5'>
          <span className='font-bold text-6xl text-green'>.</span>
           Sustainability: Environmentally friendly systems promoting water conservation.  
        </p>
        <p className=' gap-2 -mt-5'>
          <span className='font-bold text-6xl text-green'>.</span>
           Compliance: Adherence to local and international water safety standards.  
        </p>
        <p className='mb-2 -mt-8 gap-2'>
          <span className='font-bold text-6xl text-green'>.</span>
           Scalability: Flexible systems designed to grow with your needs  
        </p>

          
         <h1 className='text-2xl font-bold mb-2'>Implementation Plan:</h1>

         <p className='text-sm flex items-center gap-2 mb-2'>
          <span className='font-bold text-lg text-green'>Phase 1:</span>
             Initial Assessment (1-2 Weeks) 
           Site visit and analysis of current water systems. 
           Identification of specific needs and challenges. 
         </p>

         <p className='text-sm flex items-center gap-2 mb-2'>
          <span className='font-bold text-lg text-green'>Phase 2:</span>
            : Design and Approval (2-4 Weeks) 
            Custom design of water solution systems. 
            Submission of designs for client approval. 
         </p>
         
         <p className='text-sm flex items-center gap-2 mb-2'>
          <span className='font-bold text-lg text-green'>Phase 3:</span>
            Installation and Commissioning (4-6 Weeks) 
            Procurement and installation of equipment. 
            System testing and training of personnel
         </p>

         <p className='text-sm flex items-center gap-2 mb-6'>
          <span className='font-bold text-lg text-green'>Phase 4:</span>
            Ongoing Support Regular maintenance and performance evaluations. 
         </p>
         
          <h1 className='text-2xl font-bold mb-2'>Why Choose Us:</h1>

          <p className='text-sm flex items-center gap-2 mb-6'>
          <span className='font-bold text-lg text-green'>1</span>
            Extensive expertise in water solution technologies. 
         </p>
          <p className='text-sm flex items-center gap-2 -mt-4 mb-6'>
          <span className='font-bold text-lg text-green'>2</span>
            Proven track record of successful implementations.  
         </p>
          <p className='text-sm flex items-center gap-2 mb-6 -mt-4'>
          <span className='font-bold text-lg text-green'>3</span>
            Dedicated customer support and after-sales service. 
         </p>
         <div className='absolute left-0 right-0'><Footer/></div>
      </div>
    </div>    
   </div>
  )
}

export default About