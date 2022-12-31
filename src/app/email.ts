export class Email {
    from?: string;
    name?: string;
    to?: string;
    date?: string;
    message?: string;
    priority?: number;
    id?: number;


    constructor(from: string, name: string, to: string, date: string, message: string, id: number, pri: number) {
        this.from = from;
        this.name = name;
        this.to = to;
        this.date = date;
        this.message = message;
        this.id = id;
        this.priority = pri;
    }

}
