import FR_LOCATIONS from '@/statics/places/Europe/France'
import SW_LOCATIONS from '@/statics/places/Europe/Switzerland'
import IT_LOCATIONS from '@/statics/places/Europe/Italy'
import CH_LOCATIONS from '@/statics/places/Asia/China'
import HK_LOCATIONS from '@/statics/places/Asia/HongKong'
import USA_LOCATIONS from '@/statics/places/America/USA'
import CA_LOCATIONS from '@/statics/places/America/Canada'

function processLocations (locations) {
    if (locations === null || locations.length === 0) return []

    return locations.map((location, index) => {
        // { id: 'a', position: { lat: 3, lng: 101 } },
        return {
            id: index,
            position: { lat: location[1], lng: location[2] }
        }
    })
}
const PRE_LOCATIONS = [
    ...FR_LOCATIONS,
    ...SW_LOCATIONS,
    ...IT_LOCATIONS,
    ...CH_LOCATIONS,
    ...HK_LOCATIONS,
    ...USA_LOCATIONS,
    ...CA_LOCATIONS
]

const LOCATIONS = processLocations(PRE_LOCATIONS)

export { LOCATIONS as default }
