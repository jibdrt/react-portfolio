
import pic from '../assets/pic.png';
import React, { Component } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import motionbackground from '../assets/motionbackground.png';
import Lottie from '../components/lottie';

export default class Profile extends Component {

    render() {
        return (
            <div className="md:mx-20 h-screen flex items-center flex-row">

                <div className='flex flex-col'>
                    <div className='profile flex flex-col gap-y-8 text-center xl:text-left w-full xl:w-2/3'>
                        <div className='flex xl:flex-row flex-col items-center'>
                            <img src={pic} className='xl:ml-5 pic rounded-full border-2 border-white border-solid w-40 h-40 bg-gradient-to-r from-purple to-blue' />

                            <div className='p-10 gap-y-2 flex flex-col'>

                                <h1 className='text-5xl md:text-6xl text-purple font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                                    Jean-Baptiste
                                </h1>
                                <h2 className='text-3xl md:text-5xl'>
                                    Developer
                                </h2>
                            </div>
                        </div>
                        <div className='pic-container m-auto md:m-0 pl-10 flex flex-col-reverse md:flex-row'>
                            <div className='social-container flex flex-col xl:flex-row gap-x-5 gap-y-4 justify-center px-5 md:m-0 text-4xl'>
                                <div className='flex xl:flex-col justify-around'>
                                    <a href="www.linkedin.com">
                                        <BsLinkedin />
                                    </a>
                                    <a href="github.com/jibdrt">
                                        <VscGithub />
                                    </a>
                                </div>
                                <p className='text-base m-auto xl:pl-20'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-1/2'>
                                    <Lottie />
                    </div>
                </div>
            </div>
        )
    }

}

