import React, { Component } from 'react';
import { object } from 'prop-types';
import Web3 from 'web3';
import KittyCoreABI from '../contracts/KittyCoreABI.json';
import { CONTRACT_NAME, CONTRACT_ADDRESS } from '../config';
import '../css/browser.css'
var moment = require('moment');

/*

Things to fix:

- FindKitty -> When you open the page if you click Find Kitty it will throw an error, since the state haven't change.
- FindKitty -> If you click 2 consecutive times FindKitty it will throw same error

Things to do:

- Make an overload getTheKitty() -> to get Random Kitty

- I can get the pictures of the Kittys via API 
https://api.cryptokitties.co/kitties/989999 
https://api.cryptokitties.co/kitties/`id`
Or
https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/989999.svg
 
- Customize the style, might use Bootstrapt-React

- add jQuery when you getKitty()
add button attribute -> 'disable' and change text "Loading.."
then remove 'disable' attribute and change buttonText to original text after promise is complete.

*/

class Browser extends Component {
  constructor(){
    super();
    this.state = {
      id:"123123",
      genes: "",
      generation: "",
      birthTime: "",
    };
  }

  //set/getKittyContract
  getContract(){
    const web3 = new Web3(window.web3.currentProvider);

    //Initialize the contract instance
    const kittyContract = new web3.eth.Contract(
      KittyCoreABI, // import the contracts's ABI and use it here
      CONTRACT_ADDRESS,
    );

    //Add the contract to the drizzle store
    this.context.drizzle.addContract({
      contractName: CONTRACT_NAME,
      web3Contract: kittyContract,
    });

    return kittyContract;
  }

  componentDidMount() {
    this.getTheKitty();
  }

  getRandomKitty = () =>  {
    let kittyContract = this.getContract();
    
    let randomNumber = Math.floor(Math.random() * 989999);
    document.getElementById("randomID").value = randomNumber;

    kittyContract.methods.getKitty(randomNumber).call().then((results) => {
      return {
        id: this.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: moment.unix(results.birthTime).format('MMMM DD YYYY'),
      }    
    }).then((results) => {
      this.setState({
        id:results.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: results.birthTime
      });
    });
  }

  getTheKitty = () =>  {
    let kittyContract = this.getContract();
    let id = this.state.id;

    kittyContract.methods.getKitty(id).call().then((results) => {
      return {
        id: this.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: moment.unix(results.birthTime).format('MMMM DD YYYY'),
      }    
    }).then((results) => {
      this.setState({
        id:results.id,
        genes: results.genes,
        generation: results.generation,
        birthTime: results.birthTime
      });
    });
  }

  eraseInputText(){
    document.getElementById("randomID").value ="";
  }
 
  //Set id State
  onIdChange = (e) => {
    const id= e.target.value;
    this.setState(() => ({ id }));

    //Check if input is number
    if (isNaN(id)) 
    {
      alert("Must input numbers");
      //feature: add jQuery input value = ""
      return false;
    }
  };



  render() {
    return (
      <div>
        <h1>Kitty Browser</h1>
        <div>
          <p>Kitty ID: </p>
          <input
            id="randomID"
            type="text"
            placeholder="Enter ID"
            value={this.state.id}
            onChange={this.onIdChange}
          /><input onClick={this.eraseInputText} type="submit" value="X"></input>
          <button onClick={this.getTheKitty}>Find Kitty</button>
          <button onClick={this.getRandomKitty}>Random Kitty</button>
        </div>

        <div>
          <label>Genes: </label>
          <span>{ this.state.genes }</span> 
        </div>
        <div>
          <label >Generation: </label>
          <span>{ this.state.generation }</span> 
        </div>
        <div>
          <label>Birth Time: </label>
          <span>{ this.state.birthTime }</span> 
        </div>
      </div>
    );
  }
}

Browser.contextTypes = {
  drizzle: object,
};

export default Browser;
