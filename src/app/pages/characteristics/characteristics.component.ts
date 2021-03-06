import { Component, AfterViewInit } from '@angular/core';
@Component({
	templateUrl: './characteristics.component.html'
})
export class CharacteristicsComponent implements AfterViewInit {
	subtitle:string;
	text:string[];	
	constructor() {
		this.subtitle = "Характеристики на EIGRP";
		this.text = ["EIGRP e издаден през 1992 г. като собствен протокол, достъпен само за устройствата на Cisco. През 2013 г. Cisco пусна основна функционалност на EIGRP като отворен стандарт за IETF като информационен RFC. Това означава, че други доставчици на мрежи вече могат да приложат EIGRP на своето оборудване, за да работят съвместно с Cisco и не-Cisco маршрутизатори, работещи с EIGRP. Въпреки това, разширени функции на EIGRP, като EIGRP stub, необходими за внедряването на Dynamic Multipoint Virtual Private Network (DMVPN), няма да бъдат пуснати в IETF. Като информационен RFC, Cisco ще продължи да поддържа контрола на EIGRP.",
		"EIGRP включва функции както на протоколите за маршрутизиране на състоянието на връзката, така и на дистанционните векторни маршрути. Въпреки това, EIGRP все още се основава на принципа на протокола за маршрутизиране на векторни разстояния, при който информацията за останалата част от мрежата се учи от директно свързани съседи.",
		"EIGRP е усъвършенстван протокол за маршрутизиране на векторни разстояния, който включва функции, които не са включени в други протоколи за маршрутизиране на разстояния като RIP и IGRP."]
	}
	
	ngAfterViewInit(){}
}