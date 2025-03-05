import { Character } from "@/types/interfaces/Character";

export const _transformCharacter = (character: Character) => {
  return {
    mal_id: character.id,
    name: character.name,
    images: {
      webp: {
        image_url: character.images.webp.image_url,
      },
    },
  };
};
