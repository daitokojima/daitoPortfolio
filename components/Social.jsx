import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/daitokojima" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/" },
    { icon: <FaYoutube />, path: "https://www.youtube.com/" },
    { icon: <FaTwitter />, path: "https://x.com/" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social
