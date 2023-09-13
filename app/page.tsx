"use client";
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#fffaf2] '>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#fffaf2] text-sm py-4 dark:bg-gray-800 sticky top-0">
        <nav className="max-w-[1350px] w-[95%] mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#">
              <Image
                src="/images/logo.png"
                alt="Fit Bowl Logo"
                className="dark:invert relative -left-5"
                width={100}
                height={24}
                priority
              />
            </a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div id="navbar-with-collapse" className="hidden basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <a className="font-medium text-blue-500" href="#" aria-current="page">About</a>
              <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Menu</a>
              <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Support</a>
              <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#f18318] hover:bg-[#c8560f] text-white transition-all text-sm'>Get Started</button>
            </div>

          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <section className='relative px-2.5'>
        <div className='w-[95%] max-w-[1350px] mx-auto  my-[130px] relative'>

          <div className=''>
            <h1 className='text-[#f18318] text-[65px] font-bold leading-[119%]'>
              No <span className='text-[#241a43]'>Canteen?</span> <br />
              No Problem
            </h1>
            <p className='text-[20px] font-normal leading-7 mt-[20px] mb-[30px]'>
              Stay fuelled at work with our digital cafeteria.<br />
              Great food everyday, right at lunch time!
            </p>
            <div className='flex gap-3'>
              <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#f18318] hover:bg-[#c8560f] text-white transition-all text-sm'>
                Get Started
              </button>
              <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-[#ffe4cc] hover:border-[#ffc188] font-semibold bg-[#fff4ea] text-black hover:bg-[#ffdebf] transition-all text-sm '>
                Download App
              </button>
            </div>
            <div className='static md:absolute right-0 -bottom-[250px] w-[100%] md:w-[45%] mt-[30px]'>
              <img src='/images/imagehero.webp' alt="Hero Food" className="w-[100%] h-[100%]" />
              {/* <Image
                src="/images/imagehero.webp"
                alt="Hero Food"
                className="w-[100%] h-[100%]"
                width={'100'}
                height={24}
                priority
              /> */}
            </div>

          </div>
        </div>

      </section>

      {/* Values Section */}
      <section className='bg-white py-32'>
        <div className='w-[95%] md:w-[90%] max-w-[1350px] mx-auto'>
          <div className='md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-x-7'>
            <div className='md:w-[40%] '>
              <h2 className='text-[#f18318] text-[35px] font-bold leading-[119%]'>
                Schedule your lunch for the week. <span className='text-[#241a43]'>Zero Stress!</span>
              </h2>
              <p className='text-[16px] font-normal py-6'>
                Never worry about what to have for lunch again. Daily meals from a variety of deliciously curated menu delivered right at lunch time. So that’s goodbye to market runs, food preparation or food waste. Pocketfood is your cheat code to healthier, less stressful lunchtimes.
              </p>
              <div>
                <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#f18318] hover:bg-[#c8560f] text-white transition-all text-sm'>Get Started</button>
              </div>
            </div>

            <div className='w-[100%] md:w-[45%] py-3'>
              <img alt='First Value' className='w-[100%]' src='/images/zerostress.webp' />
            </div>
          </div>



          <div className='md:flex md:items-center md:justify-start'>
            <div className='md:w-[40%]'>
              <h2 className='text-[#f18318] text-[35px] font-bold leading-[119%]'>
                Enjoy <span className='text-[#241a43]'>swift delivery</span>at lunch time daily

              </h2>
              <p className='text-[16px] font-normal py-6'>
                Never worry about what to have for lunch again. Daily meals from a variety of deliciously curated menu delivered right at lunch time. So that’s goodbye to market runs, food preparation or food waste. Pocketfood is your cheat code to healthier, less stressful lunchtimes.
              </p>
              <div>
                <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#f18318] hover:bg-[#c8560f] text-white transition-all text-sm'>Get Started</button>
              </div>
            </div>

            <div className='w-[100%] md:w-[45%] md:ml-20 py-3'>
              <img alt='First Value' className='w-[100%]' src='/images/dispatch.webp' />
            </div>
          </div>


          <div className='md:flex md:flex-row-reverse md:items-center md:justify-end md:gap-x-7 pt-32'>
            <div className='md:w-[40%] '>
              <h2 className='text-[#f18318] text-[35px] font-bold leading-[119%]'>
                <span className='text-[#241a43]'>Track</span> your order
              </h2>
              <p className='text-[16px] font-normal py-6'>
                Never worry about what to have for lunch again. Daily meals from a variety of deliciously curated menu delivered right at lunch time. So that’s goodbye to market runs, food preparation or food waste. Pocketfood is your cheat code to healthier, less stressful lunchtimes.
              </p>
              <div>
                <button className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-[#f18318] hover:bg-[#c8560f] text-white transition-all text-sm'>Get Started</button>
              </div>
            </div>

            <div className='w-[100%] md:w-[45%] py-3'>
              <img alt='First Value' className='w-[100%]' src='/images/track.webp' />
            </div>
          </div>
        </div>
      </section>


      {/* Menu Section */}
      <section className='py-[40px]'>
        <div className='max-w-[1350px] mx-auto'>
        <h2 className='text-[#f18318] text-[48px] font-bold leading-[119%] text-center  pb-[50px]'>Our <span className='text-[#241a43]'>Menu</span></h2>
        <div className='px-5 md:gap-5 md:flex md:justify-center'>
          <div className='w-100 max-w-[500px] mx-auto md:mx-0 border rounded-2xl mb-3'>
            <div className='text-center'>
              <img alt='Menu Food' src='/images/8kmenu.png' className='w-100' />
            </div>
            <div className='bg-white p-7 border rounded-b-2xl'>
              <p className='text-[#f18318] text-[24px] font-medium leading-7 mb-2'>8k Menu</p>
              <div>
                <button className='py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border border-[#ffe4cc] hover:border-[#ffc188] font-semibold bg-[#fff4ea] text-black hover:bg-[#ffdebf] transition-all text-[15px] '>
                  View Menu
                </button>
              </div>
            </div>
          </div>
          <div className='w-100 max-w-[500px] mx-auto md:mx-0 border rounded-2xl mb-3'>
            <div>
              <img alt='Menu Food' src='/images/8kmenu.png' className='w-100' />
            </div>
            <div className='bg-white p-7 border rounded-b-2xl'>
              <p className='text-[#f18318] text-[24px] font-medium leading-7 mb-2'>10k Menu</p>
              <div>
                <button className='py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full border border-[#ffe4cc] hover:border-[#ffc188] font-semibold bg-[#fff4ea] text-black hover:bg-[#ffdebf] transition-all text-[15px] '>
                  View Menu
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className='bg-white'>
        <div className='max-w-[1350px] mx-auto p-5'>
          <h2 className='text-[#f18318] text-[48px] font-bold leading-[119%] text-center pt-[40px] pb-[50px]'>What <span className='text-[#241a43]'>our customers</span> are saying</h2>
          <div className='md:flex gap-10'>
            <div className='px-[16px] py-[24px] border rounded-2xl mb-5'>
              <p className='text-[18px] mb-[26px] text-[#3c3125] font-normal'>
                PocketFood has an excellent delivery service! Their pricing is very affordable and they always find ways to improve their services. Plus, their customer service is awesome...and they reward their customers, something most companies in the same business never do. I highly recommend.
              </p>
              <h5 className='text-[18px] text-[#3c3125] font-semibold'>
                Patrick Aziken
              </h5>
              <p className='text-[16px] text-[#3c3125] font-medium'>Technical Support Agent</p>
            </div>

            <div className='px-[16px] py-[24px] border rounded-2xl mb-5'>
              <p className='text-[18px] mb-[26px] text-[#3c3125] font-normal'>
                PocketFood has an excellent delivery service! Their pricing is very affordable and they always find ways to improve their services. Plus, their customer service is awesome...and they reward their customers, something most companies in the same business never do. I highly recommend.
              </p>
              <h5 className='text-[18px] text-[#3c3125] font-semibold'>
                Patrick Aziken
              </h5>
              <p className='text-[16px] text-[#3c3125] font-medium'>Technical Support Agent</p>
            </div>

            <div className='px-[16px] py-[24px] border rounded-2xl mb-5'>
              <p className='text-[18px] mb-[26px] text-[#3c3125] font-normal'>
                PocketFood has an excellent delivery service! Their pricing is very affordable and they always find ways to improve their services. Plus, their customer service is awesome...and they reward their customers, something most companies in the same business never do. I highly recommend.
              </p>
              <h5 className='text-[18px] text-[#3c3125] font-semibold'>
                Patrick Aziken
              </h5>
              <p className='text-[16px] text-[#3c3125] font-medium'>Technical Support Agent</p>
            </div>

          </div>
        </div>
      </section>

      <section className='bg-white px-5'>
        <div className='max-w-[1350px] mx-auto'>
          <div>
            <h2 className='text-[#f18318] text-[48px] font-bold leading-[119%] text-center pt-[40px] pb-[50px]'>Frequently Asked <span className='text-[#241a43]'>Questions</span> </h2>
          </div>

          <div className='max-w-[800px] mx-auto'>
            <div
              className={`flex justify-between items-center px-7 mt-2.5 py-6 bg-[#f18318] rounded-lg text-white`}
            >
              <p className="font-normal text-xs leading-normal">
                What is PocketFood about?
              </p>

              <Image
                src="/images/dropdown.svg"
                alt="Plus"
                height={24}
                width={24}
                priority
                className="cursor-pointer pointer-events-auto"
                onClick={() => { }}
              />

            </div>

            <div className="px-7 py-10 bg-[#fee1c4] rounded mt-[15px]">
              <p className="text-left">PocketFood is a food subscription platform and digital cafeteria designed to help you eat better at work. Whether you’re in the office or working from home, we are removing the hassle of cooking or searching for what to eat by providing delicious fresh meals delivered to your doorstep right at lunch time everyday!</p>
            </div>
          </div>
        </div>

      </section >

      <footer>

      </footer>
    </main >
  )
}
