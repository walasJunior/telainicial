import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
  };

  const imageInfo = [
    { image: require('./src/assets/agenda.png'), name: 'Agenda' },
    { image: require('./src/assets/galeria.png'), name: 'Galeria' },
    { image: require('./src/assets/icone.png'), name: 'Ícone' },
    { image: require('./src/assets/loja.png'), name: 'Loja' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      {isMenuOpen && (
        <View style={styles.menuContainer}>
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
      {isProfileOpen && (
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={toggleProfile} style={styles.closeButton}>
            <Icon name="close" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.profileText}>Nome do Usuário</Text>
          <Text style={styles.profileText}>Email do Usuário</Text>
        </View>
      )}
      <ImageBackground
        source={require('./src/assets/realcangaiba.jpeg')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Icon name="bars" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.startTextContainer}>
            <Text style={[styles.title, styles.textWithBorder, styles.topBorder]}>INÍCIO</Text>
          </View>
          <TouchableOpacity onPress={toggleProfile} style={styles.profileButton}>
            <Icon name="user" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.imageContainer}>
          <View style={styles.imageRow}>
            {imageInfo.slice(0, 2).map((item, index) => (
              <View key={index} style={styles.imageItem}>
                <TouchableOpacity
                  onPress={() => handleImageClick(item.image)}
                >
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.imageText}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View style={styles.imageRow}>
            {imageInfo.slice(2).map((item, index) => (
              <View key={index} style={styles.imageItem}>
                <TouchableOpacity
                  onPress={() => handleImageClick(item.image)}
                >
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.imageText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.bottomTextContainer}>
          <Text style={[styles.title, styles.textWithBorder, styles.bottomText]}>REAL CANGAÍBA</Text>
        </View>
      </ImageBackground>
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
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  topBorder: {
    borderTopWidth: 5,
  },
  startTextContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  textWithBorder: {
    padding: 10,
    borderWidth: 5,
    borderColor: 'orange',
  },
  menuButton: {
    backgroundColor: 'transparent',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: 'transparent',
  },
  profileContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
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
    right: 20,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50, 
  },
  imageText: {
    color: 'white',
    marginTop: 10, 
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
  bottomTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, 
  },
  bottomText: {
    borderBottomWidth: 5,
  },
});
