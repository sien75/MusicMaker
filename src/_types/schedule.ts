// an object to controll scheduling midi

export interface Scheduled {
    should: boolean;
    total: number;
    current: number;
}

export interface ShouldObj {
    should: boolean;
}