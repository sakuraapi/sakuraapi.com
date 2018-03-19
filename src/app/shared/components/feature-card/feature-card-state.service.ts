import {Injectable} from '@angular/core';

@Injectable()
export class FeatureCardStateService {

  private readonly limit = 4;
  private id = 0;

  /**
   * Used by `<app-feature-card>` to decorate itself with a `border-color=x` attribute that's used by its css to
   * display a sequential repeating set of colors as the cards are being displayed throughout the application.
   *
   * @returns {number} the next sequential number in a series up to `this.limit` that then resets to 1. E.g., 1, 2, 3, 4, 1, 2, 3, 4.
   */
  nextColor(): number {
    return (this.id < this.limit)
      ? ++this.id
      : this.id = 1;
  }

  resetColor(): void {
    this.id = 0;
  }
}
