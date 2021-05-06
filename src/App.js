import React from 'react';
import HeaderBlock from './component/HeaderBlock';
import { ReactComponent as ReactLogoSvg } from './logo.svg'

import './App.css';
import Header from './component/Header';
import Pragraph from './component/Paragraph';
import Card from './component/Card';

export const wordsList = [
	{
		 eng: 'between',
		 rus: 'между'
	},
	{
		 eng: 'high',
		 rus: 'высокий'
	},
	{
		 eng: 'really',
		 rus: 'действительно'
	},
	{
		 eng: 'something',
		 rus: 'что-нибудь'
	},
	{
		 eng: 'most',
		 rus: 'большинство'
	},
	{
		 eng: 'another',
		 rus: 'другой'
	},
	{
		 eng: 'much',
		 rus: 'много'
	},
	{
		 eng: 'family',
		 rus: 'семья'
	},
	{
		 eng: 'own',
		 rus: 'личный'
	},
	{
		 eng: 'out',
		 rus: 'из/вне'
	},
	{
		 eng: 'leave',
		 rus: 'покидать'
	},
];

const AppComponent = () => {
	const descr = "Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов";
	

	return (
		<>
			<HeaderBlock>
				<Header>
					Время учить слова
				</Header>
				<Pragraph>
					{descr}
				</Pragraph>
			</HeaderBlock>
			<div>
				{
					wordsList.map(({ eng, rus }, index) => (
						<Card key={index} eng={eng} rus={rus}/>
					))
				}
			</div>
			<HeaderBlock>
				<Header>
					Еще один заголовок
				</Header>
				<Pragraph>
					Ну здорово же!
				</Pragraph>
				<ReactLogoSvg/>
			</HeaderBlock>
		</>
	)
}

export default AppComponent;
