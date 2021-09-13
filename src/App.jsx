import { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContact = data => {
    
    if (this.state.contacts.some(contact => contact.name === data.name)) {
      alert ('Alrdy contact')
    } else {
      this.setState((prevState) => ({contacts: [...prevState.contacts, data]}))
    }
    console.log(data)
    console.log(this.state.contacts)
  }
  
  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }
  
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }

  componentDidMount () {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
    
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  render () {
    const visibleContacts = this.visibleContacts()
    
    return (
      <div>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList onContacts={visibleContacts} onDelete={this.onDeleteContact}/> 
      </div>
    )
  }
}

export default App