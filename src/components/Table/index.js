// ARCHITECT-CONTAINERS [ SECTION ] ############################################

// 1. DEPENDENCIES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React from 'react';
import { StyledTable } from './index.style';
// 1. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. COMPONENT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Table = ({ columnNames, data }) => {
  // 2.1. FUNCTIONS ............................................................
  // 2.1. END ..................................................................

  // 2.2. RENDER COMPONENT .....................................................

  return (
    <div>
      {data.length > 0 && (
        <StyledTable cellSpacing="0">
          <thead>
            <tr>
              {columnNames.map((headerName, index) => {
                return (
                  <th key={index}>{headerName.toUpperCase()}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(data).map((object, index) => {
              return (
                <tr index={index} key={index}>
                  {Object.values(object).map((value, index2) => {
                    return (
                      <td index={index2} key={index2}>
                        {' '}
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      )}
    </div>
  );

  // 2.2. END ..................................................................
};

// 2. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. PROP-TYPES +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

export default Table;

// END OF FILE #################################################################
