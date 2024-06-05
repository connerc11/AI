import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
      <div className='upperSide'>
        <div className='upperSideTop'> <img src={gptLogo} alt = "" className='logo' /> <span className='brand'>ChatGpt</span> </div>
        <button className='midBtn'><img src={addBtn} alt="" className='addBtn' /> New Chat</button>
        <div className='upperSideBottom'>
          <button className='query' ><img src={msgIcon} alt="Query"/> What is Programming </button>
          <button className='query' ><img src={msgIcon} alt="Query"/> How to use an API </button>
        
        </div>
      </div>
      <div className='lowerSide'>
      <button className='listItems'><img src={home} alt="" className='listItemsImg' /> Home</button>
      <button className='listItems'><img src={saved} alt="" className='listItemsImg' /> Save </button>
      <button className='listItems'><img src={rocket} alt="" className='listItemsImg' /> Save </button>


      </div>
    </div>
    <div className='main'> 

    </div>
    </div>

  );
}

export default App;
