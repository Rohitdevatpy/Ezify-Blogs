import React, { useEffect, useState } from 'react'
import matter from 'gray-matter'
import { Link } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch list of all markdown files manually (hardcoded for now)
    const files = ['hello-world.md']

    Promise.all(
      files.map(async (filename) => {
        const file = await import(`/posts/${filename}`)
        const content = await fetch(file.default).then((res) => res.text())
        const { data } = matter(content) // Get metadata from frontmatter

        return {
          slug: filename.replace('.md', ''),
          ...data,
        }
      })
    ).then((allPosts) => {
      setPosts(allPosts)
    })
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📰 Latest Posts</h1>
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: '1.5rem' }}>
          <h2>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.date}</p>
          <div>
            {post.tags?.map((tag, i) => (
              <span key={i} style={{
                padding: '4px 8px',
                marginRight: '6px',
                background: '#333',
                color: '#fff',
                borderRadius: '4px',
                fontSize: '0.8rem'
              }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
