import Image from 'next/image'
import Github from '../public/GitHub-Mark-64px.png';

const GithubIcon = () => {
    return (
        <Image
            src={Github}
            alt="Github Icon"
            width={50}
            height={50}
        />
    )
}

export default GithubIcon;