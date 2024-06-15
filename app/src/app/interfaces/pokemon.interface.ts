export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: Sprites | undefined;
}

interface Sprites {
  front_default: string;
}
