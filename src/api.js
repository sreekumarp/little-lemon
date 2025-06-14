// src/api.js

export function fetchAPI(date) {
  let result = [];
  const start = 17;
  const end = 23;
  for (let hour = start; hour < end; hour++) {
    const hourString = hour.toString().padStart(2, '0') + ':00';
    result.push({ value: hourString, label: hourString });
  }
  if (date.getDate() === 15) {
    result = result.filter((slot, idx) => idx % 2 === 0);
  }
  return result;
}

export function submitAPI(formData) {
  console.log('Submitting form data:', formData);
  return true; // simulate successful submission
}

