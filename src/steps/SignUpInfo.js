import React from "react";
import "./steps.css";

function SignUpInfo({ formData, setFormData }) {
  return (
    
    <div className="sign-up-container">
      <label className="fo-label">Organization Name</label>
      <input
      id="first"
        type="text"
        placeholder=""
        value={formData.orgName}
        onChange={(event) =>
          setFormData({ ...formData, orgName: event.target.value })
        }
        
      />
       <label className="fo-label">Organization Type</label>
      <input 
       id="d2"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.orgType}
        onChange={(event) =>
          setFormData({ ...formData, orgType: event.target.value })
        }
      />
       <label className="fo-label" >Business Sector</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData. businesSector}
        onChange={(event) =>
          setFormData({ ...formData,  businesSector: event.target.value })
        }
      /> <label className="fo-label">Busines Type</label>
       <input 
       id="d4"
          className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.businesType}
        onChange={(event) =>
          setFormData({ ...formData,  businesType: event.target.value })
        }
      />
      <br/>
      <label  className="fo-label">TIN</label>
       <input id="d5"
        type="text"
        placeholder=""
        value={formData.tin}
        onChange={(event) =>
          setFormData({ ...formData, tin: event.target.value })
        }
        
      />
         <label className="fo-label">Capital</label>
       <input id="d6"
        type="text"
        placeholder=""
        value={formData.capital}
        onChange={(event) =>
          setFormData({ ...formData, capital: event.target.value })
        }
      />
      <br/>
      <label className="fo-label">Region</label>
      <input 
       id="d2"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.region}
        onChange={(event) =>
          setFormData({ ...formData, region: event.target.value })
        }
      />
       <label className="fo-label" >City</label>
      <input id="d3"
       className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
      /> <label className="fo-label">Sub City</label>
       <input 
       id="d4"
          className="sign-up-container"
        type="text"
        placeholder=""
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
/> <br/>
        <label className="fo-label">Woreda</label>
        <input 
         id="d2"
         className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.woreda}
          onChange={(event) =>
            setFormData({ ...formData, woreda: event.target.value })
          }
        />
         <label className="fo-label" >Specific Location</label>
        <input id="d3"
         className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.specialLocation}
          onChange={(event) =>
            setFormData({ ...formData,specialLocation: event.target.value })
          }
        /> <label className="fo-label">House Number</label>
         <input 
         id="d4"
            className="sign-up-container"
          type="text"
          placeholder=""
          value={formData.houseNumber}
          onChange={(event) =>
            setFormData({ ...formData, houseNumber: event.target.value })
          }
      /><br/>
     <label  className="fo-label">Phone Number</label>
       <input id="d7"
        type="text"
        placeholder=""
        value={formData.phone}
        onChange={(event) =>
          setFormData({ ...formData,phone: event.target.value })
        }
        
      />
         <label className="fo-label">TIN Certification Document</label>
       <input id="d8"
        type="text"
        placeholder=""
        value={formData. tinCd}
        onChange={(event) =>
          setFormData({ ...formData,  tinCd: event.target.value })
        }
      />
       <label className="fo-label">Capital</label>
       <input id="d8"
        type="text"
        placeholder=""
        value={formData.capita}
        onChange={(event) =>
          setFormData({ ...formData, capita: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;
