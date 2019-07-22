export class planets{
    width: number;
    color: string;

    constructor(color:string, width:number){
        this.width = width;
        this.color = color;
    }
}

let krypton = new planets ("blue" ,  12);
let omicronpersei8 = new planets("green" , 56);
let nemesis = new planets ("purple", 12);
