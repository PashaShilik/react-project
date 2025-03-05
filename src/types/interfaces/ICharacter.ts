export interface ICharacter {
  id: number;
  name: string;
  images: {
    webp: {
      image_url: string;
    };
  };
}

export interface ICharacterResponse {
  character: ICharacter;
}
