import React , {useState} from 'react';
import Select from 'react-select';

function Drop(){

     var enzymelist=[
        {
            value : 1,
            label : "HydroLase"
        },
        {
            value : 2,
            label : "Sucrase"
        },
        {
            value : 3,
            label : "Lactase"
        },
        {
            value : 4,
            label : "AmyLase"
        }
    ];
     const [result, ddlvalue]=useState(enzymelist.label);
    const ddlHandler= e =>
    {
       ddlvalue(e.label);
    }
    return (
        <div>
                <Select options = {enzymelist} onChange={ddlHandler}/>
                <center>
                    <h1>{result}</h1>
                </center>
                
        </div>
    )

     
}
export default Drop;
