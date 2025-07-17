import { featuredActors } from "../_data/featured-actors"; 
import ActorCard from "./ActorCard";

export default function TopActors() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6 px-4">ستارگان محبوب</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 px-4">
        {featuredActors.map((actor) => ( 
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </section>
  );
}