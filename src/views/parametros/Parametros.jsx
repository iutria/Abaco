import { useParams } from "react-router-dom";

function Parametros() {
  const params = useParams();
  return <div>hola {params.id}</div>;
}

export default Parametros;
