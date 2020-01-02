export default function (leftLabel, baseLabel, rightLabel, joinFunction) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluL3RyYXZhaWwvZGV2eC90aHJlZS13YXktbWVyZ2UvIiwic291cmNlcyI6WyJyZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLENBQUMsT0FBTyxXQUFVLFNBQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLFVBQWtCLEVBQ2xCLFlBQXNCO0lBQzVDLE9BQU8sMEJBQTBCLE9BQWtCO1FBQ2pELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWUsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN2QixNQUFNLE1BQU0sR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNuRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0wsTUFBTSxNQUFNLEdBQWUsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEQsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBRS9CLE9BQU8sQ0FBQyxTQUFTO29CQUNULElBQUk7b0JBQ0osU0FBUztvQkFDVCxLQUFLO29CQUNMLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3V0Y29tZSwgUmVzb2x2ZWQsIENvbmZsaWN0ZWQgfSBmcm9tICcuL291dGNvbWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obGVmdExhYmVsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlTGFiZWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0TGFiZWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5GdW5jdGlvbjogRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlc29sdmVDb25mbGljdHMocmVzdWx0czogT3V0Y29tZVtdKSB7XG4gICAgcmV0dXJuIHJlc3VsdHMubWFwKChyZXN1bHQ6IE91dGNvbWUpID0+IHtcbiAgICAgIGlmIChyZXN1bHQuaXNSZXNvbHZlZCgpKSB7XG4gICAgICAgIGNvbnN0IGpvaW5lZCA9IDxSZXNvbHZlZD5yZXN1bHQuYXBwbHkoam9pbkZ1bmN0aW9uKVxuICAgICAgICByZXR1cm4gam9pbmVkLnJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGpvaW5lZCA9IDxDb25mbGljdGVkPnJlc3VsdC5hcHBseShqb2luRnVuY3Rpb24pO1xuICAgICAgICBjb25zdCB7IGxlZnQsIHJpZ2h0IH0gPSBqb2luZWQ7XG5cbiAgICAgICAgcmV0dXJuIFtsZWZ0TGFiZWwsXG4gICAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICBiYXNlTGFiZWwsXG4gICAgICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICAgICAgcmlnaHRMYWJlbF0uam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgfSkuam9pbihcIlxcblwiKTtcbiAgfVxufVxuIl19