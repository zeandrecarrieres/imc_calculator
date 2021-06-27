import { useState } from "react";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("0");

  function onSubmit(e) {
    e.preventDefault()
    const imc_bruto = (peso*10000)/(altura*altura)
    const imc = imc_bruto.toFixed(2)
    setImc(imc)
    setAltura('')
    setPeso('')
  }

  return (
    <div >
      <form className="flex flex-col justify-center items-center w-80  bg-gray-100 rounded-md" onSubmit={onSubmit}>
      <h1 className="font-bold mb-8">IM Calculator</h1>
        <label htmlFor="altura">Altura</label>
        <input
          type="number"
          name="altura"
          value={altura}
          placeholder="altura em cm"
          className="px-1 py-2 rounded-md"
          onChange={(e) => setAltura(e.target.value)}
        />
        <label htmlFor="peso">peso</label>
        <input
          type="number"
          name="peso"
          value={peso}
          placeholder="peso em kg"
          className="px-1 py-2 rounded-md"
          onChange={(e) => setPeso(e.target.value)}
        />
        <button className="px-16 py-2 bg-green-300 mt-4 rounded-md">
          Calcular
        </button>
        <label htmlFor="imc" className="mt-4">
          Seu IMC
        </label>
        <div className="text-3xl text-green-300 my-4 font-bold">{imc}</div>
      </form>
    </div>
  );
}

export default App;
