<template>
    <div style="display: flex;">
        <!-- <vue-cal selected-date="2018-11-19" style="height: 400px;border-radius: 10px; margin-right: 5px"
            :time-from="10 * 60" :disable-views="['day']" events-count-on-year-view active-view="month" :events="events"
            hide-weekends>
        </vue-cal> -->

        <vue-cal class="vuecal--blue-theme" locale="pt-br" :disable-views="['years', 'day']" :events="events"
            style="height: 650px; border-radius: 10px" selected-date="2018-11-19" :time-from="8 * 60"  :time-to="21 * 60" hide-weekends
            editable-events events-count-on-year-view events-on-month-view="short" :snap-to-time="15"
            :on-event-create="onEventCreate" @event-drag-create="showEventCreationDialog = true" today-button
            :show-all-day-events="false" :special-hours="horarioDeVisitas">
            <template #today-button>
                <v-tooltip>
                    <template #activator="{ on }">
                        <i v-on="on" style="font-size: 25px;" title="Ir para hoje" class="bi bi-crosshair"></i>
                    </template>
                </v-tooltip>
            </template>
        </vue-cal>

        <!-- MODAL -->
        <div class="modal-mask" v-if="showEventCreationDialog" @click="cancelEventCreation()">
            <div class="jm margem" @click.stop>
                <fieldset class="margem grid-2">
                    <div>
                        <label>Titulo do evento</label>
                        <input type="text" v-model="selectedEvent.title" />
                    </div>
                    <div>
                        <label>Tipo de evento</label>
                        <select v-model="selectedEvent.class">
                            <option v-for="(item, index) in eventsCssClasses" :key="index">{{ item }}</option>
                        </select>
                    </div>
                </fieldset>
                <!-- <input type="checkbox" v-model="selectedEvent.background" label="background Event"> -->
                <div class="submit">
                    <button class="button" @click="closeCreationDialog()">Salvar</button>
                    <button class="button acao-secundaria" @click="closeCreationDialog()">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
    name: 'CalendarioComponent',
    components: { VueCal },
    data() {
        return {
            selectedDate: new Date(new Date().getFullYear(), 11, 31),

            selectedEvent: null,
            showEventCreationDialog: false,
            eventsCssClasses: ['Lazer', 'Esporte', 'Saúde'],

            horarioDeVisitas: {
                1: [
                    {
                        from: 11 * 60,
                        to: 12 * 60,
                        class: 'almoço',
                        label: 'Horário de Almoço'
                    },
                    {
                        from: 17 * 60,
                        to: 20 * 60,
                        class: 'horarioVisita',
                        label: 'Horário de visitas'
                    }]
                ,
                2: [{
                    from: 11 * 60,
                    to: 12 * 60,
                    class: 'almoço',
                    label: 'Horário de Almoço'
                },],
                3: [
                    {
                        from: 11 * 60,
                        to: 12 * 60,
                        class: 'almoço',
                        label: 'Horário de Almoço'
                    },
                    {
                        from: 14.5 * 60,
                        to: 15.5 * 60,
                        class: 'horarioVisita',
                        label: 'Horário de visitas'
                    },
                    {
                        from: 18.5 * 60,
                        to: 20 * 60,
                        class: 'horarioVisita',
                        label: 'Horário de visitas'
                    }
                ],
                4: [{
                    from: 11 * 60,
                    to: 12 * 60,
                    class: 'almoço',
                    label: 'Horário de Almoço'
                }, {
                    from: 13 * 60,
                    to: 20 * 60,
                    class: 'horarioVisita',
                    label: 'Horário de visitas'
                }],
                5: [{
                    from: 11 * 60,
                    to: 12 * 60,
                    class: 'almoço',
                    label: 'Horário de Almoço'
                }, {
                    from: 13 * 60,
                    to: 20 * 60,
                    class: 'horarioVisita',
                    label: 'Horário de visitas'
                }]
            },

            events: [
                {
                    start: '2018-11-19 13:00',
                    end: '2018-11-19 14:00',
                    title: 'Consulta Dr.Fernando',
                    class: 'Saúde',
                    allDay: false
                },
                {
                    start: '2018-11-19 15:00',
                    end: '2018-11-19 17:00',
                    title: 'Visita de Familiar',
                    class: 'Lazer',
                    allDay: false

                },
                {
                    start: '2018-11-20',
                    end: '2018-11-20',
                    title: 'Dia com a familia',
                    class: 'diaFora',
                    allDay: true
                },
                {
                    start: '2018-11-21 13:00',
                    end: '2018-11-21 14:00',
                    title: 'Ginastica',
                    class: 'Esporte',
                    allDay: false
                },
                {
                    start: '2018-11-21 16:00',
                    end: '2018-11-21 18:00',
                    title: 'Hidroginastica',
                    class: 'Esporte',
                    allDay: false
                },
            ]
        }
    },
    methods: {
        onEventCreate(event, deleteEventFunction) {
            this.selectedEvent = event
            // this.showEventCreationDialog = true
            this.deleteEventFunction = deleteEventFunction

            return event
        },
        cancelEventCreation() {
            this.closeCreationDialog()
            this.deleteEventFunction()
        },
        closeCreationDialog() {
            this.showEventCreationDialog = false
            this.selectedEvent = {}
        }
    }
}
</script>
<style>
.vuecal__special-hours {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;

    em {
        font-size: 0.9em;
        color: #999;
    }
}

