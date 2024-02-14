import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import 'dayjs/locale/uk'
import 'dayjs/locale/hy-am'
import 'dayjs/locale/uz'
import 'dayjs/locale/az'
import 'dayjs/locale/ka'
import 'dayjs/locale/tr'
import 'dayjs/locale/pt'
import 'dayjs/locale/cs'
import 'dayjs/locale/de'
import 'dayjs/locale/pl'
import 'dayjs/locale/sr'
import 'dayjs/locale/ro'
import 'dayjs/locale/fr'
import 'dayjs/locale/kk'
import 'dayjs/locale/et'
import 'dayjs/locale/it'
import 'dayjs/locale/el'
import 'dayjs/locale/es'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import isBetween from 'dayjs/plugin/isBetween'
import isoWeek from 'dayjs/plugin/isoWeek'
import minMax from 'dayjs/plugin/minMax'
import objectSupport from 'dayjs/plugin/objectSupport'
import pluralGetSet from 'dayjs/plugin/pluralGetSet'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(isoWeek)
dayjs.extend(isBetween)
dayjs.extend(dayOfYear)
dayjs.extend(minMax)
dayjs.extend(objectSupport)
dayjs.extend(weekday)
dayjs.extend(pluralGetSet)

export const useDayjs = () => {
    // const appStore = useAppStore();
    // dayjs.tz.setDefault(appStore.city?.timezone); timezone from api
    dayjs.tz.guess() // remove line after api integration
    return dayjs
}
