import styles from "./page.module.css"

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string }
}

export default async function PostPage({ params }: Props) {
  const posts : Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  )
  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div className={styles.main}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
