import { Rule, defineField } from 'sanity'
import { MdPhoneAndroid } from 'react-icons/md'

export default {
    name: 'phone',
    title: 'Phone',
    type: 'document',
    icon: MdPhoneAndroid,
    fields: [
        {
            name: 'model_id',
            title: 'Model ID',
            type: 'string',
            validation(rule: Rule) {
                return rule.required();
            },
        },
        {
            name: 'color',
            title: 'Color',
            type: 'string',
            validation(rule: Rule) {
                return rule.lowercase();
            },
        },
        {
            name: 'ram',
            title: 'RAM',
            type: 'string',
            validation(rule: Rule) {
                return rule.lowercase();
            },
        },
        {
            name: 'storage',
            title: 'Storage',
            type: 'string',
            validation(rule: Rule) {
                return rule.lowercase();
            },
        },
        {
            name: 'backCamera',
            title: 'Back Camera (megapixel)',
            type: 'number',
            validation(rule: Rule) {
                return rule.lowercase();
            },
        },
        {
            name: 'frontCamera',
            title: 'Front Camera (megapixel)',
            type: 'number',
            validation(rule: Rule) {
                return rule.lowercase();
            },
        },
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ],
}
