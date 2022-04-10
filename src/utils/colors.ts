export function BGLight(state?:string|null){
    if(state!=null){
        return state+":bg-gray-50 dark:"+ state+":bg-dark-100 "
    }
    return " bg-gray-50 dark:bg-dark-100 ";
}
export function BGDark(state?:string|null){
    if(state!=null){
        return state+":bg-gray-200 dark:"+ state+":bg-dark-200"
    }
    return " bg-gray-200 dark:bg-dark-200 ";
}
export function BorderDark(state?:string|null){
    if(state!=null){
        return state+":border-gray-300 dark:"+ state+":border-dark-700"
    }
    return " border-gray-300 dark:border-dark-700 ";
}



