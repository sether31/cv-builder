import { useState } from "react";
import InputLabel from "../inputLabel";

function Form({ education, updateEducation, removeEducation, setActiveId }) {
  return (
    <>
      <form 
        className="px-8 border-y-[#E4E5E7] border-t-2 pt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <InputLabel
          handleChange={(e) => updateEducation(e, education.id)}
          value={education.school}
          info="*important"
          text="School name"
          type="text"
          placeholder="Enter school"
          name="school"
          id={`school-${education.id}`}
        />
        <InputLabel
          handleChange={(e) => updateEducation(e, education.id)}
          value={education.degree}
          info="recommended"
          text="Degree"
          type="text"
          placeholder="Enter degree"
          name="degree"
          id={`degree-${education.id}`}
        />

        <div className="grid grid-cols-1 gap-2 lg:grid-cols-1 md:grid-cols-2">
          <InputLabel
            handleChange={(e) => updateEducation(e, education.id)}
            value={education.startDate}
            info="*important"
            text="Start date"
            type="text"
            placeholder="Enter start date (eg. June 2025)"
            name="startDate"
            id={`startDate-${education.id}`}
          />
          <InputLabel
            handleChange={(e) => updateEducation(e, education.id)}
            value={education.endDate}
            info="*important"
            text="End date"
            type="text"
            placeholder="Enter end date (eg. Present)"
            name="endDate"
            id={`endDate-${education.id}`}
          />
        </div>

        <InputLabel
          handleChange={(e) => updateEducation(e, education.id)}
          value={education.location}
          info="*important"
          text="Location"
          type="text"
          placeholder="Enter location (eg. Manila, Philippines)"
          name="location"
          id={`location-${education.id}`}
        />
      </form>
      <div className="flex justify-end gap-2 mx-8 mb-4">
        <button
          className="btn-red"
          onClick={() => {
            setActiveId(null)
            removeEducation(education.id)
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
    </>
  )
}

function Education({ data, addEducation, updateEducation, removeEducation }) {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="mt-8 shadow-xl rounded-xl">
      <h1 className="px-8 mb-4 text-2xl font-bold">Education</h1>

      <section className="grid grid-cols-1">
        {data.education.map((education) => (
          <div key={education.id}>
            {activeId === education.id ? (
              <Form 
                education={education} 
                updateEducation={updateEducation}
                removeEducation={removeEducation}
                setActiveId={setActiveId}
              />
            ) : (
              <div className="flex justify-between items-center border-t-2 border-[#E4E5E7] px-8 py-4">
                <button
                  className="font-medium text-left text-md"
                  onClick={() => setActiveId(education.id)}
                >
                  {education.school || 'No school name'}
                </button>
              </div>
            )}
          </div>
        ))}
      </section>
      <button
        onClick={addEducation}
        type="button"
        className="mx-8 mt-4 mb-8 btn-blue"
      >
        Add Education
      </button>
    </div>
  );
}

export default Education;
