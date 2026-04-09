import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html'
})
export class HeroPage {
  name = signal('Ironman');
  age  = signal(45);
  
  heroDescription = computed(() => `${ this.name() } - ${ this.age() } `);

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
  
  chageAge(){
    this.age.set(60);
  }
    
  capitalizeName = computed(() => this.name().toUpperCase());

}
