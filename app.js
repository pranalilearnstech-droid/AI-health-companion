const healthForm = document.getElementById('healthForm');
const symptomForm = document.getElementById('symptomForm');
const adviceBox = document.getElementById('adviceBox');

function calculateBMI(weight, heightCm) {
  const heightM = heightCm / 100;
  return weight / (heightM * heightM);
}

function getBMIStatus(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Healthy';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

function updateDashboard(event) {
  event.preventDefault();

  const height = Number(document.getElementById('height').value) || 168;
  const weight = Number(document.getElementById('weight').value) || 63;
  const water = Number(document.getElementById('water').value) || 1.8;
  const sleep = Number(document.getElementById('sleep').value) || 7.5;
  const steps = Number(document.getElementById('steps').value) || 8500;
  const stressValue = Number(document.getElementById('stress').value) || 3;

  const bmi = calculateBMI(weight, height);
  const bmiStatus = getBMIStatus(bmi);

  document.getElementById('bmiValue').textContent = bmi.toFixed(1);
  document.getElementById('hydrationValue').textContent = `${water.toFixed(1)}L`;
  document.getElementById('sleepValue').textContent = `${sleep.toFixed(1)}h`;
  document.getElementById('activityValue').textContent = steps.toLocaleString();

  let insight = 'Your health trends are stable.';

  if (water < 2) {
    insight = 'Hydration is slightly below the target. Try a glass of water every 2 hours.';
  }

  if (sleep < 7) {
    insight += ' Sleep is still low, so prioritize an earlier bedtime.';
  }

  if (steps < 7000) {
    insight += ' A short walk could boost your energy and recovery.';
  }

  if (stressValue >= 4) {
    insight += ' Your stress level is elevated, and a few minutes of breathing exercises may help.';
  }

  if (bmiStatus !== 'Healthy') {
    insight += ` Your BMI is ${bmi.toFixed(1)}, which is in the ${bmiStatus.toLowerCase()} range. Consider a nutrition and exercise plan.';
  }

  adviceBox.textContent = insight;
}

function evaluateSymptom(event) {
  event.preventDefault();

  const symptom = document.getElementById('symptom').value;
  const severity = document.getElementById('severity').value;
  const duration = document.getElementById('duration').value;

  const symptomMap = {
    fatigue: 'fatigue and low energy',
    headache: 'headache',
    nausea: 'nausea',
    shortness: 'shortness of breath',
    chest: 'chest discomfort'
  };

  let response = `Based on your ${symptomMap[symptom]} reported as ${severity}, `;

  if (symptom === 'chest') {
    response += 'seek urgent medical care promptly, especially if it is severe or comes with pain radiating to the arm or jaw.';
  } else if (symptom === 'shortness') {
    response += 'rest and monitor your breathing closely; if symptoms worsen or you feel faint, contact a clinician immediately.';
  } else if (severity === 'severe') {
    response += 'this should be reviewed by a healthcare professional soon, especially if it lasts more than a day.';
  } else if (duration === '3') {
    response += 'it has lasted more than 3 days, so a medical check is a wise next step.';
  } else {
    response += 'try rest, hydration, and light monitoring today. If it continues, book a check-up.';
  }

  adviceBox.textContent = response;
}

healthForm.addEventListener('submit', updateDashboard);
symptomForm.addEventListener('submit', evaluateSymptom);

updateDashboard({ preventDefault() {} });