.horarioVisita {
    background-color: #f0fff1;
    color: #81d58b;
}

.almoço {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
    /* IE 10+ */
    color: #999;
}

.closed {
    background:
        #fff7f0 repeating-linear-gradient(-45deg,
            rgba(255, 162, 87, 0.25),
            rgba(255, 162, 87, 0.25) 5px,
            rgba(255, 255, 255, 0) 5px,
            rgba(255, 255, 255, 0) 15px);
    color: #f6984c;
}

.business-hours {
    background-color: rgba(255, 255, 0, 0.15);
    border: solid rgba(255, 210, 0, 0.3);
    border-width: 2px 0;
}

.vuecal__event.Saúde {
    background-color: var(--cor-cinza2);
    border: 1px solid var(--cor-separador);
    color: var(--cor-fonte);
}

.vuecal__event.Lazer {
    background-color: rgba(253, 156, 66, 0.9);
    border: 1px solid rgb(233, 136, 46);
    color: #fff;
}

.vuecal__event.Esporte {
    background-color: rgba(255, 102, 102, 0.9);
    border: 1px solid rgb(235, 82, 82);
    color: #fff;
}

.vuecal__event.diaFora {
    background-color: var(--cor-primaria);
    border: 1px solid var(--cor-separador);
    color: var(--cor-fonte-forte)
}

.vuecal__now-line {
    color: #06c;
}

.vuecal__event.almoço {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, #f2f2f2 10px, #f2f2f2 20px);
    /* IE 10+ */
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.vuecal__event.almoço .vuecal__event-time {
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
    /* background-color: rgba(235, 255, 245, 0.4); */
    background-color: var(--cor-primaria-fraca);
}

.vuecal__cell--selected:before {
    border-color: rgba(66, 185, 131, 0.5);
}

/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {
    /* background-color: rgba(195, 255, 225, 0.5); */
    background-color: var(--cor-primaria-forte);
}

.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {
    /* background-color: rgba(136, 236, 191, 0.25); */
    background-color: var(--cor-primaria-forte);
}

.vuecal__cell-content {
    align-self: flex-start;
}

.vuecal__cell-date {
    text-align: right;
    padding: 4px;
}

.vuecal__cell-content {
    align-self: flex-start;
}

.vuecal__cell-date {
    text-align: right;
    padding: 4px;
}

.vuecal--week-view .vuecal__bg .vuecal__event--all-day.pink-event,
.vuecal--day-view .vuecal__bg .vuecal__event--all-day.pink-event {
    right: 50%;
}

.vuecal--week-view .vuecal__bg .vuecal__event--all-day.Lazer,
.vuecal--day-view .vuecal__bg .vuecal__event--all-day.Lazer {
    left: 50%;
}
</style>