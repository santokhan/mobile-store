import { MdVerifiedUser } from 'react-icons/md'
import IMEI from './object/IMEI';

export default {
    name: 'customer',
    title: 'Customer',
    type: 'document',
    icon: MdVerifiedUser,
    fields: [
        IMEI,
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'phoneNo',
            title: 'Phone No',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'email',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
        },
    ],
}
