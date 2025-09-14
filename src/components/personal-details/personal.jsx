import InputLabel from "../inputLabel";

function PersonalDetails({data, handleChange}) {
  return (
    <div className="shadow-2xl rounded-xl p-8 ">
      <h1 className="text-2xl font-bold mb-4">Personal Details</h1>

      <InputLabel 
        handleChange={handleChange} 
        value={data.fullName}
        info="*important" 
        text="Full name" 
        type="text"
        placeholder="First and last name" 
        name="fullName" 
        id="fullName" 
      />
      <InputLabel 
        handleChange={handleChange} 
        value={data.email}
        info="recommended" 
        text="Email" 
        type="text" 
        placeholder="Enter email" 
        name="email" 
        id="email" 
      />
      <InputLabel 
        handleChange={handleChange} 
        value={data.phoneNumber}
        info="recommended" 
        text="Phone number" 
        type="text" 
        placeholder="Enter phone number" 
        name="phoneNumber" 
        id="phoneNumber" 
      />
      <InputLabel 
        handleChange={handleChange} 
        value={data.address} 
        info="recommended" 
        text="Address" 
        type="text" 
        placeholder="Enter address" 
        name="address" 
        id="address" 
      />
    </div>
  );
}

export default PersonalDetails;