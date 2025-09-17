import { v4 as uuidv4 } from 'uuid';

const dummyData = {
  fullName: 'Seth Michael O. Hernandez',
  email: 'sether31@gmail.com',
  phoneNumber: '0912 912 0912',
  address: 'Rizal, Philippines',
  education: [
    { 
      id: uuidv4(), 
      school: 'University of the Philippines', 
      degree: 'Bachelor of Science in Computer Science', 
      startDate: 'June 2020', 
      endDate: 'April 2024', 
      location: 'Diliman, Quezon City' 
    },
    { 
      id: uuidv4(), 
      school: 'Makati High School', 
      degree: 'High School Diploma', 
      startDate: 'June 2016', 
      endDate: 'March 2020', 
      location: 'Makati City' 
    }
  ],
  experience: [
    {
      id: uuidv4(),
      company: 'TechNova Solutions',
      positionTitle: 'Frontend Developer',
      startDate: 'June 2019',
      endDate: 'December 2021',
      location: 'Austin, TX',
      description: 'Developed and maintained responsive web applications using React.js and TypeScript. Collaborated with designers and backend developers to improve UX and application performance.'
    },
    {
      id: uuidv4(),
      company: 'CloudCore Systems',
      positionTitle: 'Software Engineer Intern',
      startDate: 'February 2022',
      endDate: 'March 2023',
      location: 'Remote',
      description: 'Assisted in building internal tools using Node.js and Express. Participated in daily standups and contributed to the development of microservices architecture.'
    }
  ]
}

export default dummyData;