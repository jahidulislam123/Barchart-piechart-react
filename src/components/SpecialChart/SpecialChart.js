import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const[phones,setPhone]=useState([]);
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{
        const loadedData=data.data.data;
        const phoneData=loadedData.map(phone=>{
         const part=   phone.slug.split('-');

            const ph={

                name:part[0],
                value: parseInt( part[1])
            };
            return ph;


        })

        setPhone(phoneData);
        console.log(phoneData);
    })

    },[])



    return (
        <BarChart width={800} height={400} data={phones}>
          <Bar dataKey="value" fill="#8884d8" />
          <YAxis  ></YAxis>
             <XAxis dataKey={'name'}></XAxis>
             <Tooltip></Tooltip>
        </BarChart>
    );
};

export default SpecialChart;