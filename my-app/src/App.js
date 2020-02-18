import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {


  return (
    <div className="App">
      
      <TodoItems entries={this.state.items}/>  
      <TodoList 
      addItem={this.addItem}
      inputElement={this.inputElement}
      handleInput={this.handleInput}
      currentItem={this.state.currentItem} 
      
      />
        

    </div>
  );
}
}

export default App
