import { Anime } from './Anime';
import { Character } from './Character';

export type UniversalData = Anime | Character;

export function isAnime(data: UniversalData): data is Anime {
  return (data as Anime).type !== undefined;
}

export function isCharacter(data: UniversalData): data is Character {
  return (data as Character).name !== undefined;
}
