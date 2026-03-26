import { supabase } from "../lib/supabase";

// Traer todas las propiedades
export const getProperties = async () => {
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};

// Crear una propiedad nueva
export const createProperty = async (propertyData) => {
  const { error } = await supabase
    .from("properties")
    .insert([propertyData]);

  if (error) throw error;
};

// Actualizar una propiedad existente
export const updateProperty = async (id, updatedData) => {
  const { error } = await supabase
    .from("properties")
    .update(updatedData)
    .eq("id", id);

  if (error) throw error;
};

// Borrar una propiedad
export const deleteProperty = async (id) => {
  const { error } = await supabase
    .from("properties")
    .delete()
    .eq("id", id);

  if (error) throw error;
};

// Subir una imagen al bucket "properties" y devolver la URL pública
export const uploadPropertyImage = async (file) => {
  if (!file) return null;

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${fileExt}`;

  const filePath = `properties/${fileName}`;

  const { error } = await supabase.storage
    .from("properties")
    .upload(filePath, file, {
      upsert: false,
    });

  if (error) throw error;

  const { data: publicUrlData } = supabase.storage
    .from("properties")
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
};