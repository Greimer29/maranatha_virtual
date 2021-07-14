import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            annos:[],
            materias:[]
        }
        this.fetchAnno = this.fetchAnno.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.fetchAnno();
    }

    fetchAnno(){
        fetch('/api/anno')
        .then(res => res.json())
        .then(data => {
            this.setState({
                annos:data
            })
            console.log(data)
            console.log(this.state.annos)
        })
    }

    handleClick(id){
        fetch(`/api/anno/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render(){
        const annos = this.state.annos.map(anno => {
            return(
                <div className="container-anno mb-1" key={anno._id} onClick={()=>{this.handleClick(anno._id)} }>
                        {anno.name}
                </div>
            )
        })
        return(
            <div>
                {/*Navigation Section*/}
                <nav className="navbar navbar-dark bg-dark p-0">
                <div className="container text-center">
                    <h1 className="text-white">Maranatha Virtual</h1></div>
                </nav>

                {/*Sidebar Section*/}
                <div id="sidebar" >
                    <h6 className="m-1">Guias de Estudio</h6>
                    {annos}
                </div>
            </div>
        )
    }
}

export default App;