<template>
    <div class="container">
    <div class="card">
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComp',
  };
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    width: 300px;
    
  }
  .container {
    display: flex;
    flex-direction: column

  }
  </style>
  