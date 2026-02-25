export interface IClickCounterProps {
  title?: string;
}

export interface IClickCounterEmits {
  (e: 'decrement', count: number): void;
}

export interface IProduct {
  name: string;
  price: number;
  img: string;
}

export interface IProductCardProps {
  product: IProduct;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPlaceHolderPostProps {
  post: IPost;
}
