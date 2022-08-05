import React,{useState} from 'react'
import {AiFillLinkedin,AiFillTwitterSquare} from 'react-icons/ai'
import {TiSocialInstagram} from 'react-icons/ti'
import {FiMenu} from 'react-icons/fi'
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
            <div className={ `${styles.hamberg_menu} ${Toggle ? styles.active : ""}`} onClick={handleClick}>
                <button>
                    <FiMenu/>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <span className={styles.navigate}>Navigate Me</span>
            </div>
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
                            <Link href="#random">
                                <a>
                                 Random Things
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
                    </ul>
                </div>
            </div>
            <div className={styles.sidebar_bottom}>
                <ul>
                    <li>
                        <Link href="#contact">
                            <a>
                                Download as PDF
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <a>
                                Download Resume
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
   
  )
}

export default SideBar