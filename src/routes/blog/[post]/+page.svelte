<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	let { data } = $props();

	const { title, summary, datePosted, author } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={summary} />
	<meta name="twitter:description" content={summary} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	<!-- <img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/> -->

	<h1>{title}</h1>

	<div class="meta">
		<b>Author:</b>
		{author} <br />
		<b>Published:</b>
		{datePosted}
	</div>

	<PostContent />

	<!-- {#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul class="post-footer__categories">
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if} -->
</article>
