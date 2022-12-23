import React from "react"
import { Menu } from "./styles"

interface IProps {
	page: number;
	setPage: Function;
	totalPages: number;
}

export const PageMenu:React.FC<IProps> = ({page, setPage, totalPages}) => (
    <Menu>
		<i
			onClick={() => page > 1 && setPage(page - 1)}
			className='fa-solid fa-angle-left'></i>
			<span>{`Page ${page}`}</span>
		<i
			onClick={() => page < totalPages && setPage(page + 1)}
			className='fa-solid fa-angle-right'>
        </i>
	</Menu>
)