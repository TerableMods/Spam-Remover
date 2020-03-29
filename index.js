const config = require("./config.json");

module.exports = function SpamRemover(mod) {
    let enabled = config.enabled;
    
    const smtList = {
        "SMT_GACHA_REWARD" : true,
        "SMT_MAX_ENCHANT_SUCCEED": true,
        "SMT_PREMIUMCOMPOSE_REWARD" : true,
        "SMT_SKILL_FAIL_CATEGORY": true,
        "SMT_ITEM_USED": true,
        "SMT_ITEM_DELETED": true,
        "SMT_CONVERT_EVENT_SEED_SUCCESS": true,
        "SMT_CONVERT_EVENT_SEED_FAIL": true,
        "SMT_ENCHANT_FAILED": true,
        "SMT_BATTLE_PARTY_DIE": true,
        "SMT_BATTLE_PARTY_RESURRECT": true,
        "SMT_CANNOT_TAKE_EQUIPMENT_EXP": true,
        "SMT_BAN_PARTY_PARTYPLAYER_BF_FAIL": true,
        "SMT_HUNTINGZONE_EVENT_ANNOUNCE": true,
        "SMT_GOLDENBELL_MESSAGE": true,
        "SMT_FISHING_REWARD": true,
        "SMT_BATTLEFIELD_JOIN_START": true,
        "SMT_BATTLEFIELD_JOIN_END": true,
        "SMT_FIELDBOSS_APPEAR": true,
        "SMT_FIELDBOSS_DIE_GUILD": true,
        "SMT_FIELDBOSS_DIE_NOGUILD": true,			
        "SMT_FIELD_EVENT_WORLD_ANNOUNCE": true,
        "SMT_FIELD_EVENT_CLEAR_REWARD_SENT": true,
        "SMT_GQUEST_NORMAL_ACCEPT" : true,
        "SMT_GQUEST_NORMAL_COMPLETE" : true,
        "SMT_GQUEST_NORMAL_FAIL_OVERTIME" : true,
        "SMT_GQUEST_NORMAL_END_NOTICE" : true,
        "SMT_GQUEST_NORMAL_CARRYOUT" : true,
        "SMT_GQUEST_OCCUPY_ACCEPT" : true,
        "SMT_GQUEST_OCCUPY_COMPLETE" : true,
        "SMT_GQUEST_OCCUPY_FAIL_OVERTIME" : true,
        "SMT_GQUEST_NORMAL_CANCEL" : true,
        "SMT_GQUEST_FAIL_ACCEPT" : true,
        "SMT_WORLDSPAWN_NOTIFY_SPAWN" : true,
        "SMT_WORLDSPAWN_NOTIFY_DESPAWN" : true
        
    };

    mod.command.add("spam", {
            $none() { 
                enabled = !enabled;
			    mod.command.message(`Spam Remover ${enabled ? 'Enabled'.clr("00FF00") : 'Disabled'.clr("FF0000")}`)
            }
    }, this);

    mod.hook("S_SYSTEM_MESSAGE", 1, (event) => {
        if (!enabled) return;
        return (smtList[mod.parseSystemMessage(event.message).id]) ? false : undefined;
    });

    mod.hook("S_ABNORMALITY_FAIL", "raw", ()=> {
        return enabled ? false : undefined;
    });
};
