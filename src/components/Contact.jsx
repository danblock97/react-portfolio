import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#222233] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0f13a50f-63a9-4074-afe7-9bd6984fd72c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#aaccff] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or send me an email at <strong>danblock1997@hotmail.co.uk</strong></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#aaccff] hover:border-[#aaccff] rounded-lg px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact