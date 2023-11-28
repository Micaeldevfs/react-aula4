import { useState } from "react"

function App() {
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado, setResultado] = useState()
  function soma(){
    setResultado(numero1 + numero2)
  }
  function subtracao(){
    setResultado(numero1 - numero2)
  }
  function multiplicar(){
    setResultado(numero1 * numero2)
  }
  function dividir(){
    setResultado(numero1 / numero2)
  }
  return (
    <>
    <label htmlFor="num1">Numero1</label>
    <input type="text" id="num1" onChange={(e)=>setNumero1(e.target.value)} />
    <br />
    <label htmlFor="num2">Numero2</label>
    <input type="text" id="num2" onChange={(e)=>setNumero2(e.target.value)} />
    <br />
    <button onClick={soma}>Somar</button>
    <button onClick={subtracao}>Subtrarir</button>
    <button onClick={multiplicar}>Multiplicar</button>
    <button onClick={dividir}>Dividir</button>
    <p>Resultado: {resultado}</p>
    </>
  )
}

export default App