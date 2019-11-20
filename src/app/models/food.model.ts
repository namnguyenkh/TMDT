export class FoodloadTypeId {
  static UPLOAD_FOOD = 1;
  static UPLOAD_TYPE = 2;
}
export interface FoodType {
  id: number;
  name: string;
}
export interface Pizza {
  id: number;
  name: string;
  type: string;
  description: string;
  sizes: number;
  price: number;
  imageUrl: string;
}

export interface PizzaMaker extends Pizza {
  id: number;
  nameChef: string;
  imageUrl: string;
}

export interface PizzaType extends Pizza {
  id: number;
  type: string;
  imageUrl: string;
}

export interface Ingredient extends Pizza {
  id: number;
  name: string;
  price: number;
}


export interface Car {
  vin;
  year;
  brand;
  color;
}

