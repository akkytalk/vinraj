import React, { Fragment } from 'react'
import Home from './Component/Home/Home'
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import Master from './Component/Master/Master'
import Main from './Component/Maintaince/Maintain'
import Accgrp from './Component/Master/Account/AccGr'
import Account from './Component/Master/Account/Account'
import Purchase from './Component/Purchase/Purchase'
import ItemGrp from './Component/Master/Item/ItemGrp'
import Item from './Component/Master/Item/Item'
import Login from './Component/Auth/Login'
import Prefixm from './Component/Master/Prefix/Prefixm'
import Department from './Component/Master/Prefix/Department/Department'

import Form from './Component/Master/Prefix/Form/Form'
import EquipmentValidationReport from './Component/Maintaince/EquipmentValidationReport'
import PreventiveMaintenancePlan from './Component/Maintaince/PreventiveMaintenancePlan'
import MachineryAndEquipmentMmanualList from './Component/Maintaince/MachineryAndEquipmentMmanualList'
import BreakdownMaintenance from './Component/Maintaince/BreakdownMaintenance'
import ListOfSuppliersForMaintenanceActivities from './Component/Maintaince/ListOfSuppliersForMaintenanceActivities'
import MaintenanceCleanlinessChecklist from './Component/Maintaince/MaintenanceCleanlinessChecklist'
import PreventiveMaintenanceSchedule from './Component/Maintaince/PreventiveMaintenanceSchedule'
import PreventiveMaintenanceRecord from './Component/Maintaince/PreventiveMaintenanceRecord'
import PreventiveMaintenanceAnalysisReport from './Component/Maintaince/PreventiveMaintenanceAnalysisReport'
import BreakdownMaintenanceRecord from './Component/Maintaince/BreakdownMaintenanceRecord'
import BreakdownMaintenanceAnalysisRecord from './Component/Maintaince/BreakdownMaintenanceAnalysisRecord'
import ProductionPlanningCf from './Component/Production/ProductionPlanningCf'
import ProductionReportCf from './Component/Production/ProductionReportCf'
import StockReportCf from './Component/Production/StockReportCf'
import ProcessParametersCf from './Component/Production/ProcessParametersCf'
import ProductionPlanningVf from './Component/Production/ProductionPlanningVf'
import ProductionReportVf from './Component/Production/ProductionReportVf'
import StockReportVf from './Component/Production/StockReportVf'
import AuthorizedSupplierList from './Component/Purchase/AuthorizedSupplierList'
import PurchaseRequition from './Component/Purchase/PurchaseRequition'
import SuppilierPerformanceMonitiringRecord from './Component/Purchase/SuppilierPerformanceMonitiringRecord'
import EnquiryForm from './Component/Sales/EnquiryForm'
import CustomerRegistrationForm from './Component/Sales/CustomerRegistrationForm'
import Quotation from './Component/Sales/Quotation'
import SalesTargetPlanVsActual from './Component/Sales/SalesTargetPlanVsActual'
import CustomerFeedback from './Component/Sales/CustomerFeedback'
import FeasibilityReport from './Component/Sales/FeasibilityReport'
import PurchaseRequisition from './Component/Stores/PurchaseRequisition'
import IncomingMaterialInspectionChecklist from './Component/Stores/IncomingMaterialInspectionChecklist'
import StockRegister from './Component/Stores/StockRegister'
import ListOfShelfLifeOfItems from './Component/Stores/ListOfShelfLifeOfItems'
import RecordOfDisposalOfShelfOfItems from './Component/Stores/RecordOfDisposalOfShelfOfItems'
import IncomingMaterialTestingRecord from './Component/QMS/IncomingMaterialTestingRecord'
import CustomerComplaintRecord from './Component/QMS/CustomerComplaintRecord'
import CustomerComplaintReport from './Component/QMS/CustomerComplaintReport'
import Capa from './Component/QMS/Capa'
import ProductionMa from './Component/QMS/ProductionMa'
const App=()=>
{
  return(
    <Fragment>
       <Router>
         <Switch>
           {/* <Route exact path ="/"  component={Login}/> */}
           <Route exact path= "/" component={Home}/>
           <Route path="/purchase" component={Purchase}/>
           <Route path ="/equip" component={Main}/>
           <Route path="/prefix" component={Prefixm}/>
           <Route path="/master" component={Master}/>
           <Route path="/accgrp" component={Accgrp}/>
           <Route path ="/acc" component={Account}/>
           <Route path ="/itemgrp" component={ItemGrp}/>
           <Route path ="/item" component={Item}/>
           <Route path="/department" exact component={Department}/>
           <Route path="/form" component={Form}/>

           {/* MAINTENANCE routing start here */}
           <Route path="/equipment-validation-report" component={EquipmentValidationReport}/>
           <Route path="/preventive-maintenance-plan" component={PreventiveMaintenancePlan}/>
           <Route path="/machinery-and-equipment-manual-list" component={MachineryAndEquipmentMmanualList}/>
           <Route path="/breakdown-maintenance" component={BreakdownMaintenance}/>
           <Route path="/list-of-suppliers-for-maintenance-activities" component={ListOfSuppliersForMaintenanceActivities}/>
           <Route path="/maintenance-cleanliness-checklist" component={MaintenanceCleanlinessChecklist}/>
           <Route path="/preventive-maintenance-schedule" component={PreventiveMaintenanceSchedule}/>
           <Route path="/preventive-maintenance-record" component={PreventiveMaintenanceRecord}/>
           <Route path="/preventive-maintenance-analysis-report" component={PreventiveMaintenanceAnalysisReport}/>
           <Route path="/breakdown-maintenance-record" component={BreakdownMaintenanceRecord}/>
           <Route path="/breakdown-maintenance-analysis-record" component={BreakdownMaintenanceAnalysisRecord}/>
           <Route path="/breakdown-maintenance-record" component={BreakdownMaintenanceRecord}/>
           <Route path="/breakdown-maintenance-analysis-record" component={BreakdownMaintenanceAnalysisRecord}/>
           {/* MAINTENANCE routing end here */}

           {/* PRODUCTION routing start here */}
           <Route path="/production-planning-cf" component={ProductionPlanningCf}/>
           <Route path="/production-report-cf" component={ProductionReportCf}/>
           <Route path="/stock-report-cf" component={StockReportCf}/>
           <Route path="/process-parameters-cf" component={ProcessParametersCf}/>
           <Route path="/production-planning-vf" component={ProductionPlanningVf}/>
           <Route path="/production-report-vf" component={ProductionReportVf}/>
           <Route path="/stock-record-vf" component={StockReportVf}/>

           {/* PRODUCTION routing end here */}
         

         {/* PURCHASE	 routing start here */}

         <Route path="/authorized-supplier-list" component={AuthorizedSupplierList}/>
         <Route path="/purchase-requition" component={PurchaseRequition}/>
         <Route path="/suppilier-performance-monitiring-record" component={SuppilierPerformanceMonitiringRecord}/>


         {/* PURCHASE routing end here */}


         {/* QMS routing start here */}

         <Route path="/incoming-material-testing-record" component={IncomingMaterialTestingRecord}/>
         <Route path="/customer-complaint-record" component={CustomerComplaintRecord}/>
         <Route path="/customer-complaint-report" component={CustomerComplaintReport}/>
         <Route path="/capa" component={Capa}/>
         <Route path="/production-ma" component={ProductionMa}/>


         {/* QMS	 routing start here */}

         {/* SALES	 routing start here */}

         <Route path="/enquiry-form" component={EnquiryForm}/>
         <Route path="/customer-registration-form" component={CustomerRegistrationForm}/>
         <Route path="/quotation" component={Quotation}/>
         <Route path="/sales-target-plan-vs-actual" component={SalesTargetPlanVsActual}/>
         <Route path="/customer-feedback" component={CustomerFeedback}/>
         <Route path="/feasibility-report" component={FeasibilityReport}/>



         {/* SALES routing end here */}

         {/* STORES	 routing start here */}
         <Route path="/purchase-requisition" component={PurchaseRequisition}/>
         <Route path="/incoming-material-inspection-checklist " component={IncomingMaterialInspectionChecklist}/>
         <Route path="/stock-register" component={StockRegister}/>
         <Route path="/list-of-shelf-life-of-items" component={ListOfShelfLifeOfItems}/>
         <Route path="/record-of-disposal-of-shelf-of-items" component={RecordOfDisposalOfShelfOfItems}/>


         {/* STORES	 routing end here */}

         </Switch>
       </Router>
    </Fragment>
  )
}


export default App