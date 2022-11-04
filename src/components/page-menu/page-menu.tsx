import React from "react"
import { Menu } from "./styles"

interface IProps {
	page: number;
	onNextPage: () => Promise<void>;
	onPreviousPage: () => Promise<void>;
	totalPages: number;
}

export const PageMenu:React.FC<IProps> = ({page,  onPreviousPage, onNextPage, totalPages}) => (
    <Menu>
		<i
			onClick={onPreviousPage}
			className='fa-solid fa-angle-left'></i>
			<span>{`Page ${page} of ${totalPages}`}</span>
		<i
			onClick={onNextPage}
			className='fa-solid fa-angle-right'>
        </i>
	</Menu>
)
