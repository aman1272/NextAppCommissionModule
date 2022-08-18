import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import { useRouter } from 'next/router'

const Form = () => {
    // const router = useRouter()
    const [heading, setHeading] = React.useState(false)


    //   --------------------------------   For create form------------------------------

    const [qtty, setQtty] = React.useState({
        od: '0.00',
        tp: '0.00'
    })
    const [show, showModal] = React.useState(false)
    const forChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setQtty({ ...qtty, [name]: value })

    }
    const commisionForm = [{
        listValues: [{ label: 'Snatch' }, { label: '3 Idiots' }],
        lebel: "Select Type of Commission",
    },
    {
        listValues: [{ label: 'comprehensive' }, { label: '3 thirdParty' }, { label: 'ownDamage' }],
        lebel: "Plan Name",
    },
    {
        listValues: [{ label: 'Scooter' }, { label: 'Motor Cycle' }],
        lebel: "Variant Name",
    },
    {
        listValues: [{ label: 'Acko' }, { label: 'Bajaj Allianz' },
        { label: 'Bharti AXA' }, { label: 'Cholamandalam MS' }, { label: 'DHFL General' },
        { label: 'Future General' }, { label: 'Go Digit' }, { label: 'HDFC ERGO General' },
        { label: 'ICICI LOMBARD' }, { label: 'IFFCO Tokio' }, { label: 'Kotak General' }, { label: 'Liberty' },
        { label: 'Magma HDI' }, { label: 'National insurence' }, { label: 'Orient' }, { label: 'Raheja QBE' },
        { label: 'Royal Sundaram' }, { label: 'Reliance General' }, { label: 'SBI General' }, { label: 'Shriram General' },
        { label: 'Tata AIG' }, { label: 'The New India Assurance' }, { label: 'United India' }, { label: 'Universal Sompo' },
        ],
        lebel: "Insurance Company",
    },
    {
        listValues: [{ label: 'UA04' }, { label: 'TS23' },
        { label: 'KL66' }, { label: 'UP53' }, { label: 'TN56' },
        { label: 'WB40' }, { label: 'GJ20' }, { label: 'CG12' },
        { label: 'HR34' }, { label: 'GJ23' }, { label: 'TN88' }, { label: 'AR10' },
        { label: 'AP25' }, { label: 'UK16' }, { label: 'BR29' }, { label: 'NL10' },
        { label: 'KL68' }, { label: 'GJ17' }, { label: 'MP42' }, { label: 'KA63' },
        { label: 'TS17' }, { label: 'JK10' }, { label: 'DL02' }, { label: 'PY01' },
        { label: 'MP29' }, { label: 'MH55' },
        { label: 'HP97' }, { label: 'TN48' }, { label: 'MN05' },
        { label: 'TN68' }, { label: 'CG26' }, { label: 'PB12' },
        { label: 'MH03' }, { label: 'MH13' }, { label: 'KA48' }, { label: 'HR49' },
        { label: 'MH48' }, { label: 'OD15' }, { label: 'MP25' }, { label: 'HYR168' },
        { label: 'AS16' }, { label: 'KA24' }, { label: 'JH07' }, { label: 'ML10' },
        { label: 'TN77' }, { label: 'HR06' }, { label: 'UA10' }, { label: 'MH46' },
        { label: 'TS31' }, { label: 'BPQ' },
        { label: 'AS24' }, { label: 'GJ02' }, { label: 'GA12' },
        { label: 'UA06' }, { label: 'KA42' }, { label: 'CH04' },
        { label: 'TN52' }, { label: 'KL14' }, { label: 'BR52' }, { label: 'TR05' },
        { label: 'SK04' }, { label: 'KL15' }, { label: 'WB98' }, { label: 'KL61' },
        { label: 'JH21' }, { label: 'AP17' }, { label: 'TS26' }, { label: 'TN91Z' },
        { label: 'PB37' }, { label: 'BR09' }, { label: 'CH01' }, { label: 'OR25' },
        { label: 'GJ31' }, { label: 'TN96' },
        { label: 'KL22' }, { label: 'HP03' }, { label: 'AS14' },
        { label: 'AS27' }, { label: 'HP05' }, { label: 'HP22' },
        { label: 'RJ10' }, { label: 'TN18Y' }, { label: 'TR03' }, { label: 'JK07' },
        { label: 'KL47' }, { label: 'KA39' }, { label: 'HP72' }, { label: 'BR20' },
        { label: 'PB10' }, { label: 'TN20X' }, { label: 'AP39' }, { label: 'WGY2644' },
        { label: 'OD18' }, { label: 'AP39' }, { label: 'HR68' }, { label: 'CG19' }],
        lebel: "RTO Code",
    },
    {
        listValues: [{ label: 'Uttrakhand' }, { label: 'Telangana' },
        { label: 'Keral' }, { label: 'Uttar Pradesh' }, { label: 'Tamilnadu' },
        { label: 'West Bengal' }, { label: 'Gujarat' }, { label: 'Chattisgarh' },
        { label: 'Haryana' }, { label: 'Arunachal Pradesh' }, { label: 'Delhi' }, { label: 'Bihar' },
        { label: 'Nagaland' }, { label: 'Madhya Pradesh' }, { label: 'Karnataka' }, { label: 'Jammu & Kashmir' },
        { label: 'PondiCherry' }, { label: 'Maharashtra' }, { label: 'Himanchal Pradesh' }, { label: 'Manipur' },
        { label: 'Punjab' }, { label: 'Orissa' }, { label: 'Assam' }, { label: 'Jharkhand' },
        { label: 'Meghalaya' }, { label: 'Goa' }, { label: 'Chandigarh' },
        { label: 'Tripura' }, { label: 'Sikkim' }, { label: 'Andhra Pradesh' },
        { label: 'Rajasthan' }, { label: 'Lakshadweep' }, { label: 'Daman & Diu' }, { label: 'Andaman & Nicobar Island' },
        { label: 'Chandigarh U.T.' }, { label: 'Mizoram' }, { label: 'Lakshadweep U.T.' }, { label: 'Dadra And Nagar Haweli' }
        ],
        lebel: "RTO State",
    },
    {
        listValues: [{ label: 'Nainital' }, { label: 'Karim Nagar' }, { label: 'Palakkad' }, { label: 'Gorakhpur' },
        { label: 'Erode' }, { label: 'Durgapur' }, { label: 'Dahod' }, { label: 'Korba' },
        { label: 'Mahendragarh' }, { label: 'Anand' }, { label: 'Namakkal' }, { label: 'Lohit' },
        { label: 'Hisar' }, { label: 'Delhi' }, { label: 'Dibang Valley' }, { label: 'Nizamabad' },
        { label: 'Dehradun' }, { label: 'Siwan' }, { label: 'Kohima' }, { label: 'Idukki' }, { label: 'Panch Mahals' },
        { label: 'Shajapur' }, { label: 'Hubli' }, { label: 'Leh' }, { label: 'New Delhi' },
        { label: 'Pondicherry' }, { label: 'Panna' }, { label: 'Mumbai' }, { label: 'Kangra' },
        { label: 'Tiruchirapalli' }, { label: 'Chandel' }, { label: 'Thanjavur' }, { label: 'Dantewada' },
        { label: 'Rupnagar' }, { label: 'Solapur' }, { label: 'Bagalkot' }, { label: 'Panchkula' },
        { label: 'Vasai Virar' }, { label: 'Sambhalpur' }, { label: 'Sheopur' }, { label: 'Rohtak' },
        { label: 'Kokrajhar' }, { label: 'Belgaum' }, { label: 'Gumla' }, { label: 'Ri Bhoi' },
        { label: 'Salem' }, { label: 'Panipat' }, { label: 'Uttarkashi' }, { label: 'Raigarh' },
        { label: 'Mehbub Nagar' }, { label: 'Patna' }, { label: 'Hailakandi' }, { label: 'Mahesena' },
        { label: 'Ponda' }, { label: 'Udham Singh Nagar' }, { label: 'Ramnagar' }, { label: 'Chandigarh' }],
        lebel: "RTO City",
    },
    {
        listValues: [{ label: 'NA' }, { label: '0-150' }, { label: '151-350' }, { label: '351-above' }],
        lebel: "Cubic Capacity",
    }
    ]
    const subsVal = () => {
        let valOD = qtty.od - 0.01
        let valTP = qtty.tp - 0.01
        if (qtty.od) {
            setQtty({ ...qtty, od: valOD })
        } else {
            setQtty({ ...qtty, tp: valTP })
        }
    }
    const addVal = () => {
        let valOD = qtty.od + 0.01
        let valTP = qtty.tp + 0.01
        if (qtty.tp) {
            setQtty({ ...qtty, od: valTP })
        } else {
            setQtty({ ...qtty, tp: valOD })
        }
    }


    return (
        <>
            <div className='iconForm'>
                <Link href={{ pathname: '/' }}>
                    <HomeIcon />
                </Link>
            </div>
            <Box style={{ marginLeft: "49vh" }}>
                <h1>Commission Module</h1>
                {/* {listMain.map((element) => {
                    return (
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={element.listValues.map((item) => {
                                return (item.label)
                            })}
                            defaultValue={element.listValues.map((item) => {
                                return (item.label)
                            })}
                            onChange={(event, value) => {
                                if (value === "2 Wheeler") {
                                    setHeading("Insurer Form Data")
                                } else if (value === "Agent") {
                                    setHeading("Commission Table Form")

                                }
                            }}
                            sx={{ width: 700 }}
                            size="small"
                            style={{ marginTop: "15px" }}
                            renderInput={(params) => <TextField {...params} label={element.lebel} />} />
                    )
                })
                } */}

            </Box>
            <Container style={{ marginLeft: '45vh' }}  >
                <h1>{heading}</h1>
                {commisionForm.map((element, index) => {
                    return (
                        <Autocomplete
                            multiple
                            disablePortal
                            key={`${index}-list`}
                            id="combo-box-demo"
                            options={element.listValues.map((item, index) => {
                                return (item.label)
                            })}
                            sx={{ width: 700 }}
                            size="small"
                            style={{ marginTop: "5px" }}
                            renderInput={(params) => <TextField {...params} label={element.lebel} />} />
                    )
                })
                }
                <TextField
                    label="Commmission OD%"
                    id="outlined-start-adornment"
                    name='od'
                    size="small"
                    type='number'

                    // defaultValue='0.00'
                    value={qtty.od}
                    onChange={forChange}
                    sx={{ width: 700 }}
                    style={{ marginTop: "15px" }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start"><RemoveIcon onClick={subsVal} /><AddIcon onClick={addVal} /></InputAdornment>
                    }} /><br></br>
                <TextField
                    label="Commmission TP%"
                    id="outlined-start-adornment"
                    // defaultValue='0.00'
                    name='tp'
                    type='number'
                    // value={qtty.tp}
                    onChange={forChange}
                    size="small"
                    sx={{ width: 700 }}
                    style={{ marginTop: "15px" }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start"><RemoveIcon /><AddIcon /></InputAdornment>
                    }} /><br></br>
                <Button style={{ marginTop: "15px" }} onClick={forChange}>Submit</Button>
            </Container>

        </>
    )
}

export default Form