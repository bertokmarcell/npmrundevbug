/*import type{ KepTipus }from "../adatok";
import { UseKepContext } from '../Contexts/KepContext'
interface KiskepProps{
    kepem:KepTipus,
    index:number,
    isaktiv:boolean
}
function KisKep({kepem,index,isaktiv}:KiskepProps){
    const {kivalasztas} = UseKepContext();
    return(
        <div className={`kepdiv ${isaktiv ? 'aktiv' : ''}`} onClick={() => kivalaszt(index)}>
            <div className="kep">
                <img src={kepem.kep} alt={kepem.leiras || 'Kép'} />
            </div>

        </div>
    )
}
export default KisKep
//https://szamalkszalezihu-my.sharepoint.com/personal/csefalvay_szamalk-szalezi_hu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fcsefalvay%5Fszamalk%2Dszalezi%5Fhu%2FDocuments%2FFelv%C3%A9telek%2FOnline%20du%C3%A1lis%2D20261009%5F120630%2D%C3%89rtekezletr%C5%91l%20k%C3%A9sz%C3%BClt%20felv%C3%A9tel%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E2728a010%2D156d%2D49df%2Dacb9%2D8ead647ec954&ga=1
*/
import type { KepTipus } from '../adatok'
import { useKepContext } from '../Contexts/KepContext'
interface KisKepProps {
    kepem: KepTipus,
    index: number,
    isAktiv: boolean
}
function KisKep({ kepem, index, isAktiv }: KisKepProps) {
    const { kivalaszt } = useKepContext();



    return (
        <div className={`kepdiv ${isAktiv ? 'aktiv' : ''}`} onClick={() => kivalaszt(index)}>
            <div className="kep">
                <img src={kepem.kep} alt={kepem.leiras || 'Kép'} />
            </div>

        </div>
    )
}

export default KisKep