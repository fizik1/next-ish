import Link from "next/link"
import { useRouter } from "next/router"
import Home from '../../index'
export default function Post(){
    const router = useRouter()
    const { id } = router.query
    console.log(id);
    return(
        <div>
            <Home/>
            <h1>Postjhjhjl: {id}</h1>
            <ul>
                <li>
                    <Link href='/post/[id]/[block]' as={`/post/${id}/1`}>
                        <a>1-blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/[id]/[block]' as={`/post/${id}/2`}>
                        <a>2-blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/[id]/[block]' as={`/post/${id}/3`}>
                        <a>3-blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/[id]/[block]' as={`/post/${id}/4`}>
                        <a>4-blog</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}