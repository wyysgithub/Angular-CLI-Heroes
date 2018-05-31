
// 导入了 Angular 的 Injectable 符号，并且给这个服务类添加了 @Injectable() 装饰器。
// 它把这个类标记为依赖注入系统的参与者之一。HeroService 类将会提供一个可注入的服务，并且它还可以拥有自己的待注入的依赖。
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { of } from "rxjs/index";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";


// @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。
@Injectable({
  providedIn: 'root'
})
export class HeroService {

//   getHeroes():Hero[]{
//   return HEROES;
// }


  constructor(private wyyMessageService:MessageService) { }
  getHeroes():Observable<Hero[]>{

    this.wyyMessageService.add('这代表HeroService里私有属性wyyMessageService生效了');

    // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    return of(HEROES);
  }
}
