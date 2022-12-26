export class Email {
    from?: string;
    name?: string;
    to?: string;
    date?: string;
    message?: string;



    constructor(from: string, name: string, to: string, date: string, message: string) {
        this.from = from;
        this.name = name;
        this.to = to;
        this.date = date;
        this.message = message;
    }

}
