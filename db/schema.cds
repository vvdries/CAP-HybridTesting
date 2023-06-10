using {
  cuid,
  managed
} from '@sap/cds/common';


namespace demo.blog;

entity Animals : cuid, managed {
  category    : String;
}