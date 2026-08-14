import { useState } from "react";

export default function MesuresForm({ onSubmit }) {
  const [form, setForm] = useState({
    poitrine: "",
    taille: "",
    hanches: "",
    longueur: "",
    commentaire: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <h2 className="text-xl font-semibold">Prendre mes mesures</h2>

      <input
        name="poitrine"
        placeholder="Tour de poitrine"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />

      <input
        name="taille"
        placeholder="Tour de taille"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />

      <input
        name="hanches"
        placeholder="Tour de hanches"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />

      <input
        name="longueur"
        placeholder="Longueur totale (jusqu’au talon)"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />

      <textarea
        name="commentaire"
        placeholder="Précisions (col ouvert, décolleté, manches...)"
        className="border p-2 w-full rounded"
        onChange={handleChange}
      />

      <button className="bg-black text-white p-3 rounded w-full">
        Valider mes mesures
      </button>
    </form>
  );
}
