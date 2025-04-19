import React from 'react';
import { NavLink } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProductCatView = ({categories}) => {
    return (
        <>

     
     <div className='py-20'>
     <Tabs>
    <TabList>
      
        {
            categories.map(cat => <NavLink to={`/${cat}`} ><Tab>{cat}</Tab></NavLink>)
        }
    </TabList>



    {
            categories.map(cat => <TabPanel>{cat}</TabPanel>)
     }


  </Tabs>
     </div>

       
        </>
    );
};

export default ProductCatView;