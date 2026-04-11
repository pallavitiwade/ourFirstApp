import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ourFirstApp';
  skills:Array<string>=['HTML','CSS','JAVA','REACT']
ngOnInit(): void {
  this.skills.forEach(s=>{
    console.log(s)
  })
}

flowers:Array<string>=['daisy','jasmin','mogra','rose']
ngOnInit1(): void {
  this.flowers.forEach(f=>{
    console.log(f)
  })
}

fruits: Array<string> = ['Apple', 'Banana', 'Mango', 'Orange'];

ngOnInit2(): void {
  this.flowers.forEach(f=>{
    console.log(f)
  })
}

 countries: Array<string> = ['India', 'USA', 'Canada', 'Germany'];
ngOnInit3(): void {
  this.countries.forEach(f=>{
    console.log(f)
  })
}

 movies:Array<string> = ['Inception', 'Avatar', 'Titanic', 'Joker'];
ngOnInit4(): void {
  this.movies.forEach(f=>{
    console.log(f)
  })
}

 languages: Array<string> = ['Java', 'Python', 'C++', 'TypeScript'];
 ngOnInit5(): void {
  this.languages.forEach(f=>{
    console.log(f)
  })
}

cities: Array<string> = ['Mumbai', 'Delhi', 'Pune', 'Hyderabad'];
 ngOnInit6(): void {
  this.cities.forEach(f=>{
    console.log(f)
  })
}

animals: Array<string> = ['Dog', 'Cat', 'Lion', 'Elephant'];
 ngOnInit7(): void {
  this.animals.forEach(f=>{
    console.log(f)
  })
}
days: Array<string>= ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
 ngOnInit8(): void {
  this.days.forEach(f=>{
    console.log(f)
  })
}
tools: Array<string> = ['VS Code', 'Git', 'Postman', 'Chrome'];
ngOnInit9(): void {
  this.tools.forEach(f=>{
    console.log(f)
  })
}


months: Array<string>= ['January', 'February', 'March', 'April'];
ngOnInit10(): void {
  this.months.forEach(f=>{
    console.log(f)
  })
}

hobbies:Array<string>=['Reading', 'Gaming', 'Traveling'];
ngOnInit11(): void {
  this.hobbies.forEach(f=>{
    console.log(f)
  })
}


}

