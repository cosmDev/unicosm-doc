---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: true

hero:
  name: "Unicosm"
  image:
    src: /img/UnicosmLogo.png
    alt: VitePress
  text: Link your unity games to cosmos blockchains. 
  actions:
    - theme: brand
      text: Quick start
      link: /quickstart     
    - theme: alt
      text: Tutorials
      link: /tutorials/starter-pack.html
    - theme: alt
      text: Documentation
      link: /scripts/CosmosChainConfig.cs

features:
  - icon:
      src: /img/cosmos-atom-logo.png
    title: Cosmos sdk compatibility
    details: This package supports a wide functionality of the cosmos sdk
  - icon:
      src: /img/cosmwasm.png
    title: CosmWasm compatibility
    details: Unicosm supports a query/execute functionality of cosmwasm
  - icon:
      src: /img/keplr.svg
    title: Offline signer compatibility
    details: "Use the signer you want!<br /> keplr, cosmostation or leap"
    
---
