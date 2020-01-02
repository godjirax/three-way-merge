"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outcomes_1 = require("./outcomes");
const merge_result_1 = require("./merge-result");
class Collater {
    static collateMerge(mergeResult, joinFunction, conflictHandler) {
        if (!mergeResult.length) {
            return new merge_result_1.default([new outcomes_1.Resolved([])], joinFunction);
        }
        else {
            mergeResult = Collater.combineNonConflicts(mergeResult);
            if (mergeResult.length === 1 && mergeResult[0].isResolved()) {
                return new merge_result_1.default(mergeResult, joinFunction);
            }
            else {
                return new merge_result_1.default(mergeResult, joinFunction, {
                    conflict: true, conflictHandler: conflictHandler
                });
            }
        }
    }
    static combineNonConflicts(results) {
        let rs = [];
        results.forEach((r) => {
            if (rs.length && rs[rs.length - 1].isResolved() && r.isResolved()) {
                const last = rs[rs.length - 1];
                last.combine(r);
            }
            else {
                rs.push(r);
            }
        });
        return rs;
    }
}
exports.default = Collater;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGF0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluL3RyYXZhaWwvZGV2eC90aHJlZS13YXktbWVyZ2UvIiwic291cmNlcyI6WyJjb2xsYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUErQztBQUMvQyxpREFBeUM7QUFLekM7SUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGVBQWlDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxzQkFBVyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEQsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQzNELE9BQU8sSUFBSSxzQkFBVyxDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFDTCxPQUFPLElBQUksc0JBQVcsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFO29CQUNoRCxRQUFRLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxlQUFlO2lCQUNqRCxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFrQjtRQUMzQyxJQUFJLEVBQUUsR0FBYyxFQUFFLENBQUM7UUFFdkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3BCLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ2pFLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDWjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7QUFoQ0QsMkJBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb2x2ZWQsIE91dGNvbWUgfSBmcm9tICcuL291dGNvbWVzJztcbmltcG9ydCBNZXJnZVJlc3VsdCBmcm9tICcuL21lcmdlLXJlc3VsdCc7XG5cbmV4cG9ydCB0eXBlIEpvaW5GdW5jdGlvbiA9IChhOiBzdHJpbmdbXSkgPT4gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmxpY3RGdW5jdGlvbiA9IChhOiBPdXRjb21lW10pID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGF0ZXIge1xuICBzdGF0aWMgY29sbGF0ZU1lcmdlKG1lcmdlUmVzdWx0OiBPdXRjb21lW10sXG4gICAgICAgICAgICAgICAgICAgICAgam9pbkZ1bmN0aW9uOiBKb2luRnVuY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgY29uZmxpY3RIYW5kbGVyOiBDb25mbGljdEZ1bmN0aW9uKSB7XG4gICAgaWYgKCFtZXJnZVJlc3VsdC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgTWVyZ2VSZXN1bHQoW25ldyBSZXNvbHZlZChbXSldLCBqb2luRnVuY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZVJlc3VsdCA9IENvbGxhdGVyLmNvbWJpbmVOb25Db25mbGljdHMobWVyZ2VSZXN1bHQpO1xuICAgICAgaWYgKG1lcmdlUmVzdWx0Lmxlbmd0aCA9PT0gMSAmJiBtZXJnZVJlc3VsdFswXS5pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNZXJnZVJlc3VsdChtZXJnZVJlc3VsdCwgam9pbkZ1bmN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgTWVyZ2VSZXN1bHQobWVyZ2VSZXN1bHQsIGpvaW5GdW5jdGlvbiwge1xuICAgICAgICAgIGNvbmZsaWN0OiB0cnVlLCBjb25mbGljdEhhbmRsZXI6IGNvbmZsaWN0SGFuZGxlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY29tYmluZU5vbkNvbmZsaWN0cyhyZXN1bHRzOiBPdXRjb21lW10pIHtcbiAgICBsZXQgcnMgPSA8T3V0Y29tZVtdPltdO1xuXG4gICAgcmVzdWx0cy5mb3JFYWNoKChyKSA9PiB7XG4gICAgICBpZiAocnMubGVuZ3RoICYmIHJzW3JzLmxlbmd0aCAtIDFdLmlzUmVzb2x2ZWQoKSAmJiByLmlzUmVzb2x2ZWQoKSkge1xuICAgICAgICBjb25zdCBsYXN0ID0gPFJlc29sdmVkPnJzW3JzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsYXN0LmNvbWJpbmUoPFJlc29sdmVkPnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnMucHVzaChyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBycztcbiAgfVxufVxuIl19