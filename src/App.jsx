import { useState } from "react"
import Nav from "./components/personal-details/nav"
import PersonalDetails from "./components/personal-details/personal"
import CvPreview from "./components/cv-preview/cv-preview";

function App() {

  const [data, setData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const clearData = () => {
    setData({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: ''
    })
  }

  const loadDummyData = () => {
    setData({
      fullName: 'Seth Michael O. Hernandez',
      email: 'sether31@gmail.com',
      phoneNumber: '0912 912 0912',
      address: 'Rizal, Philippines'
    })
  }


  return (
    <section className="grid grid-cols-[.7fr_1fr] m-8 gap-8">
      <div>
        <Nav clearData={clearData} loadDummyData={loadDummyData} />
        <PersonalDetails data={data} handleChange={handleChange} />
      </div>
      <div className="shadow-2xl">
        <CvPreview data={data} />
      </div>
    </section>
  )
}

export default App;
