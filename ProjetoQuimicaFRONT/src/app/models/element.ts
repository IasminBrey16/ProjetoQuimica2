import { Family } from "./family";

export interface Element {
    id?: number;
    symbol: string;
    z: number;
    familyId: number;
    family?: Family;
    eletronicConfiguration?: string;
    criadoEm?: Date;
}