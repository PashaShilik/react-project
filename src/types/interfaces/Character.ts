export type Character = {
  id: number;
  name: string;
  images: {
    webp: {
      image_url: string;
    };
  };
};

export type CharacterResponse = {
  character: Character;
};
