import Image from 'next/image'
export default function Logo() {
    return (
        
        <Image
          className="gallery-profile-image"
          alt="theom"
          src="https://res.cloudinary.com/tm-portfolio/image/upload/v1688425188/pfp.png"
          width={250}
          height={250}
          style={{ borderRadius: '50%'}}
          priority={true}

        />
    )
}