import { useState } from 'react';
import OwnerSite from './../OwnerSite/OwnerSite';
import EmployeeSite from './../EmployeeSite/EmployeeSite';
import CustomerSite from './../CustomerSite/CustomerSite';
import AnonSite from './../AnonSite/AnonSite';


const Site = () => {

    const [role, setRole]= useState('Anon');

    const onClick = () => {
        setRole('Owner');
    }

    function RenderSite(){
        if(role === 'Owner'){
            console.log('Owner!');
            return (
                <div>
                    <OwnerSite role={role} setRole={setRole} />
                </div>
            );
        }else if(role  === 'Employee'){
            console.log('Employee!');
            return (
                <div>
                    <EmployeeSite role={role} setRole={setRole} />
                </div>
            );
        }else if(role  === 'Customer'){
            console.log('Customer!');
            return (
                <div>
                    <CustomerSite role={role} setRole={setRole} />
                </div>
            );
        }else{
            console.log('Anon!');
            return (
                <div>
                    <AnonSite role={role} setRole={setRole} />
                </div>
            );
        }
    }
    
    return (RenderSite());
}



export default Site;