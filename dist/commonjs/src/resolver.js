"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(leftLabel, baseLabel, rightLabel, joinFunction) {
    return function resolveConflicts(results) {
        return results.map((result) => {
            if (result.isResolved()) {
                const joined = result.apply(joinFunction);
                return joined.result;
            }
            else {
                const joined = result.apply(joinFunction);
                const { left, right } = joined;
                return [leftLabel,
                    left,
                    baseLabel,
                    right,
                    rightLabel].join('\n');
            }
        }).join("\n");
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluL3RyYXZhaWwvZGV2eC90aHJlZS13YXktbWVyZ2UvIiwic291cmNlcyI6WyJyZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1CQUF3QixTQUFpQixFQUNqQixTQUFpQixFQUNqQixVQUFrQixFQUNsQixZQUFzQjtJQUM1QyxPQUFPLDBCQUEwQixPQUFrQjtRQUNqRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFlLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxNQUFNLEdBQWEsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDbkQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLE1BQU0sTUFBTSxHQUFlLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUUvQixPQUFPLENBQUMsU0FBUztvQkFDVCxJQUFJO29CQUNKLFNBQVM7b0JBQ1QsS0FBSztvQkFDTCxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQXJCRCw0QkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRjb21lLCBSZXNvbHZlZCwgQ29uZmxpY3RlZCB9IGZyb20gJy4vb3V0Y29tZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsZWZ0TGFiZWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VMYWJlbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRMYWJlbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkZ1bmN0aW9uOiBGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24gcmVzb2x2ZUNvbmZsaWN0cyhyZXN1bHRzOiBPdXRjb21lW10pIHtcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdDogT3V0Y29tZSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdC5pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgY29uc3Qgam9pbmVkID0gPFJlc29sdmVkPnJlc3VsdC5hcHBseShqb2luRnVuY3Rpb24pXG4gICAgICAgIHJldHVybiBqb2luZWQucmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgam9pbmVkID0gPENvbmZsaWN0ZWQ+cmVzdWx0LmFwcGx5KGpvaW5GdW5jdGlvbik7XG4gICAgICAgIGNvbnN0IHsgbGVmdCwgcmlnaHQgfSA9IGpvaW5lZDtcblxuICAgICAgICByZXR1cm4gW2xlZnRMYWJlbCxcbiAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgIGJhc2VMYWJlbCxcbiAgICAgICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgICAgICByaWdodExhYmVsXS5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKFwiXFxuXCIpO1xuICB9XG59XG4iXX0=