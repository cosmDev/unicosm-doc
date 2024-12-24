---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
aside: true
 
---

# Cosmos Send Token
::: info {icon-type=info}
This tutorial aims to use CosmosSignArbitrary and prove that the user is the owner of the wallet.
:::
 
## Create your canvas

1. In Canvas/Panel, right click <Badge type="info" text="->" /> UI <Badge type="info" text="->" /> Button
2. Name the button: ```ButtonSendToken```
3. Place it correctly on your scene
 
![An image](img/tuto14.png)

## Assign the script

Click on ```UnicosmModal``` object and add component: ```CosmosSignArbitrary```

![An image](img/tuto15.png)

1. Drag the ```ChainConfig``` objet in the field "chain config".  
2. Drag the ```ButtonSendToken``` object into the "Button onclick" field.  

## Return the data

1. Right Click on ```CosmosReturnData``` <Badge type="info" text="->" /> UI <Badge type="info" text="->" /> Text and name it: ```CosmosReturnSendTokenHash```
2. Right Click on ```CosmosReturnData``` <Badge type="info" text="->" /> UI <Badge type="info" text="->" /> Text and name it: ```CosmosReturnSendTokenCode```
3. In ```CosmosReturnData``` object, assign ```CosmosReturnSendTokenHash``` in "Return Send Token Hash"
4. In ```CosmosReturnData``` object, assign ```CosmosReturnSendTokenCode``` in "Return Send Token Code"

![An image](img/tuto17.png)

## Build and run

Now save your project and build your game.  
Once the game is launched, click on escape and click on the "Sign Arbitrary" button, you will see the "Proof of owner" signer windows.

![An image](img/tuto18.png) 

![An image](img/tuto19.png) 