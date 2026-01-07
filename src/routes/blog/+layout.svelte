<!-- This is adapted from a W3 Schools tutorial. -->
  <script>
    let { data, children } = $props();
  </script>

<svelte:head>
    <link rel="stylesheet" href="/blog.css">
</svelte:head>

 <!-- The sidebar -->
 <div class="sidebar">
  <b>Recent Posts</b>
    <a href="../../">Home</a>
    {#each data.posts as post, i}
      <a href="blog.{post.slug}">{post.title}
      <br />
      Date: {new Date(post.datePosted).toLocaleDateString('en-us', { month:"long", day: "numeric", year:"numeric" } )}<br />
      Author: {post.author}<br />
      <p>{post.summary}</p></a>
  	{/each}

    <!-- <Sidebarlist /> -->
  </div>
  
  <!-- Page content -->
  <div class="content">
     {@render children()}
  </div> 

