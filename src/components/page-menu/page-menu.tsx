
export const PageMenu = ({page, setPage, totalPages}) => (
    <div className='page-menu'>
		<i
			onClick={() => page > 1 && setPage(page - 1)}
			className='fa-solid fa-angle-left'></i>
			<span>{`Page ${page} of ${totalPages}`}</span>
		<i
			onClick={() => page < totalPages && setPage(page + 1)}
			className='fa-solid fa-angle-right'>
        </i>
	</div>
)