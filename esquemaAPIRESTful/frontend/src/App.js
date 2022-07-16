import "./App.css";
import React from "react";
import axios from "axios";
import _ from "lodash";

function App() {
  const [noticias, setNoticias] = React.useState([]);

  async function obtenerNoticias(e) {
    e.preventDefault();
    const response = await axios.get("http://localhost:3000/news");
    if (response.status === 200) {
      setNoticias(response.data.news);
    }
  }

  async function generarNoticia() {}

  return (
    <div className="App">
      <header>
        <div className="buttons">
          <select name="select">
            <option value="/api/productos" selected>/api/productos</option>
            <option value="/api/info" >
            /api/info
            </option>
            <option value="/api/productos/form">/api/productos/form</option>
          </select>
          <button>Obtener</button>
        </div>
        <div>
          {noticias &&
            noticias.length > 0 &&
            noticias.map((noticia, index) => {
              return (
                <div key={`news${index}`}>
                  <img
                    src={noticia.image}
                    alt=""
                    width="150px"
                    height="150px"
                  />
                  <h4>{noticia.title}</h4>
                  <text>{noticia.body}</text>
                  <br />
                  <text>{noticia.createdAt}</text>
                </div>
              );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
