import Home from '../../index'
import { useRouter } from 'next/router'
export default function Block() {
    const router =useRouter()
    const {id, block} = router.query
    console.log(id, block);
    return(
        <div>
            <Home/>
            <h1>Post: {id}</h1>
            <h2>Blog: {block}</h2>
        </div>
    )
}