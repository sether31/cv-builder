import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import dummyData from "./data/dummyData";
import Nav from "./components/personal-details/nav"
import PersonalDetails from "./components/personal-details/personal"
import CvPreview from "./components/cv-preview/cv-preview";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";

function App() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    education: [],
    experience: []
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // education
  const addEducation = () => {
    setData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education, 
        { 
          id: uuidv4(), 
          school: '', 
          degree: '', 
          startDate: '', 
          endDate: '', 
          location: ''
        }
      ]
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

  // work experience
  const addExperience = () => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: [
          ...prevData.experience,
          {
            id: uuidv4(),
            company: '',
            positionTitle: '',
            startDate: '', 
            endDate: '', 
            location: '',
            description: ''
          }
        ]
      }
    })
  }

  const updateExperience = (e, id) => {
    const {name, value} = e.target;
    
    setData((prevData) => {
      const updatedExperience = prevData.experience.map((experience) => {
        if(id === experience.id){
          return {
            ...experience,
            [name]: value
          }
        }
        return experience;
      })

      return {
        ...prevData,
        experience: updatedExperience
      }
    })
  }

  const removeExperience = (removeId) => {
    setData((prevData) => {
      return ({
        ...prevData,
        experience: prevData.experience.filter((experience) => removeId !== experience.id)
      })
    })
  }

  // buttons
  const clearData = () => {
    setData({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      education: [],
      experience: []
    })
  }

  const loadDummyData = () => {
    setData(dummyData)
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
        <Experience 
          data={data}
          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      </div>
      
      <div className="shadow-2xl h-[1000px] min-h-[max-content] pb-16">
        <CvPreview data={data} />
      </div>  
    </section>
  )
}

export default App;
