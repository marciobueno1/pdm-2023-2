import { StyleSheet, View, Text } from 'react-native';

export const EmptyList = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Lista Vazia</Text>
  </View>
);

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      height: 600,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 72,
    },
  });