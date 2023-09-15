import about from "./about.module.sass"
export default function About () {
    return (
        <div className={about.about + " page"}>
            <img src="/images/dalmation.jpg" alt="" />
            <div className={about.content}>

                <p>CRYSTALS AND STONES ARE POWERFUL
    TOOLS THAT CAN HELP FIND A STATE OF HARMONY AND HEALTH. ALL NATURAL THINGS IN THE UNIVERSE AID IN
    BALANCE, HEALTH AND COHESION. WHEN YOU WEAR A CRYSTAL, IT WILL GRADUALLY BALANCE YOUR OWN ENERGY. STONES ARE FORMED THROUGH THOUSANDS OF YEARS
    OF EVOLUTION, AND THEY HAVE A HARMONIOUS BALANCE VIBRATION. CRYSTAL HEALS THE BODY WHICH IS THE PHYSICAL HEALS THE MIND IS THE BRAIN'S AND THE NERVOUS SYSTEM IS THE SPIRIT IS PURELY ON A HIGHER POWER.</p>
                
            </div>
        </div>
    )
}