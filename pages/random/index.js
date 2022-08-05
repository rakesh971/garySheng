import React from 'react'
import styles from "./random.module.scss"
import PanelLayout from '../../Component/PanelLayout/PanelLayout'

const index = () => {
  return (
    <PanelLayout>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Random things about me</h1>
                <div className='contain'>
                    <div className={styles.random_container}>
                        <div className={styles.middle}>
                            <img src="/assets/images/694afe77-02e9-4ab1-940a-b85a1ec9fd38.jpg"/>
                        </div>
                        <div className={styles.left_bar}>
                            <p><span></span>The best thing to do in any tough situation is to smile and move on. </p>
                            <p><span></span>Be human, be gentle with others and try to be the reason of their smile. </p>
                            <p><span></span>I’m addicted to technology and I am a melomaniac.</p>
                            <p><span></span>I love the human brain and I am trying to learn neuroscience. </p>
                            <p><span></span>According to my friends I argue(Healthy) a lot, a lot is too less in my dictionary. </p>
                            <p><span></span>I am constantly trying to learn the “Art” of saying “No” and I fail at it. It’s a problem. </p>
                            <p><span></span>I am a health freak and I consistently fail in understanding that term. </p>
                            <p><span></span>Ronald, not Messi. </p>
                            <p><span></span>Hamilton, not Max Verstappen </p>
                            <p><span></span>I love trucker and baseball caps and I have a lot of them. </p>
                        
                        </div>
                        <div className={styles.left_bar}>
                            <p><span></span>I don’t like reading books but can’t stop buying them to make reading a habit. </p>
                            <p><span></span>I don’t believe in afterlife. </p>
                            <p><span></span>I looooooove reading, listening, watching about time travel, black holes, exoplanets, and the concept of parallel universe</p>
                            <p><span></span>I love listening to podcasts and can binge listen to them for the whole day. </p>
                            <p><span></span>Bollywood, not Hollywood(with some exceptions)</p>
                            <p><span></span>Does that make me look less smarter?</p>
                            <p><span></span>Hit me up for a conversation here!</p>
                            <p><span></span>Peace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
  )
}

export default index