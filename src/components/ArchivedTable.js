import React from "react";
import useSWR from "swr";
import { createTheme } from "@mui/material/styles";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import { ThemeProvider } from "@mui/styles";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Report from "../api/report";
import FavCategModal from "./FavCategModal";

const ArchivedTable = ({ data }) => {
  // const fetcher = (url) => fetch(url).then((res) => res.json());
  //
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/records/archived`,
  //   fetcher,
  //   {
  //     refreshInterval: 1000,
  //   }
  // );
  //
  // if (data === null) {
  //   console.log("CARGANDO DATOS");
  // }

  const cellData = [];

  if (!!data) {
    // console.log("ESTO ES DATA", data);
    data.forEach((record) => {
      const auxArray = [
        record.date,
        record.time,
        record.app_name,
        record.window_name,
        record.event_type,
        record.type,
        record.content,
        record.client.nickname,
        record.client.desktop_name,
        record.id,
      ];
      cellData.push(auxArray);
    });
  }

  if (!data) {
    console.log("HA OCURRIDO UN ERROR");
  }

  const theme = createTheme({
    overrides: {
      MUIDataTableSelectCell: {
        expandDisabled: {
          // Soft hide the button.
          visibility: "hidden",
        },
      },
    },
  });

  const columns = [
    {
      name: "Fecha",
      options: {
        filter: true,
      },
    },
    {
      name: "Hora",
      options: {
        filter: true,
      },
    },
    {
      name: "Aplicacion",
      options: {
        filter: true,
      },
    },
    {
      name: "Ventana",
      options: {
        filter: false,
      },
    },
    {
      name: "Evento",
      options: {
        filter: false,
      },
    },
    {
      name: "Tipo",
      options: {
        filter: true,
      },
    },
    {
      name: "Contenido",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "Cliente",
      options: {
        filter: true,
        display: false,
      },
    },
    {
      name: "Computador",
      options: {
        filter: false,
        display: false,
      },
    },
    {
      name: "Id",
      options: {
        filter: false,
        display: false,
      },
    },
  ];
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    // rowsExpanded: indexToShow,
    selectableRows: "none",
    expandableRows: true,
    expandableRowsHeader: true,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData) => {
      // console.log("QUES ES ROWDATA", rowData);
      // console.log("QUES ES columdef", columnsDef);
      //console.log("RowMeta", rowMeta);
      return (
        <TableCell colSpan={7}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">
                    <b>Cliente:</b> {rowData[7]} <br /> <b>Computador:</b>{" "}
                    {rowData[8]}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {rowData[5] === "keystroke" ? (
                      rowData[6]
                    ) : rowData[5] === "website" ? (
                      rowData[6]
                    ) : rowData[5] === "screenshot" ? (
                      <Image
                        src={rowData[6]} // Route of the image file
                        //src=''
                        height={600} // Desired size with correct aspect ratio
                        width={1050} // Desired size with correct aspect ratio
                        alt="Logo"
                      />
                    ) : (
                      "Cargando contenido..."
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" component="th" scope="row">
                    {/*DESCOMENTAR PARA FUNCIONALIDAD DE FAVORITOS*/}
                    {/*<FavCategModal indexOfRecord={rowData[9]} />*/}
                    <Button
                      startIcon={<UnarchiveIcon />}
                      onClick={() => removeFromTheList(rowData[9])}
                    >
                      Desarchivar registro
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TableCell>
      );
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => {
      // console.log("ROWS EXPANDED", curExpanded, allExpanded, rowsExpanded);
    },
  };

  const components = {
    ExpandButton: function (props) {
      // if (props.dataIndex === 3 || props.dataIndex === 4)
      //   return <div style={{ width: "24px" }} />;
      return <ExpandButton {...props} />;
    },
  };

  const removeFromTheList = async (index) => {
    try {
      await Report.handleArchivedStatus(index);
      console.log("SE QUITÓ DE LA LISTA");
    } catch (e) {
      console.log("Error Mark as archived", e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {typeof window !== "undefined" && (
        <MUIDataTable
          title={`Registros Archivados: ${cellData.length}`}
          data={cellData}
          // data={indexToShow}
          columns={columns}
          options={options}
          components={components}
        />
      )}
    </ThemeProvider>
  );
};

export default ArchivedTable;
