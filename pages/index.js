import styles from '../styles/Home.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import PanelLayout from '../Component/PanelLayout/PanelLayout';
import { RiArrowUpSFill,RiArrowDownSFill } from 'react-icons/ri';
import { Parallax } from 'react-parallax'

export default function Home() {

  return (
    <PanelLayout>
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Parallax
					bgImage="/assets/images/Untitled-1_msxftc.webp"
					strength={300}
					bgImageStyle={{
						height:'100%',
						objectFit:'cover',
						objectPosition:'right',
						width:'100%'
					}}
					style={{
						width:'100%',
						height:'100vh'
					}}
					renderLayer={percentage => (
						<div
							style={{
								position: 'absolute',
								left: '50%',
								top: '50%',
								transform:'translate(-50%,-50%)',
								width: percentage * 500,
							}}
						>
						</div>
					)}
					>
						<div className={styles.image_block}>
							<div className={styles.main_text}>
								<p><em>Hey, I'm</em></p>
								<h1>Smithesh</h1>
								<p>
									I’m Hyderabad(India) based Marketer, Product Enthusiast and a Humanist.
								</p>
							</div>
						</div>
				</Parallax>
				<div className={styles.main_block}>
					<div className={styles.content}>
						<div className='contain'>
							<div className={styles.journey_block}>
								<div className={styles.details}>
									<h2>
										My journey
									</h2>
								</div>
								<div className={styles.journey_info}>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/download.png"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																OnBlick INC
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<strong>Social Media and Community Manager, Since October 2020.</strong>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>United States</p>
													</div>
													<div className={styles.info}>
														<p>In the month of October 2020 I left Magnaquest to join OnBlick a SaaS based Immigration and HR Compliance Software as a Social Media and Community Manager.</p>
														<p>
															In the month of October 2020 I left Magnaquest to join OnBlick a SaaS based Immigration and HR Compliance Software as a Social Media and Community Manager.
														</p>
														<p>
															What did I do?
														</p>
														<p>
															Set and implemented social media and communication campaigns to align with marketing strategies with more than 50% growth till date.
														</p>
														<p>
															Provided engaging text, image and video content for social media accounts with my team of designers and content writers.
														</p>
														<p>
															Responded to comments and customer queries in a timely manner in the community. They loved it 😍
														</p>
														<p>
															Monitored and reported on feedback and online reviews.
														</p>
														<p>
															Organized and participated in events to build community and boost brand awareness.
														</p>
														<p>
															Coordinated with Marketing, PR and Communications teams to ensure brand consistency.
														</p>
														<p>
															Built relationships with customers, potential customers, industry professionals and journalists.
														</p>
														<p>
															I partner with other community giants like <strong>SHRM</strong>, <strong>HR Tech</strong>, 
															<Link href ="">
																	<a>
																		HR.com
																	</a>
																</Link>.
															, <strong>G2</strong>, Capterra etc, and organizations for various marketing activities.
														</p>
														<p>
															I manage all the social media handles of the organization with a calendar in place( for both the parent companies as well)
														</p>
														<p>
															I Work closely with my team to ensure a study growth in the organization(In-house community)
														</p>
														<p>
															As a community manager I am responsible for taking care of all employees during any in-house or online events.
														</p>
														<p>
															Dealt with In-house tools to help social media and also guided the automation team for various tools.
														</p>
														<ul>
															<li>
																I Was the “Top Performer” for 3 consecutive quarters🤔
															</li>
															<li>
																I was Awarded the “Best Performer” of the year in December 2021 😍
															</li>
														</ul>
														<div className={styles.movement}>
															<Link href ="">
																<a className={styles.movement_text}>
																	LEARN HOW TO SUPPORT THE MOVEMENT
																</a>
															</Link>
														</div>
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/googlr (1).webp"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Magnaquest Technologies
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Senior Executive/Marketing,</span>
														<em>March 2019 - September 2019.</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>Hyderabad</p>
													</div>
													<div className={styles.info}>
														<p>
															Magnaquest Technologies Limited is a cutting-edge and engaging innovative Enterprise Product-based Solutions
														</p>
														<p>
															Company, their product SURE is today among the world's leading subscription lifecycle management software solutions, used by customers across the globe.
														</p>
														<p>
															These include giants like <strong>IMCL</strong>, <strong>STAR</strong>, <strong>Discovery</strong>, <strong>Disney</strong>, and <strong>Mediascape</strong>. It's a product suite comprising of <strong>Billing</strong>, <strong>CRM</strong>, and <strong>Consulting</strong> for Subscription businesses.
														</p>
														<p>
															I started working for Magnaquest as a senior executive marketing. Unfortunately I had to exit the organisation after 6 months due to certain personal reasons 👍
														</p>

														<p><strong>During my stint</strong></p>
														<p>
															I had the task of setting up and managing Social Media Pages for the organisation
														</p>
														<p>
															working closely with the marketing, sales, and pre-sales teams.
														</p>
														<p>
															I had to work towards improving the brand image through social media platforms and other re-branding activities.
														</p>
														<p>	
															I tried my hands on content writing too and wrote the content for the website.
														</p>
														<p>
															Have a look at it here. <Link href="www.Magnaquest.com ">
																<a>
																	www.Magnaquest.com 🙌
																</a>
															</Link>
														</p>
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/environment.webp"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Craft Notion
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Marketing and Operations Manager,</span>
														<em>July 2018 - February 2019.</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>Hyderabad</p>
													</div>
													<div className={styles.info}>
														<p>Craft Notion is a startup specialising in website and application development.</p>
														<p>
															Centre for Innovation and Entrepreneurship(CIE)
														</p>
														<p>
															Communication and Community Manager, June 2017 - July 2018.
														</p>
														<p>
															This was my first encounter with the startup ecosystem.
														</p>
														<p>
															I had been in an on and off relationship with the ecosystem since my engineering days and getting the opportunity to work for India’s First Deep Tech Incubator was the biggest motivation.
														</p>
														<p>
															This journey blew my mind.
														</p>
														<p>
															Started as a Community Intern in the month of March 2017 for a period of one month and then started my full time stint.
														</p>
														<p>
															What did I do?
														</p>
														<p>
															I was the face of CIE based out of IIITH campus as the community manager
														</p>
														<p>
															Right from organizing, speaking, stakeholder management with govt entities and other corporations I was involved in all community-related activities
														</p>
														<p>
															I had the opportunity to learn directly from the founders and handle around 90+ start-ups.
														</p>
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/images.png"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Shukra Infotech	
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Marketing/ Business Development</span>
														<em>January 2016 - February 2017</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>Hyderabad</p>
													</div>
													<div className={styles.info}>
														<p>
															I joined Shukra right after my college and worked on a product called “The Indian Talks” which was a blogging platform. I took care of the whole product right from inception.
														</p>
														<p>
														Did a lot of fun Interviews with various tech giants and Govt Officials.
														</p>
														<ul>
															<li>
																I Handled the Digital Marketing department for the startup
															</li>
															<li>
																Worked on launching a product called The Indian Talks a blogging platform.
															</li>
															<li>
																Worked on the Digital Marketing and SEO to get it Google Ranked.
															</li>
															<li>
																Conducted various events both virtually and physically and conducted Interviews as part of the promotional activities.
															</li>
															<p>Here are a few ideas I had to conduct the interviews. Watch them here. </p>
														</ul>
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/ce7xvwaah8ux3vdxlcn2.png"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Amazon India
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Customer Service Associate</span>
														<em>
															September 2015 to October 2016
														</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>Hyderabad</p>
													</div>
													<div className={styles.info}>
														<p>
															Amazon was the first time I entered a corporate office setup a huge facility with all new perspective.
														</p>
														<p>
															I was involved in resolving customer queries and collecting their feedback.
														</p>
														<p>
															In my journey with Amazon, I've been a part of different operational units (
																<Link href="Amazon.com">
																	<a>
																	Amazon.com
																	</a>
																</Link>, .in, .uk) and been a part of both voice & non-voice process.

														</p>
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/ce7xvwaah8ux3vdxlcn2.png"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Grey Cells Technologies
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Founder</span>
														<em>
															January 2015 - December 2018
														</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>Chandigarh</p>
													</div>
													<div className={styles.info}>
														<p>
															I call this as the most successful failure of my life.
														</p>
														<p>
															Right after understanding how Digital Marketing works and what change it can bring to how businesses function. I wanted to be a part of this new trend India was going through.
														</p>
														<p>
															There you go, I registered a company and called it a startup and started venturing into new things which I was not even sure about.
														</p>
														<p>
															Why I call it a Successful Failure?
														</p>
														<p>
															This decision of mine was a huge learning curve for me. Right from managing finances to understanding how a company works and what it takes to successfully run a business.
														</p>
														<p>
															I failed miserably in keeping up but made a lot of amazing friends.
														</p>
														<p>
															I made a lot of mistakes I lost a lot of money which I borrowed from my parents but the most important part is that I learned from my mistakes I learned from my failures. That is why I never regret about the decision I took.  I consider them the most important days of my life. Hustling around talking to hundreds of people to get one single job done wow those days were crazy.
														</p>
														<p>	
															May be it is from there I started gaining interest in products and how a road map should be created to get the product out in the market. The Idea, Validation, Go To Market Strategies all these terminologies is what I knew of but got to experience them. In the end one thing I always follow till date is that the customer is the king no doubt about it. Customers are the ones who can make or break your business. They are in the centre of whatever decision you take as a business.
														</p>
														<p><strong>Quote I relate to.</strong></p>
														<p>
															I believe you have to be willing to be misunderstood if you're going to innovate.
														</p>
														<p>
															Jeff Bezos
														</p>
														<p><strong>Certifications.</strong></p>
														<p>I believe that learning never stops as markets change as technology’s change we as a human should also change with time. I love reading articles and gaining knowledge from various industries and personalities.</p>
														<p>I keep learning on the go and it feels like meditation to me.</p>
														<p>
															Here are my certifications.
														</p>
													</div>
												</div>
											</div>	
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div className={styles.thoughts}>
						<div className={styles.thoughts_image_box}>
							<div className="contain">
								<div className={styles.thought_box}>
									<div className={styles.details}>
										<h2>
											My thoughts
										</h2>
										<div className={styles.thoughts_matter}>
											<h4>
												<span>
													I share ideas and observations about the intersection of web3 and social impact (and more broadly, the future of humanity) on
												</span>
												<strong>
													<Link href="">
														<a>
															LinkedIn
														</a>
													</Link>
												</strong>
												and
												<strong>
													<Link href="">
														<a>
															Twitter
														</a>
													</Link>
												</strong>
												<span>
													Feel free to connect with me on both.
												</span>
											</h4>
										</div>
										<h4>Here are four of my most recent posts:</h4>
									</div>
									<div className={styles.thoughts_gallery}>
										<div className={styles.card}>
											<img src="assets/images/555505_377064.webp"/>
										</div>
										<div className={styles.card}>
											<img src="assets/images/71962_688031.webp"/>
										</div>
										<div className={styles.card}>
											<img src="assets/images/214149_857758.webp"/>
										</div>
										<div className={styles.card}>
											<img src="assets/images/324784_833989.webp"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.communities}>
						<div className={styles.communities_image}>
							<div className="contain">
								<div className={styles.communities_box}>
									<div className={styles.details}>
										<h2>
											My communities
										</h2>
										<h4>
											The people in my life are everything to me. Here are a few communities in which I am most active:
										</h4>
									</div>
									<div className={styles.communities_gallery}>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>Civics Unplugged 🚀</h3>	
												<p>
													<Link href="">
														<a>
															Civics Unplugged
														</a>
													</Link>
													empowers leaders of Gen Z with the training, funding, and network they need to become the civic innovators the world needs.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>Dream DAO 👩🏽‍🚀</h3>	
												<p>
													<Link href="">
														<a>
															Dream DAO
														</a>
													</Link>
													is a community of Civics Unplugged that empowers Gen Z builders to leverage the power web3 to build a brighter future for humanity.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>FWB 🤝</h3>	
												<p>
													<Link href="">
														<a>
															Friends with Benefits
														</a>
													</Link>
														is a DAO consisting of leading web3 artists, operators, and thinkers bound together by a desire to push web3 forward.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>groundw3rk 🌱</h3>	
												<p>
													A network of DAO builders created by
													<Link href="">
														<a>
															David Ehrlichman
														</a>
													</Link>
													who will support and work with one another to co-create the future of DAOs and web3.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>1729 🌐</h3>	
												<p>
													<Link href="">
														<a>
															1729
														</a>
													</Link>
													is a digital-first community devoted not just to explaining what a network state looks like, but to actually build the first one.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>
													Gitcoin 🤖
												</h3>	
												<p>
													<Link href="">
														<a>
															Gitcoin
														</a>
													</Link>
													is a platform and community consisting of members coordinating to build and fund public goods in web3 and beyond.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>Future Foundation 💸</h3>	
												<p>
													<Link href="">
														<a>
															Future Foundation 
														</a>
													</Link>
													is a social impact collective that supports web3 x social impact organizations, causes, and the broader ecosystem.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>The Institute for Cultural Evolution 🇺🇸</h3>	
												<p>
													The purpose of the 
													<Link href="">
														<a>
															Institute for Cultural Evolution
														</a>
													</Link>
													is to advance the evolution of American politics by highlighting the emerging developmental perspective on culture.
												</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.card_info}>
												<h3>KERNEL (KB5) 🌰</h3>	
												<p>
													<Link href="">
														<a>
															Kernel
														</a>
													</Link>
													is a peer-to-peer learning community dedicated to the journey towards a better understanding of truth: in our work, in our relationships with others, and in our inner worlds.
												</p>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.system}>
						<div className={styles.system_image}>
							<div className='contain'>
								<div className= {styles.system_block}>
									<div className={styles.details}>
										<h2>
											Things to keep in mind.
										</h2>
									</div>
									<div className={styles.system_content}>
										<ul>
											<li>
												<Link href="https://jackcanfield.com/blog/how-to-believe-in-yourself">
													<a target="_blank" >
														Believe in change
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://cdn2.hubspot.net/hubfs/2602672/Imported_Blog_Media/Customer_Is_King_Infographic.jpg" >
													<a target="_blank" >
														Customer is king
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank" >
														Invest in yourself
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank">
														Don’t take yourself too seriously.
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank">
														Laugh out at your problems
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank">
														Stay Humble
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank">
														Spread happiness the world needs it.
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.bondora.com/blog/beyond-finance-why-you-should-also-invest-in-yourself">
													<a target="_blank">
														The most important be honest and genuine.
													</a>
												</Link>
											</li>
										</ul>
										<div className={styles.movement}>
											<Link href ="">
												<a className={styles.movement_text}>
													DIVE DEEPER INTO MY BRAIN
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.freelance}>
						<div className='contain'>
							<div className={styles.details}>
								<div className={styles.coast}>
									<h2>I sometimes take on freelance opportunities.</h2>
									<p>
										Have an exciting project where you need some help ? Send me over a message, Email
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.coast_coast}>
						<div className='contain'>
							<div className={styles.details}>
								<div className={styles.coast}>
									<p><strong>I'm Chicago-bred,</strong></p>
									<p><strong>wander from coast to coast,</strong></p>
									<p><strong>and welcome bribes in the form of Korean BBQ.</strong></p>
								</div>
								<h4>
									Let’s connect for some chai what say??
									<Link href="">
										<a>
											Twitter
										</a>
									</Link>
										and 
									<Link href="">
										<a>
											LinkedIn
										</a>
									</Link>.
								</h4>
							</div>
							<div className={styles.social_icons}>
								<div className={styles.icons}>
									<div className={styles.image_icons}>
										<Link href="https://twitter.com/">
											<a>
												<img src ="/assets/images/623978_506580.webp"/>
											</a>
										</Link>
										
									</div>
									<div className={styles.image_icons}>
										<Link href="https://www.linkedin.com/signup">
											<a>
												<img src ="/assets/images/svvszaufolhr4jkwl7vz.webp"/>
											</a>
										</Link>
									</div>
								</div>
								<div className={styles.mail}>
									<div className={styles.mail_box}>
										<Link href="">
											<a>
												<img src="/assets/images/download (1).png"/>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.scroll_buttons}>
					<div className={styles.buttons_grp}>
						<button><RiArrowUpSFill/></button>
						<button><RiArrowDownSFill/></button>
					</div>
				</div>
			</div>
		</div>
	</PanelLayout>
  )
}