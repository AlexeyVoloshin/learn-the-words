import React from 'react';
import s from './Card.module.scss';
import { CheckSquareOutlined } from '@ant-design/icons';
const classNames = require('classnames');

class CardComponent extends React.Component {
	/* 
		у каждого компонента собственный стейт(инкапсулированный)
	 	не связан с другими стейтами компонентов
	 */
	state = {
		done: false,
		isRemembered: false,
	}

	handlerIsRememberClick = () => {
		console.log('1');
		/* 
			если позвать не объект а функцию то для реакта это некий тригер.
		   что позови мне стейт тогда когда весь остальной стейт выполнится.
			если состояние не завит от предыдущего то передавай обьект. 
			this.state иначе используй функци.
		*/
			// вторым параметром принимает props
		this.setState({
				isRemembered: true,
				done: true,
			}
		);
	}

	handlerCardClick = () => {
		/* 
			шаг 2. клик вызывает функцию setState которая меняет состояние компонента
		*/
		this.setState(({done, isRemembered}) =>{
			if(!isRemembered) {
				return {
					done: !done,
				}
			}
		});
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
		const { done, isRemembered } = this.state;

		return (
			<div className={s.root}>
				<div 
					onClick={this.handlerCardClick} // шаг 1. делаем клик
					className={classNames(s.card, {
						[s.done]: done,
						[s.isRemembered]: isRemembered,
					})}
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
				<div 
					className={classNames(s.icons, {
						[s.noActive]: isRemembered,
					})}
				>
					<CheckSquareOutlined 
						
						
						onClick={this.handlerIsRememberClick} 
					/>
				</div>
			</div>
		);
	}
}

export default CardComponent;
