import { MakeGenerics } from 'react-location';

type Reservoir = {
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

type LocationGenerics = MakeGenerics<{
    Search: {
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
}>;
