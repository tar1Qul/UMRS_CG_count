# 📊 UMRS-CG-count

**UMRS-CG-count** is a web-based CGPA prediction and GPA target calculation tool designed to help students plan their academic performance effectively. It calculates the required GPA for an upcoming semester based on completed credits, current CGPA, upcoming credits, and a target CGPA.

---

## 🧠 About the Project

Many students struggle to understand how much GPA they need in the next semester to reach a desired CGPA. UMRS-CG-count solves this problem by providing a simple, interactive, and accurate CGPA prediction system.

The system also intelligently detects when a target CGPA is **not achievable**, even if a student scores a perfect 4.00 GPA in the upcoming semester.

This project is fully frontend-based and runs directly in the browser.

---

## 🚀 Features

- ✅ Calculate required GPA for the upcoming semester
- ✅ Predict whether a target CGPA is achievable
- ✅ Detect impossible targets (requires GPA > 4.00)
- ✅ Smart result messages using if–else logic
- ✅ Instant calculation without page reload
- ✅ Popup/modal-based result display
- ✅ Simple and student-friendly UI
- ✅ No backend or database required

---

## 🧩 Project Structure

UMRS-CG-count/
├── icons/ # Icons used in the website

├── images/ # Image assets

├── styles/ # CSS files

├── index.html # Main landing page

├── register.html # CGPA calculator page

├── index.js # JavaScript logic

├── about.html # About page

├── profile.html # Profile page

├── policy.html # Policy / disclaimer page

└── README.md # Project documentation


---

## 📊 How It Works

The system uses the standard CGPA formula:

Required GPA =  
(Target CGPA × Total Credits − Current CGPA × Completed Credits) ÷ Upcoming Credits

### Logic Handling:
- If required GPA > 4.00 → ❌ Target CGPA is **not achievable**
- If required GPA is very high → ⚠️ Very challenging
- If required GPA is reasonable → ✅ Achievable
- If required GPA ≤ 0 → 🎉 Target already achieved

---

## 📋 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/tar1Qul/UMRS-CG-count.git
Open the project folder.

Open index.html in any modern web browser.

Navigate to the CGPA calculator page.

Enter:

Completed Credit Hours

Last CGPA

Upcoming Semester Credit Hours

Target CGPA

Click Calculate to see the result in a popup.

🧪 Validation & Conditions

All inputs are required.

GPA limit is assumed to be 4.00 maximum.

The system uses conditional logic to ensure realistic output.

Impossible CGPA targets are clearly explained to the user.

🛠 Technologies Used

HTML – Page structure

CSS – Styling and layout

JavaScript – CGPA calculation and logic

Git & GitHub – Version control

📌 Important Notes

This tool is for academic planning only.

Results may vary depending on university grading policies.

The system does not handle course retakes or grade improvements.

Not an official academic calculator.
