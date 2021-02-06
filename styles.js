import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    top: 70,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  blur: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    borderRadius: 5,
    position: 'absolute',
  },

  separator: {
    width: 47,
    height: 4,
    backgroundColor: '#cccccc',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },

  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 18,
    marginTop: 20,
    color: 'white',
    textAlign: 'justify',
  },

  sheetContainer: {
    padding: 16,
    height: 750,
    borderTopRightRadius: 20,
  },

  sheetContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
