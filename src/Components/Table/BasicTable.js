
  import { useMemo, useCallback } from "react";

  
import DotsMenu from "./DotsMenu";
  import {
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
  } from "@mui/material";
  
  
  
  

  
  const BasicTable = ({
    columns,
    data,
    onChange,
    getActions,
    filterOptions,
  }) => {
    const handleClickAction = useCallback((action,row) => {
      action.onClick(row);
    }, []);
  
    const getActionColumn = useCallback(()=> {
      return {
        label: "Actions",
        layout: (row) => {
          const actions = getActions?.(row);
          return (
            <DotsMenu
              actions={actions}
              onActionClick={handleClickAction}
              row={row}
            />
          );
        },
      };
    }, [getActions, handleClickAction]);
  
    const columnsData = useMemo(() => {
      return [...columns, getActionColumn()];
    }, [columns, getActionColumn]);
  
    const generateColumns = useMemo(() => {
      return columnsData?.map((column, index) => {
        return (
          <TableCell key={index} align="left">
            {column?.label}
          </TableCell>
        );
      });
    }, [columnsData]);
  
    const generateSingleRow = (row) => {
      return columnsData?.map((column, index) => {
        if (column.layout) {
          return (
            <TableCell key={index} scope="row">
              {column.layout(row)}
            </TableCell>
          );
        } else {
          return (
            <TableCell key={index} scope="row">
              {column?.field ? row[column.field] : "-"}
            </TableCell>
          );
        }
      });
    };
  
    const generateSimpleRows = (data) => {
      return data?.map((row, rowIndex) => (
        <TableRow
          key={rowIndex}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {generateSingleRow(row)}
        </TableRow>
      ));
    };
  
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth:250 }} aria-label="simple table">
            <TableHead>
              <TableRow>{generateColumns}</TableRow>
            </TableHead>
            <TableBody>{generateSimpleRows()}</TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
  
  export default BasicTable;