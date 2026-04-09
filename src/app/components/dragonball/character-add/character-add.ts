import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html'
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  
  outCharacter = output<Character>(); 

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0 )
    {
      return;
    } 

    const newCharacter : Character = {
      id : Math.floor(Math.random() * 1000),
      name : this.name(),
      power : this.power()
    };    

    // this.characters.update((list) => [...list, newCharacter]);
    this.outCharacter.emit(newCharacter);
    this.resetFieds();
  }

  resetFieds() {
    this.name.set('');
    this.power.set(0);
  }
}
