import { Component, OnInit} from '@angular/core';
import { ancientStructures, boardGames, famousAuthors, famousInventions, famousRivers, festivalsWorld, mountainRanges, movieGenres, musicalGenres, musicalInstrumentsWorld, prehistoricAnimals, spaceMissions, techInnovations, wondersOfNature, worldCuisines } from './consts/posts';
import { Iancient, Iboard, Ifamous, Ifestive, Imountain, Imovie, Imusic, Iprehistoric, Ispace, Itech, Iworld } from './models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ourFirstApp';




fruits: Array<string> = ['Apple', 'Banana', 'Mango', 'Orange'];
spaceArr:Array<Ispace>=spaceMissions

worldCuisinesArr:Array<Iworld>=worldCuisines
 mountainRangesArr:Array<Imountain>=mountainRanges
 techInnovationsArr:Array<Itech>=techInnovations
 famousRiversArr:Array<Ifamous>=famousRivers
 famousAuthorsArr:Array<Ifamous>=famousAuthors
 prehistoricAnimalsArr:Array<Iprehistoric>=prehistoricAnimals
 famousInventionsArr:Array<Ifamous>=famousInventions
 movieGenresArr:Array<Imovie>=movieGenres
 musicalGenresArr:Array<Imusic>=musicalGenres
 ancientStructuresArr:Array<Iancient>=ancientStructures
 boardGamesArr:Array<Iboard>=boardGames
 musicalInstrumentsWorldArr:Array<Imusic>=musicalInstrumentsWorld
 festivalsWorldArr:Array<Ifestive>=festivalsWorld
 wondersOfNatureArr:Array<Iworld>=wondersOfNature


ngOnInit(): void {
  this.boardGamesArr.forEach(f=>{
    console.log(f)
  })
}

 

}
