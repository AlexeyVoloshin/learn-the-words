import React from 'react';
import s from './card.module.scss';

class CardComponent extends React.Component {
	/* 
		у каждого компонента собственный стейт(инкапсулированный)
	 	не связан с другими стейтами компонентов
	 */
	state = {
		done: false,
	}
	

	handlerCardClick = () => {
		/* 
			шаг 2. клик вызывает функцию setState которая меняет состояние компонента
		*/
		this.setState({
			done: !this.state.done,
		})
	}
	/*
		 шаг 3. состояние компонента поменялось и надо его перерендерить снова
	*/
	render() {
		/* 
			шаг 4. Рендер рисует новую структуру нашего компонента
			и рисует с новым значением state
		*/ 
		const { eng, rus } = this.props;
		const { done } = this.state;

		const cardClass = [s.card];
		if (done) {
			cardClass.push(s.done);
		};
		console.log(cardClass);
		return (
			<div 
				onClick={this.handlerCardClick} // шаг 1. делаем клик
				className={cardClass.join(' ')}
			>
				<div className={s.cardInner }>
						<div className={s.cardFront}>
							{ eng }
						</div>
						<div className={s.cardBack}>
							{ rus }
						</div>
				</div>
			</div>
		);
	}
}

export default CardComponent;