export default function RecapCommande({ pagne, modele, mesures, onConfirm }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Récapitulatif</h2>

      <div className="border p-4 rounded">
        <p><strong>Pagne :</strong> {pagne.name}</p>
        <p><strong>Modèle :</strong> {modele.name}</p>
        <p><strong>Mesures :</strong></p>
        <ul className="ml-4 list-disc">
          <li>Poitrine : {mesures.poitrine}</li>
          <li>Taille : {mesures.taille}</li>
          <li>Hanches : {mesures.hanches}</li>
          <li>Longueur : {mesures.longueur}</li>
        </ul>
        <p><strong>Commentaire :</strong> {mesures.commentaire}</p>
      </div>

      <button
        onClick={() => onConfirm({ pagne, modele, mesures })}
        className="bg-black text-white p-3 rounded w-full"
      >
        Confirmer la commande
      </button>
    </div>
  );
}
