import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/nhatminhhatesyou/" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/nhat-minh-pham-dbp/" },
    // { icon: <FaTwitter />, path: "" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/caiquanquegizay_/" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social