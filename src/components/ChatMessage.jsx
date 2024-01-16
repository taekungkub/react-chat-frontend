import React from 'react'



export default function ChatMessage({name , msg}) {
  return (
   <div>
      คุณ {name}
     <div className='chat_message_wrapper'>
        <div className='chat_message_inner'>
            {msg}
        </div>
    </div>
   </div>
  )
}