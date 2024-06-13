export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
  cries: Cries;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSprites;
  versions: Versions;
}

interface OtherSprites {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
  showdown: Showdown;
}

interface DreamWorld {
  front_default: string;
  front_female: string | null;
}

interface Home {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

interface Showdown {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationII;
  "generation-iii": GenerationIII;
  "generation-iv": GenerationIV;
  "generation-v": GenerationV;
  "generation-vi": GenerationVI;
  "generation-vii": GenerationVII;
  "generation-viii": GenerationVIII;
}

interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface Yellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

interface GenerationII {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIII {
  emerald: Emerald;
  "firered-leafgreen": FireredLeafgreen;
  "ruby-sapphire": RubySapphire;
}

interface Emerald {
  front_default: string;
  front_shiny: string;
}

interface FireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface GenerationIV {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartgoldSoulsilver;
  platinum: Platinum;
}

interface DiamondPearl {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface HeartgoldSoulsilver {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface Platinum {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface GenerationV {
  "black-white": BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface Animated {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface GenerationVI {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire;
  "x-y": XY;
}

interface OmegarubyAlphasapphire {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface XY {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface GenerationVII {
  icons: Icons;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

interface Icons {
  front_default: string;
  front_female: string | null;
}

interface UltraSunUltraMoon {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface GenerationVIII {
  icons: Icons;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface Type {
  slot: number;
  type: NamedAPIResource;
}

interface PastType {
  generation: NamedAPIResource;
  types: Type[];
}
