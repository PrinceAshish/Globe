import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className='bg-primary w-full h-80 px-20 grid grid-cols-6 pt-32'>
            <div className='flex flex-col gap-5'>
                <div>
                    <Image src={'/logo3.svg'} alt={'logo'} width={100} height={100} />
                </div>
                <div className='flex gap-3'>
                    <Image src={'/Images/socialMedia/facbook_black_round.svg'} alt={'logo'} width={17} height={17} />
                    <Image src={'/Images/socialMedia/twitter_black_round.svg'} alt={'logo'} width={17} height={17} />
                    <Image src={'/Images/socialMedia/youtube_black_round.svg'} alt={'logo'} width={17} height={17} />
                    <Image src={'/Images/socialMedia/insta_black_round.svg'} alt={'logo'} width={17} height={17} />
                </div>
            </div>
            <div className='text-sm text-color font-medium space-y-3'>
                <h3 className='text-base font-bold'>Our Destinations</h3>
                <h4>Canada</h4>
                <h4>Alaksa</h4>
                <h4>France</h4>
                <h4>Iceland</h4>
            </div>
            <div className='text-sm text-color font-medium space-y-3'>
                <h3 className='text-base font-bold'>Our Activities</h3>
                <h4>Northern Lights</h4>
                <h4>Cruising & sailing</h4>
                <h4>Multi-activities</h4>
                <h4>Kayaing</h4>
            </div>
            <div className='text-sm text-color font-medium space-y-3'>
                <h3 className='text-base font-bold'>Travel Blogs</h3>
                <h4>Bali Travel Guide</h4>
                <h4>Sri Lanks Travel Guide</h4>
                <h4>Peru Travel Guide</h4>
                <h4>Bali Travel Guide</h4>
            </div>
            <div className='text-sm text-color font-medium space-y-3'>
                <h3 className='text-base font-bold'>About Us</h3>
                <h4>Our Story</h4>
                <h4>Work with us</h4>
            </div>
            <div className='text-sm text-color font-medium space-y-3'>
                <h3 className='text-base font-bold'>Contact Us</h3>
                <h4>Our Story</h4>
                <h4>Work with us</h4>
            </div>
        </div>
    )
}

export default Footer
