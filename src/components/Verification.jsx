import { useEffect, useState } from "react";

export function Verification({ elements }) {
  const [ToVerifi, setToVerifi] = useState();
  const [WeightToComprobe, setWeightToCOmprobe] = useState(200);
  const [ActiveVerifi, setActiveVerifi] = useState();

  const handleClick = () => {
    setToVerifi(!ToVerifi);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const weight = event.target.elements[0].value;
    setWeightToCOmprobe(Number(weight));
  };

  useEffect(() => {
    const sum = elements.reduce((inicial, element) => {
      return inicial + Number(element.weight);
    }, 0);
    if (sum <= WeightToComprobe) {
      setActiveVerifi(true);
    } else {
      setActiveVerifi(false);
    }
  }, [ToVerifi]);

  const ConfirmElements = elements.filter(
    (element) => element.category.categoryname !== "Undefined"
  );

  const TotalWeight = ConfirmElements.reduce((inicial, element) => {
    return inicial + Number(element.weight);
  }, 0);

  console.log(TotalWeight);
  return (
    <article>
      <header>
        <h2>Peso a comprobar {WeightToComprobe}</h2>
      </header>
      <p>Peso actual de todos lementos {TotalWeight} </p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="number" placeholder="Ingrese el nuevo peso maximo" />
        </label>
        <button type="submit">Cambiar peso soportado</button>
      </form>
      <div>
        {ActiveVerifi === true ? <p>Peso aceptado</p> : <p>Exceso de peso</p>}
        <button onClick={handleClick}>Verificar</button>
      </div>
    </article>
  );
}
