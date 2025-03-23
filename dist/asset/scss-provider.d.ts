import { ReactNode } from "react";
import "../../asset/style/index.scss";
import { Viewport } from "next";
interface Props {
    children?: ReactNode;
}
export declare const viewport: Viewport;
export default function ({ children }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
