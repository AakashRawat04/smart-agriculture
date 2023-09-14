import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>ID: {router.query.slug}</p>
}