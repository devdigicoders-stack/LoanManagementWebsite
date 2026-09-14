/**
 * Standard input validation rules and sanitization utilities
 */

export const PATTERNS = {
  // 10 digits starting with 6, 7, 8, or 9
  MOBILE: /^[6-9]\d{9}$/,
  // 5 uppercase letters, 4 digits, 1 uppercase letter
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  // Exactly 12 digits
  AADHAR: /^\d{12}$/,
  // 6 digits, first digit 1-9
  PINCODE: /^[1-9][0-9]{5}$/,
  // Standard strict email pattern
  EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  // 4 letters, 5th character '0', followed by 6 alphanumeric characters
  IFSC: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  // 9 to 18 digits numeric
  BANK_ACCOUNT: /^\d{9,18}$/,
  // 15 characters standard GST format
  GST: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
};

// Sanitizers for input typing / onChange
export const sanitizeDigitsOnly = (value, maxLength) => {
  const digits = String(value || '').replace(/\D/g, '');
  return maxLength ? digits.slice(0, maxLength) : digits;
};

export const sanitizePAN = (value) => {
  return String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 10);
};

export const sanitizeIFSC = (value) => {
  return String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 11);
};

export const sanitizeGST = (value) => {
  return String(value || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 15);
};

// Validators
export const validateMobile = (mobile) => {
  if (!mobile) return { valid: false, message: 'Mobile number is required' };
  const cleaned = String(mobile).trim();
  if (cleaned.length !== 10) return { valid: false, message: 'Mobile number must be exactly 10 digits' };
  if (!PATTERNS.MOBILE.test(cleaned)) return { valid: false, message: 'Mobile number must start with 6, 7, 8, or 9' };
  return { valid: true };
};

export const validatePAN = (pan, isRequired = false) => {
  if (!pan) {
    return isRequired 
      ? { valid: false, message: 'PAN number is required' }
      : { valid: true };
  }
  const cleaned = String(pan).trim().toUpperCase();
  if (!PATTERNS.PAN.test(cleaned)) {
    return { valid: false, message: 'Invalid PAN format. Must be 5 letters, 4 numbers, and 1 letter (e.g. ABCDE1234F)' };
  }
  return { valid: true };
};

export const validateAadhar = (aadhar, isRequired = false) => {
  if (!aadhar) {
    return isRequired 
      ? { valid: false, message: 'Aadhaar number is required' }
      : { valid: true };
  }
  const cleaned = String(aadhar).trim().replace(/\D/g, '');
  if (!PATTERNS.AADHAR.test(cleaned)) {
    return { valid: false, message: 'Aadhaar number must be exactly 12 digits' };
  }
  return { valid: true };
};

export const validatePincode = (pincode, isRequired = false) => {
  if (!pincode) {
    return isRequired 
      ? { valid: false, message: 'Pincode is required' }
      : { valid: true };
  }
  const cleaned = String(pincode).trim().replace(/\D/g, '');
  if (!PATTERNS.PINCODE.test(cleaned)) {
    return { valid: false, message: 'Invalid Pincode. Must be a valid 6-digit Indian PIN code' };
  }
  return { valid: true };
};

export const validateEmail = (email, isRequired = false) => {
  if (!email) {
    return isRequired 
      ? { valid: false, message: 'Email address is required' }
      : { valid: true };
  }
  const cleaned = String(email).trim();
  if (!PATTERNS.EMAIL.test(cleaned)) {
    return { valid: false, message: 'Please enter a valid email address (e.g. name@example.com)' };
  }
  return { valid: true };
};

export const validateIFSC = (ifsc, isRequired = false) => {
  if (!ifsc) {
    return isRequired 
      ? { valid: false, message: 'IFSC code is required' }
      : { valid: true };
  }
  const cleaned = String(ifsc).trim().toUpperCase();
  if (!PATTERNS.IFSC.test(cleaned)) {
    return { valid: false, message: 'Invalid IFSC code (e.g. SBIN0001234)' };
  }
  return { valid: true };
};

export const validateBankAccount = (accNum, isRequired = false) => {
  if (!accNum) {
    return isRequired 
      ? { valid: false, message: 'Bank account number is required' }
      : { valid: true };
  }
  const cleaned = String(accNum).trim().replace(/\D/g, '');
  if (!PATTERNS.BANK_ACCOUNT.test(cleaned)) {
    return { valid: false, message: 'Bank account number must be between 9 and 18 numeric digits' };
  }
  return { valid: true };
};

export const validateGST = (gst, isRequired = false) => {
  if (!gst) {
    return isRequired 
      ? { valid: false, message: 'GST number is required' }
      : { valid: true };
  }
  const cleaned = String(gst).trim().toUpperCase();
  if (!PATTERNS.GST.test(cleaned)) {
    return { valid: false, message: 'Invalid GST number format (15 characters, e.g. 07AAAAA0000A1Z5)' };
  }
  return { valid: true };
};
