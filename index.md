---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: false

head:
  - - meta
    - property: 'og:image'
      content: /UnicosmLogo.png      
  - - meta      
    - property: 'twitter:image'
      content: /UnicosmLogo.png      
  - - meta
    - property: 'twitter:card'
      content: summary_large_image
  - - meta
    - property: 'twitter:title'
      content: Unicosm
  - - meta
    - property: 'twitter:description'
      content: Link your unity games to cosmos blockchains.

hero:
  name: "Unicosm"
  image:
    src: /UnicosmLogo.png
    alt: Unicosm
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
      src: /cosmos-atom-logo.png
    title: Cosmos sdk compatibility
    details: This package supports a wide functionality of the cosmos sdk
  - icon:
      src: /cosmwasm.png
    title: CosmWasm compatibility
    details: Unicosm supports a query/execute functionality of cosmwasm
  - icon:
      src: /keplr.svg
    title: Offline signer compatibility
    details: "Use the signer you want!<br /> keplr, cosmostation or leap"
    
---

