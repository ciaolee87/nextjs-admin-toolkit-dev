import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ cols }) {
    return (_jsx("thead", { children: _jsx("tr", { className: "border-top", children: cols.map((v, key) => (_jsx("th", { className: v.headerClassName, children: v.name }, key))) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aGVhZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQVc7SUFDM0MsT0FBTyxDQUNOLDBCQUNDLGFBQUksU0FBUyxFQUFDLFlBQVksWUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3JCLGFBQ0MsU0FBUyxFQUFFLENBQUMsQ0FBQyxlQUFlLFlBRTNCLENBQUMsQ0FBQyxJQUFJLElBREYsR0FBRyxDQUVKLENBQ0wsQ0FBQyxHQUNFLEdBQ0UsQ0FDUixDQUFDO0FBQ0gsQ0FBQyJ9