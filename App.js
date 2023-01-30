import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import React, { useState } from 'react';

const {width, height} = Dimensions.get('window');


export default function App() {

const [input, setInput] = useState('');
const [output, setOutput] = useState('');



const handlePress = value => {

    if (value === 'C') 
    {
      setInput('');
      setOutput('');
    } 
    else if (value === '=') 
    {
      if (output) 
      {
        setInput(eval(output));
      } 
      else 
      {
        setOutput(eval(input).toString());

      }
    }
    else if (value === 'del') 
    {
      setInput(input.slice(0, -1));
    }
    else 
    {
      setInput(input + value);
      setOutput('');
    }

};

  
  return (
    <View style={styles.container}>

      <View style={styles.input}>

        <Text style={styles.inputText}>{input}</Text>

      </View>

      <View style={styles.output}>

        <Text style={styles.outputText}>{output}</Text>

      </View>


      <View style={styles.buttons}>
        <View style={styles.numbers}>

        <View style={[styles.numberRow]}>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('7')}>
            <Text style={styles.btnText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('8')}>
            <Text style={styles.btnText}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('9')}>
            <Text style={styles.btnText}>9</Text>
          </TouchableOpacity>

        </View>


        <View style={[styles.numberRow]}>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('4')}>
            <Text style={styles.btnText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('5')}>
            <Text style={styles.btnText}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('6')}>
            <Text style={styles.btnText}>6</Text>
          </TouchableOpacity>

        </View>

        <View style={[styles.numberRow]}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('1')}>
            <Text style={styles.btnText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('2')}>
            <Text style={styles.btnText}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('3')}>
            <Text style={styles.btnText}>3</Text>
          </TouchableOpacity>

        </View>


        <View style={[styles.numberRow]}>
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('0')}>
            <Text style={styles.btnText}>0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btn} onPress={() => handlePress('.')}>
            <Text style={styles.btnText}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => handlePress('=')}>
            <Text style={styles.btnText}>=</Text>
          </TouchableOpacity>
        </View>
          
        </View>


        <View style={[styles.operations]}>

          <View style={{flex:1,flexDirection:'column'}}>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('C')}>
              <Text style={styles.btnTextOp}>AC</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('del')}>
              <Text style={styles.btnTextOp}>C</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('/')}>
              <Text style={styles.btnTextOp}>÷</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('*')}>
              <Text style={styles.btnTextOp}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('-')}>
              <Text style={styles.btnTextOp}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.OpBtn]} onPress={() => handlePress('+')}>
              <Text style={styles.btnTextOp}>+</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: 
  {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: 
  {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    paddingEnd:width*0.05,
    paddingTop:height*0.05,

  },

  inputText: 
  {
    fontSize: height*0.08,
    color: '#fff',
  },

  output: 
  {
    flex: 1,
    backgroundColor: '#000',
    color:'#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '100%',
    paddingEnd:width*0.05,
    paddingBottom:height*0.05,
  },

  outputText: 
  {
    fontSize: height*0.08,
    color: '#fff',
  },

  buttons:
   {
    flex: 7,
    flexDirection: 'row',
  },

  numbers: 
  {
    flex: 3,
    height:height*0.64,
    padding:height*0.03,
    marginVertical:height*0.02,
  },

  operations: 
  {
    flex: 1,
    paddingLeft:width*0.00,
    padding: height*0.04,
    height:height*0.64,
    marginTop:height*0.019,
  },

  btn: 
  {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin:height*0.01,
    borderRadius:100,
    backgroundColor: '#434343',
  },

  OpBtn: 
  {
    flex: 1,
    alignItems: 'center',
    // alignSelf: 'stretch',
    justifyContent: 'center',
    margin:height*0.01,
    borderRadius:50,
    backgroundColor: 'orange',
    height:height*0.1,
    width:width*0.14,

  },

  btnText: 
  {
    fontSize: height*0.06,
    color: 'white',
  },

  btnTextOp:
  {
    fontSize: height*0.04,
    color: 'white',
  },

  numberRow: 
  {
    flex: 1,
    flexDirection: 'row',
    height:height*0.4,
    marginVertical:height*0.01,
    
  },
});