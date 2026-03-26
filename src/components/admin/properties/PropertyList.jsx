import { deleteProperty } from "../../../services/propertiesService";

function PropertyList({ properties, onEdit, onDeleted }) {
  const handleDelete = async (id) => {
    if (!confirm("¿Borrar propiedad?")) return;

    try {
      await deleteProperty(id);
      onDeleted();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="admin__card">
      {properties.map((p) => (
        <div key={p.id} className="admin__property">
  <h3>{p.name}</h3>

  <div className="admin__actions">
    <button
      onClick={() => onEdit(p)}
      className="admin_btn admin_btn--edit"
    >
      Editar
    </button>

    <button
      onClick={() => handleDelete(p.id)}
      className="admin_btn admin_btn--delete"
    >
      Borrar
    </button>
  </div>
</div>
      ))}
    </section>
  );
}

export default PropertyList;