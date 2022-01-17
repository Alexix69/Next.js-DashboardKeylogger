import { Container, Grid } from "@mui/material";
import Layout from "../../components/Layout";
import ReportsTable from "../../components/ReportsTable";
import { Input } from "antd";
import { useEffect, useState } from "react";
import Report from "../../api/report";
import useSWR from "swr";

const Reports = () => {
  const [input, setInput] = useState("");
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState([]);
  const [indexToShow, setIndexToShow] = useState([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  //const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/records`,
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  useEffect(() => {
    //getData();
    //setInput(search);

    // return () => {
    //   setSearch("");
    // };

    console.log("SETSEARCH", search);
  }, [search]);

  // useEffect(() => {
  //   if (!!reports && input.length > 3) {
  //     const indexKeystrokes = [];
  //     reports.forEach((report, index) => {
  //       if (report.type === "keystroke") {
  //         if (report.content.indexOf(input.toLowerCase()) > -1) {
  //           indexKeystrokes.push(index);
  //         }
  //       }
  //     });
  //     setIndexToShow(indexKeystrokes);
  //     // setSearch("");
  //   } else {
  //     console.log("Palabras válidas a partir de 4 caracteres");
  //   }
  //   return () => {
  //     setInput("");
  //   };
  // }, [input]);
  //
  // const getData = async () => {
  //   try {
  //     const response = await Report.all();
  //     setReports(response.data);
  //   } catch (e) {
  //     console.log("ERROr", e);
  //   }
  // };

  // console.log("VALOR DE INPUT", input);
  // console.log("VALOR DE REPORTS", reports);
  // console.log("VALOR DE SEARCH", search);
  // console.log("VALOR DE INDETOSHOW", indexToShow);

  return (
    <Layout>
      <Container>
        <Grid marginTop={10}>
          <Input
            placeholder="Ingrese una palabra"
            onPressEnter={(e) =>
              setSearch((prevState) => {
                return [e.target.value];
              })
            }
          />
          {!!data ? (
            <ReportsTable
              indexToShow={search}
              data={data.data}
              totalRecords={data.all_records}
            />
          ) : (
            <p> Cargando datos ...</p>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Reports;
