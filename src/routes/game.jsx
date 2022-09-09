import * as React from 'react'
import Stats from "../components/Stats";
import Dice from "react-dice-roll";
import Narrative from '../components/Narrative';

export default function Game() {
    const [destiny, setDestiny] = React.useState(0);
    const [potatoes, setPotatoes] = React.useState(0);
    const [orcs, setOrcs] = React.useState(0);
    const [actionGroup, setActionGroup] = React.useState({});
    const [orcRemovalCost, setOrcRemovalCost] = React.useState(1);
    const [turnPosition, setTurnPosition] = React.useState(0);
    const [text, setText] = React.useState('Roll the dice to begin.')

    const addPotato = () => setPotatoes(potatoes + 1);
    const removePotato = () => setPotatoes(potatoes - 1);
    const addDestiny = () => setDestiny(destiny + 1);
    const addOrc = () => setOrcs(orcs + 1);

    const handleRoll = (value) => {
        if(turnPosition === 0) {
            if(value < 5) {
                setTurnPosition(turnPosition + 1)
                setActionGroup(actions[`dice_${value}`].action)
                setText(actions[`dice_${value}`].text)
            } else {
                setOrcRemovalCost(orcRemovalCost + 1);
                setText(actions[`dice_${value}`].text)
            }
        } else {
            setText(actionGroup[`dice_${value}`].text);
            actionGroup[`dice_${value}`].actions.forEach(action => {
                action();
            })
            setTurnPosition(0);
            setActionGroup({});
        }
    }

    const rollAgain = '\n Roll again...'
    

    const garden = {
        dice_1: {
            text: 'You happily root about all day in your garden. \n +1 potato' + rollAgain,
            actions: [addPotato]
        },
        dice_2: {
            text: 'You narrowly avoid a visitor by hiding in a potato sack. \n +1 potato, +1 destiny' + rollAgain,
            actions: [addPotato, addDestiny]
        },
        dice_3: {
            text: 'A hooded stranger lingers outside your farm. \n +1 destiny, +1 orc' + rollAgain,
            actions: [addPotato, addDestiny]
        },
        dice_4: {
            text: 'Your food is ravaged in the night by unseen enemies. \n +1 orc, -1 potato' + rollAgain,
            actions: [addOrc, removePotato]
        },
        dice_5: {
            text: 'You trade potatoes for other delicious foodstuffs. \n -1 potato' + rollAgain,
            actions: [removePotato]
        },
        dice_6: {
            text: 'You burrow into a bumper crop of potatoes. Do you cry with joy? Possibly. \n +2 potatoes' + rollAgain,
            actions: [addPotato, addPotato]
        }
    }

    const knock = {
        dice_1: {
            text: 'A distant cousin. They are after your potatoes. They may snitch on you. \n +1 orc' + rollAgain,
            actions: [addOrc]
        },
        dice_2: {
            text: 'A dwarven staranger. You refuse them entry. Ghastly creatures. \n +1 destiny' + rollAgain,
            actions: [addDestiny]
        },
        dice_3: {
            text: 'A wizard strolls by. You pointedly draw the curtains. \n +1 orc, +1 destiny' + rollAgain,
            actions: [addOrc, addDestiny]
        },
        dice_4: {
            text: 'There are rumors of war in the reaches. You eat some potatoes. \n -1 potato, +2 orc' + rollAgain,
            actions: [removePotato, addOrc, addOrc]
        },
        dice_5: {
            text: 'It\'s an elf. They are not serious people. \n +1 destiny' + rollAgain,
            actions: [addDestiny]
        },
        dice_6: {
            text: 'It\'s a sack of potatoes from a generous neighbor. You really must remember to pay them a visit one of these years. \n +2 potatoes' + rollAgain,
            actions: [addPotato, addPotato]
        }
    }

    const actions = {
        dice_1: {
            action: garden,
            text: 'You notice something in the garden.' + rollAgain,
        },
        dice_2: {
            action: garden,
            text: 'You notice something in the garden.' + rollAgain,
        },
        dice_3: {
            action: knock,
            text: 'There is a knock at the door... ' + rollAgain,
        },
        dice_4: {
            action: knock,
            text: 'There is a knock at the door... ' + rollAgain,
        }, 
        dice_5: {
            text: 'The world becomes a darker, more dangerous place. From now on, removing an orc costs an additional potato.' + rollAgain,
        },
        dice_6: {
            text: 'The world becomes a darker, more dangerous place. From now on, removing an orc costs an additional potato.' + rollAgain,
        },
    }
    
    return (
        <React.Fragment>
            <Stats destiny={destiny} potatoes={potatoes} orcs={orcs}/>
            <Narrative text={text}/>
            <Dice
                onRoll={handleRoll}
                size={75}
                faceBg='#A3E0FF'
            />
      </React.Fragment>
    );
  }