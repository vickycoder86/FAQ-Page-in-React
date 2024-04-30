
import { useState } from 'react';
import './App.css';
import { Questiondata } from './Questiondata';


function App() {

  const [showanswer,setShowanswer]= useState(Questiondata[0].id)
  return (
    <div className="App">
      <div>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className='faqouter'>

          {
            Questiondata.map((item,index)=>{
              return(
                <div className='faqitems'>
            <h2 onClick={()=>setShowanswer(item.id)}>{item.question}</h2>
            <p className={showanswer===item.id ? 'activeAns':''}>{item.answer}</p>

          </div>

              )
            })
          }
          

        </div>
      </div>
    </div>
  );
}

export default App;
