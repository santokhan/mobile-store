import { Rule } from 'sanity'
import { MdPhoneAndroid } from 'react-icons/md'

export default {
    name: 'model',
    title: 'Model',
    type: 'document',
    icon: MdPhoneAndroid,
    fields: [
        {
            name: 'brand_id',
            title: 'Brand ID',
            type: 'string',
            validation(rule: Rule) {
                return rule.required();
            },
        },
        {
            name: 'model',
            title: 'Model (ex: galaxy S10, iphone 11, etc.)',
            type: 'string',
            validation(rule: Rule) {
                return rule.required();
            },
        },
    ],
}
