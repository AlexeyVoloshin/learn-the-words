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
import Button from './component/Button';



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
			<CardList item={wordsList}/>
			<BackgroundBlock
				backgroundImg={imgBackground}
			>
				<Header
					white
					size="l"
				>
					Мы создали уроки, чтобы помочь вам увереннее разговаривать на английском языке
				</Header>
				<div className={s.motivation}>
					<div className={s.motivationBlock}>
						<div className={s.icons}>
							<ClockCircleOutlined />
						</div>
						<Pragraph small>
							Учитесь, когда есть свободная минутка
						</Pragraph>
					</div>
				</div>

				<div className={s.motivationBlock}>
					<div className={s.icons}>
						<HomeOutlined />
					</div>
					<Pragraph small>
						Откуда угодно - дома, в&nbsp;офисе, в&nbsp;кафе
					</Pragraph>
					<Pragraph small>
						Разговоры по-английски  без&nbsp;неловких пауз
					</Pragraph>
				</div>
				
			</BackgroundBlock>
			<BackgroundBlock>
				<Header size='l' white>
					Изучайте английский с персональным сайтом помощником
				</Header>
				<Pragraph white>
					Начните прямо сейчас
				</Pragraph>
				<Button>
					Начать бесплатный урок
				</Button>
			</BackgroundBlock>
			<Footer/>
		</>
	)
}

export default AppComponent;
