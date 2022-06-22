import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 30px ;
  font-size: 1em;
  min-width: 500px;
  align-items: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
 
  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  th, td {
    padding: 18px 18px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`;
