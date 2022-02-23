//TS Style
export class EnglishPeople implements IPeople
{
    info : any;
    name : string;
    age: number;

    constructor(name : string, age : number, info)
    {
        this.name = name;
        this.age = age;
        this.info = info;
    }

    printUser() : string {
        let data = `My name is ${this.name}. My age is ${this.age}`;
        console.log(data);

        return data;
    }
}

export class FrenchPeople implements IPeople
{
    info : any;
    name : string;
    age: number;

    constructor(name : string, age : number, info)
    {
        this.name = name;
        this.age = age;
        this.info = info;
    }

    printUser() : string {
        let data = `Je m'appelles ${this.name}. J'ai ${this.age} ans`;
        console.log(data);

        return data;
    }
}

export interface IPeople{
    info : any;
    name : string;
    age: number;
    printUser() : string;
}