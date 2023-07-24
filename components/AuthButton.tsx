import { signIn } from 'next-auth/react';
import React from 'react';
import { FaGithub, FaGoogle} from 'react-icons/fa';

interface AuthButtonProps{
    providerId: string,
}

const OAuthButton: React.FC<AuthButtonProps> = ({providerId}) => {
    console.log(providerId.toLowerCase())
    return(
        <div onClick={() => signIn(providerId.toLowerCase(), {callbackUrl: '/'})} className='px-8 py-2 bg-black border border-neutral-300 text-black rounded-full cursor-pointer'>
            <div className='flex flex-row items-center gap-4'>
                <div className='text-white'>
                    {providerId === 'google' ? <FaGoogle size={25}/> : ''}
                    {providerId === 'github' ? <FaGithub size={25}/> : ''}    
                    
                </div>
                <p className='text-white '>
                    Sign in with {providerId}
                </p>
            </div>
        </div>
    )
}

export default OAuthButton;