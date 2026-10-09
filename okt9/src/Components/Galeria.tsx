/*import Kiskep from "./KisKep";
import type { KepTipus } from "../adatok";
import KisKep from "./KisKep";
interface GaleriaProps{
    lista:KepTipus[],
    aktindex:number
}
function Galeria({lista,aktindex}:GaleriaProps){
    return(
        <div className='galeria'>
            {
                lista.map((e, i) => {
                    return <KisKep kepem={e}  index={i} key={i} isaktiv={i === aktindex} />
                })}
        </div>
    )

}
export default Galeria*/
import KisKep from './KisKep'
import type { KepTipus } from '../adatok'

interface GaleriaProps {
  
    lista: KepTipus[]
    aktIndex:number
}

function Galeria({ lista,  aktIndex }: GaleriaProps) {
    return (
        <div className='galeria'>
            {
                lista.map((e, i) => {
                    return <KisKep kepem={e}  index={i} key={i} isAktiv={i === aktIndex} />
                })
            }

        </div>
    )
}

export default Galeria