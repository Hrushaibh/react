import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
  city: "",
  postalCode: "",
  course: "",
  education: "",
  experience: "",
  studyTime: "",
  address: "",
  goals: "",
  newsletter: false,
  terms: false,
};

function RegisterPage() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Course Registration";
  }, []);

  const validate = () => {
    const nextErrors = {};
    if (!/^[A-Za-z\s\-']{2,80}$/.test(formData.fullName.trim())) {
      nextErrors.fullName = "Use 2-80 letters and spaces only.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (formData.phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Phone must include at least 10 digits.";
    }
    if (!formData.dob) nextErrors.dob = "Date of birth is required.";
    if (formData.postalCode && !/^[A-Za-z0-9\s-]{5,10}$/.test(formData.postalCode.trim())) {
      nextErrors.postalCode = "Use 5-10 alphanumeric characters.";
    }
    if (!formData.course) nextErrors.course = "Please select a course.";
    if (!formData.education) nextErrors.education = "Please select education level.";
    if (!formData.experience) nextErrors.experience = "Please select experience level.";
    if (!formData.country.trim()) nextErrors.country = "Country is required.";
    if (!formData.city.trim()) nextErrors.city = "City is required.";
    if (!formData.terms) nextErrors.terms = "You must accept terms and privacy policy.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <>
      <PageHero
        small
        title="Register for Electronics Course"
        subtitle="Join the learning path and track your progress."
      />
      <main className="container">
        <section className="section">
          <div className="card">
            <h2>Student Registration</h2>
            <p className="helper-text">
              Fill in your details to be enrolled in the selected module. All
              fields marked with * are required.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.fullName}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.phone}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input
                    id="dob"
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, dob: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.dob}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <input
                    id="country"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, country: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.country}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    id="city"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, city: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.city}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="postalCode">Postal / ZIP Code</label>
                  <input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, postalCode: e.target.value }))
                    }
                  />
                  <span className="form-error">{errors.postalCode}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="course">Select Course *</label>
                  <select
                    id="course"
                    value={formData.course}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, course: e.target.value }))
                    }
                  >
                    <option value="">Choose a course</option>
                    <option value="tv">Television Technology</option>
                    <option value="mobile">Mobile Architecture</option>
                    <option value="components">Electronic Components</option>
                  </select>
                  <span className="form-error">{errors.course}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="education">Education Level *</label>
                  <select
                    id="education"
                    value={formData.education}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, education: e.target.value }))
                    }
                  >
                    <option value="">Select your level</option>
                    <option value="high-school">High School</option>
                    <option value="college">College / Undergraduate</option>
                    <option value="graduate">Graduate / Postgraduate</option>
                    <option value="professional">Professional / Self-taught</option>
                  </select>
                  <span className="form-error">{errors.education}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="experience">Experience Level *</label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, experience: e.target.value }))
                    }
                  >
                    <option value="">Select experience</option>
                    <option value="beginner">Beginner (no prior knowledge)</option>
                    <option value="intermediate">
                      Intermediate (basic electronics)
                    </option>
                    <option value="advanced">
                      Advanced (want to deepen knowledge)
                    </option>
                  </select>
                  <span className="form-error">{errors.experience}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="studyTime">Preferred Study Time</label>
                  <select
                    id="studyTime"
                    value={formData.studyTime}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, studyTime: e.target.value }))
                    }
                  >
                    <option value="">Select preference</option>
                    <option value="morning">Morning (6am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-6pm)</option>
                    <option value="evening">Evening (6pm-10pm)</option>
                    <option value="weekend">Weekends only</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Street Address</label>
                <input
                  id="address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, address: e.target.value }))
                  }
                  placeholder="Street, building, apartment"
                />
              </div>
              <div className="form-group">
                <label htmlFor="goals">Learning Goals (optional)</label>
                <textarea
                  id="goals"
                  rows="4"
                  value={formData.goals}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, goals: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.terms}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, terms: e.target.checked }))
                    }
                  />
                  I agree to the Terms of Service and Privacy Policy *
                </label>
                <span className="form-error">{errors.terms}</span>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))
                    }
                  />
                  Send me course updates and newsletter (optional)
                </label>
              </div>
              <button type="submit">Register</button>
            </form>
            {submitted ? (
              <p className="helper-text">Registration successful! Welcome to Electronics Learning.</p>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}

export default RegisterPage;
