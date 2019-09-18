import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckNumber = this.handleCheckNumber.bind(this);

  }
  handleInputChange(event) {
    this.setState({ input: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let input = this.state.input;
    let inputReverse = input.split("").reverse("")
    let sumOfEvenDigits = 0;
    let sumOfOddDigits = 0;
    let checksum;

    for (let i = 0; i < inputReverse.length; i++) {
      let digit = parseInt(inputReverse[i]);
      console.log("---ODWROCONY NUMER: " + inputReverse + " CYFRA OBLICZANA: " + digit)

      if (i % 2 === 0) { //jesli cyfra nie parz pozycja
        digit = digit * 2;

        if (digit > 9) {
          digit = digit - 9;
          console.log("Libcza wieksza od 9: " + digit)

          sumOfOddDigits += digit;
          console.log("suma nieparzystych: " + sumOfOddDigits)
        } else {
          sumOfOddDigits += digit;

          console.log("suma nieparzystych2: " + sumOfOddDigits)
        }
      } else {//jesli na parzystej pozycji
        sumOfEvenDigits += digit;
        console.log("suma parzystych: " + sumOfEvenDigits)
      }
    }

    let totalSum = sumOfEvenDigits + sumOfOddDigits;
    let result = totalSum % 10;
    console.log("WYNIK DODAWANIA CALEJ LICZBY: " + totalSum)
    console.log("WYNIK DODAWANIA I MODULO: " + result)
    checksum = 10 - result;
    console.log("checksum: " + checksum);

    this.setState({ input: this.state.input + "-" + checksum })
  }
  handleCheckNumber() {
    
    let input = this.state.input;
    let inputReverse = input.replace( /\-/g, '').split("").reverse("");
    let sumOfEvenDigits = 0;
    let sumOfOddDigits = 0;

    for (let i = 0; i < inputReverse.length; i++) {
      let digit = parseInt(inputReverse[i]);
      console.log("---ODWROCONY NUMER: " + inputReverse + " CYFRA OBLICZANA: " + digit)

      if (i % 2 === 0) { //jesli cyfra parz pozycja
        sumOfEvenDigits += digit;
      } else {
        digit = digit * 2;
        if (digit > 9) {
          digit = digit - 9;
          sumOfOddDigits += digit;
        } else {
          sumOfOddDigits += digit;

        }
      }
    }

    let totalSum = sumOfEvenDigits + sumOfOddDigits;
    console.log("total sum: " + totalSum);
    let moduloResult = totalSum % 10;
    console.log("moduloResult: " + moduloResult)

    if (moduloResult == 0) {
      alert("Card number is correct")
    } else {
     alert("Card number is incorrect")
    }
  }

  render() {
    return (
      <div className="App">
    <h5>Luhn algorithm is a formula used to validate identification numbers such as credit card numbers</h5>
        <header className="App-header">
          <Paper elevation={1} style={{
            paddingTop: 50,
            paddingBottom: 50,
            paddingRight:50,
            paddingLeft:50,
          }}>
          <h3>Luhn algorithm</h3>
          <div className="box">
            <TextField id="input" name="number" placeholder="Type the card number..." variant="outlined" fullWidth value={this.state.input} onChange={this.handleInputChange} />
          </div>
          < br/>
          <div>
            <Button variant="contained"  className="submitButton" onClick={this.handleSubmit} state={this.state.buttonState}>Calculate the checksum</Button>
          </div>
          <br />
          <div>
            <Button variant="contained"  className="checkNumber" onClick={this.handleCheckNumber}>Check the card number</Button>
          </div>

          </Paper>

        </header>
      </div>
      
    );
  }
}

export default App;
