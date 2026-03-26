function LeadsList({ leads, selectedLeadId, onSelectLead }) {
  return (
    <div className="admin__leads-table">
      <div className="admin__table-wrap">
        <table className="admin__table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan="5" className="admin__table-empty">
                  No hay leads todavía
                </td>
              </tr>
            ) : (
              leads.map((lead) => {
                const isSelected = selectedLeadId === lead.id;

                return (
                  <tr
                    key={lead.id}
                    className={`admin__table-row-clickable ${isSelected ? "is-selected" : ""}`}
                    onClick={() => onSelectLead(lead.id)}
                  >
                    <td>{lead.name}</td>
                    <td className="admin__table-email">{lead.email}</td>
                    <td className="admin__table-message">{lead.message}</td>
                    <td>
                      <span className={`admin__status admin__status--${lead.status || "new"}`}>
                        {lead.status === "contacted"
                          ? "Contactado"
                          : lead.status === "closed"
                          ? "Cerrado"
                          : "Nuevo"}
                      </span>
                    </td>
                    <td>
                      {lead.created_at
                        ? new Date(lead.created_at).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeadsList;