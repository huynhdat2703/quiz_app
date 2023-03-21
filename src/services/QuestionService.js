/* eslint-disable import/no-anonymous-default-export */
import http from "./http";

class QuestionService {
    fetchData() {
        return http.get();
    }
}

export default new QuestionService();
