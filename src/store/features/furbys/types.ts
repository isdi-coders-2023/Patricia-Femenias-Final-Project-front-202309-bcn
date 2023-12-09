export interface FurbyStructure {
  _id: string;
  name: string;
  type: string;
  year: number;
  generation: number;
  language: string;
  price: number;
  howFoundIt: string;
  imageUrl: string;
}

export interface FurbyStateStructure {
  furbys: FurbyStructure[];
  selectedFurby: FurbyStructure;
}

export type FurbyWithoutId = Omit<FurbyStructure, "_id">;
