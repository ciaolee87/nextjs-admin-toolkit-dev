import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TableBase from "../../table/base";
import { fnCss } from "nextjs-tools";
export default function ({ items, className, list }) {
    return (_jsxs(_Fragment, { children: [_jsx(TableBase.Header, { items, className }), list.map((row, key) => (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover", className), children: _jsx(TableBase.Row, { row, items }) }, key))), _jsx(TableBase.Closer, { className })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9saXN0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVFuQyxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQXFCO0lBQ3ZFLE9BQU8sQ0FDTiw4QkFDQyxLQUFDLFNBQVMsQ0FBQyxNQUFNLElBQU0sS0FBSyxFQUFFLFNBQVMsR0FBSyxFQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FDdkIsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxDQUFDLFlBRWpGLEtBQUMsU0FBUyxDQUFDLEdBQUcsSUFBTSxHQUFHLEVBQUUsS0FBSyxHQUFLLElBRC9CLEdBQUcsQ0FFSCxDQUNOLENBQUMsRUFDRixLQUFDLFNBQVMsQ0FBQyxNQUFNLElBQU0sU0FBUyxHQUFLLElBQ25DLENBQ0gsQ0FBQztBQUNILENBQUMifQ==