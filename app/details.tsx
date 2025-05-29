import { StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.content}>
        Este aplicativo foi desenvolvido para a disciplina de Programação Mobile com o propósito de testar a função de navegação entre telas.
      </Text>
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
    fontSize: 16, textAlign: 'center'
  }
});
