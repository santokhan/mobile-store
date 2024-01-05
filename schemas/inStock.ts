import { Rule } from 'sanity'
import { MdStore } from 'react-icons/md'
import IMEI from './object/IMEI';

export default {
    name: 'inStock',
    title: 'In Stock',
    type: 'document',
    icon: MdStore,
    fields: [
        {
            name: 'modelId',
            title: 'Model Id',
            type: 'string',
            validation(rule: Rule) {
                return rule.required();
            },
        },
        IMEI,
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation(rule: Rule) {
                return rule.min(0).required();
            },
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'number',
        },
        {
            name: 'supplier',
            title: 'Supplier',
            type: 'string',
        },
    ],
}


