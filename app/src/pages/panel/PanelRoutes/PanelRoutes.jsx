import React from 'react'
import TotalEvaluations from '../subPages/TotalEvaluations/TotalEvaluations'
import DetailEvaluations from '../subPages/DetailsEvaluaionPage/DetailEvaluations'
import PersonelEvaluationPage from '../subPages/personelEvaluationPage/personelEvaluationPage'
import Page2 from '../../../components/test/page2'
import { Route, Routes } from 'react-router-dom'
import UsersManagement from '../subPages/usersManagement/UsersManagement'

const PanelRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="evaluations/" element={<TotalEvaluations />}></Route>
        <Route path="evaluations/:id" element={<DetailEvaluations/>}></Route>
        <Route path="evaluations/:id/:id" element={<PersonelEvaluationPage/>}></Route>
        <Route path="userManagement/" element={<UsersManagement/>}></Route>
        <Route path="page2" element={<Page2 />}></Route>
      </Routes>

    </div>
  )
}

export default PanelRoutes
