import { useEffect } from "react"
import { useRouter } from "next/router"


export default function NotFount(){
    const router =useRouter()
    useEffect(()=>{
        setTimeout(() => {
            router.push('/about')
        }, 3000);
    }, [])
    return(
        <div>
            <h1>Sahifa topilmadi</h1>
        </div>
    )
}