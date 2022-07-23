import React,{useState} from 'react'
import {ImInstagram} from 'react-icons/im'
import {MdAddCircleOutline} from 'react-icons/md'
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
                                <Link href="">
                                    <a>
                                        work
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        Biography
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        awards
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        contact
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        <ImInstagram/>
                                    </a>
                                </Link>
                            </li>
                       </ul>

                    </div>
                    <div className={styles.sidebar_bottom}>
                        <p> <span><MdAddCircleOutline/></span><span>Create a PDF</span></p>
                        <p> <span><CgProfile/></span><span>Client Login</span></p>
                    </div>
                </div>
            </div>
    </div>
   
  )
}

export default SideBar