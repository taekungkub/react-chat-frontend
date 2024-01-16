import React from "react"
import Background from "../assets/images/bg.jpg"
import Logo from "../assets/images/logo.png"
import Chat from "./Chat"
import { useFade} from "react-morph"
export default function Welcome() {
  const [name, setName] = React.useState("")
  const [nameRoom, setNameRoom] = React.useState("")

  const [currentState, setCurrentState] = React.useState("name")

  function handleChange(event) {
    setName(event.target.value)
    console.log(name)
  }

  const spring = { damping: 10, stiffness: 20 }
  const fadeIn = useFade({ spring, isInitial: name != "" })

  const fadeInChoice1 = useFade({ spring, isInitial: currentState === "choice" })
  const fadeInChoice2 = useFade({ spring, isInitial: currentState === "choice" })
  const fadeInChoice3 = useFade({ spring, isInitial: currentState === "choice" })

  const fadeInNewChat1 = useFade({ spring, isInitial: currentState === "new-chat" })
  const fadeInNewChat2 = useFade({ spring, isInitial: currentState === "new-chat" })
  const fadeInNewChat3 = useFade({ spring, isInitial: currentState === "new-chat" })

  const fadeInJoinRoom1 = useFade({ spring, isInitial: currentState === "join-room" })
  const fadeInJoinRoom2 = useFade({ spring, isInitial: currentState === "join-room" })
  const fadeInJoinRoom3 = useFade({ spring, isInitial: currentState === "join-room" })

  return (
    <div style={{ backgroundImage: `url(${Background})`, backgroundSize: "100% 100%" }}>
      <br />
      <img src={Logo} className="block mx-auto mt-md" alt="" />

      <div className="mx-auto p-md  mt-md ">
        <div className="container block mx-auto p-md ">
          <div className="inner_container ">
            {currentState === "name" && (
              <div>
                <div className="title text-center">ชื่อของคุณ</div>
                <div className="flex flex-center">
                  <input className="w-full" type="text" onChange={handleChange} />
                </div>
                {name && (
                  <div className="flex flex-center" {...fadeIn}>
                    <button className="button p-md pills mt-md" onClick={() => setCurrentState("choice")}>
                      ยืนยัน
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentState === "choice" && (
              <div>
                <div className="title text-center" {...fadeInChoice1}>
                  คุณ {name}
                </div>

                <div className="mt-lg flex flex-center flex-col">
                  <div className="choice-item main" {...fadeInChoice2} onClick={() => setCurrentState("new-chat")}>
                    สร้างห้องใหม่
                  </div>
                  <div className="choice-item" {...fadeInChoice3} onClick={() => setCurrentState("join-room")}>
                    เข้าร่วมแชท
                  </div>
                </div>
              </div>
            )}

            {currentState === "new-chat" && (
              <div>
                <div className="title text-center" {...fadeInNewChat1}>
                  สร้างห้องใหม่
                </div>
                <div className="flex flex-center" {...fadeInNewChat2}>
                  <input className="w-full" type="text" onChange={(e) => setNameRoom(e.target.value)} />
                </div>
                <div className="flex flex-center" {...fadeInNewChat3}>
                  <button className="text-button p-md pills mt-md" onClick={() => setCurrentState("name")}>
                    กลับ
                  </button>
                  <button className="button p-md pills mt-md" onClick={() => setCurrentState("chat")}>
                    ยืนยัน
                  </button>
                </div>
              </div>
            )}

            {currentState === "join-room" && (
              <div>
                <div className="title text-center" {...fadeInJoinRoom1}>
                  เข้าร่วมแชท
                </div>

                <div className="flex flex-center " {...fadeInJoinRoom2}>
                  <input className="w-full" type="text" onChange={(e) => setNameRoom(e.target.value)} />
                </div>
                <div className="flex flex-center " {...fadeInJoinRoom3}>
                  <button className="text-button p-md pills mt-md" onClick={() => setCurrentState("name")}>
                    กลับ
                  </button>
                  <button className="button p-md pills mt-md" onClick={() => setCurrentState("chat")}>
                    เข้าร่วม
                  </button>
                </div>
              </div>
            )}

            {currentState === "chat" && (
              <div>
                <div className="title">ห้อง {nameRoom}</div>
                <Chat />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
