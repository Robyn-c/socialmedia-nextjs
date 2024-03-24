import Link from 'next/link';
import React from 'react'

interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const posts : Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export default async function ExplorePage() {
  const posts : Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return (
    <main>
      {posts.map((post) => (
        <section key={post.slug}>
          <Link href={`/explore/${post.slug}`}>
            <h1>{post.title}</h1>
          </Link>
        </section>
      ))}
    </main>
  )
}
