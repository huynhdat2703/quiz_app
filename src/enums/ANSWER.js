const ANSWER = {
    ANSWER_A: {
        value: 0,
        key: 'answer_a_correct'
    },
    ANSWER_B: {
        value: 1,
        key: 'answer_b_correct'
    },
    ANSWER_C: {
        value: 2,
        key: 'answer_c_correct'
    },
    ANSWER_D: {
        value: 3,
        key: 'answer_d_correct'
    },
    ANSWER_E: {
        value: 4,
        key: 'answer_e_correct'
    },
    ANSWER_F: {
        value: 5,
        key: 'answer_f_correct'
    },
    values: function () {
        return [ANSWER.ANSWER_A, ANSWER.ANSWER_B, ANSWER.ANSWER_C, ANSWER.ANSWER_D, ANSWER.ANSWER_E, ANSWER.ANSWER_F];
    },
    getFromKey: function (key) {
        return this.values().find(e => e.key === key);
    }
}

export default ANSWER;
