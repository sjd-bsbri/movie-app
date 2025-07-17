import Image from "next/image";
import Link from "next/link";
import { Actor } from "../_data/actors";

interface ActorCardProps {
  actor: Actor;
}

export default function ActorCard({ actor }: ActorCardProps) {
  return (
    <Link href={`/actors/${actor.id}`} className="text-center">
      
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={actor.imageUrl}
          alt={actor.name}
          fill
          className="rounded-xl object-cover border-2 border-gray-800"
        />
      </div>

      <p className="mt-3 font-semibold text-gray-300 truncate">
        {actor.name}
      </p>
    </Link>
  );
}