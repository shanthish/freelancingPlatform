import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const GigForm = () => {
  const navigate=useNavigate();
  const [gig, setGig] = useState({
    title: "",
    description: "",
    price: "",
    date: "",
    delivery_date: "",
    revisions: "",
    features: [""],
  });

  const handleChange = (e) => {
    setGig({ ...gig, [e.target.name]: e.target.value });
  };

  const handleFeatureChange = (index, value) => {
    const updatedFeatures = [...gig.features];
    updatedFeatures[index] = value;
    setGig({ ...gig, features: updatedFeatures });
  };

  const addFeature = () => {
    setGig({ ...gig, features: [...gig.features, ""] });
  };

  const removeFeature = (index) => {
    const updatedFeatures = gig.features.filter((_, i) => i !== index);
    setGig({ ...gig, features: updatedFeatures });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let req=await axios.post('http://localhost:8080/add-gig',gig);
    if(req.data.message){
      alert("Gig Added Successfully");
      navigate('/seller',{state:req.data.data});
    }
    else{
      alert("Try Again");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", background: "#f9f9f9" }}>
      <h2>Post a Gig</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={gig.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={gig.description} onChange={handleChange} required />

        <label>Price ($):</label>
        <input type="number" name="price" value={gig.price} onChange={handleChange} required />

        <label>Start Date:</label>
        <input type="date" name="date" value={gig.date} onChange={handleChange} required />

        <label>Delivery Date:</label>
        <input type="date" name="delivery_date" value={gig.delivery_date} onChange={handleChange} required />

        <label>Revisions:</label>
        <input type="number" name="revisions" value={gig.revisions} onChange={handleChange} required />

        <label>Features:</label>
        {gig.features.map((feature, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "5px" }}>
            <input type="text" value={feature} onChange={(e) => handleFeatureChange(index, e.target.value)} required />
            {gig.features.length > 1 && (
              <button type="button" onClick={() => removeFeature(index)} style={{ background: "red", color: "white", border: "none", cursor: "pointer" }}>✖</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addFeature} style={{ margin: "5px 0", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>+ Add Feature</button>

        <button type="submit" style={{ display: "block", width: "100%", background: "#007bff", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>Submit</button>
      </form>
    </div>
  );
};

export default GigForm;
