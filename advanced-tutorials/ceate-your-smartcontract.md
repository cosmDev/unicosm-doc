---
# https://vitepress.dev/reference/default-theme-home-page
layout: doc
aside: true 
---

# Create your smartcontract

> [!NOTE]
> Soon update!

The easiest way to learn and understand how to create your cosmwasm smartcontract is to use the [cw-template](https://github.com/CosmWasm/cw-template.git) repo.  

## Clone the base contract

Assuming you have a recent version of Rust and Cargo installed (via rustup), then the following should get you a new repo to start a contract:
  
``` bash
cargo generate --git https://github.com/CosmWasm/cw-template.git --name PROJECT_NAME
```  

You will now have a new folder called `PROJECT_NAME` (I hope you changed that to something else) containing a simple working contract and build system that you can customize.

Go to your contract:
``` bash
cd PROJECT_NAME
```

## Compile the contract
Now, you can compile your contract with 3 steps:

1/ Test the compile

``` bash
cargo wasm
```

2/ Compile it
``` bash
sudo docker run --rm -v "$(pwd)":/code   --mount type=volume,source="$(basename "$(pwd)")_cache",target=/target   --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry   cosmwasm/optimizer:0.16.1
```

2/ Generate the JsonSchema
```bash
cargo schema
```

## Upload contract onchain

The best way to send and test your smart contract onchain is to use celaton.

https://celat.one/


Once your smart contract is sent, you'll get an address that you can use on Unity.



## Test the contract on unity
 
Now you can use this tutorial for test your contract on unity:

[Cosmwasm-query](/tutorials/cosmwasm-query.html) 

 