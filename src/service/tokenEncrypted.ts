import EncryptedStorage from 'react-native-encrypted-storage';

export const storeTokens = async (accessToken, refreshToken) => {
  try {
    await EncryptedStorage.setItem('tokens', JSON.stringify({ accessToken, refreshToken }));
  } catch (error) {
    console.error('Error storing tokens:', error);
  }
};

export const getTokens = async () => {
  try {
    const tokens = await EncryptedStorage.getItem('tokens');
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    console.error('Error retrieving tokens:', error);
  }
};

export const clearTokens = async () => {
  try {
    await EncryptedStorage.removeItem('tokens');
  } catch (error) {
    console.error('Error clearing tokens:', error);
  }
};
