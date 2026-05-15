import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ancientStructures, boardGames, famousAuthors, famousInventions, famousRivers, festivalsWorld, mountainRanges, movieGenres, musicalGenres, musicalInstrumentsWorld, prehistoricAnimals, spaceMissions, techInnovations, wondersOfNature, worldCuisines } from './consts/posts';
import { Iancient, Iboard, Ifamous, Ifestive, Imountain, Imovie, Imusic, Iprehistoric, Ispace, Itech, Iworld } from './models/posts';
import { Ianimal, Iapp, Ibands, Ibeverage, Icontinent, Idessert, Ifestival, Iflower, Igadget, Ihotel, Iinsect, Iisland, Ilandmark, Imineral, Imoon, Imounts, Iocean, Iplant, Iprofession, Iriver, Ispice, Itool, Iunive, Ivehicle } from './models/student';
import { animals, apps, beveragesMenu, continents, desserts, festivals, flowers, gadgets, hotels, insects, islands, landmarks, minerals, mountains, musicalBands, oceans, planets, planetsMoons, professions, rivers, spices, tools, universities, vehiclesModels } from './consts/student';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi culpa minus inventore similique veniam animi quia delectus nam at?'

  course={
    title:"Angular Development",
    students:123456789,
    rating:4.6,
    price:199,
    relaseDate:new Date(2025, 2 ,16)
  }







  }


 


