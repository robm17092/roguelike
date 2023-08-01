const mt = {
    interval: 200, //200ms turn limit
    entities: new Set(),
    lastCall: Date.now(),
    addEntity: (entity) => mt.entities.add(entity),
    removeEntity: (entity) => mt.entities.remove(entity),
    refresh: () => mt.entities.forEach(e => e.refresh()),
    turn: () => {
        let now = Date.now()
        let limit = mt.lastCall + mt.interval
        if (now > limit) {
            for (let e of mt.entities) { //turn allowed
                if (!e.over()) {
                    e.turn()
                    break; //allows entities to have multiple actions in one turn
                }
            }
            mt.lastCall = Date.now()
        }
    },
    over: () => [...moveTo.entities].every(e => e.over()),
}

export default mt