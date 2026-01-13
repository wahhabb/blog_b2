export async function load({ fetch }) {
console.log('in blog/+page.server.js')	
	const response = await fetch('/api/posts')
	const posts = await response.json()
	return { posts }
}