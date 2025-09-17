import { useState } from "react";
import InputLabel from "../inputLabel";

function Form({ experience, setActiveId, updateExperience, removeExperience }) {
  return (
    <>
      <form 
        className="px-8 border-y-[#E4E5E7] border-t-2 pt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputLabel
          handleChange={(e) => updateExperience(e, experience.id)}
          value={experience.company}
          info="*important"
          text="Company name"
          type="text"
          placeholder="Enter company name"
          name="company"
          id={`company-${experience.id}`}
        />
        <InputLabel
          handleChange={(e) => updateExperience(e, experience.id)}
          value={experience.positionTitle}
          info="*important"
          text="Position Title"
          type="text"
          placeholder="Enter position"
          name="positionTitle"
          id={`positionTitle-${experience.id}`}
        />
        <InputLabel
          handleChange={(e) => updateExperience(e, experience.id)}
          value={experience.startDate}
          info="*important"
          text="Start Date"
          type="text"
          placeholder="Enter start date (eg. June 2025)"
          name="startDate"
          id={`startDate-${experience.id}`}
        />
         <InputLabel
          handleChange={(e) => updateExperience(e, experience.id)}
          value={experience.endDate}
          info="*important"
          text="End Date"
          type="text"
          placeholder="Enter end date (eg. Present)"
          name="endDate"
          id={`endDate-${experience.id}`}
        />
        
        <div className="grid gap-1 mb-4">
          <label htmlFor={`description-${experience.id}`}>
            Description <span className="text-xs text-gray-400">*important</span>
          </label>
          <textarea 
            className="resize-y bg-[#E5E7EB] p-2 rounded-lg"
            onChange={(e) => updateExperience(e, experience.id)}
            value={experience.description}
            placeholder="Enter description"
            name="description"
            id={`description-${experience.id}`}
          ></textarea>
        </div>
      
        <div className="flex justify-end gap-2 mx-8 mb-4">
          <button
            className="btn-red"
            onClick={() => {
              setActiveId(null)
              removeExperience(experience.id)
            }}
          >
            Remove
          </button>
          <button 
            className="btn-blue" 
            type="button" 
            onClick={() => setActiveId(null)}
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}

function Experience({ data, addExperience, updateExperience, removeExperience }){
  const [activeId, setActiveId] = useState(null);
  
  return (
  <div className="mt-8 shadow-xl rounded-xl">
      <h1 className="px-8 mb-4 text-2xl font-bold">Work Experience</h1>

      <section className="grid grid-cols-1">
        {
          data.experience.map((experience) => (
            <div key={experience.id}>
              {activeId === experience.id ? (
                <Form 
                  experience={experience} 
                  updateExperience={updateExperience}
                  removeExperience={removeExperience}
                  setActiveId={setActiveId}
                />
              ) : (
                <div className="flex justify-between items-center border-t-2 border-[#E4E5E7] px-8 py-4">
                  <button
                    className="font-medium text-left text-md"
                    onClick={() => setActiveId(experience.id)}
                  >
                    {experience.company || 'No company name'}
                  </button>
                </div>
              )
            }
            </div>
          ))
        }

      </section>

      <button
        type="button"
        onClick={addExperience}
        className="mt-4 mb-8 ml-8 btn-blue"
      >
        Add Experience
      </button>
  </div>
  )
}

export default Experience;