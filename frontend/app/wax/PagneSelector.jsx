"use client";

export default function PagneSelector({ onSelect }) {
  const pagnes = [
    {
      id: 1,
      name: "Motif Crayons",
      image: "/images/pagnes/motif-crayons.jpg",
      variantes: [
        { id: "bleu", image: "/images/pagnes/crayons-bleu.jpg" },
        { id: "rose", image: "/images/pagnes/crayons-rose.jpg" },
        { id: "jaune", image: "/images/pagnes/crayons-jaune.jpg" },
      ]
    },
    // ... autres pagnes
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Choisir un pagne</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {pagnes.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 bg-white shadow">
            
            {/* Image principale */}
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover rounded mb-3"
            />

            <p className="font-medium mb-2">{p.name}</p>

            {/* Variantes */}
            <div className="flex gap-2">
              {p.variantes.map((v) => (
                <button
                  key={v.id}
                  onClick={() => onSelect({ ...p, variante: v })}
                  className="border rounded overflow-hidden hover:opacity-80 transition"
                >
                  <img
                    src={v.image}
                    alt={v.id}
                    className="h-16 w-16 object-cover"
                  />
                </button>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
