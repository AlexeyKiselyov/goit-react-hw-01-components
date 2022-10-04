import { Table,TableHead,TableData,TableRow } from './TransactionHistory.styled';
// ==============================================
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
  <thead>
    <tr>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </tr>
  </thead>

  <tbody>
    {items.map(({id,type,amount,currency}) =>
      <TableRow key = {id}>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </TableRow> )}        
  </tbody>
</Table>
  )
}