import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../services/dragonball-service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html'
})
export class DragonballSuperPage { 
  public dragonballService = inject(DragonballService);
  
}
