# Kitty Browser

![](https://i.imgur.com/A7D2gMb.png)

[CryptoKitties](http://cryptokitties.co) is one of the most popular distributed apps on the Ethereum Network. It's a game that allows players to purchase, collect, breed and sell various types of virtual cats.

To be able to run CryptoKitties on your browser you'll need to install [Metamask](http://metamask.io/) or use a dedicated Ethereum browser like Mist or Parity.

![](https://i.imgur.com/FcIPrMw.gif)


### Things to fix:

```Javascript

FindKitty():
When you open the website if you click "Find Kitty" right away it will throw an error, since the state has not change yet.
If you click 2 consecutive times "Find Kitty" (with the same ID) it will throw the same error.

```

### Things I can add/do:

```Javascript

Make an overload for getTheKitty() -> getTheKitty(randomNumber)

Get the images of the Kitties via API 
https://api.cryptokitties.co/kitties/989999
Or
https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/989999.svg
 
Customize the style(Bootstrapt-React)

Add jQuery when you getKitty()

When you click FindKitty() -> Add (attribute -> 'disable') and change (button -> text_ to "Loading.."
Then remove (attribute -> 'disable') and change (button -> Text) to original text after promise is completed.
```
