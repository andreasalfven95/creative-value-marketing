const Timeline = ({ id, bgcolor }) => {
  return (
    <section id={id} className={`${bgcolor}`}>
      <div className='relative contain flex flex-col py-20'>
        <div className='absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-[60px] md:mx-auto md:right-0 md:left-0'></div>
        <div className='relative z-10'>
          <img
            src='https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=100'
            alt=''
            className='timelineImg'
          />
          <div className='timelineContainer'>
            <div aria-hidden='true' className='timelinePointer'></div>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <span className='font-bold text-indigo-600 text-sm tracking-wide'>
                Jan 2021
              </span>
              <h1 className='text-2xl font-bold'>An amazing trip</h1>
              <p className='pt-1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                provident autem sit unde magni aperiam, voluptas inventore
                delectus commodi reiciendis iste dolorem, rerum distinctio
                deserunt blanditiis et tempore pariatur sed.
              </p>
            </div>
          </div>
        </div>
        <div className='relative z-10 py-4'>
          <img
            src='https://images.pexels.com/photos/3760257/pexels-photo-3760257.jpeg?auto=compress&cs=tinysrgb&h=100'
            alt=''
            className='timelineImg'
          />
          <div className='timelineContainer timelineContainerLeft'>
            <div
              aria-hidden='true'
              className='timelinePointer timelinePointerLeft'
            ></div>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <span className='font-bold text-indigo-600 text-sm tracking-wide'>
                Jan 2021
              </span>
              <h1 className='text-2xl font-bold'>An amazing trip</h1>
              <p className='pt-1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                provident autem sit unde magni aperiam, voluptas inventore
                delectus commodi reiciendis iste dolorem, rerum distinctio
                deserunt blanditiis et tempore pariatur sed.
              </p>
            </div>
          </div>
        </div>
        <div className='relative z-10 py-4'>
          <img
            src='https://images.pexels.com/photos/4115921/pexels-photo-4115921.jpeg?auto=compress&cs=tinysrgb&h=100'
            alt=''
            className='timelineImg'
          />
          <div className='timelineContainer'>
            <div aria-hidden='true' className='timelinePointer'></div>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <span className='font-bold text-indigo-600 text-sm tracking-wide'>
                Jan 2021
              </span>
              <h1 className='text-2xl font-bold'>An amazing trip</h1>
              <p className='pt-1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                provident autem sit unde magni aperiam, voluptas inventore
                delectus commodi reiciendis iste dolorem, rerum distinctio
                deserunt blanditiis et tempore pariatur sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
