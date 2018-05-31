import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";

import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // 使用heroes接收HEROES数组里的数据
  heroes=HEROES;

  hero:Hero={
    id:1,
    name:"windstom"
  };

  // 定义一个selectHero，属性沿用Hero里的设定
  selectHero:Hero;
  onSelect(hero:Hero):void{
    this.selectHero=hero;
  }

  constructor() { }

  ngOnInit() {
  }



}
