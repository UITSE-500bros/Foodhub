import * as SecureStore from 'expo-secure-store';

export const storeTokens = async (
  access_token: string,
  refresh_token: string
) => {
  try {
    await SecureStore.setItemAsync(
      "tokens",
      JSON.stringify({ access_token, refresh_token })
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





