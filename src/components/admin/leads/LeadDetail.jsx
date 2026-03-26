import { useEffect, useState } from "react";
import { updateLead } from "../../../services/leadsService";
import { deleteLead } from "../../../services/leadsService";


function LeadDetail({ lead, onClose, onSaved }) {
  const [status, setStatus] = useState(lead.status || "new");
  const [notes, setNotes] = useState(lead.notes || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setStatus(lead.status || "new");
    setNotes(lead.notes || "");
    setMessage("");
  }, [lead]);

  const handleSave = async () => {
  try {
    setLoading(true);
    setMessage("");

    await updateLead(lead.id, {
      status,
      notes,
    });

    setMessage("Cambios guardados");
    await onSaved();
  } catch (error) {
    console.error("ERROR GUARDANDO LEAD:", error);
    setMessage(`Error: ${error.message}`);
  } finally {
    setLoading(false);
  }
};

const handleDelete = async () => {
  const confirmDelete = confirm("¿Seguro que querés borrar este lead?");
  if (!confirmDelete) return;

  try {
    setLoading(true);
    setMessage("");

    await deleteLead(lead.id);

    await onSaved(); // refresca lista
    onClose();       // cierra panel

  } catch (error) {
    console.error("Error borrando lead:", error);
    setMessage("Error al borrar el lead");
  } finally {
    setLoading(false);
  }
};

  return (
    <aside className="admin__lead-detail">
      <div className="admin__lead-detail-header">
        <div>
          <h3>{lead.name}</h3>
          <p>{lead.email}</p>
        </div>

        <button className="admin__detail-close" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="admin__lead-detail-body">
        <div className="admin__detail-group">
          <span className="admin__detail-label">Mensaje</span>
          <div className="admin__detail-box">
            {lead.message || "-"}
          </div>
        </div>

        <div className="admin__detail-group">
          <label className="admin__detail-label">Estado</label>
          <select
            className={`admin__select admin__select--${status}`}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="new">Nuevo</option>
            <option value="contacted">Contactado</option>
            <option value="closed">Cerrado</option>
          </select>
        </div>

        <div className="admin__detail-group">
          <label className="admin__detail-label">Notas</label>
          <textarea
            className="admin_notes admin_notes--detail"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Agregar seguimiento, comentarios o próximos pasos..."
          />
        </div>

        {message && <p className="admin__message">{message}</p>}
      </div>

      <div className="admin__lead-detail-footer">
  <button
    className="admin_btn admin_btn--edit"
    onClick={handleSave}
    disabled={loading}
  >
    {loading ? "Guardando..." : "Guardar cambios"}
  </button>

  <button
    className="admin_btn admin_btn--delete"
    onClick={handleDelete}
    disabled={loading}
  >
    Eliminar
  </button>
</div>

    </aside>
  );
}

export default LeadDetail;