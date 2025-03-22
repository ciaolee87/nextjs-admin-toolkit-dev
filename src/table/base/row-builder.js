import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ cols, value }) {
    return cols.map((v, key) => (_jsx("td", { className: v.cellClassName, children: v.parser(value) }, key)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3ctYnVpbGRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVFBLE1BQU0sQ0FBQyxPQUFPLFdBQWMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFxQjtJQUM1RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUMzQixhQUVDLFNBQVMsRUFBRSxDQUFDLENBQUMsYUFBYSxZQUN6QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUZYLEdBQUcsQ0FHSixDQUNMLENBQUMsQ0FBQztBQUNKLENBQUMifQ==