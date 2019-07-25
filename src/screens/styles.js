import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  grid:{
    paddingHorizontal: 20
  },
  title:{
    fontFamily: 'Kailasa-Bold'
  },
  subtitle:{
    marginTop: 20,
    lineHeight: 25,
    fontSize: 18,
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40
  },
  sectionInput:{
    height: 100,
    marginBottom:20
  },
  success:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 190
  },
  error:{
    color: 'red',
    marginVertical: 10
  },
  successMsg:{
    fontSize:21,
    color: '#474747',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Kailasa',
    textAlign: 'center',
    lineHeight: 28,
  }
})