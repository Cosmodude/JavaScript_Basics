// Example how arrow functions can be used with objects
const spammer = {
    numbers: [1, 4, 67, 5, 4, 3, 89, 76, -1, 0, 45],
    words: ["asap", "thx", "rsvp"],
    pickPrase () {
        const words = this.words;
        const idx = Math.floor(Math.random() * words.length);
        return words[idx];
    },
    start () {
        this.timerId = setInterval(() => {
            console.log(this.pickPrase());  // don't change this
        }
            , 3000);
    },
    stop() {
        clearInterval(this.timerId);  // this will stop the start()
    }
}

spammer.start();