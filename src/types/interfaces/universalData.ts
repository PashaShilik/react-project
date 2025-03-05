import { IAnime } from './IAnime';
import { ICharacter } from './ICharacter';

export type UniversalData = IAnime | ICharacter;

export function isAnime(data: UniversalData): data is IAnime {
  return (data as IAnime).type !== undefined;
}

export function isCharacter(data: UniversalData): data is ICharacter {
  return (data as ICharacter).name !== undefined;
}
