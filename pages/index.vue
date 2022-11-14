<template>
  <div>
    <h1>hi</h1>
    <router-link :to="localePath('module-a')">module A</router-link><br>
    <router-link :to="localePath('module-b')">module B</router-link>
  </div>
</template>