import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

// reservoir 相關的 api

export type ReservoirType = {
    baseAvailable: string;
    id: string;
    updateAt: string;
    volumn: string;
    percentage: number;
    daliyOverflow: string;
    daliyInflow: string;
    daliyNetflow: number;
    name: string;
};
type ResponseType = { [Reservoir: string]: ReservoirType };

export const useReservoirList = () =>
    useQuery<ReservoirType[], AxiosError>(
        'useReservoirList',
        async () => {
            const { data } = await axios.get<ResponseType[]>('https://www.taiwanstat.com/waters/latest');

            return Object.values(data[0]);
        },
        {
            refetchOnWindowFocus: false,
        },
    );
