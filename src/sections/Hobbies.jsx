 import React from 'react'
 import { useState } from 'react'
 
 const Hobbies = () => {  
   return (
     <div>
         <section id="hobbies" className="py-15 px-40 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-12">
              {/* Left Title */}
              <div className="md:w-1/3">
                 <h2 className="text-2xl font-semibold text-gray-800 relative inline-block mt-4">
                Hobbies
                <span className="block w-12 h-0.5 bg-blue-500 mt-2"></span>
                 </h2>
              </div>
     
              {/* Right Description */}
              <div className="md:w-2/3 text-gray-600 text-ms leading-relaxed">
                 <p>
                I love to explore new technologies and learn new things. I enjoy reading books, especially in the genres of fiction and self-improvement. I also like to travel and experience different cultures, which helps me gain a broader perspective on life.
                 </p>
                 <p className="mt-4">
                In my free time, I enjoy painting and sketching, which allows me to express my creativity. I also like to play badminton and go for long walks, as they help me stay active and clear my mind.
                 </p>
              </div>     
            </div>
         </section>
       
     </div>
   )
 }
 
 export default Hobbies
 