import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';

@Component({
  selector: 'app-step4-for-directive',
  imports: [],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
    persons: IPerson[] = [{"firstname":"Gisella","lastname":"Jouen","email":"gjouen0@pen.io"},
  {"firstname":"Bev","lastname":"Calbaithe","email":"bcalbaithe1@storify.com"},
  {"firstname":"Cordey","lastname":"Thumann","email":"cthumann2@wikipedia.org"},
  {"firstname":"Lonnard","lastname":"Waldock","email":"lwaldock3@unicef.org"},
  {"firstname":"Nisse","lastname":"Tipler","email":"ntipler4@ebay.com"},
  {"firstname":"Anna-diana","lastname":"Bern","email":"abern5@reuters.com"},
  {"firstname":"Adella","lastname":"Patriskson","email":"apatriskson6@mayoclinic.com"},
  {"firstname":"Jyoti","lastname":"Hindge","email":"jhindge7@plala.or.jp"},
  {"firstname":"Tracy","lastname":"Cline","email":"tcline8@timesonline.co.uk"},
  {"firstname":"Agatha","lastname":"Lyons","email":"alyons9@census.gov"},
  {"firstname":"Damian","lastname":"Rens","email":"drensa@msn.com"},
  {"firstname":"Chet","lastname":"Worton","email":"cwortonb@newyorker.com"},
  {"firstname":"Linus","lastname":"Clarke","email":"lclarkec@newsvine.com"},
  {"firstname":"Ogdan","lastname":"Alster","email":"oalsterd@nba.com"},
  {"firstname":"Vanna","lastname":"Fayerbrother","email":"vfayerbrothere@uol.com.br"},
  {"firstname":"Llywellyn","lastname":"Oakwell","email":"loakwellf@abc.net.au"},
  {"firstname":"Siward","lastname":"Vince","email":"svinceg@sakura.ne.jp"},
  {"firstname":"Clemens","lastname":"Hugli","email":"chuglih@redcross.org"},
  {"firstname":"Paquito","lastname":"Birtles","email":"pbirtlesi@webs.com"},
  {"firstname":"Magdalena","lastname":"Leathard","email":"mleathardj@freewebs.com"},
  {"firstname":"Marybeth","lastname":"Teggart","email":"mteggartk@mlb.com"},
  {"firstname":"Colette","lastname":"Adriani","email":"cadrianil@rambler.ru"},
  {"firstname":"Sherlocke","lastname":"Belfrage","email":"sbelfragem@theglobeandmail.com"},
  {"firstname":"Dario","lastname":"Bonwick","email":"dbonwickn@si.edu"},
  {"firstname":"Dante","lastname":"Deshon","email":"ddeshono@earthlink.net"},
  {"firstname":"Jesse","lastname":"Fellini","email":"jfellinip@baidu.com"},
  {"firstname":"Zoe","lastname":"Trevain","email":"ztrevainq@nytimes.com"},
  {"firstname":"Pammi","lastname":"Warland","email":"pwarlandr@washingtonpost.com"},
  {"firstname":"Husain","lastname":"Wiggans","email":"hwigganss@wikispaces.com"},
  {"firstname":"Sondra","lastname":"Bareham","email":"sbarehamt@yahoo.com"}
    ]
}
