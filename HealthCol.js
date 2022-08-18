import Insurer from './Insurer'
const HealthCol = [

    {
        field: "Insurer_Name",
        headerName: "Insurer Name",
        width: 140,
        cellEditor: Insurer,
        hide: false
    },
    {
        field: "Insurance_Type",
        headerName: " Insurance Type"
    },
    {
        field: "Plan_Name",
        headerName: " Plan Name"
    },
    {
        field: "Premium_Paying_Term",
        headerName: "Premium Paying Term",
        width: 135
    },
    {
        field: "Age_Of_Policy",
        headerName: "Age Of Policy",
        width: 140
    }

];
export default HealthCol