import React from 'react';

import {ClockCircleOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';

import BackgroundBlock from './component/BackgroundBlock';
import Header from './component/Header';
import Pragraph from './component/Paragraph';
import CardList from './component/CardList';
import { wordsList } from './worlList';

import imgBackground from './assets/img/background.jpg'

import s from './App.module.scss';
import Footer from './component/FooterBlock';
import ButtonComponent from './component/Button';



const AppComponent = () => {
	const descr = "Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов";
	

	return (
		<>
			<BackgroundBlock
				backgroundImg={imgBackground}
				fullHeight
			>
				<Header
					white
					size="xl"
				>
					Время учить слова онлайн
				</Header>
				<Pragraph>
					{descr}
				</Pragraph>
			</BackgroundBlock>
			
			<BackgroundBlock>
				<Header
					white
					size="l"
				>
					Мы создали уроки, чтобы помочь вам увереннее разговаривать на английском языке
				</Header>
				<div className={s.motivation}>
					<div className={s.motivation__motivationBlock}>
						<div className={s.icons}>
							<ClockCircleOutlined />
						</div>
						<Pragraph xxSmall>
							Учитесь, когда есть свободная минутка
						</Pragraph>
					</div>
					<div className={s.motivation__motivationBlock}>
						<div className={s.icons}>
								<HomeOutlined />
						</div>
						<Pragraph 
							xxSmall 
							small>
							Откуда угодно - дома, в&nbsp;офисе, в&nbsp;кафе
						</Pragraph>
					</div>
					<div className={s.motivation__motivationBlock}>
						<div className={s.icons}>
						<div className={s.icons}>
							<SmileOutlined />
						</div>
						<Pragraph xxSmall>
							Разговоры по-английски  без&nbsp;неловких пауз и "mmm, how to say..." 
						</Pragraph>
					</div>
				</div>
				</div>
			</BackgroundBlock>
			<BackgroundBlock
				backgroundImg={imgBackground}>
					<Header
						white
						size="l"
					>
					Начать учить английский просто
				</Header>
				<Pragraph small white>
					Кликай по карточкам и узнавай новые слова, быстро и легко!
				</Pragraph>
				<CardList item={wordsList}/>
			</BackgroundBlock>
			<BackgroundBlock>
				<Header size='l' white>
					Изучайте английский с персональным сайтом помощником
				</Header>
				<Pragraph white small>
					Начните прямо сейчас
				</Pragraph>
				<ButtonComponent>
					Начать бесплатный урок
				</ButtonComponent>
			</BackgroundBlock>
			<Footer/>
		</>
	)
}

export default AppComponent;
