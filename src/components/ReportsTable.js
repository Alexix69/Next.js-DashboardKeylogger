import React from "react";
import useSWR from "swr";
import Image from "next/image";
import MUIDataTable, { ExpandButton } from "mui-datatables";
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
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArchiveIcon from "@mui/icons-material/Archive";
import Report from "../api/report";
import AlertDialogSlide from "./FavCategModal";
import FavCategModal from "./FavCategModal";

// indexToShow,
const ReportsTable = ({ data, totalRecords, indexToShow }) => {
  // const fetcher = (url) =>
  //   api
  //     .get(url, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY0MTkwNzczOCwiZXhwIjoxNjQxOTExMzM4LCJuYmYiOjE2NDE5MDc3MzgsImp0aSI6IklSNTZWbFhKakZuc1lXTXoiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Z8VIzIMavdn_BIbs23l_2YO1LLgklWpHcxYcfLv_Qgg",
  //       },
  //     })
  //     .then((res) => res.data);
  //
  // const { data, error } = useSWR("/records", fetcher);

  // console.log("EMPIEZA REENDERIZACION DE LA TABLA");
  // const [records, setRecords] = useState([]);
  // const [recordsToTable, setRecordsToTable] = useState([]);
  // const [otherCol, setOtherCol] = useState([]);
  // const [indexOfSearched, setIndexOfSearched] = useState(indexToShow);

  // const fetcher = (url) => fetch(url).then((res) => res.json());
  // //const fetcher = (url) => axios.get(url).then((res) => res.data);
  //
  // const { data, error } = useSWR(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/records`,
  //   fetcher,
  //   {
  //     refreshInterval: 5000,
  //   }
  // );

  console.log("DATA ", data);

  // useEffect(() => {
  //   setRecords(data);
  // }, [data]);

  // useEffect(() => {
  //   if (!!records) {
  //     setRecordsToTable((prevState) => {
  //       return records.map((record) => {
  //         return [
  //           record.date,
  //           record.time,
  //           record.app_name,
  //           record.window_name,
  //           record.event_type,
  //           record.type,
  //           record.content,
  //           record.client.nickname,
  //           record.client.desktop_name,
  //         ];
  //       });
  //     });
  //   }
  // }, [records]);

  if (data === null) {
    console.log("CARGANDO DATOS");
  }

  const columnsDef = [];

  // console.log("RECORDS ", records);
  // console.log("RECORD TO TABLE", recordsToTable);
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
      columnsDef.push(auxArray);
    });

    const auxArraya = [
      data[0].date,
      data[0].time,
      data[0].app_name,
      data[0].window_name,
      data[0].event_type,
      data[0].type,
      data[0].content,
      data[0].client.nickname,
      data[0].client.desktop_name,
    ];
    // console.log("DATA EN CERO", data[0]);
    // setOtherCol(auxArraya);
  }
  // console.log("COLUMS DEF", columnsDef);

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

  const headerColumns = [
    "Fecha",
    "Hora",
    "Aplicación",
    "Ventana",
    "Evento",
    "Tipo",
    "Contenido",
  ];
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

  // headerColumns.forEach((header) => {
  //   const headerColumn = {
  //     name: header,
  //     options: {
  //       filter: true,
  //     },
  //   };
  //
  //   columns.push(headerColumn);
  // });

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    rowsExpanded: indexToShow,
    selectableRows: "none",
    expandableRows: true,
    expandableRowsHeader: true,
    expandableRowsOnClick: true,
    renderExpandableRow: (rowData, rowMeta) => {
      console.log("QUES ES ROWDATA", rowData);
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
                    {/*<StarIcon />*/}
                    <FavCategModal indexOfRecord={rowData[9]} />
                    {/*<Button endIcon={<StarBorderIcon />}>*/}
                    {/*  Añadir a favoritos*/}
                    {/*</Button>*/}
                    <Button
                      startIcon={<ArchiveIcon />}
                      onClick={() => markAsArchived(rowData[9])}
                      // onClick={() => console.log(rowData[9])}
                    >
                      Archivar
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
      console.log("INDIXE DE EXPANDIDAD", curExpanded);
    },
  };

  const components = {
    ExpandButton: function (props) {
      // if (props.dataIndex === 3 || props.dataIndex === 4)
      //   return <div style={{ width: "24px" }} />;
      return <ExpandButton {...props} />;
    },
  };

  const markAsArchived = async (index) => {
    try {
      await Report.handleArchivedStatus(index);
      console.log("SE TERMINO ARCHIVACION");
    } catch (e) {
      console.log("Error Mark as archived", e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {typeof window !== "undefined" && (
        <MUIDataTable
          title={`Registros totales: ${totalRecords}, en esta tabla: ${columnsDef.length}`}
          data={columnsDef}
          columns={columns}
          options={options}
          components={components}
        />
      )}
    </ThemeProvider>
  );
};

export default ReportsTable;
