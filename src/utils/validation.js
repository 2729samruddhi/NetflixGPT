export const checkValidData = ( email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/.test(password);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password must be 8-20 chars, include uppercase, lowercase, digit, special char";
  return null; 
};
