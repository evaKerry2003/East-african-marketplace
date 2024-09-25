<script setup>
import content1 from '@/components/content1.vue';


</script>

<template>
  <header>
    

      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink>
      </nav>
    
  </header>

  <RouterView />
  <content-1/>
  <Footer2/>
</template>

<style scoped>
</style>