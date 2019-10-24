class Controller {
    constructor() {
        this.finished = false;
        this.done = 5;
        this.atempts = 44;
               this.getAtempts = function() {
            return this.atempts;
        }
        this.switchFinished = function() {
           if (this.finished===true){
            this.finished = false;
           }else{
            this.finished = true;
           }
        }
    
    }
 
}
module.exports = Controller;