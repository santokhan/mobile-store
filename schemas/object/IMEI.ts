import { Rule } from "sanity";

export default {
    name: 'imei',
    title: 'IMEI',
    type: 'string',
    validation(rule: Rule) {
        return rule.required();
    },
}