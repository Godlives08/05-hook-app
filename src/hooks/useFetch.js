import { useEffect, useState } from "react"


export const useFetch = (url, obj = { data: null, isLoadind: true, hasError: null,e:null}) => {

    const [state, setState] = useState({ obj });



    const getPokemon = async () => {

        setState({
            ...state,
            isLoadind:true,
        })

        // const resp = await fetch(url).catch(setState({ ...state, isLoadind: false, hasError: 404 }));

        const resp = await fetch(url).then(res => {
            if (res.ok) {
                return res
            } else if (res.status === 404){
                return Promise.reject('Resultado no encontrado ...')
            }else{
                return Promise.reject('Algun otro error' + res.status)
            }
        }).then(data => {return data}).catch((e)=>{setState({ ...state, isLoadind: false, hasError: 404,e })});


        const data = await resp.json();

        setState({
            data,
            isLoadind: false,
            hasError: null
        })
    }

    useEffect(() => {
        getPokemon().then('OK').catch((err) => { console.log(err);})
    }, [url])


    return {
        ...state
    }

}
