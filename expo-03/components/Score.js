import { Text, View } from "react-native";

export const Score = ({ score }) => (
  <View>
    <Text>
      {score.date} - {score.result}
    </Text>
  </View>
);
