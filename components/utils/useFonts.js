import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "Roboto-Thin": require("./../../assets/fonts/Roboto/Roboto-Italic.ttf"),
    "TitilliumWeb-Light": require("./../../assets/fonts/Titillium_Web/TitilliumWeb-Light.ttf"),
  });
