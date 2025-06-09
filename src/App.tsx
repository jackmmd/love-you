import { useState } from "react"
import hamster from './assets/hamster.jpg'
import patitaRoja from './assets/patita-roja.png'
import patitaRosa from './assets/patita-rosada.png'
import perrpAsao from './assets/asao.webp'
export default function App() {
  const [response, setResponse] = useState(true)
  const [showText, setShowText] = useState(false)
  const [showAsao, setShowAsao] = useState(false)
  const [top, setTop] = useState(0)
  function hiddenNo() {
    if (top === 52) {
      setTop(0)
    } else {
      setTop(52)
    }
    setShowAsao(true)
  }
  return (
    <section className="border h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-center mt-10 text-xl font-bold">¿Quieres ser mi novia?</h1>
        {showText &&
          <div>
            <img
              className="mx-auto"
              height={100}
              width={100}
              src={hamster} alt="" />
            <p className="text-center">Sabía que ibas a decir que si</p>
          </div>
        }
        {showAsao &&
          <div >
            <img
              src={perrpAsao}
              alt=""
              width={150}
              className="mx-auto mt-2" />
            <p className="text-center font-semibold text-red-500">No me rechazes</p>
          </div>
        }
        <div className="flex justify-center">
          <div className="mt-10 flex gap-3 absolute">
            <button
              onMouseOver={() => {
                setShowAsao(false)
              }}
              onClick={() => {
                setShowText(true)
                setResponse(true)
              }}
              className="border border-pink-600 hover:bg-pink-200 px-4 rounded-md cursor-pointer h-10 w-21 flex items-center gap-1">
              <img src={patitaRosa} alt="" height={25} width={25} />
              <p>Si</p>
            </button>
            {response === false ? null :
              <button
                onClick={hiddenNo}
                onMouseOver={hiddenNo}
                className={`border border-red-500 px-4 rounded-md cursor-pointer h-10 w-22 relative top-${String(top)} flex items-center justify-between`}>
                <img src={patitaRoja} alt="" height={25} width={25} />
                <p className="ml-1">
                  No
                </p>
              </button>
            }
          </div>
        </div>
      </div>
      <footer className="relative text-center mb-2"><small>&copy;All rights reserved by Ari 2025</small></footer>
    </section>
  )
}
