import React from "react";

const login = () => {
    return (
    <body>
        <div>
        <div className=" m-0 row justify-content-center aling-items-center border-3 ">
            <div className="col-auto p-5">
            <form className="border p-5 form-control login formulario">
                <div className="form-group">
                <label className="palabras">Usuario:</label>
                <input
                    className="form-control"
                    id="email"
                    type="text"
                    name="usuario"
                    placeholder="Ingrese email"
                ></input>
                </div>
                <div className="form-group">
                <label className="palabras">Contraseña:</label>
                <input
                    className="form-control"
                    id="pass"
                    type="password"
                    name="contraseña"
                    placeholder="Ingrese Contraseña"
                ></input>
                </div>
                <div className="pt-2 text-center">
                <input
                    className="btn btn-dark btn-sm mx-1"
                    id="init-sec"
                    type="submit"
                    name="ingresar"
                    value="Ingresar"
                ></input>
                <p className="palabras"><a href="dsd">¿Olvidaste tu Contraseña?</a></p>
                <p className="palabras"><a href="dsd">¿No Tienes Una Cuenta?</a></p>
                </div>
            </form>
            </div>
        </div>
        </div>
    </body>
    );
};

export default login;
