import emailIcon from '../../assets/email.png'
import phoneIcon from '../../assets/phone.png'
import locationIcon from '../../assets/location.png'

function CvPreview({data}) {
  return (
    <article>

      <section className='bg-[#0E374E] py-8 text-white '>
        <h1 className='text-3xl md:text-4xl font-bold text-center my-4 sm:my-6'>{data.fullName}</h1>

        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
          {/* email */}
          {data.email && (
            <p className='flex gap-1 text-md items-center'>
              {data.email && <img className='h-6 w-6' src={emailIcon} alt="email icon" />}
              {data.email}
            </p>
          )}
          {/* phone number */}
          {data.phoneNumber && (
            <p className='flex gap-1 text-md items-center justify-center'>
              <img className='h-5 w-5' src={phoneIcon} alt="phone number icon" />
              {data.phoneNumber}
            </p>
          )}
          {/* address */}
          {data.address && (
            <p className='flex gap-1 text-md items-center justify-center'>
              <img className='h-5 w-5' src={locationIcon} alt="location icon" />
              {data.address}
            </p>
          )}
        </div>
      </section>
    </article>
  )
}

export default CvPreview;