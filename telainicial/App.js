import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para abrir ou fechar o menu de opções
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const images = [
    require('./src/assets/agenda.jpg'),
    require('./src/assets/galeria.jpg'),
    require('./src/assets/icone.jpg'),
    require('./src/assets/loja.jpg'),
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          {/* Conteúdo do menu de opções */}
          <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.optionContainer}>
            <Text style={styles.optionText}>Opção 1</Text>
            <Text style={styles.optionText}>Opção 2</Text>
            <Text style={styles.optionText}>Opção 3</Text>
          </View>
        </View>
      )}
      <ImageBackground
        source={require('./src/assets/realcangaiba.jpeg')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView
          contentContainerStyle={styles.imageContainer}
          horizontal
        >
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(image)}
            >
              <Image source={image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.content}>
          <View style={styles.topTextContainer}>
            <Text style={[styles.title, styles.textWithBorder]}>INÍCIO</Text>
            <Text style={[styles.title, styles.textWithBorder]}>OUTRO TEXTO</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={[styles.title, styles.textWithBorder]}>REAL CANGAÍBA</Text>
          </View>
        </View>
      </ImageBackground>
      {!isMenuOpen && (
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Icon name="bars" size={24} color="white" />
        </TouchableOpacity>
      )}
      {selectedImage && (
        <View style={styles.selectedImageContainer}>
          <TouchableOpacity
            onPress={() => setSelectedImage(null)}
            style={styles.closeButton}
          >
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
          <Image source={selectedImage} style={styles.selectedImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  bottomTextContainer: {
    paddingVertical: 20,
  },
  textWithBorder: {
    padding: 10,
    borderWidth: 5,
    borderColor: 'orange',
    marginHorizontal: 10,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'transparent',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: -200, 
    width: 200,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 0,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  selectedImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 300,
    height: 300,
  },
});