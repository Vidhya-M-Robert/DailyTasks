function TeamSelection(players, teamSize) {
    let result = [];

    function backtrack(start, team) {
        if (team.length === teamSize) {
            result.push([...team]);
            return;
        }

        for (let i = start; i < players.length; i++) {
            team.push(players[i]);
            backtrack(i + 1, team);
            team.pop(); 
        }
    }
    backtrack(0, []);
    return result;
}

