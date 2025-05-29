import { useRouter } from 'expo-router';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Desenvolvedor</Text>
      <Text style={styles.content}>Adriel Velani</Text>
      <Text style={styles.content}>Estudante de Desenvolvimento de Software Multiplataforma</Text>
      <Text style={styles.content}>Email: adriel.velani@gmail.com</Text>
      <Text style={styles.content} onPress={() => Linking.openURL('https://github.com/adrielvelani')}>
        GitHub: github.com/adrielvelani
      </Text>
      <View style={styles.spacer} />
      <Button title="Voltar para a Home" onPress={() => router.push('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20
  },
  title: {
    fontSize: 22, marginBottom: 10
  },
  content: {
    fontSize: 16, marginBottom: 5, textAlign: 'center'
  },
  spacer: {
    marginTop: 20
  }
});
