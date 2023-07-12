import { Container } from "../../Layout/Container/Container";
import cn from 'classnames';
import s from './Top.module.scss';
import logo from '/src/assets/logo.svg'


export const Top = () => (
    <div className={s.top}>
        <Container className={s.topContainer}>
            <a className={cn( s.topLink, s.topPhone )}href = "tel:89304902620" > 
			8 930 490 26 20 </a>
			<a className={s.logo}href="/">
				<img src={logo} alt="Логотип Inspired" />
			</a>

			<div className={s.topNavigation}>
				<ul className = {s.topNavList} >
					<li className={s.topNavItem}>
						<button className={s.topLink}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M16.4431 16.4438L20.9994 21.0002" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</li>
					<li className={s.topNavItem}>
						<a className={s.topLink}>
							<svg width="120" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M67.5787 6.75H52.4212C52.2367 6.75 52.0586 6.81806 51.921 6.94115C51.7835 7.06425 51.6962 7.23373 51.6758 7.41718L50.3425 19.4172C50.3308 19.522 50.3414 19.6281 50.3736 19.7286C50.4057 19.829 50.4587 19.9216 50.529 20.0002C50.5994 20.0788 50.6855 20.1417 50.7818 20.1847C50.8781 20.2278 50.9824 20.25 51.0879 20.25H68.912C69.0175 20.25 69.1218 20.2278 69.2181 20.1847C69.3144 20.1417 69.4005 20.0788 69.4708 20.0002C69.5412 19.9216 69.5942 19.829 69.6263 19.7286C69.6585 19.6281 69.6691 19.522 69.6574 19.4172L68.3241 7.41718C68.3037 7.23373 68.2164 7.06425 68.0789 6.94115C67.9413 6.81806 67.7632 6.75 67.5787 6.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M56.25 6.75C56.25 5.75544 56.6451 4.80161 57.3483 4.09835C58.0516 3.39509 59.0054 3 60 3C60.9946 3 61.9484 3.39509 62.6517 4.09835C63.3549 4.80161 63.75 5.75544 63.75 6.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>

						</a>
					</li>
					<li className={s.topNavItem}>
						<a className={s.topLink}>
							<svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M108 20.25C108 20.25 98.625 15 98.625 8.62501C98.6252 7.49826 99.0156 6.40635 99.7299 5.53493C100.444 4.66351 101.438 4.06636 102.543 3.84501C103.648 3.62367 104.795 3.79179 105.79 4.32079C106.785 4.84979 107.566 5.70702 108 6.74673L108 6.74673C108.434 5.70702 109.215 4.84979 110.21 4.32079C111.205 3.79179 112.352 3.62367 113.457 3.84501C114.562 4.06636 115.556 4.66351 116.27 5.53493C116.984 6.40635 117.375 7.49826 117.375 8.62501C117.375 15 108 20.25 108 20.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
        </Container>
    </div>
)
