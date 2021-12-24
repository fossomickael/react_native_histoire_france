import AsyncStorage from "@react-native-async-storage/async-storage";

export const incrementResult = async (key, value) => {
  try {
    const previousResult = parseInt(await AsyncStorage.getItem(key)) || 0;
    const newResult = await AsyncStorage.setItem(
      key,
      (previousResult + value).toString()
    );
  } catch (error) {
    // Error saving data
  }
};
