import * as SecureStore from 'expo-secure-store';

export const storeTokens = async (
  accessToken: string,
  refreshToken: string
) => {
  try {
    console.log("Storing tokens:", { accessToken, refreshToken });
    await SecureStore.setItemAsync(
      "tokens",
      JSON.stringify({ accessToken, refreshToken })
    );
  } catch (error) {
    console.error("Error storing tokens:", error);
  }
};

export const getTokens = async () => {
  try {
    const tokens = await SecureStore.getItemAsync("tokens");
    return tokens ? JSON.parse(tokens) : null;
  } catch (error) {
    console.error("Error getting tokens:", error);
    return null;
  }
};

export const clearTokens = async () => {
  try {
    await SecureStore.deleteItemAsync("tokens");
  } catch (error) {
    console.error("Error clearing tokens:", error);
  }
};





