import React, {Component} from 'react';
import {Input} from 'antd';
import Card from '../Card';
import s from './CardList.module.scss';

const {Search} = Input;

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

	handleSubmitForm = () => {
		// event.preventDefault();
		this.setState(({value}) => {
			return {
				label: value,
				value: '',
			};
		});
	};

	render() {
		const {item = [], onDeletedItem, onInputRef} = this.props;
		const {value, label} = this.state;
		
		onInputRef(this.inputRef);
		return (
			<>
				<div>
					{ label }
				</div>
				<div className={s.form}>
					<Search
							placeholder="input search text"
							allowClear
							enterButton="Search"
							size="large"
							value={value}
							onChange={this.handleInputChange}
							onSearch={this.handleSubmitForm}
						/>
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