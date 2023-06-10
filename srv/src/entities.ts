interface IMaterial {
    ID: string;
    name: string;
    groupID: string;
    groupName: string;
}

interface IOrder {
    ID: number;
    customerID: string;
    employeedID: number;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    ShipVia: number;
    freight: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipRegion: string;
    shipPostalCode: string;
    shipCountry: string;
}

export {
    IMaterial,
    IOrder
}


       
        