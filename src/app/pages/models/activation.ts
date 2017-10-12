export class Activation {
    public name: string;
    public created: number;
    public endIn: number;
    public numberOfParticipants: number;
    public imagePath: string;

    constructor(name: string, created: number, endIn: number, numberOfParticipants: number, imagePath: string) {
        this.name = name;
        this.created = created;
        this.endIn = endIn;
        this.numberOfParticipants = numberOfParticipants;
        this.imagePath = imagePath;
    }
}
