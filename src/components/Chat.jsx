import React from "react"
import ChatMessage from "./ChatMessage"

export default function Chat() {
  return (
    <div>
      <div className="box_chat">
        <div className="bg-gray h-full pills p-md">
          <div style={{ height: "70vh", overflowY: "auto" }}>
             <ChatMessage name={'eiei'} msg={'สวัสดี'} />
          </div>
          <div>
            <div className="relative">
              <input type="text" className="w-full pills" />
              <span style={{ position: "absolute", bottom: 0, right: 0 }}>Enter เพื่อส่ง</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
