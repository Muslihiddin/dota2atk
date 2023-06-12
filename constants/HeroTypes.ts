export type Hero = {
  id: number;
  name: string;
  color: string;
  icon: string;
  heroType: "str" | "agi" | "int" | "uni";
  baseStats: {
    str: number;
    agi: number;
    int: number;
  };
  lvl: number;
};

export type Heroes = Hero[];
