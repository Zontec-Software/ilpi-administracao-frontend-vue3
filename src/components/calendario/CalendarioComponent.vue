<template>
    <div class="margem" style="display: flex;">
        <!-- <vue-cal selected-date="2018-11-19" style="height: 400px;border-radius: 10px; margin-right: 5px"
            :time-from="10 * 60" :disable-views="['day']" events-count-on-year-view active-view="month" :events="events"
            hide-weekends>
        </vue-cal> -->
        <vue-cal locale="pt-br" :disable-views="['years']" :events="events"
            style="height: 400px; border-radius: 10px" selected-date="2018-11-19" :time-from="10 * 60"
            hide-weekends editable-events events-count-on-year-view events-on-month-view="short" />
    </div>
</template>
<script>
import VueCal from 'vue-cal'
export default {
    name: 'CalendarioComponent',
    components: { VueCal },
    data() {
        return {
            events: [
                {
                    start: '2018-11-19 10:35',
                    end: '2018-11-19 11:30',
                    title: 'Doctor appointment'
                },
                {
                    start: '2018-11-19 18:30',
                    end: '2018-11-19 19:15',
                    title: 'Dentist appointment'
                },
                {
                    start: '2018-11-20 18:30',
                    end: '2018-11-20 20:30',
                    title: 'Crossfit'
                },
                {
                    start: '2018-11-21 11:00',
                    end: '2018-11-21 13:00',
                    title: 'Brunch with Jane'
                },
                {
                    start: '2018-11-21 19:30',
                    end: '2018-11-21 23:00',
                    title: 'Swimming lesson'
                },
                {
                    start: '2019-09-30 19:30',
                    end: '2019-09-30 23:00',
                    title: 'Swimming lesson'
                },
                {
                    start: '2018-11-19 12:00',
                    end: '2018-11-19 14:00',
                    title: 'Almoço',
                    class: 'lunch',
                    background: true
                },
                {
                    start: '2018-11-20 12:00',
                    end: '2018-11-20 14:00',
                    title: 'Almoço',
                    class: 'lunch',
                    background: true
                },
            ]
        }
    }
}
</script>
<style>
.vuecal__now-line {
    color: #06c;
}

.vuecal__event.lunch {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
    /* IE 10+ */
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vuecal__event.lunch .vuecal__event-time {
    display: none;
    align-items: center;
}

/* Green-theme. */
.vuecal__menu,
.vuecal__cell-events-count {
    background-color: #42b983;
}

.vuecal__title-bar {
    background-color: #e4f5ef;
}

.vuecal__cell--today,
.vuecal__cell--current {
    background-color: rgba(240, 240, 255, 0.4);
}

.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {
    background-color: rgba(235, 255, 245, 0.4);
}

.vuecal__cell--selected:before {
    border-color: rgba(66, 185, 131, 0.5);
}

/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
    background-color: rgba(195, 255, 225, 0.5);
}

.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
    background-color: rgba(136, 236, 191, 0.25);
}
</style>