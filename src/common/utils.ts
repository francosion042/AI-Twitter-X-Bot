// Generate a unique nonce
export const generateNonce = () => {
  return Math.random().toString(36).substring(2);
};

// Generate a timestamp
export const generateTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};
