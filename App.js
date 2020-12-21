import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity
} from 'react-native';

  import Snackbar from 'react-native-snackbar'

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}


const App = () => {

  const [input,setInput] = useState(0);
  const [result,setResult] = useState(0);

  const convertCurrency = (currency) => {
    if(!input){
      return Snackbar.show({
        text: "Please Enter a Value",
        duration: Snackbar.LENGTH_SHORT
      });
    }

    let result = parseFloat(input)*currencyPerRupee[currency]
    setResult(result.toFixed(2));

  }


  return (
    <>
      <ScrollView keyboardDismissMode="interactive" backgroundColor="#1b262c">
        <SafeAreaView style={styles.container}>

          <Text style={{color: "#FFFFFF",textAlign:'center',fontFamily: 'cursive',
          fontSize:40,marginTop:15
          }}>
          Currency Converter</Text>

          <View style={styles.resultContainer}>
            <Text style={styles.result}>{result}</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput style={styles.input} keyboardType="numeric" placeholder="Indian Rupee" 
            placeholderTextColor="#c1c1c1" value={input} onChangeText={(input)=>(setInput(input))}></TextInput>
          </View>

          <View style={styles.convertBtnContainer}>
            {Object.keys(currencyPerRupee).map((country)=>(
              <TouchableOpacity key={country} style={styles.convertBtn} onPress={()=>convertCurrency(country)}>
                  <Text style={styles.temp} >{country}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  result: {
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  resultContainer: {
    height: 70,
    justifyContent: 'center',
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: 'center',
    marginTop: 20, 
    margin: 15,
    borderRadius: 15  
  },
  inputContainer: {
    height: 70,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#bbe1fa",
    margin: 15,
    borderRadius: 15  
  },
  input: {
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: 'center'
  },
  convertBtnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginLeft: 10
  },
  temp:{
    color: "#FFFFFF",
    textAlign: 'center'
  },
  convertBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: "30.5%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    margin: 5,
    backgroundColor: "#0f4c75"
  }
});


