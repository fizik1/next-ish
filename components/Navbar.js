import Link from "next/link"

function Navbar() {
    return(
        <div>
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/block'>
                        <a>Block</a>
                    </Link>
                </li>
                <li>
                    <Link href='/post/block'>
                        <a>Posts</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar