import { useState } from "react";
import {
  createProperty,
  updateProperty,
  uploadPropertyImage,
} from "../../../services/propertiesService";

function UploadIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 16V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 11.5L12 8l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16.5a3.5 3.5 0 0 1-3.5 3.5h-9A4.5 4.5 0 0 1 7 11.03 5.5 5.5 0 0 1 17.35 9.1 4 4 0 0 1 20 16.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PropertyForm({ editingProperty, onSuccess, clearEdit }) {
  const [form, setForm] = useState({
    name: editingProperty?.name || "",
    location: editingProperty?.location || "",
    type: editingProperty?.type || "",
    guests: editingProperty?.guests || "",
    description: editingProperty?.description || "",
    is_published: editingProperty?.is_published ?? true,
  });

  const [files, setFiles] = useState({
    image_1: null,
    image_2: null,
    image_3: null,
  });

  const [previews, setPreviews] = useState({
    image_1: editingProperty?.image_1 || "",
    image_2: editingProperty?.image_2 || "",
    image_3: editingProperty?.image_3 || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFile = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    setFiles((prev) => ({
      ...prev,
      [name]: file || null,
    }));

    if (file) {
      const previewUrl = URL.createObjectURL(file);

      setPreviews((prev) => ({
        ...prev,
        [name]: previewUrl,
      }));
    }
  };

  const removePreview = (slotName) => {
    setFiles((prev) => ({
      ...prev,
      [slotName]: null,
    }));

    setPreviews((prev) => ({
      ...prev,
      [slotName]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = { ...form };

      if (files.image_1) {
        updatedData.image_1 = await uploadPropertyImage(files.image_1);
      }

      if (files.image_2) {
        updatedData.image_2 = await uploadPropertyImage(files.image_2);
      }

      if (files.image_3) {
        updatedData.image_3 = await uploadPropertyImage(files.image_3);
      }

      if (editingProperty) {
        await updateProperty(editingProperty.id, updatedData);
      } else {
        await createProperty(updatedData);
      }

      onSuccess();
      clearEdit();
    } catch (err) {
      console.error("Error guardando propiedad:", err);
    }
  };

  return (
    <section className="admin__card">
      <form onSubmit={handleSubmit} className="admin__form">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre de la propiedad"
          required
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Ubicación"
          required
        />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Tipo"
          required
        />

        <input
          name="guests"
          value={form.guests}
          onChange={handleChange}
          placeholder="Huéspedes"
          required
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          required
        />

        <div className="admin__upload-grid">
          <div className="admin__upload-item">
            <p className="admin__upload-title">Imagen principal</p>

            <label className="admin__upload-slot">
              <input
                type="file"
                name="image_1"
                accept="image/*"
                onChange={handleFile}
                className="admin__file-hidden"
              />

              {previews.image_1 ? (
                <>
                  <img
                    src={previews.image_1}
                    alt="Preview principal"
                    className="admin__slot-image"
                  />
                  <button
                    type="button"
                    className="admin__slot-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      removePreview("image_1");
                    }}
                  >
                    ×
                  </button>
                </>
              ) : (
                <div className="admin__slot-empty">
                  <UploadIcon />
                  <span>Hacé click para subir</span>
                </div>
              )}
            </label>
          </div>

          <div className="admin__upload-item">
            <p className="admin__upload-title">Imagen secundaria</p>

            <label className="admin__upload-slot">
              <input
                type="file"
                name="image_2"
                accept="image/*"
                onChange={handleFile}
                className="admin__file-hidden"
              />

              {previews.image_2 ? (
                <>
                  <img
                    src={previews.image_2}
                    alt="Preview secundaria"
                    className="admin__slot-image"
                  />
                  <button
                    type="button"
                    className="admin__slot-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      removePreview("image_2");
                    }}
                  >
                    ×
                  </button>
                </>
              ) : (
                <div className="admin__slot-empty">
                  <UploadIcon />
                  <span>Hacé click para subir</span>
                </div>
              )}
            </label>
          </div>

          <div className="admin__upload-item">
            <p className="admin__upload-title">Imagen extra</p>

            <label className="admin__upload-slot">
              <input
                type="file"
                name="image_3"
                accept="image/*"
                onChange={handleFile}
                className="admin__file-hidden"
              />

              {previews.image_3 ? (
                <>
                  <img
                    src={previews.image_3}
                    alt="Preview extra"
                    className="admin__slot-image"
                  />
                  <button
                    type="button"
                    className="admin__slot-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      removePreview("image_3");
                    }}
                  >
                    ×
                  </button>
                </>
              ) : (
                <div className="admin__slot-empty">
                  <UploadIcon />
                  <span>Hacé click para subir</span>
                </div>
              )}
            </label>
          </div>
        </div>

        <label>
          <input
            type="checkbox"
            name="is_published"
            checked={form.is_published}
            onChange={handleChange}
          />
          Publicada
        </label>

        <button type="submit" className="admin__submit">
          {editingProperty ? "Actualizar propiedad" : "Guardar propiedad"}
        </button>
      </form>
    </section>
  );
}

export default PropertyForm;