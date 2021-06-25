import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import ErrorBoundry from '../components/ErrorBoundry'

//Class du commposant parent principal
class App extends Component {
    constructor() {
        super();

        this.state = {
            'robots': [],
            'searchField': ''
        }
    }

    //Fonction qui peut être utiliser sur les composants enfants
    onSearchChange = (event) => {
        //On change l'état du searchField (Valeur de l'input)
        this.setState({ searchField: event.target.value })

    }

    //Le rendu du composant principal
    render() {
        //Factorisation du code avec les variables
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            //si searchField est inclu dans le robotName (tout en minuscule)
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className="f1 ttu green">RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </div>
            </div>
        )
    }

    //Lorsque le rendu est afficher exécute ...
    componentDidMount() {
        //On récupère les données du web et on met à jour l'état [robots]
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
       
    }
    
}

export default App;
