import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <>
      <h1 className="text-center mb-3">Empleado list</h1>
      <EmpleadoList></EmpleadoList>
    </>
  );
}

export default App;
