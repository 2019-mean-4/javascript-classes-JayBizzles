export class planet{
    width: number;
    color: string;

    constructor(color:string, width:number){
        this.width = width;
        this.color = color;
    }
}

let krypton = new planet ("blue" ,  12);
let omicronpersei8 = new planet("green" , 56);
let nemesis = new planet ("purple", 12);
