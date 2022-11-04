import { StyleSheet } from 'react-native';

export const loginSignupStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '8%',
    paddingVertical: 32,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 4,
  },
  loginButtonContainer: {
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  link: {
    textDecorationLine: 'underline',
    marginVertical: 12,
    color: '#818181',
  },
  errorMessage: {
    color: 'red',
  },
  logo: {
    width: 300,
    height: 179,
    alignSelf: 'center',
    marginBottom: '5%',
  },
});
