import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
 

// https://vitepress.dev/reference/site-config
// export default defineConfig({
export default withMermaid({
  base: "/unicosm-doc/",
  title: "Unicosm",
  description: "Link your unity games to cosmos blockchains.",
  themeConfig: {
    logo: '/UnicosmLogo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/scripts/CosmosChainConfig.cs' },
      { text: 'Demonstration', link: '/demo/' },
    ],
    footer: {
      //message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2025 <a href="https://github.com/cosmDev">CosmDev</a>'
    },
    sidebar: [
      {
        text: 'Introduction',
        link: '/quickstart/',
        collapsed: true,
        items: [
          { text: '💡 What is Unicosm?', link: '/quickstart/' } 
        ]
      },
      {
        text: 'Quick Start', 
        link: '/quickstart/installation',
        collapsed: true,
        items: [
          { text: '⚒️ Package Installation', link: '/quickstart/installation' },
          { text: '⚙️ WebGL configuration', link: '/quickstart/webgl-configuration' },
          { text: '👉 Basic use', link: '/quickstart/basic-use' },
          { text: '🦾 Advanced use', link: '/quickstart/advanced-use' }
        ]
 
      },
      {
        text: 'Tutorials',
        link: '/tutorials/starter-pack',
        collapsed: true,
        items: [
          { text: '🟢 Starter pack', link: '/tutorials/starter-pack' },
          { text: '🟢 Cosmos Login', link: '/tutorials/cosmos-login' },
          { text: '🟢 Cosmos Sign Arbitrary', link: '/tutorials/cosmos-sign-arbitrary' },
          { text: '🟢 Cosmos Send Token', link: '/tutorials/cosmos-send-token' },
          { text: '🟢 CosmWasm Query', link: '/tutorials/cosmwasm-query' },
          { text: '🟡 CosmWasm Execute', link: '/tutorials/cosmwasm-execute' }
        ]
      },
      {
        text: 'Advanced Tutorials',
        link: '/advanced-tutorials/ceate-your-smartcontract',
        collapsed: true,
        items: [
          { text: '🟢 Create your smartcontract', link: '/advanced-tutorials/ceate-your-smartcontract' }, 
        ]
      },
      {
        text: 'UniCosm Scripts', 
        link: '/scripts/CosmosChainConfig.cs',
        collapsed: true,
        items: [
          { text: '🟢 CosmosChainConfig.cs', link: '/scripts/CosmosChainConfig.cs' },
          { text: '🟢 CosmosSignerConnect.cs', link: '/scripts/CosmosSignerConnect.cs' },
          { text: '🟢 CosmosSignArbitrary.cs', link: '/scripts/CosmosSignArbitrary.cs' },          
          { text: '🟢 CosmosSendToken.cs', link: '/scripts/CosmosSendToken.cs' },
          { text: '🟢 CosmosQueryAccount.cs', link: '/scripts/CosmosQueryAccount.cs' },
          // { text: '🟢 CosmosDebugServer.cs', link: '/scripts/CosmosDebugServer.cs.md' }
        ]
      },
      {
        text: 'CosmWasm scripts',
        link: '/scripts/CosmosCosmWasmQuery.cs',
        collapsed: true,
        items: [
          { text: '🟢 CosmWasmQuery.cs', link: '/scripts/CosmosCosmWasmQuery.cs' },
          { text: '🟢 CosmWasmExecute.cs', link: '/scripts/CosmosCosmWasmExecute.cs' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cosmDev' },
      { icon: 'twitter', link: 'https://x.com/cosmdev' },
    ]
  },
  mermaid:{
    //mermaidConfig !theme here works for ligth mode since dark theme is forced in dark mode
  },
  
})
 
