export interface List {
  count: number;
  results: Item[];
}

interface Item {
  name: string;
  url: string;
}
