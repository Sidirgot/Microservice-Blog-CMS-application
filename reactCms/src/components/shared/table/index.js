import React from "react";
import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  white-space: nowrap;
`;

const TableHead = styled.thead`
  background-color: ${(props) => props.theme.primary};
  line-height: 4;
  border-radius: 0.2rem;
`;

const HeadElement = styled.th`
  font-weight: 700;
  font-size: 15px;
`;

export const TBodyRow = styled.tr`
  line-height: 6;
  text-align: center;
`;

const Table = ({ headFields, body }) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          {headFields.map((item, index) => (
            <HeadElement key={index}>{item}</HeadElement>
          ))}
        </tr>
      </TableHead>
      <tbody>{body}</tbody>
    </TableWrapper>
  );
};

export default Table;
