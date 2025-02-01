---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
footer: false

head:
  - - meta
    - property: 'og:image'
      content: https://cosmdev.github.io/unicosm-doc/UnicosmLogo.png    
  - - meta      
    - property: 'twitter:image'
      content: https://cosmdev.github.io/unicosm-doc/UnicosmLogo.png     
  - - meta
    - property: 'twitter:card'
      content: summary
  - - meta
    - property: 'twitter:title'
      content: Unicosm - Doc
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
      text: Demo
      link: https://cosmdev.github.io/unicosm-demo/
    - theme: alt
      text: Tutorials
      link: /tutorials/starter-pack.html


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

