import { motifs } from "../../data/motifs";
import MotifCard from "../../components/MotifCard";

export default function MotifsPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-light tracking-widest text-center mb-10 uppercase">
        Motifs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {motifs.map((motif) => (
          <MotifCard key={motif.id} motif={motif} />
        ))}
      </div>
    </div>
  );
}
