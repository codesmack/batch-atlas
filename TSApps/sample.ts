class People
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

    printInfo() : string {
        let data = `My name is ${this.name}. My age is ${this.age}`;
        console.log(data);

        return data;
    }
}

let p = new People("Walt", 25, "Nice guy");
p.printInfo();