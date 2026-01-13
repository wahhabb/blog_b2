<!-- This is adapted from a W3 Schools tutorial. -->
  <script>
    let { data, children } = $props();
  </script>

<svelte:head>
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
    <a href="../../"><b>Home</b></a>
  <b>Recent Posts</b>
    {#each data.posts as post, i}
      <a href="{post.slug}"><b>{post.title}</b>
      <br />
      Date: {new Date(post.datePosted).toLocaleDateString('en-us', { month:"long", day: "numeric", year:"numeric" } )}<br />
      Author: {post.author}<br />
      <i>{post.summary}</i></a>
  	{/each}

    <!-- <Sidebarlist /> -->
  </div>
  
  <!-- Page content -->
  <div class="content">
     {@render children()}
  </div> 

