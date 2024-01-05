import { Rule } from 'sanity'
import { MdPhoneAndroid } from 'react-icons/md'

export default {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    icon: MdPhoneAndroid,
    fields: [
        {
            name: 'Name',
            title: 'Name (ex: samsung, apple, etc.)',
            type: 'string',
            validation(rule: Rule) {
                return rule.lowercase().required();
            },
        }
    ],
}
