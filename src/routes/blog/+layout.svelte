<!-- This is adapted from a W3 Schools tutorial. -->
  <script>
    let { children } = $props();
  </script>
<svelte:head>
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
    <a href="../../">Home</a>
    <a class="active" href="#top">Post 1</a>
    <a href="#top">Future Blog Entry</a>
    <a href="#top">Another Future Blog Entry</a>
  </div>
  
  <!-- Page content -->
  <div class="content">
     {@render children()}
  </div> 