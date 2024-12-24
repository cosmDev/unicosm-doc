---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: '',
    name: 'CosmDev',
    title: 'Creator',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  } 
]
const partners = [
/*   {
    avatar: '',
    name: '',
    title: 'Creator',
    links: [
      { icon: 'github', link: '' },
      { icon: 'twitter', link: '' }
    ]
  }, */
   
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Partners</template>
    <template #lead>...</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>