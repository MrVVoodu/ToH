export interface Hero {
  id: number;
  name: string;
}


export interface IAPI {
  _embedded: {
    heroList: Hero[];
    _links: any;
  }
  _links: any;
}