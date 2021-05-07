import React, {Component} from 'react';
import Card from '../Card';
import s from './CardList.module.scss';

class CardListComponent extends Component {
	state = {
		value: '',
	};
	
	inputRef = React.createRef();

	handleInputChange = (event) => {
		this.setState({
			value: event.target.value,
		});
	};

	handleSubmitForm = (event) => {
		event.preventDefault();
		this.setState(({value}) => {
			return {
				label: value,
				value: '',
			};
		});
	};

	render() {
		console.log('###: ref', this.inputRef);
		const {item = [], onDeletedItem, onInputRef} = this.props;
		
		onInputRef(this.inputRef);
		return (
			<>
				<div>
					{ this.state.label }
				</div>
				<form
					className={s.form}
					onSubmit={this.handleSubmitForm}
				>
					<input 
						ref={this.inputRef}
						className={s.inputText}
						type="text"
						onChange={this.handleInputChange}
						value={this.state.value} 
					/>
					<button>
						Add New Word
					</button>
				</form>
				<div className={s.wrapper}>
					{
						item.map(({eng, rus, id}) => (
							<Card onDeleted={() => {
								onDeletedItem(id);
							}} 
							key={id} 
							eng={eng} 
							rus={rus}/>
						))
					}
				</div>
			</>
		);
	}
}

export default CardListComponent;