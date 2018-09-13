# Kitty Browser

![](https://i.imgur.com/A7D2gMb.png)

[CryptoKitties](http://cryptokitties.co) is one of the most popular distributed apps on the Ethereum Network. It's a game that allows players to purchase, collect, breed and sell various types of virtual cats.

To be able to run CryptoKitties on your browser you'll need to install [Metamask](http://metamask.io/) or use a dedicated Ethereum browser like Mist or Parity.

![kitty browser](https://imgur.com/a/88C4L0O)


### Things to fix:

```Javascript

FindKitty -> When you open the website if you click "Find Kitty" it will throw an error, since the state havent change.
FindKitty -> If you click 2 consecutive times "Find Kitty" (with the same ID) it will throw the same error.

```

### Things to do:

```Javascript

Make an overload getTheKitty() -> to get Random Kitty

I can get the pictures of the Kittys via API 
https://api.cryptokitties.co/kitties/989999 
https://api.cryptokitties.co/kitties/`id`
Or
https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/989999.svg
 
Customize the style, might use Bootstrapt-React

add jQuery when you getKitty()
add button attribute -> 'disable' and change button->text to "Loading.."
then remove 'disable' attribute and change buttonText to original text after promise is complete.
```
