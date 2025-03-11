import { jsx as _jsx } from "react/jsx-runtime";
import Asset from "../../../asset";
import Base from "../../unit/base";
import { DateTime } from "luxon";
export default function (props) {
    const timezone = props.timezone || "Asia/Seoul";
    const dateFormat = props.hideDate ? "" : "yyyy-MM-dd";
    const timeFormat = props.hideTime ? "" : " (HH:mm:ss)";
    const date = DateTime.fromISO(props.children || "").setZone(timezone);
    return (_jsx(Base, Object.assign({}, props, { children: date.toFormat(`${dateFormat}${timeFormat}`), icon: Asset.svg.time })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC91bml0L3RpbWUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssTUFBTSxRQUFRLENBQUM7QUFDM0IsT0FBTyxJQUFzQixNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFTL0IsTUFBTSxDQUFDLE9BQU8sV0FBVyxLQUFZO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksWUFBWSxDQUFDO0lBQ2hELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3RELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQ3ZELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEUsT0FBTyxDQUNOLEtBQUMsSUFBSSxvQkFDQSxLQUFLLElBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFDckQsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUNuQixDQUNGLENBQUM7QUFDSCxDQUFDIn0=