import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }

    }
    
    //Fonction équivalente du try-catch
    componentDidCatch(error, info) {
        //S'il y a une erreur on change l'état d'erreur en vrai
        this.setState({ hasError: true });
    }

    render() {
        //Si l'état d'erreur est vrai on envoi un message d'erreur
        if (this.state.hasError) {
            return <h1>Oooops. Une erreur s'est produite !!!</h1>
        }
        //Sinon on retourne les composants enfants passé en paramètre sur ${ErrorBoundry}
        return this.props.children;
        
    }
    
}

export default ErrorBoundry;
