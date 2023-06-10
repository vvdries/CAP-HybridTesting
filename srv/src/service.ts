import cds from "@sap/cds";
import { Service } from "@sap/cds/apis/services";
import { IMaterial, IOrder } from "./entities";

export default async (srv: Service) => {

    const s4MaterialSrv = await cds.connect.to('CB_MATERIAL_SRV');
    const northwindSrv = await cds.connect.to('Northwind');

    srv.on('READ', 'Materials', async (req) => {
        const materials: Array<IMaterial> = await s4MaterialSrv.run(SELECT.from("HybridService.Materials"));
        return materials;
    })

    srv.on('READ', 'Orders', async (req) => {
        const orders: Array<IOrder> = await northwindSrv.run(SELECT.from("HybridService.Orders"));
        return orders;
    })

}