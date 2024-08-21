class Amplifier {
    on() {
        return "Amplifier is on.\n";
    }

    off() {
        return "Amplifier is off.\n";
    }

    setVolume(volume: number) {
        return `Amplifier volume set to ${volume}.\n`;
    }
}

class DvdPlayer {
    on() {
        return "DVD Player is on.\n";
    }

    off() {
        return "DVD Player is off.\n";
    }

    play(movie: string) {
        return `DVD Player is playing '${movie}'.\n`;
    }
}

class Projector {
    on() {
        return "Projector is on.\n";
    }

    off() {
        return "Projector is off.\n";
    }

    setInput(source: string) {
        return `Projector input set to ${source}.\n`;
    }
}

class Light {
    dim(level: number) {
        return `Lights dimmed to ${level}%.\n`;
    }

    off() {
        return "Lights are off.\n";
    }
}

class HomeTheaterFacade {
    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DvdPlayer,
        private projector: Projector,
        private light: Light
    ) {}

    watchMovie(movie: string) {
        let result = '';
        result += this.light.dim(20);
        result += this.amplifier.on();
        result += this.amplifier.setVolume(5);
        result += this.dvdPlayer.on();
        result += this.projector.on();
        result += this.projector.setInput("DVD Player");
        result += this.dvdPlayer.play(movie);
        return result;
    }

    endMovie() {
        let result = '';
        result += this.dvdPlayer.off();
        result += this.projector.off();
        result += this.amplifier.off();
        result += this.light.off();
        return result;
    }
}

// Usage
const amplifier = new Amplifier();
const dvdPlayer = new DvdPlayer();
const projector = new Projector();
const light = new Light();

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector, light);

console.log(homeTheater.watchMovie("Inception"));
console.log(homeTheater.endMovie());
