import React from "react";
import "./styles.css";


class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            list:[{
                value:"",
                check:false
            }]
        }
        this.AddToList = this.AddToList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleConfirm = this.handleConfirm.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    AddToList(){
        let list = this.state.list.slice()
        if(list) {
                list.push(
                    {
                        value:"",
                        check:false
                    }
                )
                this.setState({
                    list:list
                })
        }

        console.log(this.state.list)
    }
    handleConfirm(i){
        let list = this.state.list.slice()
        if(list[i].value !="") {
            list[i] = {
                value: list[i].value,
                check: true
            }
            this.setState(
                {list: list}
            )
        }
    }
    handleChange(event){
        let list = this.state.list.slice()
        let i = event.target.id
        list[i] ={
            value:event.target.value,
            check: list[i].check
        }
        this.setState(
            {list: list}
            )
    }
    handleRemove(i){
        let list = this.state.list;
        list.splice(i, 1)
        console.log(list)
        this.setState(
            {list: list}
        )
    }

    render(){
        return(
            <div className={"toDoList"}>
                <h1>TODO LIST:</h1>
                <List
                    handleChange = {i => this.handleChange(i)}
                    handleConfirm = {i => this.handleConfirm(i)}
                    handleRemove = {i => this.handleRemove(i)}
                    value = {this.state.list}
                />
               <button className={"toDoList__add add"} onClick={this.AddToList}>+</button>
            </div>
        )
    }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.genList = this.genList.bind(this)
    }
    genList(){
        return this.props.value.map((item,index) =>
            {
                if(item.check){
                    return (
                        <li className={"ul__li li"}>
                            <p>{item.value}</p>
                            <button
                                className={"li__confirm remove"}
                                onClick={()=>this.props.handleRemove(index)}>remove
                            </button>
                        </li>
                    )
                }
                else {
                    return (
                        <li className={"ul__li li"}>
                            <input
                                    className={"li__input input"}
                                    type={"text"}
                                    id={index}
                                    value={item.value}
                                    onChange={event => this.props.handleChange(event)}/>
                            <button
                                className={"li__confirm confirm"}
                                onClick={() => this.props.handleConfirm(index)}>confirm
                            </button>
                            <button
                                className={"li__confirm remove"}
                                onClick={()=>this.props.handleRemove(index)}>remove
                            </button>
                        </li>
                    )
                }
            }
        )
    }


    render() {
        return(
            <ol className={"toDoList__ul ul"}>{this.genList()}</ol>
        )
    }
}


export default  ToDoList



