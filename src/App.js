import React, {Component} from 'react';

import {ClockCircleOutlined, HomeOutlined, SmileOutlined} from '@ant-design/icons';

import BackgroundBlock from './component/BackgroundBlock';
import Header from './component/Header';
import Pragraph from './component/Paragraph';
import CardList from './component/CardList';

import imgBackground from './assets/img/background.jpg';
import imgBackgroundFooter from './assets/img/back2.jpg';

import s from './App.module.scss';
import Footer from './component/FooterBlock';
import ButtonComponent from './component/Button';

import database from './services/firebase';

 

class AppComponent extends Component{
	descr = "Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов";
	onInputRef = null;
	state = {
		wordArr: [],
		inputRef: null,
	};

	componentDidMount() {
		database.ref('/cards').once('value').then(res => {
			this.setState({
				wordArr: res.val()
			}, this.setNewWord);
		});
	}

	setNewWord = () => {
		const {wordArr} = this.state;

		database.ref('/cards').set([...wordArr, {
			id: +new Date(),
			eng: 'mouse',
			rus: 'мышь',	
		}]);
	}


	onDeletedItem = (id) => {
		this.setState(({wordArr}) => {
			const arrItems = wordArr.filter(item => item.id !== id);
			return {
				wordArr: arrItems,
			};
		});
	};

	render() {
		const {wordArr} = this.state;
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
						{this.descr}
					</Pragraph>
					<ButtonComponent
						inpRef={() => this.onInputRef}
					>
						Начать бесплатный урок
					</ButtonComponent>
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
							<Pragraph 
								xxSmall
							>
								{'Разговоры по-английски  без&nbsp;неловких пауз и "mmm, how to say..."'}
							</Pragraph>
						</div>
					</div>
					</div>
				</BackgroundBlock>
				<BackgroundBlock >
						<Header
							white
							size="l"
						>
						Начать учить английский просто
					</Header>
					<Pragraph small white>
						Кликай по карточкам и узнавай новые слова, быстро и легко!
					</Pragraph>
					<CardList 
						onDeletedItem={this.onDeletedItem} 
						item={wordArr}
						onInputRef={(eventRef)=> this.onInputRef = eventRef}
						/>
				</BackgroundBlock>
				<BackgroundBlock
					backgroundImg={imgBackgroundFooter}
				>
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
		);
	}
}

export default AppComponent;
