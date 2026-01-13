<script>
    let { data } = $props();
    let posts = $derived(data.posts)
 </script>

<h1>Welcome to My Blog</h1>

<ul>
	{#each posts as post, i}
		<li class="article" style="border-radius:2em;">
			<article>
					<h2>
						Title: <a href="/blog/{post.slug}">{post.title}</a>
					</h2>
                    <p>Slug: {post.slug}<br>
                    Date: {new Date(post.datePosted).toLocaleDateString('en-us', { month:"long", day: "numeric", year:"numeric" } )}<br>
                    Author: {post.author}</p>
                    <!-- {@html post.html} -->
                     <h3>{post.summary}</h3>
			</article>
		</li>
	{/each}
</ul>

<style>
    li  {
        list-style-type: none;
        background-color: beige;
    }
    li.article article {
        border-radius: 3 rem;
         margin-top: 2em;
        padding: 2em;
    }
</style>