import { MdStore } from 'react-icons/md'
import IMEI from './object/IMEI';

export default {
    name: 'salesEntry',
    title: 'Sales Entry',
    type: 'document',
    icon: MdStore,
    fields: [
        IMEI,
    ],
}
