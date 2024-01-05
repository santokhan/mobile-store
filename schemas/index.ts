import sales from './sales'
import inStock from './inStock'
import brands from './brands'
import models from './models'
import phones from './phones'
import customer from './customer'
import salesReturn from './salesReturn'

export const schemaTypes = [
  // Document types
  brands,
  models,
  phones,

  // IMEI primary key
  inStock,
  sales,
  salesReturn,
  customer,
]
