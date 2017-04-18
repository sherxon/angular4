class baseObject { 
    protected l: number = 0;
    protected w: number = 0;

    constructor(l:number, w:number) { 
        this.l = l;
        this.w = w;
    }
}

class rectangle extends baseObject { 
    constructor(x, y) { 
        super(x, y);
    }

    calcSize(): number { 
        return this.l * this.w;
    }
}

var rec = new rectangle(5, 2);
console.log(rec.calcSize());