"use client";
import {Dazzle} from "../..";
import Backdrop, {Props as BaseProps} from "../modal-backdrop";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React from "react";

type Props = {
	disableCloseButton?: boolean;
} & BaseProps;

export default function ({open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton}: Props) {
	if (!open) return null;
	if (!children) return null;

	return (
		<Backdrop
			open={open}
			onClose={onClose}
			{...{
				disableEscapeKey,
				disableBackdrop,
			}}>
			<div className="flex flex-wrap">
				{!disableCloseButton && (
					<div className="w-full pb-2 flex justify-end">
						<Image
							className={fnCss.concat(
								"hover:bg-(--color-hover-modal-close-button) p-[0.2rem] cursor-pointer rounded-full"
							)}
							width={30}
							height={30}
							src={Dazzle.Cross}
							alt={"close"}
							onClick={onClose}
						/>
					</div>
				)}
				<div className={fnCss.concat("w-full p-4 rounded-md shadow-2xl bg-(--color-background-modal-content)")}>
					{children}
				</div>
			</div>
		</Backdrop>
	);
}
