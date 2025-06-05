import React, { useState } from "react";
import "./App.css";

/**
 * PUBLIC_INTERFACE
 * Main App container for SpeechConnect Kids.
 * Implements all required sections, navigation, and layout.
 */
function App() {
  const [activeSection, setActiveSection] = useState("about");

  // Section navigation items and icons
  const navItems = [
    { key: "about", name: "About Us", emoji: "👩‍⚕️" },
    { key: "milestones", name: "Milestones", emoji: "🎯" },
    { key: "videos", name: "Video Library", emoji: "📺" },
    { key: "testimonials", name: "Testimonials", emoji: "💬" },
    { key: "appointments", name: "Book Appointment", emoji: "📅" },
    { key: "questionnaire", name: "Questionnaire", emoji: "📝" }
  ];

  return (
    <div className="app" style={{ background: "var(--base-dark)" }}>
      <Navbar
        navItems={navItems}
        active={activeSection}
        setActive={setActiveSection}
      />
      <main>
        <div className="container" style={{ paddingTop: 88 }}>
          {activeSection === "about" && <AboutUs />}
          {activeSection === "milestones" && <Milestones />}
          {activeSection === "videos" && <VideoLibrary />}
          {activeSection === "testimonials" && <ParentTestimonials />}
          {activeSection === "appointments" && <AppointmentScheduler />}
          {activeSection === "questionnaire" && <ParentQuestionnaire />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

/* ------------------- Navbar -------------------- */
/**
 * PUBLIC_INTERFACE
 * Navigation Bar for main app.
 */
function Navbar({ navItems, active, setActive }) {
  return (
    <nav className="navbar" style={{
      background: "#131630",
      borderBottom: "2px solid #222a49"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div className="logo" style={{ gap: 10 }}>
          <span className="logo-symbol" style={{ color: "#4A90E2", fontSize: 28 }}>🎨</span>
          <span style={{ fontWeight: 600, letterSpacing: 0.6, color: "#fff" }}>SpeechConnect Kids</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              className="btn"
              style={{
                background: active === item.key ? "#4A90E2" : "#1c2044",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "8px 14px",
                fontWeight: active === item.key ? 700 : 500,
                fontSize: "1rem",
                outline: "none",
                transition: "background .16s"
              }}
              aria-current={active === item.key ? "page" : undefined}
              onClick={() => setActive(item.key)}
            >
              <span style={{ marginRight: 6 }}>{item.emoji}</span>{item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ------------------- About Us -------------------- */
/**
 * PUBLIC_INTERFACE
 * About Us section: Therapist details, photo, and social links.
 */
function AboutUs() {
  return (
    <section className="hero" style={{
      paddingTop: 50,
      alignItems: "center",
      minHeight: "50vh"
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="https://i.ibb.co/vcXS3qV/rashi-shetty-profile.png"
          alt="Rashi Shetty"
          style={{
            width: 124,
            height: 124,
            borderRadius: "50%",
            border: "4px solid #4A90E2",
            marginBottom: 18,
            objectFit: "cover",
            boxShadow: "0 3px 24px #222b5c44"
          }}
        />
        <div className="subtitle" style={{ marginBottom: 5, fontWeight: 600 }}>
          Rashi Shetty, M.Sc. SLP, BASLP
        </div>
        <h1 className="title" style={{ marginTop: 0, fontSize: "2.25rem", marginBottom: 12 }}>
          Empowering Children, Enabling Speech
        </h1>
        <div className="description" style={{ maxWidth: 520 }}>
          SpeechConnect Kids (by Rashi Shetty, SLP) helps children and families bridge communication gaps.<br />
          <span style={{ color: "#F5A623" }}>Based in Velachery.</span> 10+ years’ experience in pediatric speech and language therapy. Passionate about family-centered care.
        </div>
        <div style={{
          marginTop: 16,
          display: "flex",
          gap: 18,
          justifyContent: "center"
        }}>
          <SocialIcon
            url="https://instagram.com/"
            label="Instagram"
            icon={<span style={{ fontSize: 28 }}>📷</span>}
            accent="#F5A623"
          />
          <SocialIcon
            url="https://facebook.com/"
            label="Facebook"
            icon={<span style={{ fontSize: 28 }}>📘</span>}
            accent="#4A90E2"
          />
          <SocialIcon
            url="https://youtube.com/"
            label="YouTube"
            icon={<span style={{ fontSize: 28 }}>▶️</span>}
            accent="#e74c3c"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------- Social Icon -------------------- */
/**
 * PUBLIC_INTERFACE
 * Renders a single social icon link.
 */
function SocialIcon({ url, label, icon, accent }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 44,
        height: 44,
        background: accent,
        borderRadius: "50%",
        color: "#fff",
        fontSize: 22,
        textDecoration: "none",
        boxShadow: "0 2px 8px #0002"
      }}
    >
      {icon}
    </a>
  );
}

/* ------------------- Milestones -------------------- */
/**
 * PUBLIC_INTERFACE
 * Milestones section: Expandable accordion for age-wise milestones.
 */
function Milestones() {
  // Milestone data structured by age group
  const milestoneData = [
    {
      age: "0-1 Year",
      details: [
        "Cooing, babbling, smiles responsively",
        "Turns to sounds, recognizes voices",
        "Expresses wants by crying and gestures"
      ]
    },
    {
      age: "1-2 Years",
      details: [
        "Says first words (~12 months)",
        "Understands simple questions",
        "Imitates words and sounds"
      ]
    },
    {
      age: "2-3 Years",
      details: [
        "Combines 2-3 words (“want juice”)", "Follows simple instructions",
        "Asks simple questions ('what’s that?')"
      ]
    },
    {
      age: "3-5 Years",
      details: [
        "Tells short stories, answers ‘why’, ‘how’",
        "Speech mostly understood by strangers",
        "Plays with peers using language"
      ]
    },
    {
      age: "6-9 Years",
      details: [
        "Understands jokes, riddles, details",
        "Uses complex sentences",
        "Relates events in sequence"
      ]
    },
    {
      age: "10-15 Years",
      details: [
        "Masters figurative language",
        "Engages in debates, presentations",
        "Understands implied meanings"
      ]
    }
  ];
  // Accordion state: track which panel is open
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ marginTop: 24, marginBottom: 28 }}>
      <h2 style={{
        color: "#4A90E2",
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: 18
      }}>🎯 Speech &amp; Language Milestones</h2>
      <div
        style={{
          boxShadow: "0 2px 14px #22330022",
          borderRadius: 12,
          background: "#181d38",
          overflow: "hidden"
        }}
      >
        {milestoneData.map((item, idx) => (
          <div key={item.age}>
            <button
              onClick={() => setOpenIdx(idx === openIdx ? -1 : idx)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: idx === openIdx ? "#263585" : "transparent",
                color: "#fff",
                border: "none",
                fontWeight: 600,
                padding: "1rem",
                fontSize: "1.12rem",
                letterSpacing: 0.2,
                cursor: "pointer",
                borderBottom: idx < milestoneData.length - 1 ? "1px solid #293063" : "none",
                transition: "background .17s"
              }}
              aria-expanded={idx === openIdx}
            >
              <span style={{
                marginRight: 14,
                fontSize: "1.23em"
              }}>
                {idx === openIdx ? "▼" : "▶️"}
              </span>
              {item.age}
            </button>
            {idx === openIdx && (
              <ul style={{
                background: "#24315e",
                margin: 0,
                padding: "0 24px 16px 50px",
                color: "#fff",
                fontSize: "1rem"
              }}>
                {item.details.map((d, i) => (
                  <li key={i} style={{ margin: "10px 0" }}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, color: "#7ED321", fontWeight: 500 }}>
        Wondering about your child’s milestones? If in doubt, reach out for a consultation!
      </div>
    </section>
  );
}

/* ------------------- Video Library -------------------- */
/**
 * PUBLIC_INTERFACE
 * Video Library section: Displays free and paid videos (*sample static content).
 */
function VideoLibrary() {
  // Example videos: Normally, links/locked could be dynamic or fetched
  const videoList = [
    {
      id: 1, title: "Basics of Speech Therapy", free: true,
      url: "https://www.youtube.com/embed/ZIWPaTzrX2k"
    },
    {
      id: 2, title: "Parent-Child Interaction Tips", free: true,
      url: "https://www.youtube.com/embed/D9vx4a7TTAE"
    },
    {
      id: 3, title: "Advanced Articulation", free: false
    },
    {
      id: 4, title: "Fluency Enhancement Games", free: false
    }
  ];

  // Simulate click to buy: alert for demo only.
  const handlePurchase = (title) => alert(
    `To purchase "${title}", please proceed to Online Payments section or schedule an appointment.`
  );

  return (
    <section style={{ marginTop: 18 }}>
      <h2 style={{
        color: "#4A90E2",
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: 18
      }}>📺 Video Library</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px"
      }}>
        {videoList.map((vid) => (
          <div
            key={vid.id}
            style={{
              background: "#181d38",
              borderRadius: 10,
              width: 320,
              boxShadow: "0 2px 12px #001d2f17",
              padding: "14px 12px",
              textAlign: "center",
              position: "relative"
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: "1.13em" }}>{vid.title}</div>
            {vid.free && vid.url ? (
              <div style={{ marginBottom: 8 }}>
                <iframe
                  title={vid.title}
                  width="100%"
                  height="180"
                  src={vid.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: 8 }}
                />
                <div style={{
                  color: "#7ED321",
                  fontWeight: 500,
                  fontSize: ".92em",
                  marginTop: 8
                }}>FREE</div>
              </div>
            ) : (
              <div style={{ margin: "28px 0" }}>
                <span style={{ color: "#F5A623", fontWeight: 600, letterSpacing: 0.2 }}>Paid Content</span>
                <br />
                <button
                  className="btn"
                  style={{
                    marginTop: 12,
                    background: "#4A90E2",
                    color: "#fff"
                  }}
                  onClick={() => handlePurchase(vid.title)}
                >
                  Purchase Video
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 18,
        color: "#aaa",
        fontSize: ".97em"
      }}>
        <b>Note:</b> Paid video access will be available upon successful online payment.
      </div>
    </section>
  );
}

/* ------------------- Parent Testimonials -------------------- */
/**
 * PUBLIC_INTERFACE
 * Carousel for parent testimonials (static sample content).
 */
function ParentTestimonials() {
  const testimonials = [
    {
      name: "Arjun's Mom",
      text: "Rashi helped my son find his words. The progress in 3 months is amazing. The sessions are fun and he looks forward to them!",
      avatar: "🧑‍🦰"
    },
    {
      name: "Meena, Parent",
      text: "Very professional and warm. We felt included in every step. Highly recommend for speech clarity issues!",
      avatar: "👩"
    },
    {
      name: "Father of Kavya",
      text: "Incredibly thankful for the guidance and resources provided. The videos were simple to follow at home.",
      avatar: "🧑‍🦱"
    }
  ];

  // Carousel index state
  const [tIdx, setTIdx] = useState(0);

  const prev = () => setTIdx((tIdx - 1 + testimonials.length) % testimonials.length);
  const next = () => setTIdx((tIdx + 1) % testimonials.length);

  return (
    <section style={{ marginTop: 24, textAlign: "center", minHeight: 330 }}>
      <h2 style={{ color: "#F5A623", fontSize: "2rem", fontWeight: 600, marginBottom: 18 }}>💬 Parent Testimonials</h2>
      <div
        style={{
          margin: "0 auto",
          maxWidth: 440,
          background: "#222a45",
          borderRadius: 14,
          padding: "28px 24px 20px 24px",
          boxShadow: "0 4px 18px #16192830"
        }}
      >
        <div style={{ fontSize: "2.65rem", marginBottom: 9 }}>
          {testimonials[tIdx].avatar}
        </div>
        <div style={{ fontWeight: 600, color: "#4A90E2", fontSize: "1.1em" }}>
          {testimonials[tIdx].name}
        </div>
        <div style={{ color: "#fff", margin: "15px 0", fontSize: "1.13em", minHeight: 54 }}>
          “{testimonials[tIdx].text}”
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <button
            className="btn"
            style={{ background: "#263585", color: "#fff", fontSize: "1.1em" }}
            aria-label="Previous testimonial"
            onClick={prev}
          >
            ◀
          </button>
          <span style={{ color: "#fff" }}>
            {tIdx + 1} / {testimonials.length}
          </span>
          <button
            className="btn"
            style={{ background: "#263585", color: "#fff", fontSize: "1.1em" }}
            aria-label="Next testimonial"
            onClick={next}
          >
            ▶
          </button>
        </div>
      </div>
      <div style={{ marginTop: 18, fontSize: ".96em", color: "#aaa" }}>
        Want to share your experience? Connect with us!
      </div>
    </section>
  );
}

/* ------------------- Appointment Scheduler -------------------- */
/**
 * PUBLIC_INTERFACE
 * Appointment scheduler section (prototype with calendar and payment CTA).
 */
function AppointmentScheduler() {
  // For demo: just show static calendar and payment message
  return (
    <section style={{ marginTop: 18, marginBottom: 30 }}>
      <h2 style={{ color: "#4A90E2", fontSize: "2rem", fontWeight: 600, marginBottom: 18 }}>📅 Book Appointment</h2>
      <div style={{
        background: "#181d38",
        borderRadius: 12,
        padding: 24,
        textAlign: "center",
        boxShadow: "0 2px 18px #2d456910",
        margin: "0 auto",
        maxWidth: 440
      }}>
        <div>
          <b style={{ color: "#F5A623" }}>Step 1:</b> Select your preferred slot
        </div>
        <div style={{ margin: "16px 0" }}>
          <StaticCalendar />
        </div>
        <div>
          <b style={{ color: "#F5A623" }}>Step 2:</b> Make your payment <br />
          <span style={{ color: "#7ED321", fontWeight: 600 }}>₹700 / session (Online Secure Payment)</span>
        </div>
        <button
          className="btn btn-large"
          style={{
            marginTop: 18,
            background: "#4A90E2",
            color: "#fff"
          }}
          onClick={() => window.alert("Payment gateway is a placeholder in this demo.")}
        >
          Pay Securely
        </button>
        <div style={{ marginTop: 16, color: "#aaa", fontSize: ".95em" }}>
          *After payment, you will receive appointment confirmation by email.
        </div>
      </div>
    </section>
  );
}

/* -- Static Calendar for demo (Not functional, placeholder UI) -- */
function StaticCalendar() {
  // Just show a styled static week grid, demo only
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const slots = [
    ["9:00", true], ["10:30", false], ["12:00", true],
    ["3:00", true], ["4:30", true], ["6:00", false]
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: 8,
      margin: "4px 0"
    }}>
      {days.map((day, i) => (
        <div key={day} style={{ margin: "0 4px" }}>
          <div style={{
            color: "#4A90E2",
            background: "#323a60",
            borderRadius: 5,
            padding: "2px 0 4px 0",
            fontWeight: 600,
            marginBottom: 6,
            fontSize: ".97em"
          }}>{day}</div>
          {slots.map(([t, free], j) => (
            <button
              key={t + j}
              className="btn"
              style={{
                margin: "2px 0",
                width: 55,
                background: free ? "#7ED321" : "#ccc",
                color: free ? "#181d38" : "#777",
                fontWeight: free ? 600 : 400,
                fontSize: ".95em",
                borderRadius: 6,
                opacity: free ? 1 : 0.5,
                border: "none",
                cursor: free ? "pointer" : "not-allowed"
              }}
              disabled={!free}
              tabIndex={-1}
            >{t}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------- Parent Questionnaire -------------------- */
/**
 * PUBLIC_INTERFACE
 * Multi-step form for parent questionnaire (sample fields, not a real backend).
 */
function ParentQuestionnaire() {
  // Simple state form, track step and answers
  const steps = [
    {
      label: "Child Details",
      fields: [
        { name: "childName", label: "Child's Name", type: "text", required: true },
        { name: "age", label: "Age", type: "number", required: true },
        { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], required: true }
      ]
    },
    {
      label: "Developmental Milestones",
      fields: [
        { name: "firstWord", label: "At what age did your child say first word?", type: "text" },
        { name: "sentencesAge", label: "Age at which short sentences began?", type: "text" }
      ]
    },
    {
      label: "Speech Concerns",
      fields: [
        { name: "concerns", label: "Main speech/language concerns", type: "textarea", required: true }
      ]
    }
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(ans => ({ ...ans, [name]: value }));
  };

  const validateStep = () => {
    // Check that all required fields in this step are filled
    return steps[step].fields.every(
      f => !f.required || (answers[f.name] && answers[f.name].toString().trim().length > 0)
    );
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please fill all required fields.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) {
      alert("Please fill all required fields.");
      return;
    }
    alert(
      "Thank you for submitting the questionnaire! (This is a demo; no data is saved.)"
    );
    setStep(0);
    setAnswers({});
  };

  return (
    <section style={{ marginTop: 24, minHeight: 300 }}>
      <h2 style={{
        color: "#7ED321",
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: 18
      }}>📝 Parent Questionnaire</h2>
      <form
        style={{
          background: "#181d38",
          borderRadius: 12,
          boxShadow: "0 2px 10px #33315022",
          padding: "22px 28px",
          maxWidth: 500,
          margin: "0 auto"
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div style={{ marginBottom: 14, fontSize: "1.14em", fontWeight: 500, color: "#4A90E2" }}>
          Step {step + 1}: {steps[step].label}
        </div>
        {steps[step].fields.map((f) => (
          <div key={f.name} style={{ marginBottom: 14 }}>
            <label htmlFor={f.name} style={{ color: "#fff", display: "block", marginBottom: 4 }}>
              {f.label}
              {f.required && <span style={{ color: "#F5A623", marginLeft: 4 }}>*</span>}
            </label>
            {f.type === "text" || f.type === "number"
              ? (
                <input
                  type={f.type}
                  id={f.name}
                  name={f.name}
                  value={answers[f.name] || ''}
                  onChange={handleChange}
                  required={!!f.required}
                  style={{
                    width: "100%",
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: "1px solid #394a74",
                    background: "#222b4c",
                    color: "#fff",
                    fontSize: ".98em"
                  }}
                />
              )
              : f.type === "select"
                ? (
                  <select
                    id={f.name}
                    name={f.name}
                    value={answers[f.name] || ''}
                    onChange={handleChange}
                    required={!!f.required}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "1px solid #394a74",
                      background: "#222b4c",
                      color: "#fff",
                      fontSize: ".98em"
                    }}
                  >
                    <option value="">Select</option>
                    {f.options && f.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                )
                : f.type === "textarea"
                  ? (
                    <textarea
                      id={f.name}
                      name={f.name}
                      value={answers[f.name] || ""}
                      onChange={handleChange}
                      required={!!f.required}
                      rows={3}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: 6,
                        border: "1px solid #394a74",
                        background: "#222b4c",
                        color: "#fff",
                        fontSize: ".98em"
                      }}
                    />
                  )
                  : null}
          </div>
        ))}
        <div style={{ display: "flex", gap: 8 }}>
          {step > 0 && (
            <button
              type="button"
              className="btn"
              style={{ background: "#aaa", color: "#222b4c" }}
              onClick={handlePrev}
            >Back</button>
          )}
          {step < steps.length - 1 ? (
            <button
              type="button"
              className="btn btn-large"
              style={{
                background: "#7ED321",
                color: "#181d38"
              }}
              onClick={handleNext}
            >Next</button>
          ) : (
            <button
              type="submit"
              className="btn btn-large"
              style={{ background: "#4A90E2", color: "#fff" }}
            >Submit</button>
          )}
        </div>
      </form>
    </section>
  );
}

/* ------------------- Footer -------------------- */
/**
 * PUBLIC_INTERFACE
 * Minimal Footer with copyright and contact reference.
 */
function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "30px 0 20px 0",
      background: "#181d38",
      color: "#888",
      fontSize: ".98em",
      marginTop: 40
    }}>
      © 2024 SpeechConnect Kids · Rashi Shetty · <span style={{ color: "#4A90E2" }}>speechconnect-kids.com</span>
    </footer>
  );
}

export default App;
