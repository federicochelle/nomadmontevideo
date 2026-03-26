import { supabase } from "../lib/supabase";

// Traer todos los leads
export const getLeads = async () => {
  const { data, error } = await supabase
    .from("contact_leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

// Actualizar un lead
export const updateLead = async (id, updatedData) => {
  const { error } = await supabase
    .from("contact_leads")
    .update(updatedData)
    .eq("id", id);

  if (error) throw error;
};

//Borrar lead
export const deleteLead = async (id) => {
  const { error } = await supabase
    .from("contact_leads")
    .delete()
    .eq("id", id);

  if (error) throw error;
};