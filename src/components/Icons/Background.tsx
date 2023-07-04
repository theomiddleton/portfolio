import Image from 'next/image'
export default function Bridge() {
    return (
        
        <Image 
            className="gallery-profile-image"
            alt="an ariel view of chicago"
            src="https://s0.darkroom.com/jk6tzocoivdyty4l82arups7iyse"
            fill={true}
            layout="fill"
            object-fit="hidden"
        />
        )
  }