
import { json } from '@sveltejs/kit';
console.log('In routes/api/posts/+server.js')
let cachedPosts = null;

async function getPosts() {
	if (cachedPosts != null) {
		return cachedPosts;
	}
	let posts = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })
	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata 
			const post = { ...metadata, slug } 
//			post.published && posts.push(post)
			posts.push(post)
		}
	}

	posts = posts.sort((first, second) =>
    new Date(second.datePosted) - new Date(first.datePosted)
	)

	cachedPosts = posts;
	return posts
}

export async function GET() {
	const posts = await getPosts()
	return json(posts)
}