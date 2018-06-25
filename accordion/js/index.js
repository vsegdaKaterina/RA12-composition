'use strict';

const Accordion = (props) => {
  return (
		<main className="main">
			<h2 className="title">{props.title}</h2>
			{props.children}
		</main>
	);
}

class SectionOfAcc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false}
	}

	toggleSection() {		
		this.setState({open: !this.state.open});
	}

	render() {
		return (
			<section className={this.state.open ? "section open" : "section"}>
        <button>toggle</button>
        <h3 className="sectionhead" onClick={this.toggleSection.bind(this)}>{this.props.title}</h3>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </section>
		);
	}
}

ReactDOM.render(
	<Accordion title="React">
		<SectionOfAcc title="Компоненты">
		Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
		</ SectionOfAcc>
		<SectionOfAcc title="Выучил раз, используй везде!">
		После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
		</ SectionOfAcc>
		<SectionOfAcc title="Использование JSX">
		JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
		</ SectionOfAcc>
	</ Accordion>
	, document.getElementById('accordian')
);