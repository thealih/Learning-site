const testEmail = (value) => {
  const emailPattent = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
  return emailPattent.test(value);
};

const testCodeMelli = (value) => {
  // Test
};

const testPhoneNumber = (value) => {
  // Test
};

export default {
  testEmail,
  testCodeMelli,
  testPhoneNumber,
};
