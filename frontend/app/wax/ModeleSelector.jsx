"use client";

export default function ModeleSelector({ pagne, onSelect }) {
  if (!pagne) {
    return (
      <p className="text-gray-500">
        Veuillez d’abord choisir un pagne.
      </p>
    );
  }

  const modeles = [
    { id: 1, name: "Robe Longue", type: "robe" },
    { id: 2, name: "Ensemble Moderne", type: "ensemble" },
    { id: 3, name: "Jupe Taille Haute", type: "jupe" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Modèles disponibles pour : {pagne.name}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {modeles.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m)}
            className="border p-4 rounded-lg hover:bg-gray-100"
          >
            <div className="h-24 bg-gray-200 rounded mb-2"></div>
            <p className="font-medium">{m.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
