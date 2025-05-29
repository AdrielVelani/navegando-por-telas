import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App navegando por telas!</Text>
      <Button title="Ir para Detalhes" onPress={() => router.push('/details')} />
      <View style={styles.spacer} />
      <Button title="Sobre o Desenvolvedor" onPress={() => router.push('/about')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20
  },
  title: {
    fontSize: 20, marginBottom: 20, textAlign: 'center'
  },
  spacer: {
    height: 10,
  },
});
