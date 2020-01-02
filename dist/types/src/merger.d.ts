import { Outcome } from './outcomes';
import { Difference } from './diff3';
import { ChangeRange, Action } from './heckel-diff';
export default class Merger {
    static merge(left: string[], base: string[], right: string[]): Outcome[];
    result: Outcome[];
    text3: Text3;
    constructor(left: string[], base: string[], right: string[]);
    executeThreeWayMerge(): void;
    setConflict(difference: Difference): void;
    determineConflict(d: ChangeRange[], left: string[], right: string[]): void;
    determineOutcome(changeRange: ChangeRange, left: string[], right: string[]): Outcome | null;
    setText(origText: string[], lo: number, hi: number): string[];
    _conflictRange(difference: Difference): void;
    interpretChunk(difference: Difference): void;
    _assocRange(diff: ChangeRange[], action: Action): ChangeRange | null;
    accumulateLines(lo: number, hi: number, text: string[]): string[];
}
export declare class Text3 {
    left: string[];
    base: string[];
    right: string[];
    constructor(left: string[], base: string[], right: string[]);
}
