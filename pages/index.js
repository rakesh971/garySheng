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
					<div className={styles.Volunteering}>
						<div className="contain">
							<div className={styles.journey_block}>
								<div className={styles.details}>
									<h2>
										Volunteering
									</h2>
								</div>
								<div className={styles.journey_info}>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/startUp.jpg"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Startup Weekend
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<strong>Lead Organiser, Jan 2015 - Present.</strong>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>
															To know more visit:
															<Link href="https://www.techstars.com/communities/startup-weekend">
																<a target="_blank">
																	https://www.techstars.com/communities/startup-weekend

																</a>
															</Link>
														</p>
													</div>
													<div className={styles.info}>
														<p>Startup Weekend Hyderabad is a 54 Hr. event.</p>
														<p>What happens during the event?</p>
														<p>All Startup Weekend events follow the same basic model: anyone is welcome to pitch their startup idea and receive feedback from their peers.</p>
														<p>Friday Evening: Attendees pitch their startup ideas. Teams organically form around the top ideas (as determined by popular vote)</p>
														<p>Saturday & Sunday: This is when teams build, build & build. It’s a frenzy of business model creation, coding, designing, and market validation to build a minimum viable product.</p>
														<p>Sunday Evening: The weekend culminates with presentations in front of entrepreneurial leaders with another opportunity for critical feedback.</p>
														<p>Why should you attend?</p>
														<p>Platform to launch and test your startup</p>
														<p>Test your innovative/disruptive startup idea, something that has never been done before, with a bunch of innovative people. Build your network.</p>
													</div>
												</div>
											</div>	
										</div>
									</div>
								</div>
								<div className={styles.journey_info}>
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
																ImGeek
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<strong>Student Evangelist,January 2012 - November 2015.</strong>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p>
															<strong>Other Activities.</strong>
														</p>
														<p>
															<Link href='ttps://nextleap.app/smithesh-palparthy/portfolio/nlcfsczi0bvjhq1g5e2av'>
																<a target="_blank">
																	Next Leap Fellowship(Product Management) : https://nextleap.app/smithesh-palparthy/portfolio/nlcfsczi0bvjhq1g5e2av

																</a>
															</Link>	
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
											Featured
										</h2>
										<h4>Here are my most recent posts:</h4>
									</div>
									<div className={styles.thoughts_gallery}>
										<div className={styles.card}>
											<Link href="https://www.youtube.com/watch?v=2iOzLntao48">
												<a target="_blank">
													<img src="assets/images/e4b1c80d-2ac6-4d14-b673-7d50d6f25bad.jpg"/>
												</a>
											</Link>
										</div>
										<div className={styles.card}>
											<Link href="https://nextleap.app/smithesh-palparthy/portfolio/nlcfsczi0bvjhq1g5e2av">
												<a target="_blank">
													<img src="assets/images/66a76232-780b-4284-bafb-4890ba875c4c.jpg"/>
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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
											<img src ="/assets/images/1_jeQVI7MsQT8S6zdZOEmc1Q.png"/>
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
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/5d616d56-0b89-4756-8022-45b1e7bf9f81.jpg"/>
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
											<img src ="/assets/images/images (1).png"/>
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
													</div>
												</div>
											</div>	
										</div>
									</div>
									<div className={styles.journey_sections}>
										<div className={styles.unplugged_image}>
											<img src ="/assets/images/8c68d411-9eef-45cf-bd4c-635fd833de8d.jpg"/>
										</div>
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className ={styles.header_text}>
													<h3>
														<Link href="">
															<a>
																Centre for Innovation and Entrepreneurship(CIE)
															</a>
														</Link> 
													</h3>
												</div>
												<div className={styles.founder_text}>
													<h6>
														<span>Communication and Community Manager,</span>
														<em> June 2017 - July 2018.</em>
													</h6>
												</div>
												<div className={styles.details_block}>
													<div className={styles.location}>
														<p><strong>This was my first encounter with the startup ecosystem.</strong></p>
													</div>
													<div className={styles.info}>
														<p>I had been in an on and off relationship with the ecosystem since my engineering days and getting the opportunity to work for India’s First Deep Tech Incubator was the biggest motivation.</p>
														<p>This journey blew my mind.</p>
														<p>Started as a Community Intern in the month of March 2017 for a period of one month and then started my full time stint.</p>
														<p>What did I do?</p>
														<p>I was the face of CIE based out of IIITH campus as the community manager</p>
														<p>Right from organizing, speaking, stakeholder management with govt entities and other corporations I was involved in all community-related activities.</p>
														<p>I had the opportunity to learn directly from the founders and handle around 90+ start-ups.</p>
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
											<img src ="/assets/images/amazon.jpg"/>
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
											<img src ="/assets/images/graycells.png"/>
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
													</div>
												</div>
											</div>	
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
					<div className={styles.certification}>
						<div className="contain">
							<div className={styles.journey_block}>
								<div className={styles.details}>
									<h2>
										Certifications.
									</h2>
								</div>
								<div className={styles.journey_info}>
									<div className={styles.journey_sections}>
							
										<div className={styles.journey_text}>
											<div className={styles.basic_info}>
												<div className={styles.details_block}>
													<div className={styles.info}>
														<p>I believe that learning never stops as markets change as technology’s change we as a human should also change with time. I love reading articles and gaining knowledge from various industries and personalities.</p>
														<p>I keep learning on the go and it feels like meditation to me.</p>
														<p>Here are my certifications.</p>
													</div>
												</div>
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
												<Link href="https://medium.com/@twoguyswhoblog/dont-take-life-too-seriously-two-guys-who-blog-1f224fd21c86">
													<a target="_blank">
														Don’t take yourself too seriously.
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://medium.com/publishous/learn-to-laugh-at-your-problems-2486e8ae3b12">
													<a target="_blank">
														Laugh out at your problems
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://insighttimer.com/blog/how-to-be-humble/">
													<a target="_blank">
														Stay Humble
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.minimalismmadesimple.com/home/spread-happiness/">
													<a target="_blank">
														Spread happiness the world needs it.
													</a>
												</Link>
											</li>
											<li>
												<Link href="https://www.goodtherapy.org/blog/to-live-your-truth-start-by-being-honest-with-yourself-0815194/amp/">
													<a target="_blank">
														The most important be honest and genuine.
													</a>
												</Link>
											</li>
										</ul>
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
									<p><strong>I am obsessed with food and in my free time I do nothing but eat. Apart from food, I love travelling and learning everyday.</strong></p>
								</div>
								<h4>
									I do believe in the barter system and welcome bribes in the form of Chicken Tandoori.
								</h4>
								<h4>
									Let’s connect for some chai what say??
									<Link href="https://twitter.com/MrFunky_Monkie">
										<a>
											Twitter
										</a>
									</Link>
										and 
									<Link href="https://www.linkedin.com/in/smitheshpalparthy/">
										<a>
											LinkedIn
										</a>
									</Link>.
								</h4>
							</div>
							<div className={styles.social_icons}>
								<div className={styles.icons}>
									<div className={styles.image_icons}>
										<Link href="https://twitter.com/MrFunky_Monkie">
											<a target="_blank">
												<img src ="/assets/images/623978_506580.webp"/>
											</a>
										</Link>
										
									</div>
									<div className={styles.image_icons}>
										<Link href="https://www.linkedin.com/in/smitheshpalparthy/">
											<a target="_blank">
												<img src ="/assets/images/svvszaufolhr4jkwl7vz.webp"/>
											</a>
										</Link>
									</div>
									<div className={styles.image_icons}>
										<Link href="">
											<a target="_blank">
												<img src="/assets/images/email.png"/>
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