import { ICharacter } from "@/types/interfaces/ICharacter";

export const _transformCharacter = (character: ICharacter) => {
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
