interface TableCellDataInterface {
    datas: Array<object>
}
export default function TableCell(props: TableCellDataInterface) {
    return (
        <>
            <thead>
                  <tr>
                    {Object.keys(props.datas[0]).map((title:string, index:number) => (
                        <th key={index}>{title}</th>
                    ))}
                  </tr>
            </thead>
            <tbody>
                    {Object.entries(props.datas).map(([key, value]) => {
                        return (
                            <tr key={key}>
                            {Object.values(value).map((item, index) => (
                                <td key={index}>{item}</td>
                            ))}
                            </tr>
                        )
                    })}
            </tbody>
        </>
    )
}