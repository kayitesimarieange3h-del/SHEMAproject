export default function Paiement({ commande }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Paiement</h2>

      <p className="text-gray-700">
        Votre commande est prête. Choisissez votre méthode de paiement.
      </p>

      <button className="bg-blue-600 text-white p-3 rounded w-full">
        Payer par carte
      </button>

      <button className="bg-gray-800 text-white p-3 rounded w-full">
        PayPal
      </button>

      <button className="bg-green-600 text-white p-3 rounded w-full">
        Apple Pay
      </button>
    </div>
  );
}
