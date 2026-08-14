"use client";

import { useState } from "react";
import PagneSelector from "./PagneSelector";
import ModeleSelector from "./ModeleSelector";
import MesuresForm from "./MesuresForm";
import RecapCommande from "./RecapCommande";
import Paiement from "./Paiement";
export const dynamic = "force-dynamic";

export default function WaxPage() {
  const [pagne, setPagne] = useState(null);
  const [modele, setModele] = useState(null);
  const [mesures, setMesures] = useState(null);

  return (
    <main style={{ padding: "20px" }}>
      <h1>Commande Wax</h1>

      <PagneSelector onSelect={setPagne} />
      <ModeleSelector onSelect={setModele} />

      {pagne && modele && (
        <MesuresForm onSubmit={setMesures} />
      )}

      {mesures && (
        <RecapCommande
          pagne={pagne}
          modele={modele}
          mesures={mesures}
        />
      )}

      {mesures && (
        <Paiement
          pagne={pagne}
          modele={modele}
          mesures={mesures}
        />
      )}
    </main>
  );
}
