import react, { Component } from 'react'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      numero: 0,
      botaoToggle: 'VAI'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpa = this.limpa.bind(this);

  
  }

  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer= null;
      state.botaoToggle = 'VAI';
    }else{
      this.timer = setInterval(() => {
        let state = this.state;
        this.state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botaoToggle = 'PAUSAR';
    }
    
    this.setState(state);
    
  }
  limpa(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer= null;
      
    }
    let state = this.state;
    state.numero = 0;
    state.botaoToggle = "VAI";
    this.setState(state);
  }
  
  


  render(){
  return(
   
    <div className='Container'>
    <img src={require('./assets/cronometro.png')}/>
    <a className='timer'>{this.state.numero.toFixed(1)}</a>
    <div className='areaBTN'>
      <a className='botao' onClick={this.vai}>{this.state.botaoToggle }</a>
      <a className='botao'onClick={this.limpa}>LIMPAR</a>
    </div>
  </div>
  
  );
  }
  
}
export default App;
