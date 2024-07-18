import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Index = () => {
  const handleEmailPress = () => {
    Alert.alert('Enviar Email', 'Funcionalidad para enviar email no implementada.');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mi Portafolio</Text>
      </View>

      {/* Personal Info Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Información Personal</Text>
        <View style={styles.divider} />
        <View style={styles.personalInfo}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://via.placeholder.com/100' }}
          />
          <Text style={styles.personalInfoText}>
            Hola, soy Juan Pérez, un desarrollador de software con experiencia en React Native y desarrollo móvil.
          </Text>
        </View>
      </View>

      {/* Projects Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Proyectos</Text>
        <View style={styles.divider} />
        <View style={styles.project}>
          <Text style={styles.projectTitle}>Proyecto 1</Text>
          <Text style={styles.projectDescription}>
            Descripción breve del proyecto 1.
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.project}>
          <Text style={styles.projectTitle}>Proyecto 2</Text>
          <Text style={styles.projectDescription}>
            Descripción breve del proyecto 2.
          </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.project}>
          <Text style={styles.projectTitle}>Proyecto 3</Text>
          <Text style={styles.projectDescription}>
            Descripción breve del proyecto 3.
          </Text>
        </View>
      </View>

      {/* Contact Section */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Contacto</Text>
        <View style={styles.divider} />
        <Text style={styles.contactText}>Email: juan.perez@example.com</Text>
        <Text style={styles.contactText}>Teléfono: +123456789</Text>
        <TouchableOpacity onPress={handleEmailPress} style={styles.button}>
          <Text style={styles.buttonText}>Enviar Email</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  personalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  personalInfoText: {
    fontSize: 16,
    flex: 1,
  },
  project: {
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: 16,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Index;
