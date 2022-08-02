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
                        <div className={styles.left_bar}>
                            <p>The best thing to do in any tough situation is to smile and move on. </p>
                            <p>Be human, be gentle with others and try to be the reason of their smile. </p>
                            <p>I’m addicted to technology and I am a melomaniac.</p>
                            <p>I love the human brain and I am trying to learn neuroscience. </p>
                            <p>According to my friends I argue(Healthy) a lot, a lot is too less in my dictionary. </p>
                            <p>I am constantly trying to learn the “Art” of saying “No” and I fail at it. It’s a problem. </p>
                            <p>I am a health freak and I consistently fail in understanding that term. </p>
                            <p>Ronald, not Messi. </p>
                            <p>Hamilton, not Max Verstappen </p>
                            <p>I love trucker and baseball caps and I have a lot of them. </p>
                        
                        </div>
                        <div className={styles.middle}>
                        <img src="/assets/images/694afe77-02e9-4ab1-940a-b85a1ec9fd38.jpg"/>
                        </div>
                        <div className={styles.left_bar}>
                            <p>I don’t like reading books but can’t stop buying them to make reading a habit. </p>
                            <p>I don’t believe in afterlife. </p>
                            <p>I looooooove reading, listening, watching about time travel, black holes, exoplanets, and the concept of parallel universe</p>
                            <p>I love listening to podcasts and can binge listen to them for the whole day. </p>
                            <p>Bollywood, not Hollywood(with some exceptions)</p>
                            <p>Does that make me look less smarter?</p>
                            <p>Hit me up for a conversation here!</p>
                            <p>Peace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PanelLayout>
  )
}

export default index