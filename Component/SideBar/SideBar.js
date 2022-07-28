import React,{useState} from 'react'
import {AiFillLinkedin,AiFillTwitterSquare} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'
import {CgProfile} from 'react-icons/cg'
import Link from 'next/link'
import styles from './SideBar.module.scss'

const SideBar = () => {

    const [Toggle,SetToggle] = useState()
	const handleClick  = event =>{
		SetToggle(current => !current);
	}

  return (

    <div className={styles.header}>
        <div className={styles.hamberg}>
            <button className=
                {Toggle ? styles.active : styles.hamberg_menu} onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

       
            <div className={`${styles.sidebar} ${Toggle?styles.sidebar_hidden:''}`}>
                <div className={`${styles.sidebar_wrapper}`}>
                    <div className={styles.sidebar_info}>
                       <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        About Me
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#featured">
                                    <a>
                                        Featured
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#work">
                                    <a>
                                        Work
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        Gallery
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    <a>
                                        Connect
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <div className={styles.icons}>
                                    <Link href="https://www.linkedin.com/in/smitheshpalparthy/">
                                        <a target="_blank"><AiFillLinkedin/></a>
                                    </Link>
                                    <Link href="https://twitter.com/MrFunky_Monkie">
                                        <a target='_blank'><AiFillTwitterSquare/></a>
                                    </Link>
                                </div>
                            </li>
                       </ul>

                    </div>
                </div>
            </div>
    </div>
   
  )
}

export default SideBar