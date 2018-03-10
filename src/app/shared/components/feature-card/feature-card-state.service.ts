import {Injectable} from '@angular/core';

@Injectable()
export class FeatureCardStateService {

  private readonly limit = 4;
  private id = 0;

  constructor() {
  }

  nextColor(): number {
    return (this.id < this.limit)
      ? ++this.id
      : this.id = 1;
  }
}
