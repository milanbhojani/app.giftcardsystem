import React from 'react'
import user1 from './user1.png'
import user3 from './user3.png'
import user4 from './user4.png'
import './chatcss.css'

const Chat = () => {
  return (
  <>
    <div className="container mt-2">
    <div className="row">
      <div className="col-md-4">
        <div className="user-list">
          <ul className="list-group">
            <li className="list-group-item d-flex align-items-center">
              <img src={user1} className="mr-2" alt="User 1" width="40"/>
              Max Andry
            </li>
            <li className="list-group-item d-flex align-items-center">
              <img src={user4} className="mr-2" alt="User 2" width="40"/>
              Jaqulin Williom
            </li>
            <li className="list-group-item d-flex align-items-center">
              <img src={user3} className="mr-2" alt="User 3" width="40"/>
              Shedark kain
            </li>
            {/* Add more users as needed  */}
          </ul>
        </div>
      </div>
      <div className="col-md-8">
        
        <div className="chat-section">
            <img src={user1} className="mr-2" alt="User 1" width="40"/>
              Max Andry
              <hr/>
            <div className="message-container">
              <div className="message received">
                <p>Hey !!</p>
              </div>
            </div>
            <div className="message-container">
              <div className="message sent">
                <p>Hello Max :)</p>
              </div>
            </div>
            <div className="message-container">
              <div className="message received">
                <p>Whats the plan for summer vaction ?</p>
              </div>
            </div>
             {/* Add more messages as needed  */}
          </div>
      
          <div className="message-input">
            <input type="text" placeholder="Type your message"/>
            <i className="fas fa-paperclip file-icon"></i>
          </div>
      
          <div className="emoji-panel">
            <span>&#128512;</span>
            <span>&#128513;</span>
            <span>&#128514;</span>
            <span>&#128515;</span>
            <span>&#128516;</span>
            <span>&#128517;</span>
            {/* Add more emojis as needed  */}
          </div>
       
       
        
      </div>
    </div>
  </div>
  </>
  )
}

export default Chat
