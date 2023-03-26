import { Injectable } from '@angular/core';
import { generateSlug } from "random-word-slugs"
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { 
    this.generateCards()
  }


  private nCards = 4000
  public cards: Card[] = []

  public generateCards(): void {
    this.cards = []
    for (let i = 1; i <= this.nCards; i++) {
      this.cards.push({
        id: i,
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.setRandomText(`photo${i}_`)
      })
    }
  }

  public setRandomText(prefix: string): string {
    return prefix + generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
  }
}
