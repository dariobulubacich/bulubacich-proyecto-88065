import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <h1>Bienvenido a Ramos Generales</h1>
      <p>
        En nuestra tienda encontrarás los mejores productos de calidad, con
        envío rápido y excelente atención al cliente.
      </p>
      <p>Explora nuestras categorías y encuentra justo lo que necesitas.</p>
      <Link to="/category/electronica">
        <button
          style={{ padding: "10px 20px", marginTop: "15px", cursor: "pointer" }}
        >
          Ir al catálogo
        </button>
      </Link>
    </div>
  );
};

export default Home;
