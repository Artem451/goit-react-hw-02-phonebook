import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  hendleChange = (event) => {
    const {name, value} = event.currentTarget
     this.setState({
      [name]: value,
      id: uuidv4(),
    })
  }

  hendleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
    this.reset()
  }

  reset = () => {
    this.setState({
      ...INITIAL_STATE
    });
  }

  render () {
    return (
      <>
        <form onSubmit={this.hendleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange = {this.hendleChange}
          />
          <h2>Phone number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange = {this.hendleChange}
          />
          <button type = 'submit'>Add contact</button>
        </form>
      </>
    )
  }
}

export default ContactForm