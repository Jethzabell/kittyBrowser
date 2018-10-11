# Kitty Browser : https://github.com/ConsenSys/kittybrowser

[CryptoKitties](http://cryptokitties.co) is one of the most popular distributed apps on the Ethereum Network. It's a game that allows players to purchase, collect, breed and sell various types of virtual cats.

To be able to run CryptoKitties on your browser you'll need to install [Metamask](http://metamask.io/) or use a dedicated Ethereum browser like Mist or Parity.

![](https://i.imgur.com/3KKqJp2.gif)

```Javascript

Input():

Do not accept (input > #maxOfKitties) 
trim() -> "  1   4 " -> "14"
IsNan() -> Only accepts numbers
If no input [state changed] you would not be able to click findKitty() -> btn disable.

Check two different ways if ID > #maxOfKitties;
attribute -> 'max' = {Max}
method -> parseInt(id, 10) > parseInt(Max,10)

API():

Handles:
Unable to connect to Crypto Kitty server
Unable to find the Kitty Picture -> like Kitty #222
Loading Image
      
#maxOfKitties requested from API
Get the images of the Kitties via API 

```
