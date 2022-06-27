export default function Table({children} : any) {
    return (
        <>
        <div className="table_area scrollable_table_area">
            <table className="common_list_table">{children}</table>
        </div>
        </>
    )
}