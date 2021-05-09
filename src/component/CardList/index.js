import React, {Component} from 'react';
import {Input} from 'antd';
import Card from '../Card';
import s from './CardList.module.scss';
import getTranslateWord from '../../services/serviceDictionary';

const {Search} = Input;

class CardListComponent extends Component {
	state = {
		value: '',
		label: '',
		isBusy: false
	};

	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		props.onInputRef && props.onInputRef(this.inputRef);
	}

	handleInputChange = (event) => {
		this.setState({
			value: event.target.value,
		});
	};

	getTheWord = async () => {
		const {value} = this.state;
		const getWord = await getTranslateWord(value);
		
		this.setState(({value}) => {
			return {
				label: `${value} - ${getWord.translate}`,
				value: '',
				isBusy: false,
			};
		});
	};

	handleSubmitForm = async () => {
		this.setState({
			isBusy: true,
		}, this.getTheWord);
		
	};

	render() {
		const {item = [], onDeletedItem} = this.props;
		const {value, label, isBusy} = this.state;
		
		// onInputRef(this.inputRef);
		return (
			<>
				<div>
					{ label }
				</div>
				<div className={s.form}>
					<form>
					<Search
						loading={isBusy}
						placeholder="input search text"
						allowClear
						enterButton="Добавить"
						size="large"
						value={value}
						onChange={this.handleInputChange}
						onSearch={this.handleSubmitForm}
						ref={this.inputRef}
					/>
					</form>
				</div>
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