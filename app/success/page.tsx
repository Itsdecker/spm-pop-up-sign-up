'use client';

export default function Success() {
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center'>
      <div className='bg-white p-8 rounded-md shadow-md'>
        <h1 className='text-2xl font-semibold text-yellow-500'>Success!</h1>
        <p className='mt-4 text-lg'>
          Your form has been successfully submitted.
        </p>
        <p className='mt-2 text-md'>We will get in touch with you shortly.</p>
        <button
          onClick={() => window.history.back()}
          className='mt-6 bg-yellow-400 hover:bg-yellow-500  py-2 px-4 rounded text-gray-800 transition duration-300'
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
