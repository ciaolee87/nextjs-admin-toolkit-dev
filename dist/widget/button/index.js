"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ type = "button", children, iconSrc, buttonColor = "primary", buttonStyle = "filled", buttonCorner = "square", buttonAlign = "text-center", buttonSize = "md", className = "", disabled, onClick, }) {
    return (_jsx("button", { type: type, disabled: disabled, onClick: onClick, className: fnCss.sum("button", buttonStyle, buttonColor, buttonCorner, buttonSize, className, disabled ? "disabled" : ""), children: _jsxs("div", { className: "flex items-baseline", children: [iconSrc && (_jsx(Image, { className: fnCss.sum(buttonStyle === "filled" ? "opposite" : "", buttonColor, "mr-3"), width: 20, height: 20, src: iconSrc, alt: "button" })), _jsx("div", { className: fnCss.sum("grow", buttonAlign, buttonColor), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvd2lkZ2V0L2J1dHRvbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBc0JuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLElBQUksR0FBRyxRQUFRLEVBQ2YsUUFBUSxFQUNSLE9BQU8sRUFDUCxXQUFXLEdBQUcsU0FBUyxFQUN2QixXQUFXLEdBQUcsUUFBUSxFQUN0QixZQUFZLEdBQUcsUUFBUSxFQUN2QixXQUFXLEdBQUcsYUFBYSxFQUMzQixVQUFVLEdBQUcsSUFBSSxFQUNqQixTQUFTLEdBQUcsRUFBRSxFQUNkLFFBQVEsRUFDUixPQUFPLEdBQ2lDO0lBQ3hDLE9BQU8sQ0FDTixpQkFDQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUNuQixRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMxQixZQUdELGVBQUssU0FBUyxFQUFDLHFCQUFxQixhQUNsQyxPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQ3JGLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsT0FBTyxFQUNaLEdBQUcsRUFBQyxRQUFRLEdBQ1gsQ0FDRixFQUNELGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDeEUsR0FDRSxDQUNULENBQUM7QUFDSCxDQUFDIn0=