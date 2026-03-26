import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function AdminSidebar({ activeView, setActiveView, onLogout, resetEdit }) {
  return (
    <aside className="admin__sidebar">
      <a href="/" className="admin__logo">
  <img src={logo} alt="Nomad Montevideo" />
  ADMIN
</a>

      <nav className="admin__nav">
        <button
          className={activeView === "properties" ? "is-active" : ""}
          onClick={() => setActiveView("properties")}
        >
          Propiedades
        </button>

        <button
          className={activeView === "create" ? "is-active" : ""}
          onClick={() => {
            resetEdit();
            setActiveView("create");
          }}
        >
          Nueva propiedad
        </button>

        <button
          className={activeView === "leads" ? "is-active" : ""}
          onClick={() => setActiveView("leads")}
        >
          Leads
        </button>
      </nav>

      <button className="admin__logout" onClick={onLogout}>Cerrar sesión</button>
    </aside>
  );
}

export default AdminSidebar;