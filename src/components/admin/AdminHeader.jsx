function AdminHeader({ activeView, email, editing }) {
  return (
    <header className="admin__header">
      <h1>
        {activeView === "create"
          ? editing
            ? "Editar propiedad"
            : "Nueva propiedad"
          : activeView === "leads"
          ? "Leads"
          : "Propiedades"}
      </h1>

      <p>{email}</p>
      
    </header>
  );
}

export default AdminHeader;