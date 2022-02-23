import { EnglishPeople, FrenchPeople, IPeople } from "./Index";


let people : IPeople = new EnglishPeople("Robert", 30, "...");
people.printUser();

people = new FrenchPeople("Julia", 15, "...");
people.printUser();
