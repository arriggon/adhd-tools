import { v4 as uuidv4 } from 'uuid';

export default class Habit {
    private _id: string;
    private _title: string = '';
    private _type: string = HabitType.WEEKLY;

    public get Id(): string {
        return this._id;
    }

    public get Title(): string {
        return this._title;
    }

    public set Title(value: string) {
        this._title = value ?? "";
    }

    public get Type(): string {
        return this._type;
    }

    public set Type(value: string) {
        this._type = value ?? HabitType.WEEKLY;
    }


    constructor(title?: string, type?: HabitType) {
        this._id = uuidv4();
        this._title = title ?? "";
        this._type = type ?? HabitType.WEEKLY;
        
    }
};

export enum HabitType {
    DAILY = "Daily",
    WEEKLY = "Weekly",
    MONTHLY = "Monthly"
};