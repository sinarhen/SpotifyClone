import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { FaGoogle, FaGithub} from 'react-icons/fa';
import { signIn, } from 'next-auth/react';
import axios from "axios";
import OAuthButton from "@/components/AuthButton";

const Auth = () => {
    const [name, setName ] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')
    const login = useCallback(async () => {
        try{
            await signIn('credentials', {
                email,
                password,
                redirect: true,
                callbackUrl: '/profiles'
            })
        } 
        catch (error) {
            console.log(error)
        }
        
    }, [email, password])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
              email,
              name,
              password
            });
            login();
          } catch (error) {
              console.log(error);
          }
    }, [name, email, password, login])
    const toggleVariant = () => setVariant(variant === 'login' ? 'register' : 'login')

    return (
        <div className="bg-cover h-full w-full bg-gradient-to-t from-black to-neutral-900">
            {/* Auth Navbar */}
            <div className="relative h-24 w-full bg-black items-center">
                <nav className="flex gap-4 flex-row px-12 py-5 h-full items-center">
                    <img src="/images/spotify-logo.png" alt="Logo" className="h-16 bg-opacity-100"/>
                    <p className="text-green-400 text-2xl font-semibold">Spotify</p>
                </nav>
            </div>
            {/* End of auth navbar */}
            {/* Auth section  */}
            <div className="mt-8 flex w-full justify-center">
                <div className="w-auto ">
                    <div className=" bg-black rounded-md h-full flex">
                        <div className="px-4 py-2 justify-center flex flex-col items-center gap-5">
                                <div className="px-32 pt-16 flex flex-col">
                                    <h2 className="text-white text-4xl mb-8 font-semibold justify-center">
                                        {variant === 'register' ? 'Sign up' : 'Login'}
                                    </h2>
                                    <div className="flex flex-col gap-6">
                                        <OAuthButton providerId="google"/>
                                        <OAuthButton providerId="github"/>
                                    </div>

                                </div>
                            <hr className="text-gray-400 my-8 w-full"/> 
                            <div className="flex flex-col gap-4">
                                {variant === 'register' ?
                                    <Input
                                        label='Username'
                                        onChange={(ev:any) => {setName(ev.target.value)}}
                                        id="name"
                                        value={name}
                                        />
                                : ""
                                }
                                <Input
                                
                                label='Email'
                                onChange={(ev:any) => {setEmail(ev.target.value)}}
                                id="email"
                                type="email"
                                value={email}
                                />                            
                                <Input
                                label='Password'
                                onChange={(ev:any) => {setPassword(ev.target.value)}}
                                id="password"
                                type="password"
                                value={password}
                                />
                                <button onClick={variant === 'login' ? login : register} className="bg-green-500 font-semibold rounded-full py-3 text-black w-full mt-10 hover:bg-green-700 transition auth-btn">
                                    {variant === 'login'? 'Login' : "Register"}
                                </button>
                                <p onClick={toggleVariant} className="cursor-pointer text-neutral-200 text-l underline">{variant === 'login'? 'First time using spotify? Create an account' : 'Already have an account? Login'}</p>

                            </div>    
                        </div>
                            
                    </div>
                    
                </div>
                
            </div>

        </div>)}

export default Auth;
