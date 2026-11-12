AI Health Companion

Upload once. Understand everything.

A multilingual web app that explains medical reports and prescriptions in plain language.

Built for Smart India Hackathon 2026 · Team MedTrace

Live demo Languages Built with

Open the live demo → he nahi ter he pahije https://ai-health-companion-mh55.onrender.com/
</div>

Note: the live demo is hosted on Render's free plan, so the first load after a quiet period can take up to a minute while the server wakes up.
The problem

Most people cannot read their own lab report or prescription. Values come with unfamiliar abbreviations, normal ranges are easy to misread, and the doctor's visit is often too short to explain everything. For elderly and low-literacy patients, and for people who do not read English, the gap is even wider.

What AI Health Companion does

Upload a report or a prescription photo, and the app reads it, shows what it found, lets you correct it, and then explains the result in simple language, in your own language.
Features
	
Report & prescription upload	Images or PDFs are read with OCR and turned into editable values
Human verification	You check and correct the extracted values before any analysis runs
Plain-language explanation	What each value means, what is normal, what needs attention
Emergency alerts	Critical values trigger a clear alert with links to 108, 112 and nearby hospitals
Disease risk estimates	Indicative, rule-based scores for diabetes, heart disease and kidney health
Medicine checker	Flags duplicate drugs, NSAID combinations and known interactions, with optional patient profile and allergy inputs
Generic alternatives	Suggests cheaper generic equivalents and points to Jan Aushadhi Kendras
Doctor summary	A one-page printable summary and PDF download to carry to the clinic
Voice & accessibility mode	Read-aloud support for elderly and low-literacy users
Trilingual UI	English, हिंदी, मराठी
Clinical references	Thresholds are attributed to ICMR, WHO and the National Kidney Foundation
Important disclaimer

AI Health Companion is an educational aid, not a medical device. Risk scores are indicative and rule-based, not calibrated clinical probabilities. It does not diagnose, and it does not replace a doctor. Always confirm results and medicines with a qualified healthcare professional.

Tech stack
HTML, CSS, vanilla JavaScript for the interface and the health logic
Tesseract.js for in-browser text recognition (OCR)
jsPDF for the downloadable doctor summary
Render for hosting
Run it locally

Clone and open, that is the whole setup.

bash
git clone https://github.com/pranalilearnstech-droid/AI-Health-Companion.git
cd AI-Health-Companion

Then double-click index.html, or serve it with a local server:

bash
python -m http.server 8000
# open http://localhost:8000
Project structure
AI-Health-Companion/
├── index.html      # the application
├── README.md
└── ...             # any additional scripts or styles
Team MedTrace
<!-- Add your team here, one row per member. -->
Member	Role	GitHub
Pranali Dhodi	Team lead	@pranalidhodi45
License

Add a license file if you want others to reuse the code. MIT is a common choice.

