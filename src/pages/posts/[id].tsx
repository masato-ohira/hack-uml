import { useRouter } from 'next/router'

const PostDetail = () => {
  const router = useRouter()
  return <div>{router.query.id}</div>
}

export default PostDetail
