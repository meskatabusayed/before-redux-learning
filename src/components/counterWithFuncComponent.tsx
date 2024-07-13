import ChildComponent from "./childComponent";

export type TProps = {
    count : number;
    setCount : React.Dispatch<React.SetStateAction<number>>
}

const CounterWithFuncComponent = ({count , setCount} : TProps) => {
   
    return(
        <div className="border border-red-500 p-10 m-10">
            <button className="bg-purple-800 p-2 text-white rounded-md" onClick={() => setCount((prev) => prev + 1)}>{count}</button>
            <ChildComponent count = {count}/>
        </div>
    )
}

export default CounterWithFuncComponent;