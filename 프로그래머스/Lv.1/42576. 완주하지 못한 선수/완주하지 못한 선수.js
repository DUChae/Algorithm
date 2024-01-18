function solution(participant, completion) {
    // Map 객체를 생성하여 각 선수의 등장 횟수를 기록할 준비를 합니다.
    const map = new Map();

    // 참가자 배열과 완주자 배열을 동시에 순회합니다.
    for (let i = 0; i < participant.length; i++) {
        let a = participant[i], // 현재 순회 중인 참가자
            b = completion[i];  // 현재 순회 중인 완주자

        // 현재 참가자의 등장 횟수를 1 증가시킵니다.
        map.set(a, (map.get(a) || 0) + 1);
        // 현재 완주자의 등장 횟수를 1 감소시킵니다.
        map.set(b, (map.get(b) || 0) - 1);
    }

    // Map을 순회하여 등장 횟수가 양수인 선수를 찾습니다.
    for (let [k, v] of map) {
        if (v > 0) {
            // 등장 횟수가 양수인 선수는 완주하지 못한 선수입니다.
            return k;
        }
    }

    // 모든 선수가 완주했거나 중복된 선수가 없는 경우에는 undefined를 반환합니다.
}
