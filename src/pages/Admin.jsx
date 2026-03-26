import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "../lib/supabase";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";

import PropertyForm from "../components/admin/properties/PropertyForm";
import PropertyList from "../components/admin/properties/PropertyList";

import LeadsList from "../components/admin/leads/LeadsList";
import LeadDetail from "../components/admin/leads/LeadDetail";

import { getProperties } from "../services/propertiesService";
import { getLeads } from "../services/leadsService";

import "./Admin.css";

function Admin({ session }) {
  const [activeView, setActiveView] = useState("properties");
  const [properties, setProperties] = useState([]);
  const [leads, setLeads] = useState([]);
  const [editingProperty, setEditingProperty] = useState(null);
  const [selectedLeadId, setSelectedLeadId] = useState(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchProperties = useCallback(async () => {
    try {
      const data = await getProperties();
      setProperties(data);
    } catch (err) {
      console.error("Error cargando propiedades:", err);
    }
  }, []);

  const fetchLeads = useCallback(async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (err) {
      console.error("Error cargando leads:", err);
    }
  }, []);

  useEffect(() => {
    const loadAdminData = async () => {
      await Promise.all([fetchProperties(), fetchLeads()]);
    };

    loadAdminData();
  }, [fetchProperties, fetchLeads]);

  const selectedLead = useMemo(() => {
    return leads.find((lead) => lead.id === selectedLeadId) || null;
  }, [leads, selectedLeadId]);

  return (
    <main className="admin">
      <div className="admin__layout">
        <AdminSidebar
          activeView={activeView}
          setActiveView={setActiveView}
          onLogout={handleLogout}
          resetEdit={() => setEditingProperty(null)}
        />

        <div className="admin__content">
          <AdminHeader
            activeView={activeView}
            email={session?.user?.email}
            editing={!!editingProperty}
          />

          {activeView === "create" && (
            <PropertyForm
              key={editingProperty?.id || "new-property"}
              editingProperty={editingProperty}
              onSuccess={fetchProperties}
              clearEdit={() => setEditingProperty(null)}
            />
          )}

          {activeView === "properties" && (
            <PropertyList
              properties={properties}
              onEdit={(property) => {
                setEditingProperty(property);
                setActiveView("create");
              }}
              onDeleted={fetchProperties}
            />
          )}

          {activeView === "leads" && (
            <section className="admin__card">
              <div className={`admin__leads-layout ${selectedLead ? "has-detail" : ""}`}>
                <LeadsList
                  leads={leads}
                  selectedLeadId={selectedLeadId}
                  onSelectLead={setSelectedLeadId}
                />

                {selectedLead && (
                  <LeadDetail
                    lead={selectedLead}
                    onClose={() => setSelectedLeadId(null)}
                    onSaved={fetchLeads}
                  />
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default Admin;