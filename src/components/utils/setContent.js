import SkeletonTypography from "../Error/Error"
import Sceleton from "../Sceleton/Sceleton"

export const setContent = (process, Component, {rows, columns}) => {
    switch(process){
     case 'waiting': 
        return <Sceleton />
     case 'loading':
        return <Sceleton />
     case 'confirmed':
        return <Component rows={rows} columns={columns}/>
     case 'error':
        return <SkeletonTypography /> 
        
     default: <Component rows={rows} columns={columns}/>
    }
}