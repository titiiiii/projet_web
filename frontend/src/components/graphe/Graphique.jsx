import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import * as info from './artistes.json';

export default function Graphique() {
    const data = [
        {name: info.nom1, plays: info.nombre_albums1},
        {name: info.nom2, plays: info.nombre_albums2},
        {name: info.nom3, plays: info.nombre_albums3},
        {name: info.nom4, plays: info.nombre_albums4}
      ];
        
        
      return (
      <BarChart width={400} height={400} data={data}>
          <Bar barSize={10} dataKey="plays" fill="green" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
    );
}
