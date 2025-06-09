import { useState } from "react"
import hamster from './assets/hamster.jpg'
export default function App() {
  const [response, setResponse] = useState(true)
  const [showText, setShowText] = useState(false)
  const [top, setTop] = useState(0)

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
        <div className="flex justify-center">
          <div className="mt-10 flex gap-3 absolute">
            <button
              onClick={() => {
                setShowText(true)
                setResponse(true)
              }}
              className="bg-green-600 px-4 rounded-md cursor-pointer h-10 w-16">Si</button>
            {response === false ? null :
              <button
                onClick={() => setResponse(false)}
                onMouseOver={() => {
                  if (top === 52) {
                    setTop(0)
                  } else {
                    setTop(52)
                  }
                }}
                className={`bg-red-600 px-4 rounded-md cursor-pointer h-10 w-16 relative top-${String(top)}`}>No</button>
            }
          </div>
        </div>
      </div>
      <footer className="relative text-center mb-2"><small>&copy;All rights reserved by Ari 2025</small></footer>
    </section>
  )
}
