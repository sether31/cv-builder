import emailIcon from '../../assets/email.png'
import phoneIcon from '../../assets/phone.png'
import locationIcon from '../../assets/location.png'

function CvPreview({data}) {
  return (
    <article>
      <section className='bg-[#0E374E] py-8 text-white'>
        <h1 className='my-4 text-3xl font-bold text-center md:text-4xl sm:my-6'>{data.fullName}</h1>

        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
          {/* email */}
          {data.email && (
            <p className='flex items-center gap-1 text-md'>
              {data.email && <img className='w-6 h-6' src={emailIcon} alt="email icon" />}
              {data.email}
            </p>
          )}
          {/* phone number */}
          {data.phoneNumber && (
            <p className='flex items-center justify-center gap-1 text-md'>
              <img className='w-5 h-5' src={phoneIcon} alt="phone number icon" />
              {data.phoneNumber}
            </p>
          )}
          {/* address */}
          {data.address && (
            <p className='flex items-center justify-center gap-1 text-md'>
              <img className='w-5 h-5' src={locationIcon} alt="location icon" />
              {data.address}
            </p>
          )}
        </div>
      </section>

      {/* education */}
      {
        data.education.length > 0 && 
        <h1 className="bg-slate-200 text-[#0E374E] text-xl text-center p-1 font-bold mt-4 mx-8">
          Education
        </h1>
      }

      {data.education.map((edu, index) => (
        <div key={index} className="mx-12">
          <div>
            <div className="grid grid-cols-[.4fr_1fr] gap-1 mt-4 text-md">
              <div>
                <p>{edu.startDate} - {edu.endDate}</p>
                <p>{edu.location}</p>
              </div>
              <div>
                <p className="font-bold">{edu.school}</p>
                <p>{edu.degree}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* work experience */}
      {
        data.experience.length > 0 && 
        <h1 className="bg-slate-200 text-[#0E374E] text-xl text-center p-1 font-bold mt-4 mx-8">
          Experience
        </h1>
      }

      {data.experience.map((experience, index) => (
        <div key={index} className="mx-12">
          <div>
            <div className="grid grid-cols-[.4fr_1fr] gap-1 mt-4 text-md">
              <div>
                <p>{experience.startDate} - {experience.endDate}</p>
                <p>{experience.location}</p>
              </div>
              <div>
                <p className="font-bold">{experience.company}</p>
                <p>{experience.positionTitle}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}

export default CvPreview;