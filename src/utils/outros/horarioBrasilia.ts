import * as moment from 'moment-timezone'; // https://stackoverflow.com/a/46247403

export default function horarioBrasilia() {
    const timezone = 'America/Sao_Paulo';
    moment.tz.setDefault(timezone);
    // const horarioBrasilia = Moment().add(3, 'hours');
    const horarioBrasilia = moment();

    return horarioBrasilia;
}