/*import { createContext, useContext, useState, type ReactNode } from "react"
import { KEPLISTA, type KepTipus } from "../adatok";
interface KepContextCalue{
    aktindex:number,
    kivalasztas:(index:number)=>void,
    leptet:(irany:boolean)=>void
    kepLista: KepTipus[];
}
export const KepContext= createContext<KepContextCalue | undefined
>(undefined);
type KepprovideProps={
    children:ReactNode;
}
export function KepProvider({ children }: KepprovideProps) {
    const [aktIndex, setAktIndex] = useState(0)
    function kivalasztas(index: number) {
        setAktIndex(index)
    }
    function leptet(irany: boolean) {
        console.log(irany)
        let listaHossz = KEPLISTA.length
        if (listaHossz === 0) return
        let i: number = 0
        if (irany) {
            i = (aktIndex + 1) % listaHossz
        } else {
            i = ((aktIndex - 1) + listaHossz) % listaHossz
        }
        setAktIndex(i)
    }
    return (
        <KepContext.Provider
  value={{
    kivalasztas,
    leptet,
    aktindex: aktIndex,
    kepLista: KEPLISTA
  }}
>
  {children}
</KepContext.Provider>
    );
}
export function UseKepContext(){
    const context=useContext(KepContext);
    if (context===undefined) {
        throw new Error(
            'A useKepContext csak KepProvideren belül használható.'
        );
    }
    return context;
}
*/
import { createContext, useContext, useState, type ReactNode } from "react";
import { KEPLISTA, type KepTipus } from "../adatok";
type KepContextValue = {
    aktIndex: number;
    kivalaszt: (index: number) => void;
    leptet: (irany: boolean) => void;
    kepLista: KepTipus[];
};
export const KepContext = createContext<
    KepContextValue | undefined
>(undefined);
type KepProviderProps = {
    children: ReactNode;
};
export function KepProvider({ children }: KepProviderProps) {
    const [aktIndex, setAktIndex] = useState(0)
    function kivalaszt(index: number) {
        setAktIndex(index)
    }

    function leptet(irany: boolean) {
        console.log(irany)
        let listaHossz = KEPLISTA.length
        if (listaHossz === 0) return
        let i: number = 0
        if (irany) {
            i = (aktIndex + 1) % listaHossz
        } else {
            i = ((aktIndex - 1) + listaHossz) % listaHossz
        }

        setAktIndex(i)

    }


    return (
        <KepContext.Provider value={{ kivalaszt, leptet, aktIndex, kepLista: KEPLISTA }}>
            {children}
        </KepContext.Provider>
    );
}

export function useKepContext() {
    const context = useContext(KepContext);

    if (context === undefined) {
        throw new Error(
            'A useKepContext csak KepProvideren belül használható.'
        );
    }

    return context;
}