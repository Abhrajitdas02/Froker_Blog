import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='flex-justify-center font-bold text-3xl'>
            Subscribe
            </h2>
            <p className='font-semibold text-gray-500 my-2 text-lg'>
            to our newsletter to get the latest
            updates and news
            </p>
            <div className="flex flex-col items-center space-y-4">
  <div className="flex items-center space-x-4">
    <textarea
      placeholder="Enter your email"
      className="border border-gray-300 rounded-lg resize-none"
      rows="1"
      style={{ minWidth: '300px' }} 
    ></textarea>
    <button
      className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
    >
      Subscribe
    </button>
  </div>
</div>
          </div>
          <img
          src="/public/image.png" 
          alt="Full Width"
          className="mt-10"
        />
    </div>
  )
}