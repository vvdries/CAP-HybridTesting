using { demo.blog as db} from '../db/schema';
using {CB_MATERIAL_SRV as s4MaterialSrv} from './external/CB_MATERIAL_SRV.csn';
using { Northwind as northwind } from './external/Northwind';

@impl: './src/service'
service HybridService @(requires: 'authenticated-user') {

    entity Animals as projection on db.Animals;

    @readonly @cds.persistence.skip
    entity Materials       as projection on s4MaterialSrv.Materials {
        key Material             as ID,
            MaterialName         as name,
            MaterialGroup        as groupID,
            MaterialGroupName    as groupName
    }


    @readonly @cds.persistence.skip
    entity Orders       as projection on northwind.Orders;
}
