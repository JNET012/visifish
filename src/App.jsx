import * as React from 'react'
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Summary from './screens/Summary'
import Browse from './screens/Browse'
import Details from './screens/Details'
import Layout from './components/Layout/Layout';
import styled from 'styled-components';
import axios from 'axios';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const WithLayout = (element) => <Layout>{element}</Layout>

const url = "https://ongrowers.herokuapp.com/"

function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
  axios.get(url)
  .then(resp => setData(resp.data))
  .catch(err => console.log(err))
  }, [])

  return (
    <AppWrapper>
    <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path=":id" element={WithLayout(<Details/>)} />
            <Route index element={WithLayout(<Summary data={data}/>)} />
          </Route>
          <Route path="/browse" element={WithLayout(<Browse/>)} />
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
