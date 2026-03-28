export const Abilities: import('../../../sim/dex-abilities').ModdedAbilityDataTable = {
    sunbath: {
        onModifyDamage(relayVar, source, target, move) {
            if (['sunnyday', 'desolateland'].includes(source.effectiveWeather())) {
                return this.chainModify([28, 25]);  // 12% damage boost under the sun
            }
        },
        onHit(target, source, move) {
            if (['sunnyday', 'desolateland'].includes(source.effectiveWeather())) {
                return this.chainModify([22, 25]);  // 12% damage reduction under the sun
            }
        },
        name: 'Sun Bath',
        shortDesc: 'When sunny day is active, slightly increases damage delt and decreases damage received',
        flags: {},
    },
    draconic: {
        onModifyDamage(relayVar, source, target, move) {  
            if (move.type === 'Dragon') {
                return this.chainModify([6144, 4096]);  // 50% damage boost to dragon type moves
            }
        },
        name: 'Draconic',
        shortDesc: 'User now has the dragon STAB (doubles if user already is dragon type)',
        flags: {},
    },
};
