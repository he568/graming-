class tentacle {
    constructor(x, y, l, n, a){
        this.x = x;
        this.y = y;
        this.l = l;
        this.n = n;
        this.t = {};
        this.rand = math.random();
        this.segments = {new segment(this, this.l/ this.n, true};
        for (let i = 1; i < this.n; i++){
            this.segments.push(
                new segment(this.segments[i - 1], this.l/ this.n, 0, false)
            );
        }
    }  
            
            
        

