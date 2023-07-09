import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    schoolId: "",
    teacherId: "",
    disability: "",
    age: "",
    level: "",
    gender: "",
    aadharNo: "",
    fraction: "",
    addition: "",
    subtraction: "",
    two_words: "",
    vocabulary: "",
    traditional_modern_game: "",
    mumbai_map_topography: "",
    lemonSharbat_making: "",
    stamping_design: "",
    family_member_identification: "",
    museumThings_identification: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Validate fields with values between 1 and 10
    const fieldsToValidate = [
      "fraction",
      "addition",
      "subtraction",
      "two_words",
      "vocabulary",
      "traditional_modern_game",
      "mumbai_map_topography",
      "lemonSharbat_making",
      "stamping_design",
      "family_member_identification",
      "museumThings_identification",
    ];

    fieldsToValidate.forEach((field) => {
      const value = formData[field];
      if (!value || isNaN(value) || value < 1 || value > 10) {
        errors[field] = "Value must be between 1 and 10";
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Send form data to the backend API
      await axios.post(
        "http://localhost:8080/api/students/addstudents",
        formData
      );
      console.log("Form data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    // Reset form fields
    setFormData({
      name: "",
      address: "",
      schoolId: "",
      teacherId: "",
      disability: "",
      age: "",
      level: "",
      gender: "",
      aadharNo: "",
      fraction: "",
      addition: "",
      subtraction: "",
      two_words: "",
      vocabulary: "",
      traditional_modern_game: "",
      mumbai_map_topography: "",
      lemonSharbat_making: "",
      stamping_design: "",
      family_member_identification: "",
      museumThings_identification: "",
    });
    setFormErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        School ID:
        <input
          type="text"
          name="schoolId"
          value={formData.schoolId}
          onChange={handleChange}
        />
      </label>

      <label>
        Teacher ID:
        <input
          type="text"
          name="teacherId"
          value={formData.teacherId}
          onChange={handleChange}
        />
      </label>

      <label>
        Disability:
        <input
          type="text"
          name="disability"
          value={formData.disability}
          onChange={handleChange}
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Level:
        <input
          type="text"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </label>

      <label>
        Aadhar No:
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Fraction (1-10):
        <input
          type="number"
          name="fraction"
          value={formData.fraction}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.fraction && (
          <span className="error">{formErrors.fraction}</span>
        )}
      </label>

      <label>
        Addition (1-10):
        <input
          type="number"
          name="addition"
          value={formData.addition}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.addition && (
          <span className="error">{formErrors.addition}</span>
        )}
      </label>

      <label>
        Subtraction (1-10):
        <input
          type="number"
          name="subtraction"
          value={formData.subtraction}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.subtraction && (
          <span className="error">{formErrors.subtraction}</span>
        )}
      </label>

      <label>
        Two Words (1-10):
        <input
          type="number"
          name="two_words"
          value={formData.two_words}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.two_words && (
          <span className="error">{formErrors.two_words}</span>
        )}
      </label>

      <label>
        Vocabulary (1-10):
        <input
          type="number"
          name="vocabulary"
          value={formData.vocabulary}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.vocabulary && (
          <span className="error">{formErrors.vocabulary}</span>
        )}
      </label>

      <label>
        Traditional/Modern Game (1-10):
        <input
          type="number"
          name="traditional_modern_game"
          value={formData.traditional_modern_game}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.traditional_modern_game && (
          <span className="error">{formErrors.traditional_modern_game}</span>
        )}
      </label>

      <label>
        Mumbai Map Topography (1-10):
        <input
          type="number"
          name="mumbai_map_topography"
          value={formData.mumbai_map_topography}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.mumbai_map_topography && (
          <span className="error">{formErrors.mumbai_map_topography}</span>
        )}
      </label>

      <label>
        Lemon Sharbat Making (1-10):
        <input
          type="number"
          name="lemonSharbat_making"
          value={formData.lemonSharbat_making}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.lemonSharbat_making && (
          <span className="error">{formErrors.lemonSharbat_making}</span>
        )}
      </label>

      <label>
        Stamping Design (1-10):
        <input
          type="number"
          name="stamping_design"
          value={formData.stamping_design}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.stamping_design && (
          <span className="error">{formErrors.stamping_design}</span>
        )}
      </label>

      <label>
        Family Member Identification (1-10):
        <input
          type="number"
          name="family_member_identification"
          value={formData.family_member_identification}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.family_member_identification && (
          <span className="error">
            {formErrors.family_member_identification}
          </span>
        )}
      </label>

      <label>
        Museum Things Identification (1-10):
        <input
          type="number"
          name="museumThings_identification"
          value={formData.museumThings_identification}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        {formErrors.museumThings_identification && (
          <span className="error">
            {formErrors.museumThings_identification}
          </span>
        )}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
