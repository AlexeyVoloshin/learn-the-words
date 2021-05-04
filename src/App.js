import React from 'react';
import HeaderBlock from './component/HeaderBlock';
import ContentBlock from './component/ContentBlock';

import './App.css';
import FooterBlock from './component/FooterBlock';

const App = () => {
	const descr = "Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов";
	const copyright = 'тут будет текст копирайта'

	return (
		<>
			<HeaderBlock title="Учите слова онлайн" descr={descr}/>
			<HeaderBlock title="Нам нравится это" hideBackground/>
			<ContentBlock title="ЗАголовок" subtitle="Абзац"/>
			<FooterBlock title="заголовок копирайта" subtitle={copyright}/>
		</>
	)
}

export default App;
