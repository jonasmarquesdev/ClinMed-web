import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfissional from "../../types/IProfissional";
import IConsulta from "../../types/IConsulta";

interface Props {
  profissionais: IProfissional,
  consultas: IConsulta
}

function Grafico({ profissionais, consultas }: Props) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={dados}
        margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
      >
        <XAxis type="number"></XAxis>
        <YAxis type="category" dataKey="nome"></YAxis>
        <Bar dataKey="consultas" fill="#083860" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Grafico