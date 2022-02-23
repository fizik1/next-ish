import Image from "next/image"

function About() {
    return(
        <div>
            <h1>About</h1>
            <Image src='/image.jpg' width={500} height={300}/>
        </div>
    )
}

export default About