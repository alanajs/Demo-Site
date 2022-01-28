import Image from 'next/image'
import Linkedin from '../public/LI-In-Bug.png';

const LinkedinIcon = () => {
    return (
        <Image
            src={Linkedin}
            alt="Linkedin Icon"
            width={50}
            height={50}
        />
    )
}

export default LinkedinIcon;