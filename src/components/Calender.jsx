import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useSelector } from 'react-redux';

const localizer = momentLocalizer(moment)

const Calender = () => {
    const list = useSelector(state => state.dateReducer) 

    const events = list.map((event, index) => {
        return {
            id: index,
            title: event.name,
            start: new Date(event.date.iso),
            end: new Date(event.date.iso),
            allDay: true
        }
    })

    return (
        <>

            <Calendar
                localizer={localizer}
                events={ events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '80vh', width: '100%' }}
            />
        </>
    )
}

export default Calender