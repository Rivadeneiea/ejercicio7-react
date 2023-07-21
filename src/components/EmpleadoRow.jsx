import React from "react";

const EmpleadoRow = ({ listaDeEmpleado }) => {
  return (
    <div className="d-flex mt-3 mb-3 container bg-success w-50">
      <div>
        <img src={listaDeEmpleado.pic} alt="foto de empleado" />
      </div>
      <div className="ms-2 text-light">
        <h3>{listaDeEmpleado.fullName}</h3>
        <h4>
          {listaDeEmpleado.title}
          <span className="bg-info ms-2">{listaDeEmpleado.department}</span>
        </h4>
      </div>
    </div>
  );
};

export default EmpleadoRow;
