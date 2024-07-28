class SimpleScheduler{
    constructor(){
        this.tasks=[];
    }

    schedule(task, interval){
        const milliseconds=this.parseInterval(interval);
        const timerID=setInterval(task,milliseconds);
        this.tasks.push(timerID);
    }

    parseInterval(interval){
        const [amount,unit]=interval.split('');
        const unitMapping = { second:1000 , minute:60000, hour:360000};
        return parseInt(amount, 10) * (unitMapping[unit] || 0);
        }
    
    clear(){
        this.tasks.forEach(clearInterval);
    }
    }

    module.exports = SimpleScheduler; 