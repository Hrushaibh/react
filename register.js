/**
 * Registration form validation using regex patterns
 */

// Regex patterns for validation
const PATTERNS = {
  // Full name: 2-80 chars, letters, spaces, hyphens, apostrophes
  fullName: /^[A-Za-z\s\-']{2,80}$/,

  // Email: standard RFC 5322 simplified
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/,

  // Phone: 10-15 digits, optional + at start, optional spaces/dashes/dots
  phone: /^\+?[\d\s\-.]{10,20}$/,
  phoneDigits: /^\d{10,15}$/,

  // Country: letters, spaces, hyphens, apostrophes, 2-60 chars
  country: /^[A-Za-z\s\-']{2,60}$/,

  // City: letters, spaces, hyphens, apostrophes, 2-50 chars
  city: /^[A-Za-z\s\-']{2,50}$/,

  // Postal/ZIP: 5-10 alphanumeric, optional space (e.g. US 12345, UK A1B 2C3)
  postalCode: /^[A-Za-z0-9\s\-]{5,10}$/,

  // Address: allow letters, numbers, common punctuation
  address: /^[\w\s\-\.,#\/]{0,200}$/
};

const MIN_AGE = 13;

function showError(elId, msg) {
  const el = document.getElementById(elId);
  if (el) el.textContent = msg;
}

function clearError(elId) {
  const el = document.getElementById(elId);
  if (el) el.textContent = '';
}

function setFieldState(inputEl, isValid, errorElId, msg) {
  inputEl.classList.remove('valid', 'error');
  inputEl.classList.add(isValid ? 'valid' : 'error');
  showError(errorElId, isValid ? '' : msg);
}

function validateFullName(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, msg: 'Full name is required.' };
  if (!PATTERNS.fullName.test(trimmed)) return { valid: false, msg: 'Use 2-80 letters and spaces only.' };
  return { valid: true };
}

function validateEmail(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, msg: 'Email is required.' };
  if (!PATTERNS.email.test(trimmed)) return { valid: false, msg: 'Please enter a valid email address.' };
  return { valid: true };
}

function validatePhone(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, msg: 'Phone number is required.' };
  if (!PATTERNS.phone.test(trimmed)) return { valid: false, msg: 'Invalid format. Use 10-15 digits.' };
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return { valid: false, msg: 'Phone must have 10-15 digits.' };
  return { valid: true };
}

function validateDob(value) {
  if (!value) return { valid: false, msg: 'Date of birth is required.' };
  const birth = new Date(value);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  if (age < MIN_AGE) return { valid: false, msg: `You must be at least ${MIN_AGE} years old.` };
  if (age > 120) return { valid: false, msg: 'Please enter a valid date of birth.' };
  return { valid: true };
}

function validateCountry(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, msg: 'Country is required.' };
  if (!PATTERNS.country.test(trimmed)) return { valid: false, msg: 'Use 2-60 letters and spaces.' };
  return { valid: true };
}

function validateCity(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: false, msg: 'City is required.' };
  if (!PATTERNS.city.test(trimmed)) return { valid: false, msg: 'Use 2-50 letters and spaces.' };
  return { valid: true };
}

function validatePostalCode(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: true }; // optional
  if (!PATTERNS.postalCode.test(trimmed)) return { valid: false, msg: 'Use 5-10 alphanumeric characters.' };
  return { valid: true };
}

function validateAddress(value) {
  const trimmed = value.trim();
  if (!trimmed) return { valid: true }; // optional
  if (!PATTERNS.address.test(trimmed)) return { valid: false, msg: 'Invalid characters in address.' };
  if (trimmed.length > 200) return { valid: false, msg: 'Address too long.' };
  return { valid: true };
}

function validateCourse(value) {
  if (!value) return { valid: false, msg: 'Please select a course.' };
  return { valid: true };
}

function validateEducation(value) {
  if (!value) return { valid: false, msg: 'Please select education level.' };
  return { valid: true };
}

function validateExperience(value) {
  if (!value) return { valid: false, msg: 'Please select experience level.' };
  return { valid: true };
}

function validateTerms(checked) {
  if (!checked) return { valid: false, msg: 'You must accept the terms and privacy policy.' };
  return { valid: true };
}

function validateForm() {
  let valid = true;
  const form = document.getElementById('registrationForm');
  if (!form) return false;

  const fullName = form.fullName.value;
  const r1 = validateFullName(fullName);
  setFieldState(form.fullName, r1.valid, 'fullNameError', r1.msg);
  valid = valid && r1.valid;

  const r2 = validateEmail(form.email.value);
  setFieldState(form.email, r2.valid, 'emailError', r2.msg);
  valid = valid && r2.valid;

  const r3 = validatePhone(form.phone.value);
  setFieldState(form.phone, r3.valid, 'phoneError', r3.msg);
  valid = valid && r3.valid;

  const r4 = validateDob(form.dob.value);
  setFieldState(form.dob, r4.valid, 'dobError', r4.msg);
  valid = valid && r4.valid;

  const r5 = validateCountry(form.country.value);
  setFieldState(form.country, r5.valid, 'countryError', r5.msg);
  valid = valid && r5.valid;

  const r6 = validateCity(form.city.value);
  setFieldState(form.city, r6.valid, 'cityError', r6.msg);
  valid = valid && r6.valid;

  const r7 = validatePostalCode(form.postalCode.value);
  setFieldState(form.postalCode, r7.valid, 'postalCodeError', r7.msg);
  valid = valid && r7.valid;

  const r8 = validateCourse(form.course.value);
  setFieldState(form.course, r8.valid, 'courseError', r8.msg);
  valid = valid && r8.valid;

  const r9 = validateEducation(form.education.value);
  setFieldState(form.education, r9.valid, 'educationError', r9.msg);
  valid = valid && r9.valid;

  const r10 = validateExperience(form.experience.value);
  setFieldState(form.experience, r10.valid, 'experienceError', r10.msg);
  valid = valid && r10.valid;

  const r11 = validateAddress(form.address.value);
  setFieldState(form.address, r11.valid, 'addressError', r11.msg);
  valid = valid && r11.valid;

  const r12 = validateTerms(form.terms.checked);
  const termsEl = form.terms;
  termsEl.classList.remove('valid', 'error');
  termsEl.classList.add(r12.valid ? 'valid' : 'error');
  showError('termsError', r12.valid ? '' : r12.msg);
  valid = valid && r12.valid;

  return valid;
}

function initRegistrationForm() {
  const form = document.getElementById('registrationForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert('Registration successful! Welcome to Electronics Learning.');
      form.reset();
      document.querySelectorAll('.valid, .error').forEach(el => el.classList.remove('valid', 'error'));
      document.querySelectorAll('[id$="Error"]').forEach(el => { el.textContent = ''; });
    }
  });

  // Real-time validation on blur
  const fields = ['fullName', 'email', 'phone', 'dob', 'country', 'city', 'postalCode', 'address', 'course', 'education', 'experience', 'terms'];
  fields.forEach(name => {
    const el = form[name];
    if (!el) return;
    el.addEventListener('blur', () => validateForm());
  });
}

document.addEventListener('DOMContentLoaded', initRegistrationForm);
