import { Component, OnInit} from '@angular/core';
import { ancientStructures, boardGames, famousAuthors, famousInventions, famousRivers, festivalsWorld, mountainRanges, movieGenres, musicalGenres, musicalInstrumentsWorld, prehistoricAnimals, spaceMissions, techInnovations, wondersOfNature, worldCuisines } from './consts/posts';
import { Iancient, Iboard, Ifamous, Ifestive, Imountain, Imovie, Imusic, Iprehistoric, Ispace, Itech, Iworld } from './models/posts';
import { Ianimal, Iapp, Ibands, Ibeverage, Icontinent, Idessert, Ifestival, Iflower, Igadget, Ihotel, Iinsect, Iisland, Ilandmark, Imineral, Imoon, Imounts, Iocean, Iplant, Iprofession, Iriver, Ispice, Itool, Iunive, Ivehicle } from './models/student';
import { animals, apps, beveragesMenu, continents, desserts, festivals, flowers, gadgets, hotels, insects, islands, landmarks, minerals, mountains, musicalBands, oceans, planets, planetsMoons, professions, rivers, spices, tools, universities, vehiclesModels } from './consts/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ourFirstApp';




fruits: Array<string> = ['Apple', 'Banana', 'Mango', 'Orange'];
spaceArr:Array<Ispace>=spaceMissions
plantsArr:Array<Iplant>=planets
mountainsArr:Array<Imounts>=mountains
universitiesArr:Array<Iunive>=universities
animalsArr:Array<Ianimal>=animals
appsArr:Array<Iapp>=apps
continentsArr:Array<Icontinent>=continents
dessertsArr:Array<Idessert>=desserts
oceansArr:Array<Iocean>=oceans
gadgetsArr:Array<Igadget>=gadgets
landmarksArr:Array<Ilandmark>=landmarks
vehiclesModelsArr:Array<Ivehicle>=vehiclesModels
professionsArr:Array<Iprofession>=professions
beveragesMenuArr:Array<Ibeverage>=beveragesMenu
flowersArr:Array<Iflower>=flowers
hotelsArr:Array<Ihotel>=hotels
islandsArr:Array<Iisland>=islands
insectsArr:Array<Iinsect>=insects
festivalsArr:Array<Ifestival>=festivals
riversArr:Array<Iriver>= rivers
spicesArr:Array<Ispice>=spices
toolsArr:Array<Itool>=tools
mineralsArr:Array<Imineral>=minerals
planetsMoonsArr:Array<Imoon>=planetsMoons
musicalBandsArr:Array<Ibands>=musicalBands



ngOnInit(): void {
  this.spaceArr.forEach(f=>{
    console.log(f)
  })
}

 

}
