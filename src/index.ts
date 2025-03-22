import {ReactNode} from "react";
import Action from "./action";
import Asset from "./asset";
import Base from "./base";
import Form from "./form";
import Layout from "./layout";
import Modal from "./modal";
import Pager from "./pager";
import Table from "./table";
import Value from "./value";
import Widget from "./widget";

export {Asset, Base, Layout, Widget, Value, Modal, Pager, Form, Action, Table};

export * from "./action";
export * from "./asset";
export * from "./base";
export * from "./form";
export * from "./layout";
export * from "./modal";
export * from "./pager";
export * from "./table";
export * from "./value";
export * from "./widget";

export type ColorStyle =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark"
	| "pink"
	| "purple"
	| "blue";

// table
export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T) => ReactNode;
	className?: string;
	widthClassName: string;
};
