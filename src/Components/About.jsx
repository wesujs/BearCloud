import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32 bg-zinc-200'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Top of The Line Developers Linked Globally</h2>
                    <p className='text-3xl py-6 text-gray-500'>Bear Cloud brings the services built by the greatest minds and the strength of one of nature's strongest animals.</p>
                </div>
    
                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-violet-700 '>100%</p>
                        <p className='text-gray-400 mt-2'>Success Rate</p>
                    </div>
                    <div  className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-violet-700'>24/7</p>
                        <p className='text-gray-400 mt-2'>Service</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl' >
                        <p className='text-6xl font-bold text-violet-700'>10M</p>
                        <p className='text-gray-400 mt-2'>Transactions</p>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default About