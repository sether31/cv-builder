import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Nav from "./components/personal-details/nav"
import PersonalDetails from "./components/personal-details/personal"
import CvPreview from "./components/cv-preview/cv-preview";
import Education from "./components/education/education";

function App() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    education: []
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addEducation = () => {
    setData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { id: uuidv4(), school: '', degree: '', startDate: '', endDate: '', location: ''}]
    }));
  };

  const updateEducation = (e, id) => {
    const { name, value } = e.target;

    setData((prevData) => {
      const updatedEducation = prevData.education.map((education) => {
        if(education.id === id){
          return {
            ...education,
            [name]: value
          }
        }
        return education;
      })

      return {
        ...prevData,
        education: updatedEducation
      };
    });
  };

  const removeEducation = (removeId) => {
    setData((prevData) => {
      return ({
        ...prevData,
        education: prevData.education.filter((data) => data.id !== removeId)
      })
    })
  }

  // const deleteEducation = (e, index) => {
    
  // }

  const clearData = () => {
    setData({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      education: []
    })
  }

  const loadDummyData = () => {
    setData({
      fullName: 'Seth Michael O. Hernandez',
      email: 'sether31@gmail.com',
      phoneNumber: '0912 912 0912',
      address: 'Rizal, Philippines',
      education: [
        { id: uuidv4(), school: 'University of the Philippines', degree: 'Bachelor of Science in Computer Science', startDate: 'June 2020', endDate: 'April 2024', location: 'Diliman, Quezon City' },
        { id: uuidv4(), school: 'Makati High School', degree: 'High School Diploma', startDate: 'June 2016', endDate: 'March 2020', location: 'Makati City' }
      ]
    })
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[.7fr_1fr] m-8 gap-8">
      <div>
        <Nav clearData={clearData} loadDummyData={loadDummyData} />
        <PersonalDetails data={data} handleChange={handleChange} />
        <Education 
          data={data} 
          addEducation={addEducation} 
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      </div>
      
      <div className="shadow-2xl">
        <CvPreview data={data} />
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
      </div>  
    </section>
  )
}

export default App;
