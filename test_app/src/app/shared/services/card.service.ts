import { Injectable } from '@angular/core';
import { generateSlug } from "random-word-slugs"
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  private nCards = 4000

  public generateCards(): Card[] {
    const cards = []
    for (let i = 1; i <= this.nCards; i++) {
      cards.push({
        id: i.toString(),
        photo: `https://picsum.photos/id/${i}/500/500`,
        text: this.setRandomText(`photo${i}_`)
      })
    }
    return cards
  }

  public setRandomText(prefix: string): string {
    return prefix + generateSlug(4, { format: "kebab" }).replace(/-/g, '_')
  }
}
