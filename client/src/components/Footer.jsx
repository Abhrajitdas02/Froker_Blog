import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
export default function FooterCom() {
  return (
    <Footer container>
      <div className='w-full max-w-7xl mx-1'>
        <div className='flex flex-wrap justify-between'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
             <img src='/froker.png'></img>
            </Link>
          </div>
          <div className='flex flex-grow justify-around mt-4'>
        <div className='mx-2'>
          <Footer.Title className='text-xl lg:text-2xl font-bold text-orange-500' title='Quicklink' />
          <Footer.LinkGroup col>
            <Footer.Link
              href='https://www.froker.in/'
              target='_blank'
              rel='noopener noreferrer'
            >
             <span className='mr-1'>&gt;</span> <span className='text-lg font-semibold'>Home</span>
            </Footer.Link>
            <Footer.Link
              href='https://www.froker.in/about-us'
              target='_blank'
              rel='noopener noreferrer'
            >
             <span className='mr-1'>&gt;</span> <span className='text-lg font-semibold'>About us</span>
                </Footer.Link>
                <Footer.Link
              href='https://www.froker.in/privacy-policy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='mr-1'>&gt;</span> <span className='text-lg font-semibold'>Privacy policy</span>
                </Footer.Link>
                <Footer.Link
              href='https://www.froker.in/terms-and-conditions'
              target='_blank'
              rel='noopener noreferrer'
            >
                <span className='mr-1'>&gt;</span> <span className='text-lg font-semibold'>Terms & Conditions</span>
                </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div className='mx-2'>
        <Footer.Title className='text-xl lg:text-2xl font-bold text-orange-500' title='Contacts' />
              <Footer.LinkGroup col>
              <div className='flex items-center'>
              <FaMapMarkerAlt href= "" className='text-orange-500' />
              <span className='ml-2 text-lg font-semibold'>Whitefield, Bengaluru, 560066</span>
                </div>
                <div className='flex items-center'>
              <FaEnvelope className='text-orange-500' />
              <span className='ml-2 text-lg font-semibold'>support@froker.in</span>
                </div>
                <div className='flex gap-6 sm:mt-0 mt-4 justify-center text-orange-500'>
                  <Footer.Icon className='text-orange-500' href='https://x.com/FrokerSocial' icon={BsTwitter} />
                  <Footer.Icon className='text-orange-500' href='https://www.linkedin.com/company/froker/' icon={BsLinkedin} />
                  <Footer.Icon className='text-orange-500' href='https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu' icon={BsFacebook} />
                  <Footer.Icon className='text-orange-500' href='https://www.instagram.com/frokerofficial/' icon={BsInstagram} />
                  <Footer.Icon className='text-orange-500' href='https://www.youtube.com/@frokerofficial' icon={BsYoutube}/>
                </div>
          </Footer.LinkGroup>
        </div>
        <div className='mx-2'>
        <Footer.Title className='text-xl lg:text-2xl font-bold text-orange-500' title='Scan To Download' />
          <Footer.LinkGroup col>
           <img src="/QR.png"></img>
          </Footer.LinkGroup>
        </div>
      </div>
        </div>
        <div className='w-full sm:flex sm:items-center sm:justify-between text-orange-500'></div>
        <Footer.Divider className='bg-orange-500' />
        <div className='flex justify-center items-center font-bold text-3xl w-full text-white'>
          <Footer.Copyright
            justify-center
        href='#'
        by="Arroz Technology. All rights reserved"
        year={new Date().getFullYear()}
      />
        </div>
        </div>
</Footer>
  );
}
