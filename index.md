---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: false

head:
  - - meta
    - property: 'og:image'
      content: /unicosm-doc/UnicosmLogo.png

hero:
  name: "Unicosm"
  image:
    src: /UnicosmLogo.png
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

