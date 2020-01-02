"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MergeResult {
    constructor(results, joinFunction, options = {}) {
        this.results = results;
        this.joinFunction = joinFunction;
        this.conflictHandler = options.conflictHandler;
        this.conflict = options.conflict || false;
    }
    isSuccess() {
        return !this.conflict;
    }
    isConflict() {
        return !!this.conflict;
    }
    joinedResults() {
        if (this.isConflict()) {
            if (this.conflictHandler) {
                return this.conflictHandler(this.results);
            }
            else {
                return this.results;
            }
        }
        else {
            const [first, rest] = [this.results[0], this.results.slice(1)];
            let rs = first;
            rest.forEach((r) => rs.combine(r));
            return rs.apply(this.joinFunction).result;
        }
    }
}
exports.default = MergeResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2UtcmVzdWx0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbi90cmF2YWlsL2RldngvdGhyZWUtd2F5LW1lcmdlLyIsInNvdXJjZXMiOlsibWVyZ2UtcmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0E7SUFJRSxZQUFtQixPQUFrQixFQUNsQixZQUFzQixFQUM3QixPQUFPLEdBQXFCLEVBQUU7UUFGdkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUV2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDckI7U0FDRjthQUFNO1lBQ0wsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFJLEVBQUUsR0FBYSxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztDQUNGO0FBbENELDhCQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE91dGNvbWUsIFJlc29sdmVkIH0gZnJvbSAnLi9vdXRjb21lcyc7XG5cbnR5cGUgTWVyZ2VSZXN1bHRPcHRpb25zID0ge1xuICBjb25mbGljdEhhbmRsZXI/OiBGdW5jdGlvbixcbiAgY29uZmxpY3Q/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lcmdlUmVzdWx0IHtcbiAgY29uZmxpY3Q6IGJvb2xlYW47XG4gIGNvbmZsaWN0SGFuZGxlcjogRnVuY3Rpb24gfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlc3VsdHM6IE91dGNvbWVbXSxcbiAgICAgICAgICAgICAgcHVibGljIGpvaW5GdW5jdGlvbjogRnVuY3Rpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnM9PE1lcmdlUmVzdWx0T3B0aW9ucz57fSkge1xuICAgIHRoaXMuY29uZmxpY3RIYW5kbGVyID0gb3B0aW9ucy5jb25mbGljdEhhbmRsZXI7XG4gICAgdGhpcy5jb25mbGljdCA9IG9wdGlvbnMuY29uZmxpY3QgfHwgZmFsc2U7XG4gIH1cblxuICBpc1N1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuICF0aGlzLmNvbmZsaWN0O1xuICB9XG5cbiAgaXNDb25mbGljdCgpIHtcbiAgICByZXR1cm4gISF0aGlzLmNvbmZsaWN0O1xuICB9XG5cbiAgam9pbmVkUmVzdWx0cygpIHtcbiAgICBpZiAodGhpcy5pc0NvbmZsaWN0KCkpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZsaWN0SGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25mbGljdEhhbmRsZXIodGhpcy5yZXN1bHRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtmaXJzdCwgcmVzdF0gPSBbdGhpcy5yZXN1bHRzWzBdLCB0aGlzLnJlc3VsdHMuc2xpY2UoMSldO1xuICAgICAgbGV0IHJzID0gPFJlc29sdmVkPmZpcnN0O1xuICAgICAgcmVzdC5mb3JFYWNoKChyKSA9PiBycy5jb21iaW5lKDxSZXNvbHZlZD5yKSk7XG5cbiAgICAgIHJldHVybiBycy5hcHBseSh0aGlzLmpvaW5GdW5jdGlvbikucmVzdWx0O1xuICAgIH1cbiAgfVxufVxuIl19